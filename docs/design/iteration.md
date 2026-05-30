# design-iteration

> Structures the feedback loop between making and learning — prototype, test, decide, repeat.

**Trigger:** `/design-iteration`

---

## What it does

Defines the next iteration cycle for a design: the hypothesis being tested, the right prototype fidelity for the question, the test method and participants, and the decision criteria that determine when to narrow, pivot, or commit. Distinguishes divergent tests (which direction?) from convergent tests (does this work?), and specifies in advance what a result looks like so testing produces decisions, not just observations.

---

## When to use

- "How should we prototype this?"
- A design direction exists and needs to be tested before committing to build
- Multiple directions are being considered and need to be narrowed through testing
- The team is iterating but it feels like cycling rather than converging
- Need to know what fidelity of prototype to build for a given stage

---

## Example

**Input:**
> We've designed a new onboarding flow for our B2B SaaS product. The current onboarding takes users through 12 steps over 3 screens: account setup, connecting data sources, and configuring their first report. Drop-off is 60% before users complete the flow. We've designed two alternative approaches: (A) collapse the flow to 4 steps and defer data source connection to after first value; (B) keep the 3-screen structure but add a progress indicator and make the data source step optional. We need to test these before building.

**Output:**

**Current situation:**

Two design directions (A and B) are competing. This is a divergent test — the goal is to determine which direction is more effective, not to refine a chosen direction. The key question is not aesthetic preference but completion rate and time-to-value.

**Hypothesis A:**
> We believe collapsing onboarding to 4 steps with deferred data connection will produce higher completion rates because the primary friction is the number of required steps before users see the product working.

**Hypothesis B:**
> We believe a progress indicator and optional data connection will reduce drop-off by reducing anxiety about what's coming and removing a blocker, while preserving the full setup flow for users who want to complete it.

**These are different bets about the cause of drop-off.** A assumes the problem is volume of steps; B assumes the problem is uncertainty and blockers. The test should determine which diagnosis is correct — or whether neither is.

---

**Iteration type:** Divergent

**Prototype specification:**

| Dimension | Direction A | Direction B |
|---|---|---|
| Format | Mid-fi interactive prototype | Mid-fi interactive prototype |
| What to include | All 4 steps, complete interactions, error states for required fields | All 3 screens, progress indicator, "skip for now" on data source step |
| What to exclude | Final visual polish, real data integration, email confirmations | Real data integration; animations |
| Estimated time to build | 1–2 days | 1–2 days |

Mid-fidelity is appropriate here: users are evaluating whether the flow makes sense and whether they drop off — not whether the visual design is appealing. High-fidelity would bias results toward aesthetic preference and waste build time. Paper prototypes would be too low-fidelity to capture realistic completion behaviour.

---

**Test design:**

| Element | Specification |
|---|---|
| Question | Which flow achieves higher completion rates, and where does drop-off occur in each? |
| Method | Unmoderated task completion test. Give users a realistic scenario ("You've just signed up for [product]. Please complete setup.") and observe without intervention. Record screens; note where users pause, hesitate, or abandon. |
| Participants | 8–10 users matching the target persona (operations or analytics roles at companies with 50–500 employees who have recently evaluated B2B SaaS tools). Split 4–5 per variant. |
| Success signal | Direction A: ≥75% complete all 4 steps; time to completion under 4 minutes. Direction B: ≥75% reach first report screen; fewer than 20% abandon at data source step |
| Pivot signal | Both variants show completion under 50%, or users consistently express confusion about the product's purpose during the flow — indicating the problem is earlier (value proposition) rather than onboarding mechanics |

**Separation of concern:** Run both variants in the same session (randomised order) with each participant doing only one variant. Do not show participants both — it introduces comparison effects and inflates the influence of recency.

---

**After this cycle, decide:**

This test produces a choice between three outcomes: (A) wins → build A; (B) wins → build B; neither wins above the pivot threshold → the diagnosis of the problem is wrong and requires re-investigation before building anything.

Set the decision meeting before the tests start. Don't let inconclusive results drift into "we need more testing" without a concrete decision criterion for what more testing would answer.

---

**Next cycle (if A wins):**

Convergent test on the collapsed 4-step flow: does each step make sense on its own? Are the required fields clear? Is the first value moment genuinely valuable, or does deferring data connection make the product feel empty? Fidelity: high-fi prototype with real data integration in a staging environment.

---

## Related skills

- [`/design-user-needs`](user-needs.md) — defines what the prototype should be testing against; run first if the need hasn't been validated
- [`/design-simplicity`](simplicity.md) — before building the prototype, remove what isn't necessary from the design
- [`/creativity-alternatives`](../creativity/alternatives.md) — if neither hypothesis is promising, generate new directions before testing
