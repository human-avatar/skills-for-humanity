# psychology-motivation

> Surface vs. root: diagnose what's actually driving behavior beneath the stated reason.

**Trigger:** `/psychology-motivation`

---

## What it does

Diagnoses what's actually driving behavior — a person's own, someone else's, or a group's. Works by distinguishing surface motivation (the stated reason, the obvious explanation) from root motivation (the fundamental need being served). Applies Self-Determination Theory (autonomy, competence, relatedness), Maslow as a diagnostic for lower-order unmet needs, and the identity dimension to surface the real driver and identify the lever that addresses it.

---

## When to use

- A person or team keeps doing something that doesn't make sense given their stated goals
- An incentive or intervention that should have worked isn't moving the needle
- You need to understand what someone actually wants before designing a change, pitch, or policy
- Someone is resistant or disengaged in a way that can't be explained by the obvious factors
- "Why won't they just..." — when behavior that seems irrational keeps recurring

## When *not* to use

- The behavior is a rational response to poorly designed incentives → [social-incentive-analysis](../social/incentive-analysis.md) or [game-theory-mechanism-design](../game-theory/mechanism-design.md) (if the system is broken, fix the system)
- The question is about feeling states, not what's driving behavior → [emotional](../emotional/) (emotion tools address the texture of experience; motivation tools address the direction of action)

The nearest-neighbor trap: **motivation is not the same as persuasion.** Understanding what drives someone tells you the target; persuasion is the approach. Motivation diagnosis should precede persuasion design — you're likely to choose the wrong influence approach if you haven't diagnosed what the person actually needs. When someone isn't persuaded by what should be a compelling argument, the usual reason is that the argument addressed the stated interest, not the root motivation.

---

## Example

**Input:**
> I manage a senior engineer who's technically excellent but has been disengaged for about six months. They still hit their deliverables but stopped contributing in design discussions, stopped mentoring junior engineers (which they used to do voluntarily), and have declined two opportunities to lead new projects. When I asked directly, they said everything's fine and they're just heads-down on current work. What's actually going on?

**Output:**

### Behavior Observed
Technically excellent senior engineer who has stopped contributing voluntarily beyond their assigned deliverables: absent from design discussions, no longer mentoring juniors, declined two leadership opportunities.

### Surface Motivation
"Just heads-down on current work" — the stated reason implies time constraint or prioritization. This is almost certainly incomplete: disengagement that broad and that sustained is not explained by a temporary workload spike.

### Root Motivation

**SDT lens:** The pattern most strongly suggests an **autonomy** or **competence** wound. The breadth of the withdrawal is notable — it's not that one type of work is being avoided; it's that all voluntary contribution has stopped. Voluntary contribution (mentoring, design input, taking on leadership) is behavior driven by intrinsic motivation. When it stops, the question is what happened to that intrinsic motivation.

Two candidate mechanisms: (1) **Autonomy threat** — a decision was made about their work, their scope, or their career trajectory that they disagreed with but couldn't change. They're compliant but no longer invested. Voluntary contribution requires caring about the outcome; if they feel their input doesn't shape decisions, there's no reason to give it. (2) **Competence threat** — something made them doubt their effectiveness or standing. The leadership opportunity declines are relevant here: declining twice suggests something about those opportunities specifically, or about how they see their trajectory, is uncomfortable.

**Maslow scan:** No obvious safety-level need is unmet (still hitting deliverables, presumably still employed). But belonging may be in question — if they felt excluded from or bypassed on a significant decision, that's a belonging signal.

**Identity dimension:** Senior engineers who mentor voluntarily and take on leadership typically hold an identity as "someone who shapes how this team works." If they've stopped, something threatened or delegitimized that identity. The question to probe: was there a moment where their judgment was overridden, their design input was ignored, or they were passed over for something?

### What's Actually Needed
If the diagnosis is correct, they need evidence that their contribution shapes outcomes — not affirmation that they're valued (that won't move the needle), but genuine experience of their input making a difference. Asking them back into design discussions won't work if the dynamic that led to withdrawal is unchanged. The real target is whatever specific incident broke the feedback loop between their contribution and visible impact.

### The Lever
Find and name the specific incident: "Six months ago, was there anything that landed badly or felt like a mismatch between what you expected and what happened?" The conversation needs to surface the specific rupture, not the general mood. Once identified, the fix is specific too — probably about scope, decision rights, or credit for a particular piece of work — not a general re-engagement campaign.

---

## Related skills

- [psychology-cognitive-biases](cognitive-biases.md) — when motivated reasoning is also distorting judgment (the person has a stake in the conclusion)
- [psychology-behavior-change](behavior-change.md) — when the goal is to shift behavior once you understand what's driving it
- [psychology-persuasion](persuasion.md) — when you need to influence after diagnosing the motivation
- [emotional-motivation-mapping](../emotional/motivation-mapping.md) — for mapping emotional drivers of action
- [identity-values-clarification](../identity/values-clarification.md) — when the root motivation is identity-level
