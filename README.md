<div align="center">

```
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
***** ***** ***** ***** *   * 
*       *   *   * *     *  *  
*****   *   ***** *     ***   
    *   *   *   * *     *  *  
*****   *   *   * ***** *   * 
Sitetracker AI Consistency Kit
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
```

**STACK** — the **S**itetracker **A**I **C**onsistency **K**it

A portable agent kit that makes any AI design **disciplined Sitetracker UI** — in Cursor, Claude Code, Figma, Pencil, React, LWC, Storybook, or Markdown.

[![component library](https://img.shields.io/badge/component%20library-live-1D9E75?style=flat-square)](https://__OWNER__.github.io/__REPO__/)
[![laws](https://img.shields.io/badge/operating%20laws-11-444?style=flat-square)](LAWS.md)
[![pages](https://github.com/__OWNER__/__REPO__/actions/workflows/pages.yml/badge.svg)](https://github.com/__OWNER__/__REPO__/actions/workflows/pages.yml)

### ▶ [View the live component library](https://__OWNER__.github.io/__REPO__/)

*The browser-rendered, canonical Sitetracker components — the source of visual truth.*

</div>

---

## What this is

STACK is not a component dump and not a prompt. It is an **operating practice**: it teaches an agent to reason like a senior Sitetracker product designer — understand the user, set hierarchy, compose from approved references, critique the result, and prove what changed — and it gives that agent the vocabulary (references + a live gallery) to do it consistently.

The goal is excellent Sitetracker UI where **every section, button, label, state, and interaction exists for a clear reason**. The aesthetic is Sitetracker.

## The structure

Three movements, one practice, on one keep-honest contract.

| Movement | Holds | Files |
|---|---|---|
| **Constitution** | who, why, the laws | `SYSTEM-PROMPT.md` · `LAWS.md` · `ROLE.md` |
| **Method** | the design loop + reasoning depth | `METHOD.md` · `reasoning/` · `exemplars/` · `workflows/` |
| **Vocabulary** | references + rendered proof | `references/` · `gallery/` |
| **Contract** | keeps every path honest | `MANIFEST.md` · `BOOTSTRAP.md` · `HANDOFF.md` · `bin/lint-paths.mjs` |

The loop never changes: **Understand → Frame → Compose → Critique → Prove.**

## For humans

```bash
# 1. Explore the components locally
cd gallery && npm install && npm run dev      # http://localhost:4192

# 2. See the banner at any terminal width
node bin/banner.mjs

# 3. Verify nothing references a broken path
node bin/lint-paths.mjs
```

Drop the whole folder into a project at `design/stack/`. Product work lives **outside** it, under `design/<project>/`.

## For agents

Activate in five reads, then route the task:

1. `SYSTEM-PROMPT.md` — constitution and activation (show the banner from `assets/BANNER.md`).
2. `LAWS.md` — the eleven operating laws.
3. `ROLE.md` — you are a design partner, not a component assembler.
4. `METHOD.md` — the loop and per-phase gates.
5. `MANIFEST.md` — route the intent, load the minimum.

Then run the matching playbook in `workflows/`, fill `HANDOFF.md`, and prove the result. The reasoning that makes the difference lives in `reasoning/` (`PRINCIPLES`, `CONVERSATION`, `HIERARCHY`) and is calibrated by signed-off `exemplars/`.

## The eleven laws

1. Freedom in the tool, strictness in the output
2. Repeatable, reliable, non-arbitrary, UX-first
3. The aesthetic is Sitetracker
4. No output before routing
5. No design before hierarchy
6. References are vocabulary, not a sacred shell
7. Markdown owns rules; gallery owns rendered proof
8. If a rule is missing, mark the gap
9. No pass without evidence
10. Product output never lives inside the scaffold
11. **Own the break, ask without fear** — when something breaks or is uncertain, say so plainly; never hide it or scramble to patch it silently

Full text: [`LAWS.md`](LAWS.md).

## How it stays honest

Reorganized kits rot when prose still points at moved files. One tiny, dependency-free linter prevents it — it reads every Markdown file and fails if a path it cites does not exist:

```bash
node bin/lint-paths.mjs        # exits non-zero on any broken doc/data path
```

## Repo map

```
SYSTEM-PROMPT.md  LAWS.md  ROLE.md       constitution
METHOD.md  MANIFEST.md  BOOTSTRAP.md     the loop + the contract
HANDOFF.md                               the single verification artifact
reasoning/        principles · conversation · hierarchy
workflows/        new-design · audit · transition · new-component · prototype
exemplars/        signed-off good and bad, with reasoning
references/
  platform/       web + mobile architecture
  web/            component rules, tokens, anatomy, icon library
  tools/          Cursor · Claude Code · Figma · Pencil · LWC · Storybook
gallery/          the live component library (deployed to Pages)
assets/           the boot banner
bin/              banner renderer + path linter
```

## The full banner

The compact star wordmark above is the narrow-surface form. The full slant banner (shown on wide terminals and desktop chat):

<details>
<summary>Show the full STACK banner</summary>

```
_______________/\\\\\\\\\\\____/\\\\\\\\\\\\\\\___________/\\\\\\\\\_________________/\\\\\\\\\________/\\\________/\\\_________________
_____________/\\\/////////\\\_\///////\\\/////__________/\\\\\\\\\\\\\____________/\\\////////________\/\\\_____/\\\//__________________
____________\//\\\______\///________\/\\\______________/\\\/////////\\\_________/\\\/_________________\/\\\__/\\\//_____________________
_____________\////\\\_______________\/\\\______________\/\\\_______\/\\\________/\\\___________________\/\\\\\\//\\\____________________
________________\////\\\____________\/\\\_____________\/\\\\\\\\\\\\\\\_______\/\\\___________________\/\\\//_\//\\\____________________
___________________\////\\\_________\/\\\_____________\/\\\/////////\\\_______\//\\\__________________\/\\\____\//\\\___________________
____________/\\\______\//\\\________\/\\\_____________\/\\\_______\/\\\________\///\\\________________\/\\\_____\//\\\__________________
___________\///\\\\\\\\\\\/_________\/\\\________/\\\_\/\\\_______\/\\\__/\\\____\////\\\\\\\\\__/\\\_\/\\\______\//\\\__/\\\___________
_____________\///////////___________\///________\///__\///________\///__\///________\/////////__\///__\///________\///__\///____________
```

</details>

---

<div align="center">

**Setup:** run `bin/setup-repo.sh <owner>/<repo>` to bake your repo into these links, then enable **Settings → Pages → Source: GitHub Actions**. The component library publishes automatically on every push to `main`.

</div>
