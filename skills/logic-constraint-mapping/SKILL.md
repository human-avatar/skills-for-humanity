---
name: logic-constraint-mapping
description: "Map the full constraint landscape for a decision, design, or plan — distinguishing hard limits from soft preferences, surfacing hidden constraints, and finding conflicts between them. Use before committing to an approach, when a plan keeps hitting unexpected walls, or when it's unclear what's actually negotiable. TRIGGERS: 'map the constraints', 'what are we actually working with', 'what's blocking this', 'what can we change', 'constraint analysis', any situation where the boundaries of what's possible need to be understood before proceeding."
---

# Logic Constraint Mapping

Every decision happens inside a constraint space. Some limits are real and fixed. Others feel fixed but aren't. And some constraints conflict with each other in ways nobody has named yet.

The map makes that space visible — so you're solving the actual problem, not a version of it you've accidentally invented by treating assumptions as facts.

---

## Types of Constraints

**Hard constraints** — cannot be violated without abandoning the goal entirely. Physical laws, legal requirements, contractual obligations, irreversible dependencies.

**Soft constraints** — strong preferences or defaults that can be negotiated under sufficient pressure. Budget, timeline, team size, technology choices, organisational preferences.

**Hidden constraints** — not explicitly stated, but load-bearing. Discovered when violated. Often cultural, political, or architectural. The most dangerous kind.

**Conflicting constraints** — two constraints that cannot both be fully satisfied. Require a conscious trade-off decision rather than a solution.

---

## Your Process

**Step 1: Extract stated constraints**
What limits have been explicitly named? Separate:
- Stated as hard: "must", "cannot", "required", "non-negotiable"
- Stated as soft: "should", "prefer", "ideally", "target"
- Implied but unstated: present in the problem framing without being declared

**Framing check:** Confirm the specific constraint landscape before continuing. State what you've identified — the decision or plan being constrained and its primary goal — in one sentence, then use `AskUserQuestion`:
- **Question:** "I'm reading this as: [your one-sentence framing of the specific decision or plan and what it's trying to achieve]. Is that right?"
- **Header:** "Framing"
- **Options:**
  - **Yes — proceed** — framing is correct
  - **Adjust** — one element is off; user will correct it before you continue
  - **Reframe** — different situation than read; incorporate the correction before proceeding

**Step 2: Test each constraint's hardness**
For every constraint labelled hard, ask: *what would actually happen if we violated it?*
- Legal/regulatory: real hard — violation has defined consequences
- Budget/timeline: often softer than declared — the consequence is negotiation, not failure
- Technical: depends on reversibility — changing a database schema is hard; changing a variable name is not
- Organisational: often the softest of all, disguised as the hardest

Reclassify where the test shows the constraint is softer than claimed.

**Step 3: Surface hidden constraints**
Ask:
- What would break if we changed X? (reveals architectural constraints)
- Who has to approve this? (reveals political constraints)
- What can't we undo once we start? (reveals irreversibility constraints)
- What are we assuming about the environment that isn't guaranteed? (reveals dependency constraints)

**Step 4: Find constraint conflicts**
With the full map laid out, which constraints cannot all be satisfied simultaneously?
- Time vs quality vs scope (the classic three)
- Flexibility vs stability (don't break the API vs let it evolve)
- Performance vs cost
- Security vs usability

For each conflict: name what's being traded off and who decides.

**Step 5: Identify the degrees of freedom**
What's genuinely open? After removing hard and near-hard constraints, what remains movable? This is where the actual solution space lives.

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool. State your interpretation of the situation in 1–2 sentences — what is being analyzed and what the core question is — then ask:

- **Question:** "My read: [your 1–2 sentence interpretation]. How do you want to proceed?"
- **Header:** "Scope"
- **Options:**
  - **Full analysis** — Complete all steps, reasoning shown throughout
  - **Key findings only** — Bottom-line output, skip step-by-step detail
  - **Hard constraints only** — Identify which limits are truly non-negotiable, skip soft and assumed
  - **Reframe** — The read is off; correct it and the analysis will follow the corrected framing

Proceed based on their selection. If the user reframes, incorporate the correction before running any analysis.

## Output Format

**Context:** [what decision or plan this constraint map is for]

**Constraint Inventory**

| Constraint | Type | Hardness | Source |
|---|---|---|---|
| [constraint] | Limit / Preference / Hidden | Hard / Soft / Unknown | [who imposed it, why] |

**Hardness Reassessments**
- [constraint stated as hard] → actually [softer] because [reason]

**Hidden Constraints Found**
- [constraint]: [what revealed it; what it blocks]

**Conflicts**
| Constraint A | Constraint B | Trade-off | Owner |
|---|---|---|---|
| [A] | [B] | [what gives if you prioritise A; what gives if you prioritise B] | [who decides] |

**Degrees of Freedom**
[What is genuinely negotiable; where the real solution space is]

---

## Notes

The value of this map is not finding solutions — it's establishing ground truth about what's actually fixed before committing to an approach. A constraint map produced before design prevents the common failure mode: a clever solution that satisfies stated requirements while violating an unstated one that everyone assumed was obvious.

---

## What's Next

After delivering this output, use `AskUserQuestion` to offer the next move:

- **Question:** "Constraints mapped. What's next?"
- **Header:** "Next"
- **Options:**
  - `/constraint-hardness-testing` — Test which mapped constraints are real vs assumed
  - `/constraint-workaround-mapping` — Find routes around the binding constraints
  - `/decision-option-mapping` — See what decision options remain given the constraints
  - **Done** — Wrap up and synthesise what we have so far
