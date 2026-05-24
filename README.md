# skills-for-humanity

> *A toolkit for thinking more clearly, deeply, and honestly — delivered as Claude Code skills.*

![92 skills](https://img.shields.io/badge/skills-92-4A90D9?style=flat-square) ![20 categories](https://img.shields.io/badge/categories-20-7B68EE?style=flat-square) ![Claude Code](https://img.shields.io/badge/Claude_Code-compatible-orange?style=flat-square)

---

## What this is

A collection of structured thinking tools, not prompts. The difference matters.

A raw prompt asks Claude to do something. A skill tells Claude *how to think* about something — encoding methodology, sequencing techniques, and producing reliable output. Skills turn ad-hoc requests into repeatable thinking processes that consistently produce depth.

This toolkit spans 20 domains of human thinking: from creative ideation to ethical analysis, from systems thinking to narrative architecture. Each domain has a set of specialized tools and a **command** — so you never need to know which specific tool applies. Just invoke the category and the command reads your situation.

---

## Why skills over prompts

Most thinking tools get used once. You discover the Six Thinking Hats, apply them to one decision, and three months later you've forgotten the hat colors. You read about leverage points, feel the clarity, and the next time you're facing a stuck system you're back to guessing.

The problem isn't the tools. The problem is the gap between knowing a tool exists and having it available at the moment you need it — applied correctly, with the right methodology.

`skills-for-humanity` closes that gap. Each skill encodes not just *how* a technique works, but *when* to use it, *when not to*, and *what output to expect*. The commands handle the meta-question: you don't need to know whether you need `lateral-thinking` or `assumption-excavator`. Invoke `/creativity`, describe your situation, and the command picks the right tool and applies it.

The approaches encoded here took decades to develop: Edward de Bono's parallel thinking suite, Donella Meadows' leverage point hierarchy, Robert McKee's story architecture, Genrich Altshuller's TRIZ, Theory of Constraints, Minto's Pyramid Principle. This toolkit makes them available in seconds, applied with rigor rather than improvisation.

---

## The toolkit

### Think Sharper
Validate, pressure-test, and repair reasoning.

| | Category | What it's for | Skills |
|---|---|---|---|
| 🔬 | [Logic](docs/logic/) | Validate arguments, find contradictions, fix broken reasoning | 7 |
| 🎯 | [Probability](docs/probability/) | Calibrate confidence, calculate expected value, weight scenarios | 4 |
| ⚖️ | [Decision](docs/decision/) | Map options, weight criteria, run premortems | 4 |
| 🔒 | [Constraint](docs/constraint/) | Test whether limits are real, route around them, or use them | 4 |

### Think Differently
Break fixed patterns and generate genuinely new directions.

| | Category | What it's for | Skills |
|---|---|---|---|
| 💡 | [Creativity](docs/creativity/) | Full de Bono toolkit — lateral thinking, six hats, concept fans, and more | 12 |
| 🌉 | [Analogy](docs/analogy/) | Import solutions from other domains, test where comparisons break | 4 |
| 🎲 | [Play](docs/play/) | Invert constraints, inhabit opposing views, reverse the worst case | 4 |

### Think About People
Understand what people actually want, fear, and do.

| | Category | What it's for | Skills |
|---|---|---|---|
| 💬 | [Communication](docs/communication/) | Model your audience, audit clarity, anticipate objections | 4 |
| 🌐 | [Social](docs/social/) | Map power, incentives, group dynamics, coalition-building | 4 |
| ❤️ | [Emotional](docs/emotional/) | Diagnose motivation, resistance, trust, and what's really at stake | 4 |
| 🧭 | [Ethics](docs/ethics/) | Full five-framework ethical analysis from quick scan to full council | 8 |
| 🪞 | [Identity](docs/identity/) | Test character, mission alignment, and operative values | 3 |
| 📖 | [Narrative](docs/narrative/) | Audience modeling, frame analysis, story structure, tension | 4 |

### Think in Time & Systems
Understand dynamics, cycles, and leverage.

| | Category | What it's for | Skills |
|---|---|---|---|
| 🔄 | [Systems](docs/systems/) | Map feedback loops, find leverage points, recognize archetypes | 4 |
| ⏳ | [Temporal](docs/temporal/) | Time horizons, cycle detection, futures mapping, timing | 4 |
| 📜 | [Historical](docs/historical/) | Precedents, failure patterns, cycle detection, lesson extraction | 4 |
| 🔋 | [Resource](docs/resource/) | Bottleneck analysis, allocation, leverage, waste audit | 4 |

### See More Clearly
Sharpen perception before interpreting.

| | Category | What it's for | Skills |
|---|---|---|---|
| ✨ | [Aesthetic](docs/aesthetic/) | Test coherence, elegance, pattern, and simplicity | 4 |
| 👁️ | [Sensory](docs/sensory/) | Mine details, separate signal from noise, observe before interpreting | 3 |

### Better Prompts

| | Category | What it's for | Skills |
|---|---|---|---|
| ✍️ | [Prompt](docs/prompt/) | Improve any Claude prompt using Anthropic's best practices | 1 |

---

## Quick start

```bash
# Install the plugin
claude plugins install /path/to/skills-for-humanity

# Use a command — it picks the right tool for you
/creativity     # for any creative challenge
/ethics         # for any ethical question
/logic          # to validate or fix reasoning
/decision       # when choosing between options

# Or invoke a specific skill directly
/creativity-six-hats
/ethics-council
/logic-check
/systems-leverage-analysis
```

### How commands work

Every category has a command at `/category-name`. Describe your situation and the command:
1. Diagnoses what kind of thinking is needed
2. Picks the right tool from the category
3. Applies it inline — you get the output immediately

You only need to learn the specific skill names when you want to go directly to a tool you already know fits.

---

## Adding skills

Skills live in `skills/`. Each skill is a folder containing a `SKILL.md` — the trigger conditions and full instructions for Claude.

```
skills/
  creativity-six-hats/
    SKILL.md
  creativity/          ← command
    SKILL.md
```

To add a skill: create `skills/{name}/SKILL.md`. To add a command: create `skills/{category}/SKILL.md` following the pattern in any existing command.

---

## Documentation

- [Aesthetic](docs/aesthetic/) — coherence, elegance, pattern, simplicity
- [Analogy](docs/analogy/) — boundary testing, domain transfer, perspective shifting, structure mapping
- [Communication](docs/communication/) — audience modeling, clarity audit, medium selection, objection mapping
- [Constraint](docs/constraint/) — hardness testing, rule inversion, scope reduction, workaround mapping
- [Creativity](docs/creativity/) — full de Bono toolkit (12 skills)
- [Decision](docs/decision/) — criteria weighting, option mapping, premortem, reversibility
- [Emotional](docs/emotional/) — motivation, resistance, stakes, trust
- [Ethics](docs/ethics/) — bias check, consent review, council, crisis triage, data audit, impact scan, vendor review
- [Historical](docs/historical/) — cycle detection, failure analysis, lesson extraction, precedent analysis
- [Identity](docs/identity/) — character testing, mission alignment, values clarification
- [Logic](docs/logic/) — argument validation, causality, consistency, constraint mapping, council, fixer
- [Narrative](docs/narrative/) — audience modeling, frame analysis, structure mapping, tension mapping
- [Play](docs/play/) — constraint inversion, perspective reversal, stimulus generation, worst-case reversal
- [Probability](docs/probability/) — base rate anchoring, confidence calibration, expected value, scenario weighting
- [Prompt](docs/prompt/) — prompt elevation
- [Resource](docs/resource/) — allocation, bottleneck, leverage, waste audit
- [Sensory](docs/sensory/) — detail mining, signal detection, structured observation
- [Social](docs/social/) — coalition mapping, dynamics analysis, incentive analysis, power mapping
- [Systems](docs/systems/) — archetype matching, emergence detection, feedback mapping, leverage analysis
- [Temporal](docs/temporal/) — cycle detection, futures mapping, horizon mapping, timing analysis
