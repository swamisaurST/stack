#!/usr/bin/env node
/*
 * banner.mjs — the STACK boot banner, rendered to fit the active width.
 * Picks the largest art that fits process.stdout.columns (or --width N),
 * so it never wraps into noise on a narrow terminal.
 *
 *   node bin/banner.mjs              # auto-detect width
 *   node bin/banner.mjs --width 80   # force a width (useful for piping)
 *   node bin/banner.mjs --plain      # force the one-line form
 *   node bin/banner.mjs --no-color   # disable ANSI color
 */
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const KIT = resolve(HERE, '..');
const TAGLINE = 'Sitetracker AI Consistency Kit';

const argv = process.argv.slice(2);
const flag = (name) => argv.includes(name);
const opt = (name) => {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : undefined;
};

const COLS = Number(opt('--width')) || process.stdout.columns || 80;
const COLOR = !flag('--no-color') && !process.env.NO_COLOR && (process.stdout.isTTY || flag('--color'));
const TEAL = COLOR ? '\x1b[38;5;37m' : '';
const RESET = COLOR ? '\x1b[0m' : '';

// Tier 1 — the full art (136 cols).
const FULL = readFileSync(resolve(KIT, 'assets/stack.ascii'), 'utf8').replace(/\n+$/, '').split('\n');

// Tier 2 — bold-ASCII star wordmark with a solid star band.
const M_STACK = [
  '***** ***** ***** ***** *   *',
  '*       *   *   * *     *  * ',
  '*****   *   ***** *     ***  ',
  '    *   *   *   * *     *  * ',
  '*****   *   *   * ***** *   *',
];
const M_W = Math.max(...M_STACK.map((l) => l.length), TAGLINE.length);
const M_mid = (s) => {
  const p = M_W - s.length, l = Math.floor(p / 2);
  return ' '.repeat(l) + s + ' '.repeat(p - l);
};
const MEDIUM = {
  top: '▄'.repeat(M_W),
  stack: M_STACK.map(M_mid),
  tag: M_mid(TAGLINE),
  bot: '▄'.repeat(M_W),
  width: M_W,
};

const GREY = COLOR ? '\x1b[38;5;245m' : '';
const widthOf = (lines) => Math.max(...lines.map((l) => l.length));
const indent = (line, w) => ' '.repeat(Math.max(0, Math.floor((w - widthOf([line])) / 2))) + line;

let tier = 'tiny';
if (!flag('--plain')) {
  if (flag('--full') || COLS >= widthOf(FULL) + 2) tier = 'full';
  else if (COLS >= MEDIUM.width + 2) tier = 'medium';
}

const out = [];
if (tier === 'full') {
  const w = widthOf(FULL);
  for (const line of FULL) out.push(TEAL + indent(line, Math.min(COLS, w)) + RESET);
  out.push('');
  out.push(GREY + indent(TAGLINE, Math.min(COLS, w)) + RESET);
} else if (tier === 'medium') {
  out.push(GREY + MEDIUM.top + RESET);
  for (const line of MEDIUM.stack) out.push(TEAL + line + RESET);
  out.push(GREY + MEDIUM.tag + RESET);
  out.push(GREY + MEDIUM.bot + RESET);
} else {
  out.push(TEAL + 'S T A C K' + RESET);
  if (COLS >= TAGLINE.length) out.push(GREY + TAGLINE + RESET);
}

process.stdout.write(out.join('\n') + '\n');
