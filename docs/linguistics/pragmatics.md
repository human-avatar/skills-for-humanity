# linguistics-pragmatics

> What people say and what they mean are rarely the same thing — and both matter.

**Trigger:** `/linguistics-pragmatics`

---

## What it does

Analyzes the gap between what a communication literally says and what it actually communicates — the implicatures, speech acts, and presuppositions that a competent listener will infer from context. Drawing on H.P. Grice's maxims of conversational implicature and J.L. Austin's speech act theory, this skill reconstructs the full communicative meaning of an utterance: not just the words, but what is implied, performed, and presupposed by them.

---

## When to use

- "What does this really mean?"
- A message seems polite or neutral on the surface but feels wrong underneath
- You need to understand what a counterpart is actually communicating, not what they are formally saying
- You are drafting something and want to audit what you are unintentionally implying
- A communication has generated an unexpected reaction and you cannot see why from the literal content
- "Is this a threat?" or "Is this a promise they intend to keep?"

---

## Example

**Input:**
> My manager sent this email after I raised concerns about our project timeline in a team meeting: "Thanks for flagging your concerns. I'm sure the team appreciated hearing a range of perspectives. We'll continue to monitor the situation and I'd encourage everyone to stay focused on their deliverables. I have confidence that the team will find a way to make this work."

**Output:**

**Literal Content**
The manager: acknowledged the concerns were raised; described the team as appreciating "a range of perspectives"; stated the situation will be monitored; told the team to focus on deliverables; expressed confidence in the team.

**Gricean Analysis**

| Maxim | Status | Implicature generated |
|---|---|---|
| Quantity | Flouting — says less than is informative | The manager has a view on the timeline concerns but does not state it. The absence of engagement with the substantive concern implicates that the concerns are not being taken seriously, or that the manager disagrees but is not saying so directly. |
| Quality | Operating within — no false statements | The statements are technically true, which is notable: the manager avoids taking a position that could be falsified. |
| Relation | Flouting — the response does not address the timeline problem raised | The response responds to the act of raising concerns, not to the concerns themselves. This is a structural non-answer that implicates dismissal. |
| Manner | Flouting — unusually indirect and hedged | The hedged, process-language register ("continue to monitor", "I'd encourage", "find a way") implicates that the manager is managing the situation rather than resolving it. |

**Speech Acts**

- **"Thanks for flagging your concerns"** — Surface: acknowledgement. Illocutionary act: a ritual acknowledgement that does not commit to action. In the context of the other moves, this functions as a *soft rebuke* — it names the behaviour (flagging concerns) in a way that frames it as a procedural act rather than a substantive contribution.
- **"I'm sure the team appreciated hearing a range of perspectives"** — Surface: compliment. Illocutionary act: a *status move*. By framing the concern as "a perspective" among others rather than a problem requiring response, the manager implicitly categorises it as subjective rather than factual. "Range of perspectives" is the language of opinion diversity, not of timeline risk.
- **"We'll continue to monitor the situation"** — Surface: commitment. Illocutionary act: a *non-commitment*. Monitoring is not action. This phrase commits the manager to nothing while creating the appearance of a response.
- **"I'd encourage everyone to stay focused on their deliverables"** — Surface: encouragement. Illocutionary act: a *soft warning*. Directed at "everyone" but contextually aimed at the concern-raiser, this reads as "drop it and do your work." The use of "I'd encourage" is a face-saving indirect command.
- **"I have confidence the team will find a way to make this work"** — Surface: affirmation. Illocutionary act: a *dismissal with transferred accountability*. The timeline problem is reframed as a team execution problem. "Find a way to make this work" places the burden of resolving the timeline concern on the team, not on the manager or the plan.

**Presuppositions**
- That the timeline concern was a "perspective" — subjective, equivalent to other views — rather than a factual problem. Accepting the response without objection implicitly endorses this framing.
- That the current situation is one requiring monitoring, not intervention — presupposes the situation is within normal parameters.
- That the team's execution capacity (not the plan) is the variable to be optimised.
- That voicing concern at a team meeting was an act requiring management of, rather than engagement with.

**Full Communicative Meaning**
A competent listener reading this email in context will understand: the manager has decided not to act on the timeline concerns; the concerns have been noted but categorised as one person's opinion rather than a factual risk; the concern-raiser is being implicitly told to stop raising the issue publicly; the manager is distributing accountability for the timeline downward to the team; and the official position is that the situation is under control and normal work should continue. None of this is said. All of it is communicated.

**Strategic Assessment**
This communication is performing two simultaneous functions: (1) managing the social situation in the meeting (neutralising a dissenting voice without openly silencing it) and (2) creating a record of having "addressed" the concern without committing to any change. It is well-constructed for these purposes. The risk is that the concern-raiser — if they understand what they have received — will correctly interpret it as dismissal and either escalate or disengage. The communication does not resolve the underlying timeline risk; it manages its social expression.

---

## Related skills

- [`/linguistics-framing`](framing.md) — Examine the frame the presuppositions reveal; "a range of perspectives" is a framing move, not a neutral description
- [`/communication-objection-mapping`](../communication/objection-mapping.md) — If you are drafting a response, map how the implied content will be received
- [`/psychology-persuasion`](../psychology/persuasion.md) — Understand the influence mechanisms operating in the implied content
