---
name: decision-criteria-weighting
description: "Runs a weighted multi-criteria analysis — making explicit what matters, how much, and how each option performs against it. Triggers: 'weighted decision matrix', 'multi-criteria analysis', 'help me choose between', 'compare these options', 'decision matrix'."
---

# Decision Criteria Weighting

Intuitive decisions fail when too many criteria are in play and their relative importance
isn't made explicit. This skill forces that explicitness. The goal is not to replace
judgment — it is to make the judgment visible enough to inspect, challenge, and defend.

---

## Your Process

**Step 1: State the Decision and List Real Options**
Name the decision. List the actual options being considered — not aspirational ones. If an
option isn't genuinely available, remove it before it contaminates the analysis.

**Step 2: Identify 4-8 Criteria**
Name the criteria that define a good outcome for this specific decision. Criteria should
be independent (not measuring the same thing twice), observable (you can score against
them), and genuinely relevant (removing one would change the analysis).

**Step 3: Weight the Criteria**
Distribute exactly 100 points across the criteria. This forces trade-offs — you cannot
weight everything highly. If everything matters equally, the distribution reveals a
failure to think through what actually matters most.

**Step 4: Score Each Option**
Score each option on each criterion from 1 to 5. Do this before calculating totals — the
sequence matters. Scoring after you see where things are headed is reverse-engineering to
confirm a preference, which defeats the exercise.

**Step 5: Calculate Weighted Scores**
Weighted score = sum of (weight × score) for each criterion. Calculate for all options.

**Step 6: Sense-Check**
If the math agrees with your intuition, good. If it disagrees, investigate: is the
intuition catching something the criteria missed, or is the intuition rationalising a
preference? Either is possible. Don't dismiss either.

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool:

- **Question:** "How do you want to run this?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **Weights only** — Establish criteria priorities before scoring any options
  - **Refine the framing** — Adjust what we're analyzing before starting

Proceed based on their selection.

## Output Format

**Decision:** [Statement]

**Criteria and weights:**

| Criterion | Weight (total = 100) |
|-----------|----------------------|
| | |

**Scored matrix:**

| Option | [Criterion 1] (×W) | [Criterion 2] (×W) | ... | Weighted Total |
|--------|-------------------|-------------------|-----|----------------|
| | | | | |
| | | | | |

**Sense-check:**
> [Does the result match intuition? If not — what is the intuition picking up that the
> matrix doesn't capture, or what is the intuition getting wrong?]

**Recommendation:**
> [Option name] — [one sentence rationale]

---

## Notes

The value of this exercise is in the weighting step, not the scoring. Most decision
disagreements are disagreements about what matters, not about how options perform.
Making weights explicit moves the conversation to the right place.

---

## What's Next

After delivering this output, use `AskUserQuestion` to offer the next move:

- **Question:** "Criteria weighted and options ranked. What's next?"
- **Header:** "Next"
- **Options:**
  - `/decision-premortem-analysis` — Stress-test the winning option before committing
  - `/decision-reversibility-analysis` — Assess how reversible the top option is
  - `/ethics-check` — Check whether the top option is ethically sound
  - **Done** — Wrap up and synthesise what we have so far
