# probability-scenario-weighting

> Assigns explicit probabilities to distinct scenarios before making a decision — forcing precision about what is actually believed.

**Trigger:** `/probability-scenario-weighting`

---

## What it does

Enumerates all meaningful scenarios (mutually exclusive, collectively exhaustive), assigns explicit probabilities that sum to 100%, runs a calibration check using the bet test, identifies what must be true for each scenario, and surfaces the highest-probability and highest-impact scenarios separately. The most valuable output: what new information would most update these probabilities — because that determines what to investigate next.

---

## When to use

- "Assign probabilities to these scenarios"
- "Scenario weighting"
- "How likely is each outcome?"
- "Quantify the uncertainty"
- Any significant decision under uncertainty where "it might work, it might not" is not precise enough

## When NOT to use

- When you need to anchor a single estimate in historical base rates — use `probability-base-rate-anchoring`
- When you need the expected value of a specific option — use `probability-expected-value-calculation`
- When you want to calibrate confidence on a specific belief — use `probability-confidence-calibration`

---

## Example

**Input:**
> We're deciding whether to expand to the US market next year. Assign probabilities to the main scenarios: we succeed and it becomes our primary market, we succeed but it stays secondary to our home market, we break even but it's a distraction, or we fail and have to withdraw.

**Output:**

---

**Scenario Table**

| Scenario | Probability | Key Driver (must be true) | Primary Implication |
|----------|-------------|--------------------------|---------------------|
| **US becomes primary market** — strong product-market fit, US revenue overtakes home market within 18 months | 15% | Product solves a significant pain point for US buyers without meaningful localization; US sales motion works with modest team | Full investment mode; hire US team, relocate resources |
| **US succeeds, stays secondary** — meaningful US revenue (>$1M ARR) within 18 months, but home market remains larger | 30% | Product has US demand; sufficient resource investment; no major localization blocker | Positive signal; continue building; size team proportionally |
| **US breaks even / distraction** — some US revenue but insufficient to justify cost; team attention diverted from home market | 35% | Product requires significant localization or GTM changes not anticipated; US sales cycle longer than modeled | Net negative; exit or significantly reduce US investment |
| **US fails, withdraw** — insufficient traction; significant resource spend; must exit within 18 months | 20% | Fundamental product-market mismatch; US buyer needs differ more than expected; or execution failure | Write down investment; preserve home market momentum |
| **Total** | **100%** | | |

**Calibration Check:**

- *Would I accept a 15:85 bet that US becomes primary market?* Yes — this feels right; scenarios where the US becomes the dominant market require everything to go well simultaneously.
- *Would I accept a 35:65 bet that US is a distraction?* Slightly uncomfortable but yes — this is the base case cautionary scenario and the odds reflect genuine uncertainty.
- *Would I accept a 20:80 bet on complete failure?* Yes — failure is real but less likely than partial success given the team has successfully entered markets before.

All calibrations pass.

---

**Highest-Probability Scenario:** US breaks even / distraction (35%) — this is the scenario that most organizations systematically underweight because it's emotionally unsatisfying. It's not catastrophic enough to be a clear no, but costs more than forecast. This is the silent drain scenario.

**Highest-Impact Scenario:** US becomes primary market (15%) — dramatically changes company trajectory, valuation, and hiring capacity. If this happens, the upside is much larger than the downside of the worst case. The expected value calculation depends on whether this upside (if achieved) justifies the 55% probability of break-even or worse.

These are different scenarios — the highest-probability scenario (distraction) and the highest-impact scenario (primary market) suggest different preparation needs:
- Prepare for distraction: define the withdrawal criteria before you start (at what point do we call it?)
- Prepare for primary market success: ensure you have hiring capacity and capital to double down if early signals are strong

---

**Most Useful Information to Gather:**

The single question whose answer would most shift these probabilities: **"Have 10 US companies in our target segment agreed to a paid pilot within 60 days of outreach?"**

If yes: significantly increases the probability of at least the secondary success scenario (30% → 50%); compresses the distraction and failure scenarios.

If no: significantly increases the probability of the distraction and failure scenarios; should trigger a re-evaluation of whether full expansion is the right move vs. a more limited test.

This information is available before committing to full expansion. Running a 60-day US outreach pilot before making the full expansion decision converts this analysis from forecast into validated data.
