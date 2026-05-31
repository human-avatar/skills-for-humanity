# communication-medium-selection

> Matches the message to the right channel and format — the same content in the wrong medium loses most of its effect.

**Trigger:** `/s4h-communication-medium-selection`

---

## What it does

Assesses four dimensions of a message — goal, urgency, emotional weight, and complexity — then matches to the appropriate channel using a decision framework. Recommends a primary medium and, for high-stakes messages, a secondary reinforcement channel. The most important output: the specific failure mode that would occur if the next most obvious alternative channel were used instead.

---

## When to use

- "Should this be a meeting or an email?"
- "Async or sync?"
- "How should I deliver this?"
- "Email vs Slack for this?"
- Any high-stakes communication where the wrong medium risks the message landing poorly

## When NOT to use

- When the question is what to say, not how to deliver it — use `communication-clarity-audit`
- When the question is how to tailor the message for a specific audience — use `communication-audience-modeling`
- When the question is how to handle pushback — use `communication-objection-mapping`

---

## Example

**Input:**
> I need to tell my direct report that their performance has been below expectations for the past quarter, that I'm concerned about their trajectory, and that we need to create a formal improvement plan. I'm considering sending a detailed email beforehand so they're not blindsided, then following up in our regular 1:1. Is this the right approach?

**Output:**

---

**Message assessment:**

| Dimension | Assessment |
|---|---|
| Goal | Report must understand the severity, feel heard in their response, and commit to an improvement plan |
| Urgency | Days, not hours — but the timing should be deliberate, not delayed |
| Emotional weight | **High** — affects identity, income security, career trajectory; person needs to be able to respond fully |
| Complexity | Requires dialogue — the improvement plan cannot be handed down, it must be co-created |

**Recommended medium:** Synchronous verbal — in person if possible, video call if not.

**Secondary medium (if needed):** Written follow-up after the conversation, summarizing what was agreed and what the improvement plan entails. This is the written record; the conversation is the communication.

---

**Rationale:**

The pre-notification email instinct comes from a good place — wanting to avoid blindsiding. But it has a critical failure mode: an email delivering news of formal performance concerns gives the recipient time to escalate, disengage, or catastrophize before the conversation happens. They arrive at the 1:1 having had the worst of the experience (the shock of reading it) without the best of it (the chance to be heard immediately). The conversation becomes harder, not easier.

The right approach is: synchronous first, written second. Bring them into a dedicated conversation (not the regular 1:1, which signals a different severity level than a dedicated meeting), deliver the message clearly in the first two minutes, then spend the rest of the time listening and building the plan together. Follow up within 24 hours with a written summary that captures what was discussed and agreed — this is the record and the anchor for next steps.

The regular 1:1 is the wrong venue — it signals insufficient gravity. A dedicated meeting signals: this matters enough to schedule separately.

**What goes wrong in the email-first approach:**

The recipient reads about a formal performance issue while alone, cannot respond immediately, has hours to interpret without context, and arrives at the meeting already defensive. The conversation is now about managing the emotional aftermath of the email, not about building a constructive plan.
