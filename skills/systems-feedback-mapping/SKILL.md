---
name: systems-feedback-mapping
description: "Identifies all reinforcing (+) and balancing (−) feedback loops in a system. Use when asked to 'map the feedback loops', 'why does this keep happening', 'unintended consequences', or 'system keeps oscillating'."
---

# Systems Feedback Mapping

Most system failures come from unrecognized feedback loops — especially delayed balancing loops that cause overshoot and collapse. Reinforcing loops amplify change in one direction; balancing loops push back toward a target. Until both types are visible and named, diagnosis and intervention are guesswork.

---

## Your Process

**Step 1: Define System Boundary**
State what is inside the system and what is outside it. Name the time horizon and the key behavior to explain (growth, oscillation, collapse, stagnation).

**Step 2: List Key Variables**
Identify 5–10 variables that change over time and drive the behavior in question. These are stocks (levels that accumulate) or flows (rates of change). Be specific — "customer trust" not "sentiment".

**Step 3: Map Causal Links**
For each variable pair where a relationship exists: does A increasing cause B to increase (same direction, +) or decrease (opposite direction, −)? Mark the polarity of each link.

**Step 4: Trace Loops**
Follow causal chains until they close back on themselves. Count the number of negative (−) links in the loop. Even number of negatives = reinforcing loop (R). Odd number = balancing loop (B). Name each loop.

**Step 5: Mark Delays**
Identify where cause is separated from effect in time. Delays are the primary source of oscillation and overshoot — a balancing loop with a long delay will overcorrect.

**Step 6: Identify the Dominant Loop**
Which loop is currently driving system behavior? The dominant loop changes as conditions change — map the transition conditions.

---

## Output Format

**System Boundary:** [scope + time horizon + behavior to explain]

**Feedback Loop Table**

| Loop Name | Type (R/B) | Variables in Loop | Delay? | Current Strength |
|-----------|-----------|-------------------|--------|-----------------|
| | | | | |

**Dominant Loop:** [name] — [what behavior it produces]

**Delay Risks:** [which delays are creating overshoot or oscillation]

**What This Predicts:** [expected system behavior if current structure holds]

---

## Notes

Loops are not permanent — the dominant loop shifts as variables hit limits or thresholds. Map the transition condition that would shift dominance from one loop to another.
