---
name: analogy-boundary-testing
description: "Finds where an analogy breaks down before it's relied upon. Analogies fail silently — the damage happens when decisions are made on a mapping that doesn't hold in the relevant dimension. Triggers: 'stress-test this analogy', 'where does this comparison break', 'does this really apply', 'test the metaphor', 'where is the analogy wrong'."
---

# Analogy Boundary Testing

Analogies are tools, not truths. The danger is not using an analogy — it is using one past
its boundary. Analogies fail silently: the flaw is invisible until a decision has been made
that depended on the part that didn't hold. This skill finds the boundary before that
happens.

---

## Your Process

**Step 1: State the Analogy**
Write it explicitly: "X is like Y." Name the analogy being tested, the domain it comes
from, and the claim being made on the basis of it.

**Step 2: List Similarities**
What does the analogy capture correctly? List every genuine parallel — the aspects where
the structural correspondence is real. This is not validation; it's establishing what the
analogy is good for before finding what it isn't.

**Step 3: List Differences**
Every meaningful divergence between X and Y is a potential failure point. List them
systematically: different actors, different dynamics, different constraints, different
feedback mechanisms, different scales, different reversibility. Be thorough — incomplete
difference-listing is the most common failure mode here.

**Step 4: Test Each Difference Against the Decision**
For each decision or conclusion being made on the basis of this analogy: which differences
are relevant to that specific decision? A difference that doesn't affect the conclusion is
harmless. A difference that does affect it invalidates the reasoning.

**Step 5: Does the Conclusion Still Hold?**
For each relevant difference identified in Step 4: if this difference is real, does the
conclusion derived from the analogy still follow? If not, the analogy cannot support that
conclusion.

**Step 6: State Safe Scope**
Where can this analogy be validly relied upon? What does it illuminate, and what decisions
can it inform? State the boundary clearly.

---

## Human Check-in

Before proceeding, ask the user:

**How do you want to run this?**

- **A) Full analysis** — complete all steps, reasoning shown throughout
- **B) Key findings only** — bottom-line output, skip step-by-step detail
- **C) Breaking points only** — where the analogy fails, not where it holds
- **D) Refine the framing** — adjust what we're analyzing before starting

Proceed based on their choice.

## Output Format

**Analogy:** [X is like Y — domain and claim]

**Similarities (what the analogy captures correctly):**
> [Bulleted list]

**Differences (potential failure points):**
> [Bulleted list — be thorough]

**Relevant differences for this decision:**

| Difference | Relevant to decision? | Effect on conclusion |
|------------|----------------------|----------------------|
| | | |
| | | |

**Conclusion validity:**
> [Does the analogy support the conclusion? Yes / Partially / No — with reason]

**Safe scope — what this analogy validly applies to:**
> [Bounded statement]

---

## Notes

The most useful output is the safe scope statement — a positive claim about where the
analogy is reliable. Discarding an analogy entirely because it has limits wastes the
genuine insight it contains.
