<div align="center">

# skills-for-humanity

### 131 structured thinking tools for Claude Code.
### One command to find the right one.

*From a 30-second ethics scan to a five-framework council with peer review.*  
*From lateral thinking to leverage point analysis. From Sun Tzu to Nash equilibria.*

[Browse by category](#the-toolkit) · [Quick start](#quick-start) · [All commands](#all-commands)

[![npm](https://img.shields.io/npm/v/@human-avatar/skills-for-humanity?style=flat-square&color=black&label=npm)](https://www.npmjs.com/package/@human-avatar/skills-for-humanity) ![](https://img.shields.io/badge/131_skills-black?style=flat-square) ![](https://img.shields.io/badge/23_categories-black?style=flat-square) ![](https://img.shields.io/badge/human_in_the_loop-black?style=flat-square) ![](https://img.shields.io/badge/Claude_Code-compatible-black?style=flat-square)

</div>

---

This is not a prompt library. Each skill encodes a complete reasoning methodology — how a technique works, when to apply it, when not to, and what rigorous output looks like. Twenty-three category **commands** handle routing: describe your situation, get the right tool applied automatically. And every skill includes a human confirmation checkpoint — you choose the depth before the analysis runs.

---

## Why skills, not prompts

A prompt asks Claude to respond. A skill tells Claude how to *think*.

| If you ask Claude to... | A prompt gives you | A skill gives you |
|---|---|---|
| Analyze ethically | A thoughtful response | Five moral frameworks applied and cross-examined — Utilitarian, Deontological, Virtue, Care, and Justice — with explicit conflict surfacing |
| Think more creatively | Brainstormed suggestions | The right de Bono technique diagnosed and applied: Lateral Thinking, Assumption Excavation, Concept Fan, or Random Entry — not a grab-bag |
| Find the leverage point | An opinion about what matters | Meadows' 12-point leverage hierarchy run against your system, with interventions ranked by structural depth |
| Check the logic | "This looks sound to me" | Premise mapping, inference validation, fallacy detection, a verdict, and a corrected version if it fails |

The techniques encoded here took decades to develop. This toolkit makes them available in seconds, applied with rigor rather than improvisation.

**Intellectual lineage:** de Bono's parallel thinking suite · Meadows' leverage point hierarchy · Altshuller's TRIZ · McKee's story architecture · Minto's Pyramid Principle · Goldratt's Theory of Constraints · Tetlock's superforecasting · Klein's premortem · five-tradition ethics (Mill, Kant, Aristotle, Noddings, Rawls) · Sun Tzu · Clausewitz · Musashi · Nash · Axelrod · Vickrey · Shapley · Spence

---

## Human in the loop

Every skill pauses before analysis begins and presents your options:

> **How do you want to run this?**
>
> **A) Full analysis** — complete all steps, reasoning shown throughout  
> **B) Key findings only** — bottom-line output, skip step-by-step detail  
> **C) [Skill-specific option]** — adjusted for what this technique does  
> **D) Refine the framing** — adjust what we're analyzing before starting

You steer the depth. The technique does the rest.

---

## The toolkit

Every category has a **command** (`/category`) that reads your situation and picks the right tool. Use the command when you're unsure which skill fits. Use a specific skill when you know exactly what you need. Use `/human` when you want the entire toolkit to find the right category first.

---

### Think Sharper
*Validate, pressure-test, and repair reasoning.*

| | Category | What it does | Skills |
|---|---|---|---|
| 🔬 | [**Logic**](docs/logic/) | Validate arguments, map causality, find contradictions, fix broken reasoning | 7 |
| 🎯 | [**Probability**](docs/probability/) | Calibrate confidence against evidence, calculate expected value, weight scenarios | 4 |
| ⚖️ | [**Decision**](docs/decision/) | Map the full option set, weight criteria explicitly, stress-test via premortem | 4 |
| 🔒 | [**Constraint**](docs/constraint/) | Test whether limits are real, invert them as creative drivers, or route around them | 4 |
| 🎮 | [**Game Theory**](docs/game-theory/) | Formal tools for strategic interaction — equilibria, cooperation, signaling, mechanism design, auctions | 7 |

---

### Think Differently
*Break fixed patterns and generate genuinely new directions.*

| | Category | What it does | Skills |
|---|---|---|---|
| 💡 | [**Creativity**](docs/creativity/) | Full de Bono suite — lateral thinking, six hats, concept fan, alternatives, provocation, and 7 more | 12 |
| 🌉 | [**Analogy**](docs/analogy/) | Import solutions from structurally similar problems in other domains; test where comparisons break | 4 |
| 🎲 | [**Play**](docs/play/) | Invert constraints, fully inhabit opposing views, design the worst version then reverse it | 4 |

---

### Think About People
*Understand what people actually want, fear, and do.*

| | Category | What it does | Skills |
|---|---|---|---|
| 💬 | [**Communication**](docs/communication/) | Model your audience, find where a message breaks, choose the right channel | 4 |
| 🌐 | [**Social**](docs/social/) | Map formal power, informal influence, real incentives, and coalition-building paths | 4 |
| ❤️ | [**Emotional**](docs/emotional/) | Diagnose genuine motivation, the source of resistance, trust dynamics, and real stakes | 4 |
| 🧭 | [**Ethics**](docs/ethics/) | Five-framework ethical analysis + circle of empathy — quick scan to full council with HTML report | 9 |
| 🪞 | [**Identity**](docs/identity/) | Test character under pressure, genuine mission alignment, and operative vs stated values | 3 |
| 📖 | [**Narrative**](docs/narrative/) | Audience modeling, frame analysis, story architecture, tension that makes people pay attention | 4 |
| ✍️ | [**Writing**](docs/writing/) | Craft methodology for fiction, non-fiction, and professional writing — character, plot, structure, voice, rhetoric | 20 |

---

### Think in Time & Systems
*Understand dynamics, cycles, and where leverage lives.*

| | Category | What it does | Skills |
|---|---|---|---|
| 🔄 | [**Systems**](docs/systems/) | Map feedback loops, find high-leverage intervention points, recognize recurring archetypes | 4 |
| ⏳ | [**Temporal**](docs/temporal/) | Map consequences across time horizons, detect cycles, explore futures, assess timing | 4 |
| 📜 | [**Historical**](docs/historical/) | Find genuine precedents, extract transferable principles, surface recurring failure modes | 4 |
| 🔋 | [**Resource**](docs/resource/) | Identify real bottlenecks, find highest-leverage resource use, audit for invisible waste | 4 |
| ⚔️ | [**Strategy**](docs/strategy/) | Adversarial reasoning from Sun Tzu, Clausewitz, and Musashi — terrain, timing, positioning, force economy | 8 |

---

### See More Clearly
*Sharpen perception before interpreting.*

| | Category | What it does | Skills |
|---|---|---|---|
| ✨ | [**Aesthetic**](docs/aesthetic/) | Analyze coherence, elegance, underlying pattern, and necessary vs accidental complexity | 4 |
| 👁️ | [**Sensory**](docs/sensory/) | Excavate overlooked details, separate signal from noise, observe before reaching for interpretation | 3 |

---

## Installation

**Requirements:** [Claude Code](https://claude.ai/code) CLI · Node.js 18+

```bash
npx @human-avatar/skills-for-humanity
```

The script will ask where to install:

- **User** — copies skills to `~/.claude/` and registers them globally, available in every project
- **Project** — copies skills to `./.claude/` and registers them locally, scoped to the current directory

Restart Claude Code when it's done.

```bash
# Skip the prompt with a flag
npx @human-avatar/skills-for-humanity --scope user
npx @human-avatar/skills-for-humanity --scope project

# Update to the latest version any time
npx @human-avatar/skills-for-humanity

# Install to a custom directory
npx @human-avatar/skills-for-humanity --dir /your/path

# Uninstall
npx @human-avatar/skills-for-humanity --uninstall
```

**Manual install** (development or offline):

```bash
git clone https://github.com/human-avatar/skills-for-humanity
```

Then add to `~/.claude/settings.json`:

```json
{
  "pluginDirectories": ["/path/to/skills-for-humanity"]
}
```

---

## Quick start

```bash
# Not sure which skill to use? Start here.
/human

# Use a category command — describe your situation, get the right tool
/creativity
/ethics
/logic
/decision
/systems
/writing
/strategy
/game-theory

# Or invoke a specific skill directly when you know what you need
/creativity-six-hats
/ethics-council
/logic-check
/systems-leverage-analysis
/writing-character-development
/writing-executive-summary
/strategy-terrain
/strategy-timing
/game-theory-equilibrium
/game-theory-prisoners-dilemma
```

**How `/human` works:**

Invoke `/human` and describe your situation in plain English. It diagnoses which thinking challenge you're facing, identifies the best 3–4 skills across all 23 categories, and presents them as numbered options. Pick one and it executes immediately — no second command needed.

**How category commands work:**

Invoke `/creativity` and describe your situation. The command diagnoses what kind of creative challenge it is, selects the right tool from the 12-skill suite, and applies the full methodology inline. You don't need to know whether you need Lateral Thinking or Assumption Excavation — that's what the command is for.

Use specific skill names when you already know exactly what fits.

---

## All commands

### 🧭 Human — `/human`

| Command | What it does |
|---|---|
| `/human` | Routes to the right skill across all 23 categories — describe your situation, get your options |

### 🔬 Logic — `/logic`

| Command | What it does |
|---|---|
| `/logic-council` | Full 5-advisor reasoning council with peer review |
| `/logic-check` | Fast comprehensive logic report — premises, inferences, fallacies, verdict |
| `/logic-argument-validation` | Validates whether premises support the conclusion |
| `/logic-consistency-check` | Finds internal contradictions in documents and specs |
| `/logic-causality-mapping` | Maps causal relationships, dependencies, and consequences |
| `/logic-constraint-mapping` | Maps the full constraint landscape — hard, soft, and assumed |
| `/logic-fixer` | Repairs broken reasoning — produces a corrected version, not just a diagnosis |

### 🎯 Probability — `/probability`

| Command | What it does |
|---|---|
| `/probability-base-rate-anchoring` | Anchors estimates in historical base rates before adjusting for specifics |
| `/probability-confidence-calibration` | Tests whether stated confidence matches available evidence |
| `/probability-expected-value-calculation` | Calculates expected value to compare options under uncertainty |
| `/probability-scenario-weighting` | Assigns explicit probabilities to distinct scenarios |

### ⚖️ Decision — `/decision`

| Command | What it does |
|---|---|
| `/decision-option-mapping` | Ensures all real options are visible before any are evaluated |
| `/decision-criteria-weighting` | Weighted multi-criteria analysis with explicit trade-offs |
| `/decision-premortem-analysis` | Imagines the decision failed and diagnoses why |
| `/decision-reversibility-analysis` | Calibrates deliberation depth to decision reversibility |

### 🔒 Constraint — `/constraint`

| Command | What it does |
|---|---|
| `/constraint-hardness-testing` | Tests whether a stated constraint is actually real |
| `/constraint-rule-inversion` | Flips a constraint into a creative driver |
| `/constraint-scope-reduction` | Finds the minimum that satisfies the actual requirement |
| `/constraint-workaround-mapping` | Maps paths around a fixed constraint to the same goal |

### 💡 Creativity — `/creativity`

| Command | What it does |
|---|---|
| `/creativity-brainstorm` | Orchestrated multi-method session — auto-selects and sequences tools |
| `/creativity-lateral-thinking` | Escapes dominant patterns to generate genuinely new directions |
| `/creativity-assumption-excavator` | Surfaces and challenges hidden assumptions in the problem framing |
| `/creativity-six-hats` | Structured parallel thinking from six distinct angles |
| `/creativity-alternatives` | Generates all options before evaluating any (APC) |
| `/creativity-concept-fan` | Expands the solution space at multiple levels of abstraction |
| `/creativity-plus-minus-interesting` | Evaluates an idea fairly — positives, negatives, what's interesting |
| `/creativity-other-perspectives` | Thinks genuinely from other people's positions (OPS) |
| `/creativity-water-logic` | Explores without premature judgment or categorization |
| `/creativity-random-entry` | Uses a random, unrelated stimulus to break cognitive fixation |
| `/creativity-provocation` | Uses an impossible premise as a springboard to new ideas (Po) |
| `/creativity-consider-factors` | Maps every relevant factor before deciding or acting (CAF) |

### 🌉 Analogy — `/analogy`

| Command | What it does |
|---|---|
| `/analogy-boundary-testing` | Finds where an analogy breaks down before it's relied upon |
| `/analogy-domain-transfer` | Imports solutions from structurally similar problems in other fields |
| `/analogy-perspective-shifting` | Approaches a problem through a completely different field's lens |
| `/analogy-structure-mapping` | Tests the genuine structural correspondence between two situations |

### 🎲 Play — `/play`

| Command | What it does |
|---|---|
| `/play-constraint-inversion` | Removes the main constraint to see what becomes possible, then maps back |
| `/play-perspective-reversal` | Fully inhabits the opposing perspective to find what you're missing |
| `/play-stimulus-generation` | Introduces a random, unrelated element to break fixation |
| `/play-worst-case-reversal` | Designs the worst possible version, then reverses each failure mode |

### 💬 Communication — `/communication`

| Command | What it does |
|---|---|
| `/communication-audience-modeling` | Maps what your audience believes, cares about, and fears |
| `/communication-clarity-audit` | Finds where a message will be misread or lost before sending |
| `/communication-medium-selection` | Chooses the right channel and format for the message |
| `/communication-objection-mapping` | Maps likely objections before you deliver a proposal |

### 🌐 Social — `/social`

| Command | What it does |
|---|---|
| `/social-coalition-mapping` | Maps who needs to be aligned and how to build the support coalition |
| `/social-dynamics-analysis` | Identifies the group psychology shaping a team or discussion |
| `/social-incentive-analysis` | Maps the actual incentives driving behavior |
| `/social-power-mapping` | Maps formal authority, informal influence, and gatekeeping power |

### ❤️ Emotional — `/emotional`

| Command | What it does |
|---|---|
| `/emotional-motivation-mapping` | Maps what genuinely drives someone beyond their stated role |
| `/emotional-resistance-diagnosis` | Diagnoses the source of resistance — not just its existence |
| `/emotional-stakes-mapping` | Finds what stakeholders actually care about under their stated position |
| `/emotional-trust-audit` | Maps what is building and eroding trust in a relationship |

### 🧭 Ethics — `/ethics`

| Command | What it does |
|---|---|
| `/ethics-council` | Full 5-framework council with peer review and HTML report |
| `/ethics-check` | Fast comprehensive report across all 5 frameworks |
| `/ethics-crisis-triage` | Rapid ethical response to an active incident |
| `/ethics-data-audit` | Audits data collection and sharing against ethical standards |
| `/ethics-bias-check` | Evaluates algorithms and models for discriminatory patterns |
| `/ethics-consent-review` | Reviews UX flows for genuine (not checkbox) consent |
| `/ethics-impact-scan` | Quick pre-ship impact assessment |
| `/ethics-vendor-review` | Evaluates vendors and partners against ethical standards |
| `/ethics-empathy-circle` | Maps affected parties in expanding circles and inhabits each perspective |

### 🪞 Identity — `/identity`

| Command | What it does |
|---|---|
| `/identity-character-testing` | Asks what a person or organization of genuine integrity would do |
| `/identity-mission-alignment` | Tests whether a decision is genuinely on-mission or rationalization |
| `/identity-values-clarification` | Surfaces operative values actually revealed by decisions |

### 📖 Narrative — `/narrative`

| Command | What it does |
|---|---|
| `/narrative-audience-modeling` | Maps beliefs, real goals, fears, and threshold conditions |
| `/narrative-frame-analysis` | Identifies the current frame and generates better alternatives |
| `/narrative-structure-mapping` | Applies story architecture to any communication |
| `/narrative-tension-mapping` | Finds or creates the tension that makes communication worth attending to |

### 🔄 Systems — `/systems`

| Command | What it does |
|---|---|
| `/systems-archetype-matching` | Identifies what recurring system pattern this is |
| `/systems-emergence-detection` | Understands unexpected behavior that no one intended |
| `/systems-feedback-mapping` | Maps the reinforcing and balancing feedback loops |
| `/systems-leverage-analysis` | Finds where small interventions produce large, lasting change |

### ⏳ Temporal — `/temporal`

| Command | What it does |
|---|---|
| `/temporal-cycle-detection` | Identifies what recurring cycle this is and where you currently are |
| `/temporal-horizon-mapping` | Maps consequences across short, medium, and long time horizons |
| `/temporal-futures-mapping` | Explores possible, probable, and preferable futures |
| `/temporal-timing-analysis` | Assesses whether now is the right time to act, wait, or prepare |

### 📜 Historical — `/historical`

| Command | What it does |
|---|---|
| `/historical-cycle-detection` | Identifies what recurring cycle this is and where in it you are |
| `/historical-failure-analysis` | Extracts recurring failure modes from similar past situations |
| `/historical-lesson-extraction` | Extracts the transferable principle from a specific historical case |
| `/historical-precedent-analysis` | Finds genuinely similar historical situations to inform a decision |

### 🔋 Resource — `/resource`

| Command | What it does |
|---|---|
| `/resource-allocation-analysis` | Distributes limited resources across competing needs with explicit trade-offs |
| `/resource-bottleneck-analysis` | Finds what is actually constraining throughput |
| `/resource-leverage-mapping` | Finds the highest-leverage use of available resources |
| `/resource-waste-audit` | Finds where resources are being lost, duplicated, or underused |

### ✨ Aesthetic — `/aesthetic`

| Command | What it does |
|---|---|
| `/aesthetic-coherence-check` | Tests whether the parts form a unified whole |
| `/aesthetic-elegance-testing` | Separates necessary from accidental complexity |
| `/aesthetic-pattern-detection` | Names the underlying structural pattern at work |
| `/aesthetic-simplicity-analysis` | Finds the simpler version while preserving what matters |

### 👁️ Sensory — `/sensory`

| Command | What it does |
|---|---|
| `/sensory-detail-mining` | Finds specific details that are being overlooked |
| `/sensory-signal-detection` | Separates meaningful signal from background noise |
| `/sensory-structured-observation` | Applies disciplined observation before interpretation |

### ✍️ Writing — `/writing`

| Command | What it does |
|---|---|
| `/writing-character-development` | Builds psychologically coherent characters — want vs. need, wound, contradiction |
| `/writing-plot-structure` | Maps the five structural beats and diagnoses where tension breaks down |
| `/writing-scene-construction` | Diagnoses scenes for goal, obstacle, outcome, subtext, and function |
| `/writing-dialogue` | Audits dialogue for subtext, voice differentiation, and exposition problems |
| `/writing-worldbuilding` | Audits fictional worlds for internal consistency, texture, and story alignment |
| `/writing-arc-design` | Designs or diagnoses character and thematic arcs for earned resolution |
| `/writing-pov` | Identifies POV type, contract, and violations; assesses fit |
| `/writing-inconsistency-audit` | Finds continuity errors across timeline, character logic, world-rules, and physical detail |
| `/writing-restructure` | Diagnoses structural problems — buried leads, wrong endings, wrong proportion |
| `/writing-tone-alignment` | Detects and corrects tone drift across a piece |
| `/writing-line-editing` | Sentence-level audit — redundancy, zombie nouns, passive voice, rhythm, throat-clearing |
| `/writing-prose-elevation` | Lifts flat writing via abstraction audit, verb audit, and sensory grounding |
| `/writing-voice-consistency` | Extracts a voice fingerprint and audits departures from it |
| `/writing-report` | Structures and audits informational documents for answer-first hierarchy and precision |
| `/writing-copy` | Audits copy for attention, desire, and action — finds feature/benefit confusion |
| `/writing-technical` | Audits technical documentation for completeness, sequence, precision, and audience calibration |
| `/writing-argument` | Builds or audits arguments — claim, warrant, evidence, counterargument |
| `/writing-executive-summary` | Distils complex material into a situation / findings / implications / recommendation brief |
| `/writing-audience-calibration` | Adjusts register, assumed knowledge, and framing for a specific reader |
| `/writing-rhetoric` | Analyzes what a piece is actually doing — explicit argument vs. buried frame, appeals, loaded language |

### ⚔️ Strategy — `/strategy`

| Command | What it does |
|---|---|
| `/strategy-terrain` | Maps the competitive landscape — favorable, contested, and dangerous ground |
| `/strategy-intelligence` | Audits what is known vs. assumed about yourself and your opponent |
| `/strategy-timing` | Determines when to act, when to wait, and when to withdraw |
| `/strategy-force-economy` | Finds the minimum intervention that achieves the objective — leverage over brute force |
| `/strategy-positioning` | Creates unassailable position before the contest begins |
| `/strategy-deception` | Manages information asymmetry in legitimate competitive contexts |
| `/strategy-victory` | Defines what winning actually means — prevents the pyrrhic trap |
| `/strategy-alliance` | Maps and builds coalitions based on shared interest, not goodwill |

### 🎮 Game Theory — `/game-theory`

| Command | What it does |
|---|---|
| `/game-theory-equilibrium` | Identifies dominant strategies and Nash equilibria — where rational players land |
| `/game-theory-prisoners-dilemma` | Analyzes cooperation vs. defection — why individual rationality produces collective failure |
| `/game-theory-signaling` | Designs credible signals and commitment devices when words are cheap |
| `/game-theory-mechanism-design` | Designs rules and incentives that produce desired behavior from self-interested players |
| `/game-theory-iterated` | Analyzes long-run repeated games — when cooperation can be sustained by reputation |
| `/game-theory-coalition` | Finds stable coalitions, Shapley values, and fair division of collective gains |
| `/game-theory-auction` | Determines optimal bidding strategy by auction type; corrects for winner's curse |
