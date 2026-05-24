# `/writing-worldbuilding`

> *A described world tells you what things are. An inhabited world shows you what it costs to live there.*

**Category:** [Writing](README.md) · **Command:** `/writing-worldbuilding`

---

## What it does

Audits a fictional world across five dimensions — rules, history, economy, texture, and constraint-story alignment — to identify what makes it feel thin, generic, or decorative rather than inhabited. The output is a structured world audit with specific gaps, inconsistencies, and development priorities.

---

## When to use it

- The world feels like a setting rather than a place people actually live in
- The world's rules are inconsistent or bend for plot convenience
- Characters seem to exist in a vacuum, unaffected by their world's conditions
- The story could be set in any world without changing the central conflict
- You're building a world from scratch and want to ensure the structure is load-bearing
- Readers find the worldbuilding interesting but irrelevant to the story

---

## When *not* to use it

**Don't use this for realistic contemporary fiction.** When the world is the real world, worldbuilding is not a separate task — it's research and observation. The skill is designed for worlds with invented rules, histories, and economies.

**Don't use this to build a world for its own sake.** Worldbuilding that is not in service of story is a displacement activity — a form of creative work that feels productive without moving the project forward. The central question is always: does the world create the story's conflict? If you're building cities, customs, and taxonomies that have no function in the plot, the audit will be redundant because the world itself is a distraction.

The nearest neighbor: [`/writing-inconsistency-audit`](inconsistency-audit.md) — which catches violations of the world's established rules throughout the manuscript. Worldbuilding establishes the rules; inconsistency audit catches where they're broken. Use worldbuilding first to establish the baseline, then inconsistency audit to verify it holds.

---

## Full example

**Input:**
> My science fiction novel is set on Callum Station, a human colony on a moon of Jupiter established 80 years ago. It's a mid-sized colony of about 40,000 people. It's a corporate colony — built and run by Meridian Corp. The plot is about a resource management engineer named Tova who discovers that the life-support readings have been falsified — the colony has less oxygen-generating capacity than the official figures show, and Meridian Corp knows. The world feels like a backdrop, not a place people actually live.

---

**Output:**

### World Audit: Callum Station

**Rules Inventory:**

Physical:
- Low gravity (approximately 0.13g on Ganymede — confirm which moon and apply consistently)
- No breathable external atmosphere; all life support is engineered
- Distance from Earth: communications have a delay of approximately 35–52 minutes one-way depending on orbital position. *This rule has significant story implications that must be applied consistently: Tova cannot call Earth for help and get an answer the same day. Meridian Corp's response to any whistleblowing will also be slow — a window of 1–3 hours before any external actor can react.*
- Energy: where does the colony's power come from? Solar at this distance is limited; nuclear most likely. This is currently unspecified and affects the economy.

Social:
- Corporate governance: what rights do colonists have? Employment contracts, not citizenship? Is there a colonial council with any actual power, or is it advisory?
- How long do colonists stay? Are they rotating employees or permanent settlers? *This is the most important unspecified social rule for the story: colonists who are permanent residents have a completely different relationship to the oxygen crisis than colonists who are on 3-year contracts. Permanent residents are dying; rotating employees have exit options.*

*Diagnosis: The physical rules are mostly present but inconsistently applied. The social/governance rules are almost entirely absent. The governance structure is not decorative — it determines who Tova can report to, who has authority to act, and what power dynamics shape every decision in the story.*

---

**History:**

80 years of colonial history is largely unused. Key questions:
- Why was this colony established? Scientific research? Resource extraction? What resource? *The reason for the colony's existence shapes its entire economy and its relationship with Earth.*
- What did the first 40 years look like? Were there earlier crises? Deaths? A founding mythology?
- Has Meridian Corp always run it, or did governance change at some point?
- What is the generational split? Are there colonists who were born on Callum Station and have never been to Earth? *A character who has never breathed unprocessed air has a different relationship to the oxygen crisis than one who has.*

*Current state: History is present as a number (80 years) but not as texture. Nothing from the past 80 years is visible in the present — no scars, no monuments, no founding stories, no generational division, no accumulated culture.*

*Recommended development: One specific historical event that shaped the current social atmosphere. Suggested: a partial life-support failure 30 years ago that Meridian Corp managed, covered up, or handled in a way that some colonists know about and others were too young to remember. This history — if it exists — makes the current cover-up not a first offence but a pattern, and creates a generation who trusts Meridian and a generation who doesn't.*

---

**Economy:**

Currently unspecified. On Callum Station:
- What do people *do*? The colony presumably exists for a purpose — what is being extracted, researched, or manufactured?
- What do people spend their wages on? Is there a company store? Private enterprise?
- What is the labour market like — surplus of workers (corporation has leverage) or shortage (workers have leverage)?
- What does Meridian Corp gain from this colony? *The question at the heart of the story — why would they falsify the life-support figures? — is an economic question. What is the cost of full life-support capacity, and what does Meridian save by running below it? This is currently unanswerable because the economy is absent.*

*Recommended: Name the colony's primary economic function (most likely: helium-3 extraction for fusion power, or rare-earth mineral extraction). Establish that the colony is marginally profitable and under pressure — which explains why Meridian is cutting corners. An unprofitable colony in a competitive market explains the cover-up better than pure malice.*

---

**Texture:**

Currently: almost none. What is present are generic colony tropes (low gravity, recycled air, artificial lighting) that could be found in any science fiction setting from the 1960s.

What is missing:
- *Food*: What do people eat on Callum Station? Hydroponic? Protein-synthesised? Imported at high cost? The food says everything about scarcity, class, and what people value. If there are two restaurants on the station, what do they serve, and who goes to which one?
- *Sound*: What does the station sound like? The ventilation system is presumably audible. *For a story about oxygen and life-support, the sound of the ventilation should be physically present throughout — its normal noise a reassurance and its absence a terror.*
- *Culture*: What do colonists do for leisure? What holidays do they maintain from Earth? What new rituals have emerged? What do children born on the station call Earth?
- *Slang*: 80 years of isolation produces linguistic drift. What do people on Callum Station call outsiders? What is "going topside"? What do people mean when they say someone "recycles"?

*One specific, world-specific detail that is not generic: at 0.13g, walking requires a different gait — a controlled bounce rather than a stride. Children born on the station walk differently to adults who arrived as adults. Tova's walk — her Earth-trained gait vs. the native-born colonists around her — could say something about belonging.*

---

**Constraint-Story Alignment:**

The chain: Callum Station is a corporate colony with no democratic governance (world rule) → colonists have no institutional recourse when Meridian falsifies safety data (social consequence) → Tova, who discovers the cover-up, has no one to report to who has authority and isn't implicated (character situation) → the story's central problem: how do you expose a cover-up to the only authority that exists when that authority is running the cover-up? (story problem).

*This chain is present but not fully deployed. The world's governance structure — which would make this chain airtight — is currently unspecified. Specify it, and the world stops being a backdrop and starts being the mechanism that makes the story's central problem inescapable.*

---

**Gaps and Inconsistencies:**

- Communication delay with Earth is not applied consistently: colonists behave as if Earth is immediately accessible
- Gravity is named but not felt — no physical action in the colony reflects low-g conditions
- The oxygen-generation system's failure is the story's central fact, but the ventilation system is never physically present in the colony as described; it has no presence in the texture
- Colonist tenure (rotating employees vs. permanent settlers) is unspecified; the story's stakes depend on which is true

---

## Related skills

- [`/writing-inconsistency-audit`](inconsistency-audit.md) — Once world rules are established, audit for violations throughout the manuscript
- [`/writing-character-development`](character-development.md) — Characters are produced by their world; Tova's psychology should reflect Callum Station's conditions
- [`/writing-scene-construction`](scene-construction.md) — Deploy world texture at the scene level through specific sensory grounding
