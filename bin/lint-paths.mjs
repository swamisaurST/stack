#!/usr/bin/env node
/*
 * lint-paths.mjs — the keep-honest contract.
 * Reads every Markdown file in the kit and fails if a kit-relative path it
 * cites does not exist. No dependencies. Run from the kit root:
 *   node bin/lint-paths.mjs
 * Exit 0 = clean, 1 = at least one broken path.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const KIT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// Filenames that are intentionally provided by the host project / scaffold,
// not shipped inside the kit. Citing them is correct even though they're absent.
const ALLOW = new Set([
  'CONTEXT.md', 'CONTEXT.template.md', 'DECISIONS.md', 'CLAUDE.md', 'AGENTS.md',
  'SKILL.md', 'package.json', 'package-lock.json', 'vite.config.js',
  'index.html', '.nvmrc', '.gitignore',
]);

// A token is a candidate path if it ends in a known extension or a slash.
const PATH_RE = /`([\w./<>* -]+?\.(?:md|json|csv|mjs|sh|jsx|js)|[\w./-]+\/)`/g;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.git' || name === 'dist') continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name.endsWith('.md')) out.push(p);
  }
  return out;
}

function isProductOrExternal(t) {
  return (
    t.includes('<') || t.includes('>') || t.includes('*') || t.includes(' ') ||
    t.startsWith('design/') || t.startsWith('.cursor/') || t.startsWith('.github/') ||
    t.startsWith('http') || t.startsWith('/') || t.includes('node_modules')
  );
}

// Navigation contract = docs and data. Code-file mentions are advisory.
const HARD = new Set(['md', 'json', 'csv']);

function resolves(token, fromDir) {
  const clean = token.replace(/\/$/, '');
  // Try relative to the citing file's directory, then relative to kit root.
  return existsSync(resolve(fromDir, clean)) || existsSync(join(KIT, clean));
}

let errors = 0;
let warnings = 0;
let checked = 0;

for (const file of walk(KIT)) {
  const rel = file.slice(KIT.length + 1);
  const fromDir = dirname(file);
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    let m;
    PATH_RE.lastIndex = 0;
    while ((m = PATH_RE.exec(line))) {
      const token = m[1];
      if (isProductOrExternal(token)) continue;
      const base = token.replace(/\/$/, '').split('/').pop();
      if (ALLOW.has(base)) continue;
      checked++;
      if (resolves(token, fromDir)) continue;
      const ext = (base.split('.').pop() || '').toLowerCase();
      const hard = HARD.has(ext);
      if (hard) { errors++; console.error(`BROKEN  ${rel}:${i + 1}  →  ${token}`); }
      else { warnings++; console.error(`warn    ${rel}:${i + 1}  →  ${token} (code/asset mention)`); }
    }
  });
}

if (errors === 0) {
  console.log(`\nOK: ${checked} cited paths checked; all doc/data paths resolve` +
    (warnings ? `; ${warnings} advisory code/asset mention(s).` : '.'));
  process.exit(0);
} else {
  console.error(`\nFAIL: ${errors} broken doc/data path(s); ${warnings} advisory warning(s); ${checked} checked.`);
  process.exit(1);
}
