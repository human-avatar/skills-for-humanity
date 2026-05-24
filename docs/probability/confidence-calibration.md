# probability-confidence-calibration

> Tests whether stated confidence levels match available evidence — catching overconfidence and underconfidence.

**Trigger:** `/probability-confidence-calibration`

---

## What it does

Audits a stated confidence level against the actual evidence: what supports the belief, what challenges it, where overconfidence might be coming from. Produces a recalibrated confidence level with reasoning. Good calibration means your 80%-confident predictions come true about 80% of the time.

---

## When to use

- "Am I overconfident about this?"
- "How sure should I be?"
- Before making a bet, commitment, or prediction based on uncertain information
- Checking your own certainty before presenting to others

---

## Example

**Input:**
> I'm 90% confident our product launch next quarter will go well. We've built something users need, the team is strong, and we've done beta testing.

**Output:**

**Stated confidence:** 90%

**Auditing the evidence:**

*Evidence supporting the belief:*
- Users need this: validates the problem exists, not necessarily that this solution is the one they'll adopt
- Strong team: a process quality indicator, not an outcome predictor
- Beta testing: how extensive? What were the conversion/retention numbers from beta?

**Sources of likely overconfidence:**

*Planning fallacy:* Product teams systematically underestimate implementation difficulty, adoption friction, and competitive response. The planning process that leads to launch creates psychological commitment which inflates confidence.

*Confirmation bias in beta:* Beta testers are selected users who opted in — they're typically more motivated than average users. Beta results often overstate launch performance.

*Ambiguity in "go well":* 90% confident of what, exactly? Meeting a download target? Positive reviews? Revenue? User retention at 90 days? Different definitions change the calibration.

*Missing evidence base:* What's the base rate for product launches that "go well" in your category? If most products in your market fail to reach meaningful adoption within 6 months, 90% confidence requires specific evidence that yours is different — not just that the team is strong and the problem is real.

**Recalibrated assessment:**

Given available information as described: 90% is likely 15-20 percentage points too high. "The team is strong and users need this" describes conditions that are necessary but not sufficient for a successful launch.

A more calibrated estimate: 65-70% confident the launch will perform in the top quartile of similar launches, given evidence of strong team and validated problem. If beta retention numbers are strong, revise upward. If the base rate for this category is poor, revise downward.

**What would move confidence higher:** Specific beta retention metrics, comparable launch benchmarks from similar products, and a defined success metric so "go well" is testable.
