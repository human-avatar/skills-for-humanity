# cognition-mental-models

> Make the implicit model explicit — then test it against reality before it costs you.

**Trigger:** `/s4h-cognition-mental-models`

---

## What it does

Surfaces the internal representations that drive perception and decision-making, then audits them for accuracy. Rooted in Philip Johnson-Laird's model theory — which showed that human reasoning operates through internal simulations of situations, not formal logic — this skill extracts the entities, relationships, and dynamics of the model currently in use, identifies its assumptions, tests those assumptions against available evidence, and constructs a more accurate replacement. The goal is to make the model visible before it causes the next mistake.

---

## When to use

- "I keep being surprised by how this situation develops — I must be missing something."
- "I think I have the wrong mental model for this organisation / this market / this person."
- A strategy or plan keeps failing in the same unexpected way
- "What assumptions am I making that I'm not aware of?"
- You're inheriting a domain from someone else and need to understand how they see it

---

## Example

**Input:**
> I'm a new engineering manager. My mental model of good management has always been: protect the team's time, remove blockers, let talented people do their best work. I thought that was the job. But I'm six months in and things feel off — the team seems uncertain, misaligned, projects slip, people are asking questions I thought they'd just figure out. My model must be wrong somehow.

**Output:**

**Current Model (Explicit)**
- **Entities:** Manager, individual engineers, blockers, external stakeholders, work
- **Relationships:** Manager protects engineers from interruption and blockers; engineers produce work; manager facilitates, doesn't direct
- **Dynamics:** The better the protection from interference, the higher the output quality. The manager's value is proportional to interruption removed.

**Assumption Audit**

| Assumption | Supported by | Contradicted by | Status |
|---|---|---|---|
| Engineers have sufficient clarity to self-direct | Works well for senior engineers with clear specs | New hires asking basic questions; missed deadlines on ambiguous projects | Partially true, scope-dependent |
| Blockers are primarily external (other teams, process) | Some blockers are genuinely external | Team is citing "unclear direction" as a blocker — internal, not external | Incomplete |
| Manager's value is protective (absence of bad things) | Reduces friction in some contexts | Team uncertainty and misalignment are increasing, not decreasing | Incorrect as the primary model |
| Talented people self-coordinate | Works in small, senior teams with shared context | Projects slipping due to misalignment between engineers on the same team | Fails without shared context and explicit coordination |
| Feedback and direction are micromanagement | Feedback harms autonomy in some cultures | Team is interpreting absence of feedback as uncertainty about performance | Incorrect in this context |

**Gaps:**
- *Direction and context-setting* is entirely absent from the model. The model assumes engineers know what matters and why; it doesn't account for the manager's role in making organisational goals, tradeoffs, and priorities visible.
- *Coordination function*: the model has no mechanism for inter-engineer alignment. It treats each engineer as independent; the actual system has interdependencies.
- *Psychological safety signalling*: the model doesn't include the manager as a source of safety and clarity. In practice, the manager's visible confidence in the team and explicit feedback are load-bearing.

**Distortions:**
- Causal direction on "feedback = micromanagement": the model treats all feedback as autonomy-threatening. In reality, absence of feedback is experienced as uncertainty and indifference, especially by newer engineers.
- Magnitude of "protection" vs. "direction": the model over-weights protection relative to its actual contribution to outcomes. Direction and context are higher-leverage at this team's current state.

**Updated Model**
- **Entities:** Manager, individual engineers (at varying seniority levels), team as a unit, organisational context and priorities, external stakeholders, work
- **Relationships:** Manager provides direction and context (what matters, why, how to make tradeoffs); manager coordinates across engineers to surface and resolve dependencies; manager protects from unnecessary interference; manager actively signals confidence and provides feedback
- **Dynamics:** Output quality depends on clarity of direction, quality of coordination, and quality of individual execution — in roughly that order of leverage. Protection from interference matters but is third-order. Manager value is both protective and generative.

**Practical Implications:**
- Recurring team uncertainty is a direction deficit, not a talent deficit — the response is clearer context-setting, not better hiring
- Missed deadlines due to misalignment call for coordination mechanisms (regular syncs, explicit handoffs), not just blocker removal
- The question to ask in 1:1s shifts from "what's in your way?" to "are you clear on what matters most right now, and does it connect to the team's direction?"

---

## Related skills

- [`/s4h-cognition-metacognition`](metacognition.md) — after updating your model, monitor whether you're applying it accurately in real situations
- [`/s4h-epistemology-justification`](../epistemology/justification.md) — examine whether the updated model's key claims are adequately supported by evidence
- [`/s4h-systems-feedback-mapping`](../systems/feedback-mapping.md) — if the mental model involves a dynamic system, map the feedback loops to make the dynamics precise
