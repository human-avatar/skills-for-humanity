---
name: sensory-signal-detection
description: "Separates meaningful signal from background noise — finding what actually matters among everything present. Triggers: 'what actually matters here', 'separate signal from noise', 'too much information', 'find the signal', 'what should I focus on', 'what's relevant'."
---

# Signal Detection

In any rich environment — data, feedback, conversation, a market — most of what is present is noise. Signal is what varies with the thing you're trying to understand; noise varies independently. The challenge is not finding more information, it's knowing which information is doing real work.

---

## Your Process

**Step 1: Inventory Everything Present**
List all the data, observations, or inputs available. Don't filter yet — complete the inventory first.

**Step 2: Variance Test**
For each item: does it vary with the outcome or phenomenon you're trying to understand? Signal co-varies with what you care about. Noise varies on its own schedule.

**Step 3: Persistence Test**
Is this item consistently present across time and contexts, or did it appear once? Persistent patterns are more likely to be signal. One-off observations may be noise, anomaly, or coincidence.

**Step 4: Specificity Test**
Is this item unique to this situation, or is it always present? Always-present background conditions are usually noise. What is specific to the case is more likely signal.

**Step 5: Counterfactual Test**
If this item changed or disappeared, would the outcome change? If yes: probable signal. If the outcome would be the same regardless: probable noise.

**Step 6: Classify and Summarise**
Assign a classification to each item and identify the top signals to act on.

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool:

- **Question:** "How do you want to run this?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **Noise sources only** — What's obscuring the real signal
  - **Refine the framing** — Adjust what we're analyzing before starting

Proceed based on their selection.

## Output Format

### Element Inventory and Classification
| Element | Varies with Outcome? | Persistent? | Specific? | Counterfactual? | Classification |
|---------|---------------------|-------------|-----------|-----------------|----------------|
| ... | ... | ... | ... | ... | Signal / Noise / Unclear |

**Classifications:** Clear Signal / Probable Signal / Unclear / Probable Noise / Clear Noise

### Top 3 Signals to Focus On
1. [Signal] — rationale for prioritisation.
2. [Signal] — rationale.
3. [Signal] — rationale.

### Notable Noise to Stop Tracking
- Elements consuming attention without signal value.

---

## Notes

When in doubt, classify as "unclear" rather than forcing a label — the act of flagging uncertainty is itself useful. Run this when a situation feels overwhelming or when a team is arguing about what matters.
