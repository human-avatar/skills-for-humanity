---
name: probability-base-rate-anchoring
description: "Anchors estimates in historical base rates before adjusting for specific factors. Use when asked 'what's the base rate', 'am I being too optimistic', 'outside view', 'reference class', 'how often does this actually happen', or 'historical frequency'."
---

# Probability Base Rate Anchoring

The most common forecasting error is treating every situation as unique and ignoring what usually happens. Kahneman called this neglecting the outside view. Before adjusting for what makes this situation special, you must first establish what happens in situations like this one. The base rate is the outside view — the answer to "what fraction of attempts like this one succeed?" — and it is almost always more informative than inside-view reasoning about this particular case.

---

## Your Process

**Step 1: State the Prediction or Estimate**
Name the specific outcome being predicted and the current estimate or intuition. What is being forecast and at what implied probability?

**Step 2: Find the Reference Class**
What category of similar situations does this belong to? This is the most important and contested step. The reference class should be: (a) large enough to have stable base rates, (b) genuinely similar in the ways that matter, (c) not cherry-picked to flatter the prediction. If multiple reference classes apply, note them all.

**Step 3: Find the Base Rate**
How often does this outcome actually occur in that reference class? Use historical data where available. If the exact rate is unknown, estimate a range from the most similar data available. This is the outside view — state it plainly, even if it is uncomfortable.

**Step 4: Adjust for Differentiating Factors**
What specific, verifiable features of this situation distinguish it from the reference class? For each: does it push the probability up or down from the base rate? Explicitly consider factors that cut against your prior, not only those that support it.

**Step 5: State as a Range**
Combine the base rate with adjustments to produce a final probability range, not a point estimate. The range should reflect genuine uncertainty.

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool:

- **Question:** "How do you want to run this?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **Base rate only** — Identify the historical rate without Bayesian adjustment
  - **Refine the framing** — Adjust what we're analyzing before starting

Proceed based on their selection.

## Output Format

**Prediction:** [the specific outcome + current intuitive estimate]

**Reference Class:** [the category used + why it applies]

**Base Rate:** [historical frequency in this class + data source or basis]

**Adjustment Factors**

| Factor | Direction (↑/↓) | Magnitude | Rationale |
|--------|----------------|-----------|-----------|
| | | | |

**Final Estimate:** [range — low to high] — [brief rationale]

**Calibration Note:** [if final estimate differs substantially from base rate, explain why the differentiating factors justify the gap]

---

## Notes

Only adjust from the base rate when you have specific, verifiable reasons — not because the situation feels different. The inside view always feels justified; the outside view is the corrective.
