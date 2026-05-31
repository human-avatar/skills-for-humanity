# social-coalition-mapping

> Maps who needs to be aligned and how to build the coalition a proposal needs to succeed.

**Trigger:** `/s4h-social-coalition-mapping`

---

## What it does

Maps all stakeholders by current position (supporter/neutral/opponent/unknown), identifies the minimum viable coalition for success, finds the path to building it, and surfaces the blockers worth addressing.

---

## When to use

- "Who do I need to get on board?"
- A proposal needs stakeholder support to move
- Political navigation required

---

## Example

**Input:**
> I want to propose moving our entire frontend to TypeScript. Stakeholders include: CTO, Head of Frontend Engineering, two senior frontend engineers, QA lead, product manager, and one backend-focused VP. Map the coalition I need and how to build it.

**Output:**

**Stakeholder map:**

| Stakeholder | Likely Position | Basis |
|---|---|---|
| CTO | Unknown → probably supportive | TypeScript adoption is a mainstream engineering best practice; most CTOs see it favorably |
| Head of Frontend Engineering | Key — unknown | This is their domain; the proposal succeeds or fails with their support |
| Senior Frontend Engineer A | Unknown | Will follow the Head's lead unless they have strong opinions |
| Senior Frontend Engineer B | Unknown | Same |
| QA Lead | Likely neutral-positive | TypeScript reduces a class of runtime errors that QA catches |
| Product Manager | Likely neutral | Cares about shipping speed, not tech choices; may be worried about migration slowdown |
| Backend VP | Likely neutral | Outside their domain; no strong position either way |

**Minimum viable coalition:**

You need: Head of Frontend Engineering + CTO (or tacit non-opposition). Everything else follows.

If the Head of Frontend is opposed, this doesn't move regardless of CTO support — it's their domain and their team. If both support it, the rest of the stakeholders will align.

**Path to building it:**

**Step 1 — Win the Head of Frontend first, before talking to anyone else.**
Schedule a 1:1. Ask for their honest take. If they have concerns (migration effort, team capability, existing codebase), listen without defending. Their buy-in needs to be genuine, not coerced — they'll need to champion this with their team.

If they're supportive: proceed to the CTO with the Head's endorsement explicitly stated.

If they're skeptical: address their specific concerns before escalating. Proposing over their head without their support will create a lasting problem.

**Step 2 — CTO briefing (after Head of Frontend is on board).**
Brief framing: "Head of Frontend and I have aligned on a TypeScript migration proposal. Would like your perspective before we formalize it." This positions the CTO as a reviewer, not a decision-arbiter, and ensures the Head gets credit.

**Step 3 — Address the PM's velocity concern proactively.**
Product managers need to know: how much does this slow down feature shipping, and for how long? Have a specific answer. "The migration will take X weeks, after which TypeScript's type safety should reduce debugging time by Y." Without a specific answer, PM concern becomes passive resistance.

**Blocker to address:**
The only real blocker is Head of Frontend skepticism. Everything else is manageable.
