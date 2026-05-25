# psychology-behavior-change

> Behavior persists for reasons. Find the reason, design the intervention.

**Trigger:** `/psychology-behavior-change`

---

## What it does

Diagnoses what's maintaining a behavior — habit loop, motivation deficit, capability gap, friction, identity conflict, or social norm — then designs the specific intervention to shift it. Draws on habit loop theory, implementation intentions, the behavior change wheel, environment design, and identity-based change (Atomic Habits). Output is a concrete implementation plan, not a general recommendation.

---

## When to use

- A habit or behavioral pattern persists despite genuine intention to change it
- An org is trying to get consistent behavior adoption (a new process, a new tool, a new practice) and it's not taking hold
- "How do I make this stick?" — after a training, onboarding, or initiative that produced no lasting change
- A person is stuck in a pattern they want to exit but can't seem to
- You're designing an experience (product, onboarding, workplace) and want behavior to be reliable rather than dependent on user willpower

## When *not* to use

- The person doesn't believe the change is worthwhile yet → [psychology-persuasion](persuasion.md) first — behavior change requires some minimum level of motivation to proceed; if that's absent, address it before targeting the behavior directly
- The behavior is a rational response to incentives that reward it → [social-incentive-analysis](../social/incentive-analysis.md) — if the system is rewarding the behavior you want to stop, system redesign comes before individual behavior change

The nearest-neighbor trap: **behavior change is not the same as motivation.** Motivation tells you whether someone wants to change. Behavior change addresses why they can't, even when they do want to. The most common error in behavior change programs is pouring effort into motivation (more training, more comms, more inspiration) when the actual barrier is friction, missing implementation intentions, or an identity conflict that motivation doesn't address. A person who genuinely wants to exercise more but hasn't, and a person who doesn't believe exercise matters, require completely different interventions.

---

## Example

**Input:**
> We rolled out a new incident response process three months ago. Engineers were trained, documentation is solid, the process is genuinely better than what we had before. But when incidents happen, engineers still revert to the old ad-hoc approach — they skip the structured escalation steps, don't use the incident channel, and try to resolve things informally. This has happened in at least eight incidents. Why isn't it sticking?

**Output:**

### Target Behavior
**Following the structured incident response process** — specifically: creating an incident channel, using the structured escalation steps, and logging the response in real time.
**Direction:** Modify — behavior exists (engineers handle incidents) but needs to execute differently (via the new structure, not the old ad-hoc pattern).

### Maintenance Diagnosis
**Primary mechanism: Habit loop**
The old ad-hoc approach is a deeply habituned behavior. The cue is "incident occurring" and the routine is "solve it quickly, inform people informally after." This loop has been reinforced hundreds of times. It's fast, it usually works, and the reward (incident resolved, team informed) comes quickly.

The new process requires engineers to interrupt that loop at the moment of highest stress and cognitive load — exactly when they will default hardest to the habituned behavior. Training covered the steps but didn't change the cue-routine-reward structure.

**Secondary mechanism: Friction**
Opening an incident channel, following the escalation checklist, and logging in real time all add steps *in the moment*. Under incident stress, friction becomes a nearly insurmountable barrier. The old approach has near-zero friction because it's already habituned.

**Secondary mechanism: Identity**
Strong engineers often hold an identity as "someone who solves problems fast." Structured escalation can feel like slowing down to follow a process that implies you can't handle it alone. Eight incidents of reverting suggests some identity-level resistance to the structured approach, particularly among more senior engineers.

### Intervention Design
**Primary intervention: Cue redesign + habit stack**
The new behavior needs a different entry point. Instead of waiting for the incident to cue the old loop, create a new structural cue that interrupts before the old loop activates. Options: (1) automated alert in the incident monitoring system that auto-creates the incident channel when a threshold is hit — removes the decision to create it; (2) on-call rotation includes a "first action is to post in #incidents" as the explicit first step of the rotation handoff, making it habitunal before the incident happens.

**Implementation intention for each engineer:**
"When my monitoring alert fires [or: when I first notice a production issue], I will open the incident channel before touching anything else."

The specificity matters. "I will follow the incident response process" is too abstract; "before touching anything else" creates a concrete sequence that interrupts the old habit before it runs.

**Friction reduction:**
Reduce the process steps that create friction in the moment. If the escalation checklist has seven steps, identify which two are the highest value and make the rest optional at T+0 (completable in post-incident review). A four-step process that engineers actually use beats a seven-step process they skip.

**Identity reframing (for senior engineers specifically):**
Reframe the structured process as the mark of a senior engineer, not a constraint on one: "senior engineers structure the response because they know the real cost of ad-hoc coordination at scale." Get one or two respected senior engineers to articulate publicly that the structured approach is how they think about their role. This is the highest-leverage identity move because it doesn't require changing the identity — it changes which behavior is consistent with the existing identity.

**Relapse plan:**
Post-incident reviews for the next three incidents explicitly include: "Which parts of the process were skipped, and what was the friction point?" This creates a feedback loop that improves the process (reducing friction) and normalizes the expectation of process adherence without shaming.

### First Week
1. Audit the incident response tooling: can the incident channel creation be automated? If yes, implement it this week — this is the single highest-leverage friction reduction.
2. Run a 30-minute session with the on-call rotation to set the implementation intention explicitly: "When you get paged, your first action is X." Write it on the on-call handoff doc.
3. Identify two senior engineers willing to publicly endorse the structured approach as professional practice. Schedule a brief conversation with each.
4. Simplify the escalation checklist to the three non-negotiable steps, with the rest labeled "complete in post-incident review."

---

## Related skills

- [psychology-motivation](motivation.md) — when you need to check whether the motivation for change is actually present before targeting the behavior
- [psychology-persuasion](persuasion.md) — when resistance requires changing beliefs before behavior can shift
- [psychology-cognitive-biases](cognitive-biases.md) — when the barrier to change is partly a cognitive distortion ("we're actually doing fine with the old approach")
- [systems-feedback-mapping](../systems/feedback-mapping.md) — when the behavior is embedded in a system that's reinforcing it
