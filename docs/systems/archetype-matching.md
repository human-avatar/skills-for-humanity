# systems-archetype-matching

> Identifies which recurring system pattern this situation is an instance of.

**Trigger:** `/systems-archetype-matching`

---

## What it does

Matches a situation against the common system archetypes (Limits to Growth, Shifting the Burden, Fixes that Fail, Escalation, Tragedy of the Commons, etc.) and identifies which archetype is active. Once named, the archetype predicts what happens next and where the leverage lies.

---

## When to use

- "This feels like a pattern I've seen before"
- Interventions keep producing the same result despite good intentions
- A situation has a familiar-feeling dynamic that you can't quite name
- "Why does this keep happening?"

---

## Example

**Input:**
> We keep adding process to fix quality problems. Each process addition seems logical. But the team is slowing down, quality hasn't improved, and people are increasingly frustrated. What's the pattern?

**Output:**

**Archetype identified: Fixes that Fail / Shifting the Burden**

This situation matches two overlapping archetypes:

**Fixes that Fail:** A problem symptom triggers an intervention. The intervention produces short-term improvement but has a delayed side effect that worsens the original problem, triggering more intervention. The cycle continues.

Applied: Quality problem → add process (review step, approval gate, checklist) → short-term quality improvement → but: process adds overhead, slows the feedback loop, increases cognitive load → quality of work declines due to reduced time and energy → add more process → repeat.

**Shifting the Burden:** A symptomatic fix is easier than the fundamental fix. The symptomatic fix is repeatedly applied. The fundamental fix gets less attention over time. The system's ability to find the fundamental fix atrophies.

Applied: The fundamental fix (build quality in from the beginning — through better engineering practices, clearer requirements, adequate time) requires cultural and capability change. The symptomatic fix (add a review gate) is faster and visible. Each process addition reduces the pressure to do the harder fundamental work.

**What the archetype predicts:**
More process additions will continue. Each will produce temporary improvement. Velocity will keep declining. At some point, the process overhead becomes so severe that either the process collapses or the team does.

**Where the leverage is:**
The archetype points to the fundamental fix that's being bypassed: invest in engineering practices that prevent the quality problem rather than catching it after. This is higher leverage but higher difficulty. The practical entry point is identifying the top three root causes of the quality problems (not symptoms) and addressing those directly, while explicitly reducing one process step for every quality improvement delivered.
