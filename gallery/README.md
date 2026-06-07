# STACK Component Gallery

Canonical browser-rendered reference for STACK web and mobile patterns. Index: `../references/GALLERY-REFERENCE.md`.

## Run

```bash
cd gallery
npm install
npm run dev
```

Open **http://localhost:4192** — use the section index in the intro to jump to specimens.

## Section Index

| Group | Specimens |
|---|---|
| Web · Shell | `#shell` |
| Web · Primitives | `#colors`, `#typography`, `#icon-catalog` |
| Web · Controls | `#components`, `#pills`, `#path-stages` |
| Web · Content & Data | `#card-header`, `#table-sample`, `#list-rows-sample` |
| Web · Layout | `#layouts`, `#right-hand-panel` |
| Prototype Tooling | `#prototype-nav-rail` |
| Mobile | `#mobile` |

All sections are canonical. Load the matching Markdown reference in `references/web/` for rules and tokens.

## Capture Scripts

```bash
node scripts/capture-primitives-lock-in.mjs
node scripts/capture-final-lock-in.mjs
node scripts/capture-pills.mjs
node scripts/capture-path-stages.mjs
node scripts/capture-rhp.mjs
```

Verification protocol: `references/VISUAL-VERIFICATION.md`
