---
name: logic-check
description: "A fast, comprehensive logic report on any argument, plan, or reasoning — validates premises, tests inference, detects fallacies, surfaces hidden assumptions, and produces a verdict. Lighter than logic-council (no peer review), heavier than logic-argument-validation (covers the whole reasoning, not just one argument). Triggers: 'logic check', 'quick logic review', 'check my reasoning', 'is this sound', 'full logic check', any request for a complete logical assessment."
---

# Logic Check

An argument can fail in three distinct places: a premise can be false, the inference can be invalid (the conclusion doesn't follow even if premises are true), or a hidden assumption can be doing load-bearing work without being examined. Most reasoning errors are invisible because they happen in exactly these places. A complete logic check must test all three.

---

## Your Process

**Step 1: Extract the Argument Structure**
Identify the premises (claims taken as given), the inference (how they connect), and the conclusion (what is claimed to follow). Write them out explicitly. Complex reasoning often has multiple linked arguments — map the chain.

**Step 2: Test Each Premise**
Classify each premise:
- **Established fact** — supported by reliable evidence
- **Reasonable assumption** — plausible but not established; stakes determine whether it needs verification
- **Contested claim** — disputed or uncertain; the argument depends on this being true
- **Unsupported assertion** — no evidence offered

The argument is only as strong as its weakest load-bearing premise.

**Step 3: Test the Inference**
Even if all premises are true: does the conclusion follow? Test with a steelman of the denial — can the premises all be true and the conclusion still be false? If yes, the inference is invalid. Common inference failures: missing variables, scope shifts (all → some), correlation treated as causation.

**Step 4: Scan for Fallacies**
Name any fallacies present specifically — do not give a generic list. Common ones in strategic and analytical reasoning: hasty generalisation, false dilemma, straw man, appeal to authority, ad hominem, sunk cost, post hoc ergo propter hoc, false analogy, slippery slope.

**Step 5: Surface Hidden Assumptions**
What must be true for the argument to work — but is never stated? These are the most dangerous load-bearers because they are not examined. Ask: "What would have to be true for this to hold? Is it?"

**Step 6: Assess Overall**
Does the reasoning hold? Give a verdict and name the specific weaknesses if it doesn't.

---

## Human Check-in

Before proceeding, ask the user:

**How do you want to run this?**

- **A) Full analysis** — complete all steps, reasoning shown throughout
- **B) Key findings only** — bottom-line output, skip step-by-step detail
- **C) Premises only** — surface what's being taken as given and classify each, skip inference and fallacy sections
- **D) Refine the framing** — adjust what we're analyzing before starting

Proceed based on their choice.

## Output Format

### Argument Structure
**Premises:**
1. [P1]
2. [P2]
3. [P3]

**Inference:** [How the premises are claimed to connect to the conclusion]

**Conclusion:** [What is claimed to follow]

### Premise Assessment
| Premise | Classification | Notes |
|---------|---------------|-------|
| P1 | Established / Assumption / Contested / Unsupported | ... |
| P2 | ... | ... |

### Inference Validity
**Valid:** Yes / No / Partially
**Analysis:** [Does the conclusion follow from the premises? Where does the inference fail if it does?]

### Fallacies Found
- [Name of fallacy] — [Where it appears in the argument, specifically]
- (None found — if absent)

### Hidden Assumptions
- [Assumption doing load-bearing work] — [Whether it holds]

### Verdict
**The reasoning:** Holds / Has specific problems / Does not hold

**Specific problems (if any):**
1. [Problem] — [Why it matters to the conclusion]

---

## Notes

Use logic-council when the situation requires adversarial peer challenge between logical positions. Use logic-argument-validation for a single, focused argument. This skill covers complete reasoning chains — plans, proposals, analyses — in a single pass.
