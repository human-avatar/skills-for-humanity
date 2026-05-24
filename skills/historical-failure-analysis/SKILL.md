---
name: historical-failure-analysis
description: "Extracts recurring failure modes from similar past situations — most failures have happened before in recognisable patterns. TRIGGERS: 'what usually goes wrong', 'failure pattern analysis', 'how do these typically fail', 'what went wrong last time', 'avoid past mistakes'."
---

# Historical Failure Analysis

Post-mortems reveal the same failure modes repeating across organisations, industries,
and eras. Execution failure at handoff. Stakeholder misalignment discovered too late.
Scope expansion under pressure that destroys the original design. Underestimated
dependencies that required other things to change first. The failure modes aren't a
mystery — they just don't get applied prospectively. This skill does that: surfaces
which patterns are present now, before they become post-mortem findings.

---

## Your Process

**Step 1: Describe the Type of Endeavour**
What kind of thing is this? A product launch, an organisational transformation, a
technology implementation, a partnership negotiation, a strategic pivot, a scaling
operation. Describe it in type terms — this determines which failure mode library
to draw from.

**Step 2: Identify Common Failure Modes for This Type**
What do post-mortems and retrospectives reveal about this category? Draw from known
patterns:
- **Underestimated dependencies** — other things had to change first (systems,
  processes, people, culture) that weren't included in the plan
- **Stakeholder misalignment discovered late** — different parties had different
  success criteria never surfaced and reconciled before execution
- **Scope expansion under pressure** — original constraints abandoned to satisfy
  requests; produces a thing that does everything adequately and nothing well
- **Execution failure at handoff** — clear plan, unclear ownership across transition
  points where accountability transfers
- **Context assumption failure** — the plan was designed for conditions that changed
  before or during execution
- **Resource attrition** — key people, budget, or attention lost before the
  initiative reached self-sustaining momentum
- **Feedback loop absence** — no early signal mechanism to detect problems while
  correction was still possible

**Step 3: Test Each Against the Current Situation**
For each failure mode: is it present in current conditions? What are the specific
early warning signs that would indicate it is activating? Be concrete — not
"stakeholder misalignment might occur" but the specific evidence of it that is or
isn't visible right now.

**Step 4: Rank by Probability Times Impact**
Which failure modes pose the greatest risk given both their likelihood in this
specific situation and their consequence if they occur? Use H/M/L ratings for each
dimension. Priority is the product — a medium-probability, high-impact failure mode
outranks a high-probability, low-impact one.

**Step 5: Pre-emptive Actions for the Top Three**
For the top 3 by probability × impact: what specific action taken now — before the
failure mode activates — would reduce its probability or limit its damage?

---

## Output Format

**Failure Mode Table**

| Failure Mode | Typical Cause | Early Warning Signs | Present? | Probability | Impact | Priority |
|---|---|---|---|---|---|---|
| [mode name] | [root cause] | [observable signals] | [Y/N/partial] | [H/M/L] | [H/M/L] | [rank] |

**Top 3 Failure Modes**

For each of the top 3:
- **Mode:** [name]
- **Why it's high priority here:** [specific reasoning for this situation]
- **Pre-emptive action:** [concrete step, named owner, specific timing]

---

## Notes

The goal is not exhaustive risk listing — a long list produces paralysis, not
prevention. Identify the 2-3 failure modes most likely to be fatal to this specific
endeavour and act on them now. The ones not in the top 3 are worth monitoring but
not worth significant pre-emptive effort.
