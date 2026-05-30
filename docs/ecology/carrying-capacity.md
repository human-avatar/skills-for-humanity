# ecology-carrying-capacity

> Maps the ceiling and what happens when the system crosses it.

**Trigger:** `/ecology-carrying-capacity`

---

## What it does

Applies the ecological concept of carrying capacity (K) to any system with resource limits — teams, platforms, markets, communities. Identifies the binding constraint, estimates how close the system currently sits to its ceiling, models what overshoot looks like, and maps options for raising the limit or respecting it. Rooted in Howard Odum's energy flow analysis and the logistic growth model, which shows that all growth curves eventually flatten or collapse when they meet structural limits.

---

## When to use

- "How much can this system handle before it breaks?"
- Growth is slowing and you want to know whether it is hitting a structural ceiling or just a temporary plateau
- Early stress signals are appearing — declining throughput, rising error rates, team burn-out, quality degradation — and you suspect they indicate proximity to a limit
- Planning to scale and want to know what breaks first
- A system has already overshot and you need to understand why it crashed

---

## Example

**Input:**
> We're a 180-person product organisation that has doubled in size over the past 18 months. We keep missing delivery dates, onboarding takes longer than it used to, senior engineers are stretched across too many decisions, and there's a sense that we've lost the ability to move fast. We're planning to hire another 40 engineers this year. What's happening, and should we keep hiring?

**Output:**

**System:** Product engineering organisation, 180 people, 18-month growth period under analysis.

**Carrying Capacity Analysis**

| Constraint | Type | Current Load | Ceiling Estimate | Distance to Limit |
|------------|------|-------------|-----------------|-------------------|
| Senior engineer decision bandwidth | Cognitive / coordination | High — spread across 12+ concurrent projects | ~8-10 concurrent projects at sustainable load | At or past ceiling |
| Onboarding pipeline (mentoring capacity) | Knowledge transfer | 15 new hires per quarter; each requires ~6 weeks of senior attention | ~8-10 new hires per quarter without degrading others' output | Past ceiling |
| Cross-team coordination overhead | Communication | ~180 people; coordination costs scale as ~n² for unstructured interaction | Dunbar's organisation layer (~150 people) already passed | At ceiling |
| Architecture decision authority | Governance | 3 principal engineers holding informal veto on major decisions | ~6-8 active major decisions manageable per quarter | Approaching ceiling |

**Binding Constraint:** Senior engineer cognitive bandwidth — specifically, the concentration of architectural judgment and tacit organisational knowledge in a small set of individuals. This constraint is invisible in normal conditions but becomes the bottleneck under growth because: (1) new engineers require more senior attention, not less; (2) architectural decisions become more frequent as scope expands; (3) the knowledge cannot be transferred faster than the relationships that carry it are built.

**Load Assessment:** The organisation is in late K phase, approaching overshoot. The symptoms — degraded delivery speed, longer onboarding, senior engineers stretched thin — are the classic signals of a system past its effective carrying capacity. These are not temporary coordination problems. They are structural signals.

**Overshoot Scenario:**

Adding 40 engineers to a system already at its senior bandwidth ceiling accelerates the problem. Each new hire increases onboarding demand immediately but adds productive capacity on a 6-9 month lag. The net near-term effect is more demand on the bottleneck, not relief. Predicted cascade: onboarding quality degrades further → new engineers take longer to become productive → senior engineers spend more time remediating → even less bandwidth for architecture → more delivery misses → leadership responds by adding process → overhead increases → delivery speed degrades further.

Early-warning signals (already present): missed delivery dates, "quality bar slipping" complaints, senior engineers working unsustainable hours, new engineers reporting confusion about standards and priorities.

**Options**

| Option | Category | Feasibility | Lead Time | Second-Order Effects |
|--------|----------|-------------|-----------|---------------------|
| Pause hiring; invest in structural depth (staff engineer pipeline, architecture documentation, decision frameworks) | Raise ceiling — build capacity | High | 6-12 months | Addresses root cause; temporary slowdown in headcount growth |
| Hire 40 engineers but front-load staff engineer hiring (3-4 people) to expand the bottleneck first | Raise ceiling — sequence differently | Medium | 3-6 months for staff engineers to be effective | Partial relief; still high onboarding load in the short term |
| Restructure into smaller autonomous units (squad model) to reduce coordination overhead | Raise ceiling — redesign structure | Medium | 6-9 months to implement | Reduces coordination costs; may create alignment challenges |
| Reduce new hire intake to 15-20 this year; focus on engineering effectiveness | Reduce load | High | Immediate | Slows headcount growth; improves per-capita productivity; buys time |

**Recommendation:** The organisation has passed its effective carrying capacity under the current structure. Adding 40 engineers without first expanding the bottleneck (senior engineer depth and documented decision infrastructure) is likely to worsen the very problems it is meant to solve. Raising the ceiling requires structural investment, not more headcount.

---

## Related skills

- [`/ecology-keystone-species`](keystone-species.md) — Identify which senior engineers are structurally irreplaceable keystones in the bandwidth constraint
- [`/ecology-succession`](succession.md) — Understand what developmental stage the organisation is in and what the transition to the next stage requires
- [`/systems-leverage-analysis`](../systems/leverage-analysis.md) — Find the highest-leverage intervention to raise the ceiling
- [`/resource-bottleneck-analysis`](../resource/bottleneck-analysis.md) — Operational throughput analysis for the constraint once it is identified
