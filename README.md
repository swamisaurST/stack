# STACK

**Sitetracker AI Consistency Kit**

Most AI design output looks like every other SaaS product: generic cards, mystery hierarchy, buttons that exist because buttons exist. STACK is the opposite of that impulse. It is an operating practice for making Sitetracker UI that a senior product designer would stand behind — in Cursor, Claude Code, Figma, Pencil, React, LWC, Storybook, or plain Markdown.

The heart of STACK is Markdown: laws, reasoning, references, workflows, exemplars. Everything else exists only because Markdown alone cannot route an agent, prove a visual, or hand you an icon.

---

## Why this exists

Sitetracker has a real visual language — teal structure, dense data surfaces, record context, field workflows, mobile headers that carry weight. AI tools do not inherit that language by default. They inherit the internet's average UI.

STACK gives an agent three things generic prompting cannot:

1. **Judgment** — talk before composing; set hierarchy explicitly; critique out loud.
2. **Vocabulary** — approved references for buttons, tables, shells, pills, path stages, mobile headers, icons.
3. **Proof** — a live component gallery and a verification loop so "looks fine" is not enough.

The goal is not flashy UI. The goal is excellent Sitetracker UI where every section, button, label, state, and interaction exists for a clear reason.

---

## What you get

| Layer | What it holds | Why it matters |
|---|---|---|
| **Mind** | `SYSTEM-PROMPT.md`, `LAWS.md`, `METHOD.md`, `reasoning/`, `workflows/`, `exemplars/` | Teaches the agent to think like a design partner, not a component vending machine. |
| **Vocabulary** | `references/`, `gallery/` | Rules in words; rendered proof in the browser. Markdown owns anatomy. The gallery owns pixels. |
| **Contract** | `MANIFEST.md`, `BOOTSTRAP.md`, `HANDOFF.md`, `bin/lint-paths.mjs` | Routes each task to the minimum files and fails when doc paths rot. |

The loop never changes: **Understand → Frame → Compose → Critique → Prove.**

---

## Component library

The gallery is the visual source of truth for STACK web and mobile specimens — buttons, shells, tables, list rows, path stages, RHP, prototype nav rail, mobile headers, tokens.

**Live:** [swamisaurST.github.io/stack](https://swamisaurST.github.io/stack/)

**Local:**

```bash
cd gallery
npm install
npm run dev    # http://localhost:4192
```

Use the left rail to jump between web and mobile sections. Pair each specimen with its Markdown reference in `references/web/` or `references/platform/`.

---

## For humans

Copy this folder into a project (for example `design/stack/`). Product work lives **outside** it — under `design/<your-project>/` — with its own `CONTEXT.md`.

```bash
node bin/banner.mjs          # see the boot banner at your terminal width
node bin/lint-paths.mjs      # fail if any cited path in the kit is broken
```

Share the whole folder as a zip. No other Sitetracker folders are required.

---

## For agents

Activate in five reads, then route the task:

1. `SYSTEM-PROMPT.md` — constitution (show the banner from `assets/BANNER.md` on activation).
2. `LAWS.md` — eleven operating laws.
3. `ROLE.md` — design partner, not assembler.
4. `METHOD.md` — the loop and per-phase gates.
5. `MANIFEST.md` — load the minimum for this intent.

Then run the matching playbook in `workflows/`, fill `HANDOFF.md`, and prove the result. Depth lives in `reasoning/` (`PRINCIPLES`, `CONVERSATION`, `HIERARCHY`) and is calibrated by signed-off `exemplars/`.

---

## The eleven laws (short form)

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
11. Own the break, ask without fear  

Full text: [`LAWS.md`](LAWS.md).

---

## Repo map

```
SYSTEM-PROMPT.md  LAWS.md  ROLE.md       constitution
METHOD.md  MANIFEST.md  BOOTSTRAP.md     the loop + the contract
HANDOFF.md                               single verification artifact
reasoning/        principles · conversation · hierarchy · critique
workflows/        new-design · audit · transition · new-component · prototype
exemplars/        signed-off good and bad, with reasoning
references/
  platform/       web + mobile architecture
  web/            component rules, tokens, anatomy, icon library
gallery/          live component library (GitHub Pages)
assets/           boot banner art
bin/              banner renderer + path linter
```

---

## Pages deploy

On push to `main`, the gallery builds and publishes to GitHub Pages automatically. First-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Forking? Run `bin/setup-repo.sh <owner>/<repo>` to bake your repo into README links and badge URLs.
