# narrative-audience-modeling

> Maps the audience's current beliefs, real goals, fears, and threshold conditions before communicating with them.

**Trigger:** `/narrative-audience-modeling`

---

## What it does

Builds a specific model of the audience as they actually are — not as the sender assumes them to be. Identifies their current belief about the topic, their real (not stated) goal, what they need not to lose, what kind of evidence or framing would actually move them, and the threshold condition that must be met before anything else can land. The most important output: the threshold — the thing that must be heard first, before all other communication.

---

## When to use

- "Model the audience"
- "Who am I talking to?"
- "Why aren't they getting it?"
- "What do they care about?"
- Before any high-stakes communication: board presentations, cross-functional proposals, executive pitches, difficult conversations
- When a message has been sent and not landed as expected

## When NOT to use

- When the question is which channel to use — use `communication-medium-selection`
- When the question is whether the message is clear — use `communication-clarity-audit`
- When the question is how to handle specific objections — use `communication-objection-mapping`

---

## Example

**Input:**
> I need to present a proposal to our CPO and CTO to replace our current analytics stack with a new vendor. The CPO cares about product metrics and user insights. The CTO is responsible for the technical infrastructure and has approved previous vendor decisions. We've had two failed vendor migrations in the past 18 months. Model both of them.

**Output:**

---

**Audience Table**

| Segment | Current Belief | Real Goal | Fear | What Moves Them | Threshold Condition |
|---------|---------------|----------|------|----------------|---------------------|
| **CPO** | "Our current analytics is frustrating — slow dashboards, limited segmentation — but migrations always cost product velocity, and we've been burned before." | Wants reliable, fast product insights without a multi-month disruption to the team's ability to ship. | That this migration will eat 6–8 weeks of engineering time and product attention, and the analytics will be down or degraded for months. | A concrete before/after of what specific questions become answerable that can't be answered today. Timeline with specific product velocity impact named honestly (not hidden). | "Tell me what we'll lose during the migration and for how long, before you tell me what we'll gain." |
| **CTO** | "We just did two vendor migrations that both cost more than expected and delivered less than promised. The case for this one will have to be stronger than the case for those was." | Wants technical decisions that don't require relitigating them 18 months later. Not opposed to migration — opposed to regret. | That this will be the third migration in 18 months. Career and credibility exposure from another failed initiative. | Evidence that this vendor is structurally different from the previous two failures — specific technical reasons, not vendor promises. What will we do differently in implementation? | "How is this different from the last two?" — must be answered directly and specifically before anything else lands. |

---

**Message Implications**

- **Lead with:** An honest accounting of what went wrong with the previous migrations and why this situation is structurally different. Not a defense — an acknowledgment. The threshold for both audience members is "we know why those failed."

- **Frame around:** The CPO's real goal (specific product questions answered, velocity impact minimized) and the CTO's real goal (decision that holds up 18 months from now). These are compatible frames; use both.

- **Avoid:**
  - Leading with the vendor's capabilities or features — both audiences need to first trust the process
  - Minimizing the migration cost — both audiences have been burned by underestimated costs; underestimating again confirms pattern
  - Using the word "seamless" — it triggers justified skepticism in anyone who's been through migrations

- **Primary ask:** A two-phase approval. Phase 1: $X for a structured evaluation process with defined decision criteria. Phase 2: a go/no-go after the evaluation. This reduces the perceived commitment size and addresses the CTO's fear of another hasty decision. The CPO gets velocity impact visibility before committing.
