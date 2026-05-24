---
name: probability-confidence-calibration
description: "Tests whether stated confidence levels match available evidence — catching overconfidence and underconfidence. Use when asked to 'calibrate my confidence', 'am I overconfident', 'confidence check', 'how sure should I be', or 'is this as certain as it seems'."
---

# Probability Confidence Calibration

Overconfidence is the most documented and costly bias in judgment. People who say they are 90% confident are right far less than 90% of the time. But underconfidence is also costly — excessive hedging prevents commitment and action when evidence is actually sufficient. Calibration is not about being less confident; it is about having confidence levels that match the available evidence.

---

## Your Process

**Step 1: State the Claim and Current Confidence**
Name the specific claim — not a vague domain but a specific, falsifiable statement — and state the current confidence level as a percentage.

**Step 2: Audit Supporting Evidence**
List the evidence supporting the claim. For each piece: classify its strength:
- **Direct observation:** you or a trusted source directly witnessed this
- **Inference:** logical or empirical inference from other data
- **Anecdote:** one or a few cases, not systematic
- **Assumption:** believed without verification

**Step 3: List Counter-Evidence and Gaps**
What evidence exists against the claim? What would you expect to see if the claim were true that you do not see? What have you not checked that bears on the claim?

**Step 4: Identify the Most Likely Failure Mode**
If this claim is wrong, what is the most probable reason? Is that failure mode being appropriately weighted in the current confidence assessment, or is it being minimized?

**Step 5: Apply the Frequency Test**
At this confidence level, across many similar judgments, you would be right X% of the time. Does that feel right given the quality of evidence? This frequentist reframe often corrects overconfidence.

**Step 6: State Calibrated Confidence**
Adjust the confidence level to reflect the evidence quality, gaps, and failure mode weight. State direction of adjustment and reason.

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool:

- **Question:** "How do you want to run this?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **Miscalibrations only** — Flag where confidence exceeds evidence, skip well-calibrated claims
  - **Refine the framing** — Adjust what we're analyzing before starting

Proceed based on their selection.

## Output Format

**Claim:** [specific, falsifiable statement]

**Original Confidence:** [%]

**Evidence Quality Audit**

| Evidence | Type (observation/inference/anecdote/assumption) | Strength |
|----------|------------------------------------------------|---------|
| | | |

**Counter-Evidence and Gaps:** [what works against the claim or has not been checked]

**Most Likely Failure Mode:** [if wrong, why — and is it being weighted correctly?]

**Calibrated Confidence:** [%] — [direction: raised/lowered/unchanged + one-sentence rationale]

---

## Notes

A well-calibrated person is not one who is always uncertain — they are confident when evidence is strong and uncertain when it is weak. The goal is accuracy of confidence, not uniformly lower confidence.
