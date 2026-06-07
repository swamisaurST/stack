#!/usr/bin/env node
/**
 * Parameterized baseline capture and diff for the STACK component gallery.
 *
 * Usage:
 *   node gallery/scripts/capture-baselines.mjs [options]
 *
 * Options:
 *   --sections <names>   Comma-separated section ids to capture
 *                         (default: all sections in baselines.json).
 *   --update             Overwrite committed baselines with the rendered output.
 *                         Use during a designer-approved baseline refresh.
 *   --diff               Capture into a temp folder and pixel-diff against
 *                         committed baselines. Exit 1 if any diff exceeds
 *                         the section threshold. Default mode for CI.
 *   --threshold <ratio>  Override the global diff threshold (default: 0.05).
 *   --gallery-url <url>  Override gallery URL (default: env GALLERY_URL or
 *                         http://localhost:4192).
 *
 * Exit codes:
 *   0  diffs within threshold (or --update succeeded)
 *   1  one or more diffs above threshold or capture failure
 *   2  usage error
 */

import { mkdirSync, readFileSync, copyFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "../../../..");
const galleryDir = path.resolve(__dirname, "..");
const screenshotsDir = path.join(galleryDir, "screenshots");
const diffOutputDir = path.join(screenshotsDir, "ci-diffs");
const baselineConfigPath = path.join(__dirname, "baselines.json");

function fail(msg, code = 2) {
  console.error(`capture-baselines: ${msg}`);
  process.exit(code);
}

function parseArgs(argv) {
  const opts = {
    sections: null,
    update: false,
    diff: true,
    threshold: null,
    galleryUrl: process.env.GALLERY_URL || "http://localhost:4192",
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = () => {
      const v = argv[i + 1];
      if (v === undefined || v.startsWith("--")) fail(`Missing value for ${arg}`);
      i += 1;
      return v;
    };
    switch (arg) {
      case "--sections": opts.sections = next().split(",").map((s) => s.trim()); break;
      case "--update": opts.update = true; opts.diff = false; break;
      case "--diff": opts.diff = true; opts.update = false; break;
      case "--threshold": opts.threshold = Number(next()); break;
      case "--gallery-url": opts.galleryUrl = next(); break;
      default: fail(`Unknown argument: ${arg}`);
    }
  }
  return opts;
}

const opts = parseArgs(process.argv.slice(2));
const config = JSON.parse(readFileSync(baselineConfigPath, "utf8"));
const globalThreshold = opts.threshold ?? config.threshold ?? 0.05;

const sections = opts.sections
  ? config.sections.filter((s) => opts.sections.includes(s.id))
  : config.sections;
if (sections.length === 0) fail("No sections matched; check --sections");

let chromium, sharp, pixelmatch, PNG;
try {
  ({ chromium } = await import("playwright"));
  sharp = (await import("sharp")).default;
  pixelmatch = (await import("pixelmatch")).default;
  ({ PNG } = await import("pngjs"));
} catch (e) {
  fail(`Missing dependencies. Run \`npm install\` in gallery/.\n${e.message}`, 2);
}

mkdirSync(diffOutputDir, { recursive: true });

console.log(
  `capture-baselines: gallery=${opts.galleryUrl} mode=${opts.update ? "update" : "diff"} ` +
  `threshold=${globalThreshold} sections=${sections.map((s) => s.id).join(",")}`
);

const browser = await chromium.launch();
let exitCode = 0;
try {
  const page = await browser.newPage({ viewport: config.viewport || { width: 1440, height: 1400 } });
  for (const section of sections) {
    const baselinePath = path.join(screenshotsDir, section.baseline);
    const renderedPath = path.join(diffOutputDir, `${section.id}-rendered.png`);
    const diffPath = path.join(diffOutputDir, `${section.id}-diff.png`);
    const sectionThreshold = section.threshold ?? globalThreshold;
    const url = `${opts.galleryUrl}/#${section.hash}`;

    try {
      await page.goto(url, { waitUntil: "networkidle" });
      await page.waitForSelector(section.selector, { timeout: 10000 });
      await page.locator(section.selector).first().screenshot({ path: renderedPath });
    } catch (e) {
      console.error(`  ${section.id}: ERROR rendering ${url}: ${e.message}`);
      exitCode = 1;
      continue;
    }

    if (opts.update) {
      copyFileSync(renderedPath, baselinePath);
      console.log(`  ${section.id}: UPDATED baseline → ${section.baseline}`);
      continue;
    }

    if (!existsSync(baselinePath)) {
      console.error(`  ${section.id}: ERROR baseline missing: ${section.baseline}`);
      exitCode = 1;
      continue;
    }

    const baselineBuf = readFileSync(baselinePath);
    const renderedBuf = readFileSync(renderedPath);
    const baselinePng = PNG.sync.read(baselineBuf);
    const renderedResized = await sharp(renderedBuf)
      .resize(baselinePng.width, baselinePng.height, { fit: "fill" })
      .png()
      .toBuffer();
    const renderedPng = PNG.sync.read(renderedResized);
    const diff = new PNG({ width: baselinePng.width, height: baselinePng.height });
    const mismatch = pixelmatch(
      baselinePng.data,
      renderedPng.data,
      diff.data,
      baselinePng.width,
      baselinePng.height,
      { threshold: 0.1, includeAA: true }
    );
    const ratio = mismatch / (baselinePng.width * baselinePng.height);
    await sharp(PNG.sync.write(diff)).toFile(diffPath);

    const ok = ratio <= sectionThreshold;
    console.log(
      `  ${section.id}: ${ok ? "PASS" : "FAIL"} ratio=${ratio.toFixed(4)} ` +
      `(threshold=${sectionThreshold}, mismatch=${mismatch}/${baselinePng.width * baselinePng.height})`
    );
    if (!ok) {
      console.log(`    rendered: ${renderedPath}`);
      console.log(`    diff:     ${diffPath}`);
      console.log(`    baseline: ${baselinePath}`);
      exitCode = 1;
    }
  }
} finally {
  await browser.close();
}

process.exit(exitCode);
