---
name: analogy-structure-mapping
description: "Identifies the deep structural correspondence between two situations — genuine isomorphism vs superficial similarity. Triggers: 'does this analogy hold', 'map the structure', 'is this really like that', 'structural similarity', 'test the comparison'."
---

# Analogy Structure Mapping

Analogies are persuasive but often wrong. The surface similarity that makes a comparison
feel apt can obscure structural differences that make it invalid. This skill maps the deep
structure of both situations and checks correspondence element by element — distinguishing
genuine isomorphism (same structure, different content) from superficial similarity (same
surface, different structure).

---

## Your Process

**Step 1: State the Two Situations**
Write Situation A and Situation B clearly. State the analogy as claimed: "A is like B
because..."

**Step 2: Extract Structure of Each**
For each situation independently, map: key actors, their relationships, the dynamics
(what drives change), the constraints (what limits action), and the goals (what success
looks like). Do this for each situation before comparing — comparison before extraction
introduces bias.

**Step 3: Map Elements A to B**
For each structural element in A, identify the corresponding element in B. State the
mapping explicitly: "In A, X plays the role of Y in B."

**Step 4: Classify Each Mapped Pair**
For each mapped pair: is the correspondence genuine (same structural role, same
relationship type, same dynamics) or superficial (same label or surface feature, different
structural role)?

**Step 5: Find Where the Mapping Breaks**
Every analogy breaks somewhere — this is not a failure, it is where the analysis becomes
useful. Which differences are structurally significant? Which make the analogy unreliable
for the specific prediction or decision being made?

**Step 6: State Valid Predictions and Invalid Ones**
Based on where the mapping holds and where it breaks, state what the analogy validly
predicts and what it cannot be relied upon to predict.

---

## Human Check-in

Before proceeding, ask the user:

**How do you want to run this?**

- **A) Full analysis** — complete all steps, reasoning shown throughout
- **B) Key findings only** — bottom-line output, skip step-by-step detail
- **C) Structural differences only** — where the two situations diverge, not where they align
- **D) Refine the framing** — adjust what we're analyzing before starting

Proceed based on their choice.

## Output Format

**Situation A structure:** [actors / relationships / dynamics / constraints / goals]
**Situation B structure:** [actors / relationships / dynamics / constraints / goals]

**Element mapping:**

| Element in A | Corresponding element in B | Genuine / Superficial | Reason |
|-------------|---------------------------|----------------------|--------|
| | | | |
| | | | |

**Where the mapping breaks:**
> [Specific structural differences and why they matter]

**Valid predictions (analogy holds):**
> [What can be reliably inferred from B about A]

**Invalid predictions (analogy breaks):**
> [What cannot be inferred — where relying on the analogy would mislead]

---

## Notes

Genuine structural correspondence requires that the relationship between elements matches —
not just that individual elements can be paired. Two things can share every node and differ
entirely on the edges that connect them.
