# investigation-counter-hypothesis

> Generate the best alternative explanations for the same observations — then identify the test that would distinguish them.

**Trigger:** `/investigation-counter-hypothesis`

---

## What it does

Counter-hypothesis generation is the structural antidote to confirmation bias: once you have an explanation, you systematically construct the best competing explanations and ask whether the available evidence genuinely discriminates between them. The process goes beyond devil's advocacy — it requires building each rival hypothesis seriously, identifying what evidence supports it, and then locating the decisive test: the observation that, if obtained, would most cleanly rule out one or more hypotheses. The output is a ranked credibility assessment of all hypotheses given current evidence, plus the next investigation step that would do the most work.

---

## When to use

- You have an explanation and want to know whether something else could account for the same observations
- A causal claim is central to a decision ("our churn is rising because of X")
- You've identified a pattern and want to be sure you're not pattern-matching to the nearest explanation
- You need to convince a skeptical audience and want to preemptively address the best alternatives
- The evidence for your hypothesis and a rival feels approximately equal and you need a way to discriminate

## When *not* to use

- You don't yet know what the observations are that need explaining → [investigation-claim-decomposition](claim-decomposition.md) to surface what's actually being claimed
- You want to evaluate the quality of evidence for your hypothesis, not generate alternatives → [investigation-evidence-audit](evidence-audit.md)
- You want to find the origin of the claim, not rival interpretations of its evidence → [investigation-source-trace](source-trace.md)

The nearest neighbor trap: Counter-hypothesis is not steelmanning. Steelmanning strengthens the *best version of a position*. Counter-hypothesis generates *different positions* that fit the same evidence, with the goal of testing whether your position is uniquely supported. You may end up concluding the rival is more credible — that's not a failure, it's the point.

---

## Example

**Input:**
> Our SaaS product's North American net revenue retention (NRR) has dropped from 112% to 98% over the past three quarters. The head of customer success says it's because we under-invested in onboarding — customers never reach full activation. Our CRO thinks it's because we moved upmarket and the new enterprise customers are harder to land-and-expand with. What else could be explaining this?

**Output:**

**Observations to explain:**
- NRR dropped 14 percentage points over 3 quarters in North America
- The drop is sustained, not a one-quarter anomaly
- Expansion revenue is presumably declining relative to churn/contraction revenue

**Current hypotheses (two already stated):**
- H1 (CS lead): Under-investment in onboarding → lower activation → higher churn / lower expansion
- H2 (CRO): Upmarket shift → enterprise customers with longer expansion cycles and higher churn risk

**Rival Hypotheses:**

**H3: Competitive displacement — a rival product has taken a meaningful share of the expansion use cases**
- What it claims: Customers are churning or contracting because a competitor now covers adjacent use cases that previously drove expansion within accounts.
- Evidence that supports it: Consistent with a sudden multi-quarter decline; if competitive pressure emerged in a specific time window it would produce this pattern.
- Evidence that challenges it: Would expect to see this in churned customer interviews and win/loss data.
- What would have to be true: A specific competitor improved materially in the expansion-relevant categories within this time window.

**H4: The cohort composition has changed — NRR looks worse because recent cohorts had different characteristics from the high-NRR historical cohorts that set the benchmark**
- What it claims: If high-NRR cohorts from 2-3 years ago are now in their natural expansion plateau, and newer cohorts are lower-quality, the blended NRR will fall even if nothing has changed in the product or CS function.
- Evidence that supports it: Cohort math can produce this effect mechanically; worth checking whether the decline is uniform across cohort vintages or concentrated in recent vintages.
- Evidence that challenges it: The drop was rapid (3 quarters), which suggests something changed — though cohort composition shifts can also be rapid if sales velocity increased.
- What would have to be true: New customer cohorts are structurally less likely to expand than the historical base.

**H5: Economic pressure causing customers to reduce software spend across categories (demand contraction)**
- What it claims: NRR is declining because customers are cutting budgets, not because of product or CS failures specifically.
- Evidence that supports it: If this were true, we'd expect to see it across the category, not just in our numbers.
- Evidence that challenges it: If this is sector-wide, competitors would show similar NRR trends. Easy to check.
- What would have to be true: A budget compression cycle that specifically affects expansion decisions in our customer segment.

**H6: Metric attribution error — how NRR is being measured has changed, or a specific account segment is masking a healthier underlying picture**
- What it claims: The drop may be partially or wholly an artifact of how the number is calculated (e.g., a few large contracting accounts skewing the metric) rather than a systemic shift.
- Evidence that supports it: NRR is an average/aggregate metric; a handful of large account contractions can move it substantially.
- Evidence that challenges it: If it's driven by a few accounts, logo-level analysis would surface it quickly.
- What would have to be true: The NRR decline is concentrated in a specific account tier or a small number of outlier accounts.

**Discriminating Evidence:**

| Hypothesis A | Hypothesis B | Discriminating Evidence | Status |
|---|---|---|---|
| H1 (onboarding) | H2 (upmarket shift) | Segment NRR by customer size and by activation metric — does the decline concentrate in new enterprise accounts or across the board? | Need to pull |
| H1 or H2 | H3 (competitive) | Churned customer exit interviews; win/loss analysis for competitive mentions in the past 3 quarters | Need to pull |
| All internal hypotheses | H5 (demand contraction) | Category-wide NRR benchmarking data; peer company earnings calls | Checkable via public data |
| All trend hypotheses | H6 (attribution error) | NRR by cohort vintage and account tier | Should be immediate to run |

**Decisive Test:**
**Test:** Decompose NRR by (a) cohort vintage, (b) account tier (SMB vs. enterprise), and (c) activation milestone (activated vs. not activated). This single analysis would:
- Rule out or confirm H4 (cohort composition) by showing whether decline is concentrated in specific vintages
- Discriminate between H1 and H2 by showing whether decline concentrates in low-activation accounts or in enterprise accounts
- Rule out or confirm H6 (attribution error) by showing whether a small account segment is driving the whole number

**Feasibility:** Internal data; should take an analyst 1-2 days.

**Current Credibility Ranking:**
1. **H4 (cohort composition) + H2 (upmarket shift) combined** — The two are consistent with each other and together explain a sustained multi-quarter decline without requiring a specific failure event.
2. **H1 (onboarding/activation)** — Plausible mechanism; the CRO's hypothesis is not mutually exclusive with H4 — new enterprise accounts may simply be harder to activate.
3. **H3 (competitive)** — Possible, but would expect to see clearer signal in exit interviews; lower prior probability unless there's supporting qualitative data.
4. **H6 (attribution error)** — Easy to rule out; should be checked first because it could partially explain the number.
5. **H5 (demand contraction)** — Possible but would affect the category broadly; verifiable quickly.

**The live question:** Is the NRR decline concentrated in recent cohorts of enterprise accounts with low activation? If yes, H2 + H4 + H1 all converge. If the decline is uniform across cohorts and account tiers, we need to look harder at H3 and H5.

---

## Related skills

- [investigation-evidence-audit](evidence-audit.md) — evaluate the strength of evidence for the leading hypothesis before investing further
- [investigation-triangulation](triangulation.md) — check whether evidence for your hypothesis comes from genuinely independent sources
- [logic-causality-mapping](../logic/causality-mapping.md) — once you have a hypothesis, map its causal chain to find the testable links
- [probability-scenario-weighting](../probability/scenario-weighting.md) — assign probabilities to rival hypotheses to support decision-making under uncertainty
