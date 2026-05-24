# communication-audience-modeling

> Maps what your audience currently believes, actually cares about, and fears before you communicate.

**Trigger:** `/communication-audience-modeling`

---

## What it does

Builds a model of the audience before communication: current beliefs, real goals, fears, and what they'd need to see to change their mind or take action. Communication fails at the receiver, not the sender.

---

## When to use

- "Why aren't they getting it?"
- About to communicate something important and want to understand the room
- Previous communications to this audience haven't landed

---

## Example

**Input:**
> I'm about to present a proposal to move our infrastructure to the cloud to a group of senior engineers who built and maintain the current on-prem system. How should I think about this audience?

**Output:**

**What they currently believe:**

The on-prem system works. It was built with care, and they understand every part of it. Cloud migration articles they've read emphasize cost overruns, vendor lock-in, and "it seemed simpler than it was." Their mental model of cloud migration is probably weighted toward risk and complexity.

**What they actually care about:**

Not "cloud vs. on-prem" — that's your framing, not theirs. They care about: system reliability (will this increase or decrease incidents?), their own expertise (will they be experts in the new system, or beginners?), and control (will they be able to debug and fix things, or will they be dependent on AWS support tickets?).

There may also be an identity dimension: these are the people who built the current system. Proposing migration implicitly critiques that work.

**What they fear:**

A migration that sounds simpler than it is. Being asked to commit to a timeline they don't control. Losing the deep system knowledge that took years to build. A situation where something breaks in the cloud and they can't fix it at 3am.

**What they'd need to see to support it:**

Not a business case — they don't primarily care about cost. Specifically: (1) evidence that the migration is technically well-designed and not underestimated, (2) a plan for how their expertise transfers or grows (not diminishes) in the new system, (3) their involvement in the design and decision, not just the execution.

**Communication implication:**

Lead with the technical design, not the business justification. Invite critique early — asking for their technical concerns signals that this is a discussion, not an announcement. Frame their current knowledge as the foundation, not the thing being replaced. Never imply the current system is the problem; the problem is scale and operational complexity going forward.
