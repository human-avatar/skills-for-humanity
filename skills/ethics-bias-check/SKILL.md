---
name: ethics-bias-check
description: "Evaluate an algorithm, model, ranking system, recommendation engine, or automated decision process for discriminatory patterns and unfair outcomes. Use before deploying any system that makes decisions about people or ranks/filters/scores people. TRIGGERS: 'bias check', 'check this algorithm for bias', 'is this fair', 'fairness audit', any ML model, ranking function, scoring system, content recommendation, or automated decision that differentiates between people."
---

# Ethics Bias Check

Algorithms that treat everyone the same can still discriminate. A ranking that optimises for engagement may systematically deprioritise certain groups. A model trained on historical data may encode historical injustice. A feature that works well on average may fail badly for users who aren't the implicit default.

This check surfaces those patterns before they ship.

---

## Your Process

**Step 1: Define the system**
What is the algorithm, model, or automated decision? What is its input? What is its output? Who does it make decisions *about*? What happens to people based on its output?

**Step 2: Identify the implicit default**
Every system has a default user in mind — often implicitly. Ask:
- Who was this optimised for?
- Whose behaviour or data was used to train or calibrate it?
- Who is absent from the training set or design process?

The implicit default is often the demographic that experiences least friction. Others bear the cost of that assumption.

**Step 3: Check for direct bias**
Does the system use protected characteristics (age, gender, race, disability, location as proxy for race, etc.) as features, or correlates that map closely to them? Does it produce different outcomes for different demographic groups? Is that difference *justified* (e.g. a medical dosage model that accounts for body weight) or *unjustified* (e.g. a loan model that penalises postcodes that correlate with race)?

**Step 4: Check for proxy bias**
Protected characteristics don't need to be explicit to create discriminatory outcomes. Audit the features used:
- Which features correlate with protected characteristics?
- Could the model achieve similar accuracy without the proxy, and if so, is there a reason it uses it?
- What's the *historical source* of the training data? Does it encode past discriminatory practices?

**Step 5: Check the feedback loop**
Many deployed systems create the conditions that confirm their own predictions. A recommendation system that shows users content they're predicted to engage with can entrench filter bubbles. A fraud model that flags more accounts from a certain demographic leads to more investigations of that demographic, which produces more evidence that "justifies" the bias. Ask: does this system create or amplify the patterns it's trying to predict?

**Step 6: Assess the harm distribution**
When the system makes errors, who bears the cost?
- False positives and false negatives are not equally distributed — who experiences more of each?
- What happens to a person when the system is wrong about them? Is the cost significant?
- Do people have recourse? Can they appeal or correct the system's decision about them?

---

## Human Check-in

Before proceeding, ask the user:

**How do you want to run this?**

- **A) Full analysis** — complete all steps, reasoning shown throughout
- **B) Key findings only** — bottom-line output, skip step-by-step detail
- **C) Disparate impact only** — flag differential outcomes without full root-cause analysis
- **D) Refine the framing** — adjust what we're analyzing before starting

Proceed based on their choice.

## Output Format

**System Being Audited:**
[What it does, inputs, outputs, who it affects]

**Implicit Default**
[Who the system is optimised for; who may be disadvantaged by that assumption]

**Bias Findings**

| Dimension | Finding | Severity |
|---|---|---|
| Direct bias (protected characteristics) | [finding] | 🔴 / 🟡 / 🟢 |
| Proxy bias (correlated features) | [finding] | 🔴 / 🟡 / 🟢 |
| Training data issues | [finding] | 🔴 / 🟡 / 🟢 |
| Feedback loop risk | [finding] | 🔴 / 🟡 / 🟢 |
| Error cost distribution | [finding] | 🔴 / 🟡 / 🟢 |

**Most Significant Concern**
[One specific, concrete finding that warrants most attention]

**Recommended Actions**
- [Specific mitigation per finding, or "escalate to ethics-council" for significant concerns]

---

## Notes

A clean bias check is not a guarantee of fairness — it is evidence of serious effort. Bias is often subtle and emerges at scale. Where this check surfaces concerns, treat them as decisions to be made consciously, not problems to be explained away.

For systems with high-stakes outputs (credit, hiring, healthcare, content moderation), this check is a minimum. Consider ongoing monitoring post-deployment, not just a pre-ship audit.
