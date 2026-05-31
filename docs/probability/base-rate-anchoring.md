# probability-base-rate-anchoring

> Anchors estimates in historical base rates before adjusting for specific factors — correcting the most common forecasting error.

**Trigger:** `/s4h-probability-base-rate-anchoring`

---

## What it does

Finds the appropriate reference class for a prediction, establishes the base rate (how often does this outcome actually occur in similar situations?), then adjusts from that anchor using only specific, verifiable differentiating factors. Corrects the systematic tendency to treat every situation as unique and ignore what usually happens. The most important check: if the final estimate differs substantially from the base rate, the differentiating factors must explicitly justify the gap.

---

## When to use

- "What's the base rate?"
- "Am I being too optimistic?"
- "How often does this actually happen?"
- "Outside view on this estimate"
- Any forecast where the inside view feels confident but you want a calibration check

## When NOT to use

- When you have multiple distinct scenarios you want to assign probabilities to — use `probability-scenario-weighting`
- When you want to calculate the expected value of a decision — use `probability-expected-value-calculation`
- When you want to calibrate confidence levels on a specific judgment — use `probability-confidence-calibration`

---

## Example

**Input:**
> We're raising a Series A for our B2B SaaS company. We have $800k ARR, 120% net retention, growing 8% month-over-month. Our CEO says we have a "90% chance of closing" based on strong VC interest and warm meetings. Base rate check this estimate.

**Output:**

---

**Prediction:** Close a Series A round within the next 90 days. CEO's estimate: 90%.

**Reference Class:** B2B SaaS companies raising Series A, 2023–2025 market conditions

**Base Rate:** 

The base rate for Series A closes is difficult to establish precisely because the denominator (companies actively seeking a Series A) is harder to count than the numerator. Working from available data:
- Roughly 10–15% of seed-funded startups raise a Series A
- Of those actively in a Series A process with VC meetings, conversion to close is higher — approximately 25–40% based on venture data from CB Insights and Pitchbook for 2023–2025
- For companies with $800k+ ARR and strong retention metrics, the selection effect pushes this toward the higher end — perhaps 40–55% if the metrics are verified and the market timing is reasonable

**Anchor: ~40–55%** before adjusting for specifics.

**Adjustment Factors**

| Factor | Direction | Magnitude | Rationale |
|--------|-----------|-----------|-----------|
| 120% net retention | ↑ | Moderate | Strong signal; best-in-class for Series A cohort; VCs weight this heavily |
| 8% MoM growth | ↑ | Moderate | Above-average for Series A raises; suggests strong product-market fit |
| "Warm meetings" and "strong interest" | ↑ | Small | Inside-view signal; frequently overestimated; VCs take many warm meetings with no intent to close |
| $800k ARR | Neutral | Small | At the lower end of typical Series A threshold ($1M–$3M ARR); could be limiting for some investors |
| 2025 market conditions | Neutral/↓ | Small | Series A market has tightened since 2021 peak; time-to-close is longer |
| 90-day timeline | ↓ | Moderate | Series A processes typically take 3–6 months from first meeting; 90 days is optimistic unless already deep in diligence |

**Final Estimate:** 55–70% — conditional on the company actually being in active late-stage diligence conversations.

**Calibration Note:**

The CEO's 90% estimate is approximately 20–35 percentage points above the calibrated range. The gap is most likely driven by the inside view (the meetings feel warm, momentum feels strong) and optimism bias (founders systematically overestimate their probability of closing at every funding stage). 

The strongest upward adjustments — 120% NRR and 8% MoM growth — are real and significant. They don't close the full gap to 90%.

The most important uncorrected factor: "warm meetings" is not a strong predictor of close. VCs conduct extensive warm outreach before deciding to invest; high-quality meetings are table stakes for the process, not evidence of likely conversion. The actual predictive signal is: term sheet received (highly predictive), partner meeting scheduled (moderately predictive), associate-level conversation only (not predictive).

A more calibrated stance: 60% if currently in partner meetings with 1–2 firms, 30–40% if still in initial conversations with multiple firms.
