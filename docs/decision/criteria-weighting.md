# decision-criteria-weighting

> Weighted multi-criteria analysis — makes trade-offs explicit rather than implicit.

**Trigger:** `/s4h-decision-criteria-weighting`

---

## What it does

Builds a weighted decision matrix: identifies what matters, assigns weights, scores each option on each criterion, and calculates a ranked result. Includes a gut-check step — if the numbers and intuition diverge, that gap is information, not a flaw in the method.

---

## When to use

- Comparing multiple options against multiple criteria
- Decision involves stakeholders who weight things differently — need a shared framework
- "Help me choose between X and Y" — when both have genuine strengths
- Want to make the trade-off reasoning visible and documentable

---

## Example

**Input:**
> We're choosing between three data infrastructure vendors: Vendor A (best-in-class features, expensive, complex setup), Vendor B (solid features, mid-range price, good support), Vendor C (limited features, cheapest, our team has experience with it). What should we pick?

**Output:**

**Step 1 — What matters?**

| Criterion | Weight (1–5) | Reasoning |
|---|---|---|
| Engineering effort to implement | 5 | We're at capacity — implementation overhead has direct cost |
| Total cost over 3 years | 4 | Budget constrained; 3-year TCO matters more than year-1 price |
| Feature completeness for current needs | 4 | "Best-in-class" is only valuable for features we actually use |
| Scalability for expected growth | 3 | We'll outgrow our current needs in ~18 months |
| Support quality | 2 | We prefer self-service but incidents need fast resolution |

**Step 2 — Score each option (1–5)**

| Criterion | Weight | Vendor A | Vendor B | Vendor C |
|---|---|---|---|---|
| Engineering effort | 5 | 2 | 3 | 5 |
| 3-year TCO | 4 | 2 | 3 | 5 |
| Feature completeness | 4 | 5 | 4 | 2 |
| Scalability | 3 | 5 | 4 | 2 |
| Support quality | 2 | 3 | 5 | 2 |

**Step 3 — Weighted scores**

| | Vendor A | Vendor B | Vendor C |
|---|---|---|---|
| Engineering effort | 10 | 15 | 25 |
| 3-year TCO | 8 | 12 | 20 |
| Feature completeness | 20 | 16 | 8 |
| Scalability | 15 | 12 | 6 |
| Support quality | 6 | 10 | 4 |
| **Total** | **59** | **65** | **63** |

**Step 4 — Gut check**

Vendor B wins narrowly. Does this match intuition? Probably yes — B represents the "boring but right" choice: solid features, manageable cost, good support, not as exciting as A but not as limited as C.

The interesting finding: Vendor C scores better than expected because engineering effort and TCO are weighted heavily. If those weights dropped (e.g., the team had more capacity), Vendor A would win clearly.

**Recommendation:** Vendor B for the current team capacity and budget constraints. Revisit in 18 months when scalability becomes the dominant criterion — at that point Vendor A may become the right choice.
