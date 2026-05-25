---
name: constraint-rule-inversion
description: "Flips a constraint into a creative driver — uses the limit as the generative force rather than working around it. Triggers: 'invert the constraint', 'use the limitation', 'constraint as feature', 'what if this limit was the requirement'."
---

# Constraint Rule Inversion

Most constraints are treated as walls. This skill treats them as foundations. The limit that
seems like an obstacle is often the thing that forces the insight — the moment you stop
trying to work around it and start designing with it, better solutions appear.

---

## Your Process

**Step 1: Name the Constraint Precisely**
State the constraint in a single, unambiguous sentence. Vague constraints produce vague
inversions. "We have no budget" is too loose. "We have $0 for external tooling for Q3" is
something you can work with.

**Step 2: Ask What the Constraint Forces**
What does this constraint make you do that you'd otherwise avoid? What comfortable defaults
does it eliminate? The constraint is doing work — what work?

**Step 3: Invert — Restate as a Design Requirement**
Convert the limit into a positive requirement: "must cost nothing" becomes "must work with
only what we already have." The constraint is now the spec, not the problem.

**Step 4: Generate Solutions That Only Work Because of the Constraint**
Produce 3-5 solutions that are impossible or inferior without the constraint. These are not
workarounds — they are solutions the constraint made visible.

**Step 5: Select for Unexpected Value**
Pick the solution where the constraint creates the most unexpected advantage — the one that
would not have been found without the limit.

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool:

- **Question:** "How do you want to run this?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **One inversion only** — The single most powerful constraint flip
  - **Refine the framing** — Adjust what we're analyzing before starting

Proceed based on their selection.

## Output Format

**Constraint (precise):**
> [Single sentence, unambiguous]

**Inverted form (as design requirement):**
> [Positive restatement]

**Solutions that use the constraint:**

| # | Solution | Why it requires the constraint | Strength |
|---|----------|-------------------------------|----------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

**Most promising:**
> [Solution name] — [1-2 sentences on why the constraint creates unexpected value here]

---

## Notes

Every analogy breaks somewhere — so does every inversion. If the inverted form produces
solutions that would work equally well without the constraint, the inversion wasn't deep
enough. Go back to Step 2.

---

## What's Next

After delivering this output, use `AskUserQuestion` to offer the next move:

- **Question:** "Rules inverted. What's next?"
- **Header:** "Next"
- **Options:**
  - `/creativity-lateral-thinking` — Use the inverted rules as springboards for lateral moves
  - `/decision-option-mapping` — Map new decision options the inversions open up
  - `/constraint-hardness-testing` — Test whether the inverted rules reveal softer constraints
  - **Done** — Wrap up and synthesise what we have so far
