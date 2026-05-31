# emotional-trust-audit

> Maps what is building and eroding trust in a relationship or situation — trust degrades silently until it fails loudly.

**Trigger:** `/s4h-emotional-trust-audit`

---

## What it does

Audits a relationship — two people, a team, a product and its users — against the four drivers of trust: competence, reliability, integrity, and benevolence. Each driver degrades independently, and generic trust-building gestures can't fix a specific deficit. The audit identifies the most damaged driver and the highest-leverage specific action for repair, along with what must stop before repair can begin.

---

## When to use

- "Trust audit on this relationship"
- "Why don't they trust us?"
- "What's eroding trust here?"
- "Relationship health check"
- Before a critical conversation where the underlying trust dynamic will shape the outcome

## When NOT to use

- When the question is social dynamics in a group — use `social-dynamics-analysis`
- When the question is mapping incentives behind someone's behavior — use `social-incentive-analysis`
- When the question is motivational psychology of a specific person — use `emotional-motivation-mapping`

---

## Example

**Input:**
> Our engineering team's trust in the product roadmap is at an all-time low. Engineers say: "the roadmap always changes," "priorities shift without explanation," "we build things that never ship," and "no one tells us why decisions are made." We're trying to figure out what to repair first.

**Output:**

---

**Driver Assessment**

| Driver | Evidence Building Trust | Evidence Eroding Trust | Net Assessment |
|---|---|---|---|
| **Competence** | Engineers are technically capable; product team can identify customer problems | Product decisions result in built-but-not-shipped features, suggesting poor judgment about what's worth building | Deficit — competence questions specifically about product judgment, not engineering execution |
| **Reliability** | Some roadmap commitments are met | "The roadmap always changes" — commitments are not kept consistently; no pattern of reliable follow-through on stated priorities | Significant deficit |
| **Integrity** | Not evidenced in the account | Priorities shift without explanation — suggests decisions are made on criteria not disclosed to the team; gap between stated reasoning and actual decisions | Significant deficit |
| **Benevolence** | Not evidenced in the account | "No one tells us why decisions are made" — engineers feel they are being worked around, not considered; features built and discarded with no acknowledgment of the cost | Significant deficit |

**Most Damaged Driver:** Integrity — the gap between stated reasoning and actual decisions.

The four failure signals (constant changes, no explanation, built-but-not-shipped, no communication of why) all point to the same root: engineers do not believe that the stated criteria for prioritization reflect the real criteria. This is an integrity problem, not a competence or reliability problem — the distrust is specifically about honesty and transparency, not about capability or follow-through.

**Highest-Leverage Action:** Make the actual decision criteria visible and name them consistently. The next roadmap change should include: (1) the real reason for the change — named honestly even if it's "executive priority changed" or "customer deal demanded this" — and (2) an acknowledgment of the cost to the team. Engineers don't need to agree with roadmap decisions; they need to trust that they're being told the truth about why they're being asked to build what they're building.

**Behaviour to Stop:** Making roadmap changes without communication before any repair action can land. If the next roadmap change happens without explanation, it will confirm the integrity assessment and cancel any goodwill from symbolic repair gestures. The sequence matters: stop the trust-eroding behaviour first, then begin repair. A single unexplained change after the repair effort begins is more damaging than no repair effort at all.
