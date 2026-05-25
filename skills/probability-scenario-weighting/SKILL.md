---
name: probability-scenario-weighting
description: "Assigns explicit probabilities to distinct scenarios before making a decision. Use when asked to 'assign probabilities', 'scenario weighting', 'how likely is each outcome', 'quantify the uncertainty', or 'probability distribution'."
---

# Probability Scenario Weighting

Vague uncertainty — "it might work, it might not" — produces poor decisions. Quantified uncertainty forces precision about what is actually believed and makes implicit assumptions visible. Assigning explicit probabilities to scenarios is not prediction; it is structured belief articulation. The process of assigning and calibrating probabilities often reveals more than the final numbers.

---

## Your Process

**Step 1: List Scenarios**
Enumerate all scenarios — they must be mutually exclusive (no overlap) and collectively exhaustive (cover all meaningful possibilities). If "other" is significant, make it explicit. Typically 3–5 scenarios; more than 6 reduces usability.

**Step 2: Assign Initial Probabilities**
Assign a probability to each scenario. They must sum to 100%. Do this before analyzing each scenario in detail — your prior is informative and anchoring matters.

**Step 3: Calibration Check**
For each probability: would you accept a bet at these odds? If you assigned 70% to a scenario, you should be willing to accept 3:7 odds against it. If the bet feels uncomfortable at those odds, your stated probability is wrong. Adjust.

**Step 4: Identify Key Driver for Each Scenario**
What would need to be true for each scenario to occur? What is the single most important condition that must hold?

**Step 5: Find the High-Probability and High-Impact Scenarios**
These may be the same scenario or different ones. If the highest-probability scenario is low-impact and the highest-impact scenario is low-probability, name both — they require different responses.

**Step 6: Identify Most Useful Information**
What new information would most update these probabilities? This determines what to investigate next. Information that confirms the most likely scenario is usually less valuable than information that discriminates between scenarios.

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool:

- **Question:** "How do you want to run this?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **Top 3 scenarios only** — Most likely, most harmful, most surprising
  - **Refine the framing** — Adjust what we're analyzing before starting

Proceed based on their selection.

## Output Format

**Scenario Table**

| Scenario | Probability | Key Driver (must be true) | Primary Implication |
|----------|-------------|--------------------------|---------------------|
| | | | |
| **Total** | **100%** | | |

**Highest-Probability Scenario:** [name + %, implications]

**Highest-Impact Scenario:** [name + %, implications — note if same or different from above]

**Most Useful Information to Gather:** [the question whose answer would most shift these probabilities]

---

## Notes

Resist collapsing scenarios into "optimistic / realistic / pessimistic" — this framing anchors on the most optimistic outcome and treats the middle case as truth. Build scenarios around key uncertainties, not emotional valence.

---

## What's Next

After delivering this output, use `AskUserQuestion` to offer the next move:

- **Question:** "Scenarios weighted. What's next?"
- **Header:** "Next"
- **Options:**
  - `/decision-premortem-analysis` — Run a premortem on the worst weighted scenarios
  - `/decision-criteria-weighting` — Weight decision criteria against scenario probabilities
  - `/temporal-horizon-mapping` — Map the weighted scenarios across time horizons
  - **Done** — Wrap up and synthesise what we have so far
