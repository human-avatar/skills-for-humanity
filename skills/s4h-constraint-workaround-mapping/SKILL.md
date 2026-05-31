---
name: s4h-constraint-workaround-mapping
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

**Framing check:** Confirm the specific constraint and the goal it is blocking before continuing. State what you've identified — the actual constraint and the outcome the user is trying to reach — in one sentence, then use `AskUserQuestion`:
- **Question:** "I'm reading this as: [your one-sentence framing of the constraint and the goal it is blocking]. Is that right?"
- **Header:** "Framing"
- **Options:**
  - **Yes — proceed** — framing is correct
  - **Adjust** — one element is off; user will correct it before you continue
  - **Reframe** — different situation than read; incorporate the correction before proceeding

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
**Before narrowing:** Show the complete set of adjacent paths identified in Step 4 to the user first. Use `AskUserQuestion`:
- **Question:** "I've identified [N] adjacent paths. Before I select the most feasible workarounds, are there any you'd flag as especially important, or any I've missed?"
- **Header:** "Prioritise"
- **Options:**
  - **Proceed with your selection** — the set looks right
  - **Flag one** — user will name a specific path to include
  - **Add a missing one** — user will describe it

For each viable adjacent path, state the cost relative to the direct approach: additional
time, complexity, dependency, quality reduction, or reversibility loss.

**Step 6: Select Best Cost/Benefit**
Choose the workaround where the cost is lowest relative to the outcome achieved. If all
workarounds are too costly, the right answer may be to re-examine the goal.

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool. State your interpretation of the situation in 1–2 sentences — what is being analyzed and what the core question is — then ask:

- **Question:** "My read: [your 1–2 sentence interpretation]. How do you want to proceed?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **Two best workarounds only** — Highest-feasibility paths around the constraint
  - **Reframe** — The read is off; correct it and the analysis will follow the corrected framing

Proceed based on their selection. If the user reframes, incorporate the correction before running any analysis.

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

---

## What's Next

After delivering this output, use `AskUserQuestion` to offer the next move:

- **Question:** "Workarounds mapped. What's next?"
- **Header:** "Next"
- **Options:**
  - `/s4h-decision-option-mapping` — Map decision options using the available workarounds
  - `/s4h-logic-check` — Validate the logic of the proposed workarounds
  - `/s4h-decision-premortem-analysis` — Stress-test each workaround before committing
  - **Done** — Wrap up and synthesise what we have so far
