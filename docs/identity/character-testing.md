# identity-character-testing

> Asks what a person or organisation of genuine integrity would do — grounding decisions in character rather than calculation.

**Trigger:** `/s4h-identity-character-testing`

---

## What it does

Applies the character test to a decision that feels uncomfortable: describes the character at its best in concrete behavioral terms, asks what that character requires in this specific situation, examines what the proposed decision reveals when repeated as policy or made public, and applies the future-self test. The most important output: the divergence analysis — what is driving the gap between what character requires and what's being proposed.

---

## When to use

- "Character test"
- "Would I be proud of this?"
- "What does this say about us?"
- "Are we being who we want to be?"
- When something feels wrong but is hard to name
- When the calculation says one thing and instinct says another

## When NOT to use

- For comprehensive multi-framework ethics analysis — use `ethics-check` or `ethics-council`
- For testing whether a decision is consistent with mission — use `identity-mission-alignment`
- For clarifying values abstractly — use `identity-values-clarification`

---

## Example

**Input:**
> We discovered a critical bug in our product that affects about 3% of users — they're not getting their scheduled reports, so they don't know they're missing data. The bug has existed for 6 weeks. Our legal team says we have no disclosure obligation. Marketing is worried about the PR impact of announcing it. We're considering fixing it quietly and not notifying affected users. Character test this decision.

**Output:**

---

### Situation and Decision

A bug affecting 3% of users has silently failed to deliver scheduled reports for 6 weeks. Affected users are making decisions without knowing they're missing data. Legal says no disclosure obligation. The proposed decision: fix the bug without notifying affected users.

### Character Description

A company of genuine integrity would: tell users the truth about what's happening to their data, even when it's costly; treat users as partners in the product relationship rather than as recipients of managed communications; be the first to tell bad news rather than hoping it surfaces elsewhere; and consider what users would think if they later discovered the company knew and didn't tell them.

### What Character Requires

In this situation, a company of this character would: proactively notify the 3% of affected users, tell them what happened, for how long, and what data they may have missed; give them a concrete path to recover or review their situation; and do this before the fix ships, not after.

### What the Proposed Decision Reveals

If "fix quietly without notification" were repeated as policy — applied to every situation where legal says there is no disclosure obligation — it would reveal: the company's disclosure decisions are made based on legal minimums and PR risk, not on what users deserve to know. That is a specific, concrete description of values. It may not be the values the company intends to have, but it is the values implied by the policy.

Made public: "Company discovered 3% of users had a 6-week data failure, had no legal obligation to disclose, and chose not to notify them." This reads as defensible. It also reads as the kind of thing customers, when they eventually discover it, remember for a long time.

### Future-Self Test

Looking back in five years: the fix-quietly version risks being **uncomfortable** — specifically if the affected users later discover the company knew and didn't tell them. The discovery of a cover-up (even a legal one) is nearly always worse than the original disclosure, because it adds a layer of intentional opacity that users reasonably experience as betrayal.

The proactive notification version: **proud** — specifically because the company chose to be honest when it wasn't legally required to be.

### Divergence Analysis

| The character test points toward | The proposed decision points toward | What's driving the divergence | Is it legitimate? |
|---|---|---|---|
| Proactive notification of affected users | Quiet fix without notification | Marketing's PR concern; legal's comfort with silence | No — PR risk is real but is being used to override a character principle. The actual risk of quiet discovery is higher than the risk of proactive disclosure. |

### Recommendation

The character test points clearly toward proactive notification. The specific concern — PR impact — should be examined directly: what is the actual PR risk of proactive disclosure vs the PR risk of affected users discovering it six weeks later through their own investigation? Proactive disclosure with a genuine apology and a clear remediation path produces better outcomes in nearly all cases where the alternative is eventual discovery.

Recommend: notify affected users before the fix ships. Include: what happened, how long it occurred, what data may be missing, how to recover, and what has been done to prevent recurrence.
