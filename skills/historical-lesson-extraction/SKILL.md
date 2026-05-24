---
name: historical-lesson-extraction
description: "Extracts the transferable principle from a specific historical case — separating the contingent surface details from the underlying rule that applies across contexts. TRIGGERS: 'what's the lesson', 'extract the lesson', 'what should we learn from this', 'generalise from this case', 'apply this to our situation'."
---

# Historical Lesson Extraction

Every case contains multiple lessons. Most people extract the wrong one — the surface
action rather than the underlying principle. "They moved fast" is not a lesson. "Speed
of iteration was decisive because the cost of a wrong assumption exceeded the cost of
an incomplete product, making information the binding constraint" is a lesson. This
skill separates what happened from why it happened, and from that derives a principle
that transfers to contexts the original case never anticipated.

---

## Your Process

**Step 1: Describe the Case**
What happened? Who was involved, what decisions were made, what were the outcomes?
Provide enough specifics to work with — the analysis depends on the case having real
texture, not just a summary.

**Step 2: Surface Events**
What happened at the observable level — the actions taken, the decisions made, the
sequence of events from beginning to outcome? Keep this purely descriptive. No
interpretation, no causation claims yet. Just what an observer would have recorded.

**Step 3: Underlying Dynamics**
Why did this happen? What forces, incentives, constraints, beliefs, or structural
conditions drove the observable events? Ask: what would have had to be different for
the outcome to change? The answer identifies the causal variables.

**Step 4: Abstract the Principle**
Strip away names, technologies, industries, time period, and geographic context.
What is the underlying rule this case illustrates? State it as a transferable
principle: "When [conditions], [variable] tends to produce [outcome] — because
[mechanism]." The mechanism is the crucial part — without it the principle can't
be tested or applied intelligently.

**Step 5: Test Transferability**
Under what conditions does this principle apply? List the conditions required. Then
assess whether those conditions hold in the current situation. Where they hold, the
principle transfers. Where they differ significantly, it may not — or may apply
with modification.

**Step 6: Apply with Caveats**
How does the principle apply specifically to the current situation? What would acting
on it look like concretely? Name the caveats explicitly — the conditions under which
this principle would give the wrong answer.

---

## Human Check-in

Before proceeding, ask the user:

**How do you want to run this?**

- **A) Full analysis** — complete all steps, reasoning shown throughout
- **B) Key findings only** — bottom-line output, skip step-by-step detail
- **C) Transferable principle only** — the single insight most applicable to the current situation
- **D) Refine the framing** — adjust what we're analyzing before starting

Proceed based on their choice.

## Output Format

**Case:** [specific description — enough detail to work with]

**Surface Events:** [what happened, in sequence, descriptively]

**Underlying Dynamics:** [why it happened — the forces and mechanisms that drove
the outcome]

**Abstract Principle:** [the transferable rule, stated without domain-specific
language, including the mechanism]

**Transferability Assessment**

| Required Condition | Present in Current Situation? | Notes |
|---|---|---|
| [condition the principle requires] | [yes / no / partially] | [specific observation] |

**Application:** [how the principle applies to the current situation — what it implies
concretely]

**Caveats:** [conditions under which this principle would mislead]

---

## Notes

The principle is wrong if it only describes the original case. Test it against three
other cases in different domains — if it doesn't transfer, it's a description, not a
principle. Keep abstracting until it does. The mechanism is the hardest and most
important element: a principle without a mechanism is an observation, not a lesson.
