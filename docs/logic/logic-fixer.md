# logic-fixer

> Takes broken reasoning and produces a corrected version — not just diagnosis, but repair.

**Trigger:** `/logic-fixer`

---

## What it does

Diagnoses the specific logical failure (broken premise, invalid inference, logical fallacy, circular reasoning), then produces a repaired argument that is both valid and sound. If the conclusion can't be saved, states clearly what conclusion *is* supportable.

---

## When to use

- "This logic is broken — fix it"
- Argument that's important but doesn't hold up
- Circular reasoning, non-sequiturs, or conclusions that outrun their evidence

---

## Example

**Input:**
> "We should build this feature because our biggest customer asked for it. Our biggest customer has been with us for 5 years and always has good ideas. Therefore, this feature will make us successful."

**Output:**

**Diagnosis — what's broken:**

*Step 1:* "Biggest customer asked for it" → legitimately true and relevant
*Step 2:* "Always has good ideas" → overgeneralization; "always" is an absolute that's rarely true, and even if their ideas are generally good, that doesn't mean this idea is good
*Step 3:* "Therefore this feature will make us successful" → non sequitur; one customer's request, even a good customer's request, doesn't establish that a feature will drive company success

**Specific failures:**
1. **Overgeneralization** in P2 ("always")
2. **Non-sequitur** between P2 and the conclusion — even if the customer has good ideas, the conclusion is about company-wide success, which requires a much larger leap
3. **Single-data-point generalization** — one customer request ≠ evidence of broader market demand

**Repaired argument:**

"Our biggest customer asked for this feature. They've given us product feedback in the past that correlated with features other customers later requested. We've also heard related requests from two other customers in Q3. Building this would serve our current largest customer and may address an unmet need in our ICP segment. We should validate the broader demand before committing to full development, but initial signals suggest it's worth a discovery sprint."

**What changed in the repair:**
- "Always has good ideas" → replaced with a specific, verifiable claim about past feedback correlation
- Expanded the evidence base beyond one customer
- Changed "will make us successful" (overconfident conclusion) to "worth a discovery sprint" (proportionate conclusion)
- Added a validation step that acknowledges the evidence is suggestive, not conclusive

**If the conclusion must be saved:**
The closest defensible version of the original conclusion is: "This feature has higher-than-average probability of being worth building, given the source, and should be prioritized for validation." That's as far as this evidence can take you.
