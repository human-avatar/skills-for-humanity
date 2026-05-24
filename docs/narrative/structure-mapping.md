# narrative-structure-mapping

> Applies story architecture to any communication — proposal, presentation, strategy doc — so it moves people rather than informing them.

**Trigger:** `/narrative-structure-mapping`

---

## What it does

Maps a communication onto three-act narrative structure (Setup, Confrontation, Resolution), identifies the tension that drives it, places evidence inside the story at the right structural moment, and surfaces the turning point — the specific insight that must land before the resolution feels earned rather than asserted. The most common failure it prevents: leading with the conclusion before the audience has felt the problem.

---

## When to use

- "Structure this as a story"
- "Make this compelling"
- "I have all the facts, how do I present them?"
- "Narrative arc for this presentation"
- When a communication needs to move people to action, not just inform them
- Before drafting any important proposal, pitch, or strategy document

## When NOT to use

- When the question is who the audience is — use `narrative-audience-modeling` first
- When the question is how to handle specific objections — use `communication-objection-mapping`
- When the question is frame analysis on a message that's already been sent — use `narrative-frame-analysis`

---

## Example

**Input:**
> I need to present to our leadership team that we should rebuild our mobile app from scratch. The current app is 6 years old, loads slowly, crashes in certain flows, and engineers dread touching it. A rebuild would take 12 months and $800k. Map this as a narrative.

**Output:**

---

**Audience:** Leadership team — current belief: "the app has issues but $800k and 12 months is a lot to ask for something that's still working."

**Tension:** The app is degrading, but the cost of fixing it keeps increasing the longer we wait. The current state isn't stable; it's a slow deterioration with an accelerating cost curve.

---

**Narrative Outline**

| Section | Content | Function |
|---------|---------|---------|
| **Hook** | "In the last 90 days, we've had 3 critical bugs in the checkout flow that took an average of 11 days to fix each. The average time for a comparable fix in a modern codebase is 2–3 days." | Opens with tension, not context. Immediate evidence that the problem is already costing something. |
| **Setup** | The app was built in 2018. At the time, it was the right choice. It's served us through 2 major product iterations and 6x user growth. The team who built it is largely gone; the engineers who maintain it describe it as a system they can change but not predict. | Establishes the world as the audience knows it — historical context without blame; builds to disruption. |
| **Disruption** | The maintenance cost isn't flat — it's accelerating. In 2022, we shipped 4 mobile features per quarter. In 2024, we shipped 2. The codebase complexity has grown faster than our ability to manage it. We're not degrading gradually; we're on an exponential curve. | The world has changed — not a static problem but a worsening one. Changes the question from "should we fix it?" to "when does inaction become more expensive than action?" |
| **Confrontation** | $800k and 12 months is real. During that time, new feature development on mobile slows significantly. We'll need to explain this to the business. There's also execution risk. These are the actual stakes. | Puts the complexity on the table honestly. Skipping this loses credibility. Leadership knows there's a cost — naming it first builds trust. |
| **Turning Point** | The question is not "rebuild vs. no rebuild" — the question is "rebuild now at $800k and 12 months vs. rebuild in 18 months at $1.2M and 16 months, while the crash rate has increased by another 40% and we've shipped 8 fewer features." Every quarter we wait, the cost of the rebuild grows and the cost of not rebuilding compounds. | This is the insight that makes the resolution feel earned: the choice is not costly action vs. free inaction — it's two cost curves, and one of them is worse. |
| **Resolution** | A 12-month rebuild, starting with parallel development so the current app stays live throughout, with feature parity as the minimum bar and targeted improvements in checkout and load time as the first additions. By month 14, we have a mobile codebase we can move fast on again. | Concrete, specific, with the risk mitigation built in. The "parallel development" detail addresses the implicit fear of the app going down during the rebuild. |
| **Call to Action** | Approve the allocation of $800k and 12 months. Sponsor a kick-off session with engineering in the next 2 weeks to define the phase plan. | Specific ask with a next step that creates momentum without requiring immediate full commitment. |

---

**Where Data Fits:**

- 11-day bug fix time → Hook (opens the tension immediately)
- Feature velocity decline (4/quarter → 2/quarter) → Disruption (evidence the problem is accelerating)
- $800k / 12 months cost → Confrontation (named honestly as part of the real tradeoff)
- Projected rebuild cost increase over time → Turning Point (makes the case for acting now vs waiting)
- Parallel development plan → Resolution (mitigates the risk that leadership is imagining)
