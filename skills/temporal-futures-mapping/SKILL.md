---
name: temporal-futures-mapping
description: "Explores possible, probable, and preferable futures using scenario thinking. Use when asked about 'scenario planning', 'futures thinking', 'possible futures', 'how might this play out', 'futures cone', or 'what could happen'."
---

# Temporal Futures Mapping

The future is not a single path — it is a cone of possibilities that narrows as time passes and choices are made. Scenario thinking does not predict the future; it maps the cone so that plans can be tested against multiple plausible worlds rather than a single assumed one. Plans that only work in one scenario are fragile. Plans robust across several are resilient.

---

## Your Process

**Step 1: Define Time Horizon and Decision Context**
State the specific decision or question being stress-tested and the time horizon (1 year, 5 years, 10 years). The scenarios must be built around a decision, not just as general futures.

**Step 2: Identify Key Uncertainties**
Find the 2–3 variables that most shape outcomes but are least predictable. These are the axes along which scenarios diverge. Avoid certainties (they are part of all scenarios) and avoid trivialities (they don't change much).

**Step 3: Build 3–4 Distinct Scenarios**
Span the cone — from possible to plausible to probable to preferable. Each scenario should be:
- Named (a vivid name aids recall)
- Described (the world in this future — what is true, who won, what changed)
- Traceable (the path from now to that world — the sequence of events that produced it)

**Step 4: Test Current Plans**
For each scenario: does the current plan work? Does it fail? Does it create new problems? Plans that are robust across all scenarios are high-confidence. Plans that only work in the most optimistic scenario require hedging.

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool:

- **Question:** "How do you want to run this?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **Most probable future only** — Skip possible and preferable variants, focus on what's likely
  - **Refine the framing** — Adjust what we're analyzing before starting

Proceed based on their selection.

## Output Format

**Key Uncertainties:** [the 2–3 variables driving divergence, with their plausible ranges]

**Scenario Table**

| Name | Description | Path to This World | Implications for Current Plan |
|------|-------------|-------------------|------------------------------|
| | | | |

**Robustness Assessment**
- Robust across all scenarios: [what holds]
- Fragile (only works in one scenario): [what is at risk]
- Hedging required: [where to build optionality]

---

## Notes

Scenarios are not predictions — they are structured hypotheses. The goal is not to determine which will occur but to identify which actions are robust regardless of which occurs.

---

## What's Next

After delivering this output, use `AskUserQuestion` to offer the next move:

- **Question:** "Futures mapped. What's next?"
- **Header:** "Next"
- **Options:**
  - `/temporal-horizon-mapping` — Set time horizons within the futures map
  - `/decision-premortem-analysis` — Run a premortem on the most likely futures
  - `/probability-scenario-weighting` — Weight the futures by probability
  - **Done** — Wrap up and synthesise what we have so far
