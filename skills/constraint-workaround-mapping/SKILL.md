---
name: constraint-workaround-mapping
description: "Finds paths around a fixed constraint without removing it — routing around a hard limit to reach the same goal. Triggers: 'work around this', 'given this constraint', 'path around the blocker', 'how do we do this anyway', 'constrained solution'."
---

# Constraint Workaround Mapping

Some constraints are real and cannot be inverted or removed. The question then is not how
to eliminate the constraint, but how to route around it to the same destination. A workaround
is not a compromise — it is a valid path that respects a real limit while still delivering
the outcome.

---

## Your Process

**Step 1: State the Constraint and Confirm It's Hard**
Write the constraint. Then confirm: is this actually fixed? A truly hard constraint has a
concrete source — law, technical impossibility, signed contract. If the source is unclear,
use constraint-hardness-testing first.

**Step 2: Map the Exact Boundary**
What does this constraint specifically prevent? What does it explicitly not prevent? Most
constraints are narrower than they appear. Mapping the boundary precisely reveals the space
around it.

**Step 3: List All Paths Blocked**
Enumerate every approach to the goal that the constraint forecloses. Be thorough — you are
building a map of what's off the table.

**Step 4: Find Adjacent Paths**
For each blocked path: is there an adjacent path that reaches the same goal without crossing
the constraint? Adjacent means achieving the same underlying outcome through a different
mechanism — not a lesser outcome through the same mechanism.

**Step 5: Generate 3-5 Workarounds with Cost**
For each viable adjacent path, state the cost relative to the direct approach: additional
time, complexity, dependency, quality reduction, or reversibility loss.

**Step 6: Select Best Cost/Benefit**
Choose the workaround where the cost is lowest relative to the outcome achieved. If all
workarounds are too costly, the right answer may be to re-examine the goal.

---

## Output Format

**Constraint:**
> [Statement + source confirming it's hard]

**Constraint boundary:**
- Blocks: [what it prevents]
- Does not block: [what remains available]

**Blocked paths:**
> [Bulleted list]

**Workarounds:**

| # | Path | How it reaches the goal | Cost vs direct path |
|---|------|------------------------|---------------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

**Recommended path:**
> [Workaround name] — [rationale for cost/benefit selection]

---

## Notes

The map is only useful if the constraint boundary in Step 2 is drawn accurately. People
regularly assume constraints block more than they do — which is why checking what a
constraint does NOT prevent is as important as what it does.
