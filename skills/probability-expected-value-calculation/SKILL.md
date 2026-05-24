---
name: probability-expected-value-calculation
description: "Calculates expected value to compare options under uncertainty. Use when asked about 'expected value', 'is this risk worth taking', 'EV calculation', 'compare these options', 'worth the risk', or 'asymmetric risk'."
---

# Probability Expected Value Calculation

Expected value is the correct framework for comparing options under uncertainty. It multiplies each outcome's value by its probability and sums across all outcomes, producing a single number that accounts for the full distribution rather than just the most likely case. EV analysis forces explicitness about both probabilities and values — and it exposes asymmetric risk that intuition misses. One important constraint: EV math is overridden when any outcome is catastrophic enough to be unacceptable regardless of probability.

---

## Your Process

**Step 1: Define the Options**
List the options being compared. Include "do nothing" or "wait" as explicit options — they have EVs too.

**Step 2: List Outcomes for Each Option**
For each option: what are the possible outcomes? Use scenario-weighting to assign probabilities if this has not already been done. Outcomes must be mutually exclusive and exhaustive per option.

**Step 3: Assign Values**
Assign a value to each outcome in a consistent unit (revenue, cost savings, time, abstract utility). The same unit must apply across all options for comparison to be valid. Negative values for bad outcomes.

**Step 4: Calculate EV**
For each option: EV = sum of (probability × value) across all outcomes. Show the calculation.

**Step 5: Compare EVs**
Identify the highest-EV option. Note whether any option has higher EV but worse downside — this is the asymmetric risk check.

**Step 6: Check for Catastrophic Downside**
Is any outcome bad enough that it would be unacceptable regardless of its probability and regardless of EV? Ruin, existential harm, irreversible loss. If yes: that outcome overrides the EV comparison. Flag it explicitly.

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool:

- **Question:** "How do you want to run this?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **EV comparison table only** — Final expected values per option, skip the step-by-step breakdown
  - **Refine the framing** — Adjust what we're analyzing before starting

Proceed based on their selection.

## Output Format

**EV Table**

| Option | Outcome | Probability | Value | P × V |
|--------|---------|-------------|-------|-------|
| Option A | Outcome 1 | | | |
| | Outcome 2 | | | |
| | **EV** | | | **=** |
| Option B | Outcome 1 | | | |
| | **EV** | | | **=** |

**Recommended Option:** [highest EV + rationale]

**Catastrophic Downside Flag:** [Y/N — if yes: which outcome, why it overrides EV, revised recommendation]

**Asymmetric Risk Note:** [if any option has high upside but fat downside tail that EV smooths over]

---

## Notes

EV assumes outcomes are fungible and the decision will be made many times — neither is always true. For one-shot decisions with irreversible outcomes, weight catastrophic downside beyond what probability × value captures.
