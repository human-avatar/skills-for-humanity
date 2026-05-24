# constraint-hardness-testing

> Tests whether a stated constraint is actually real — separating genuine limits from assumptions, habits, and politics dressed as facts.

**Trigger:** `/constraint-hardness-testing`

---

## What it does

Investigates the origin, basis, and current validity of each stated constraint. Classifies each as hard (truly fixed), soft (movable with the right conversation), or assumed (not actually a constraint). For soft constraints, identifies what it would take to move them.

---

## When to use

- "We can't do X" — and you're not sure that's true
- An approach keeps getting blocked by the same stated constraint
- Want to know what's actually fixed before designing a solution

---

## Example

**Input:**
> We're designing a new feature. The constraints we've been given are: "We can't change the data model", "It has to ship in 4 weeks", "It can't require any user re-authentication", and "We can't touch the billing service."

**Output:**

**Constraint: "We can't change the data model"**

*Who said this? On what basis?*

Data model changes require migrations, which introduce risk in production. But "can't" is likely shorthand for "the team is risk-averse about migrations" rather than "migrations are technically impossible." Most production systems support migrations; the question is complexity and testing time.

*Classification:* **Soft.** What it would take to move: a migration plan that includes rollback testing, a staging validation step, and engineering approval. The constraint may dissolve with the right technical proposal.

**Constraint: "It has to ship in 4 weeks"**

*What drives this deadline?*

Is this a customer commitment, a board date, a marketing campaign, or someone's planning assumption? The hardness depends entirely on the origin. A customer commitment is real; a planning assumption is soft.

*Classification:* **Unknown — needs verification.** Ask: "What happens if it slips to 6 weeks?" The answer reveals whether the constraint is hard.

**Constraint: "It can't require re-authentication"**

*Why not?*

Likely: friction concerns and a previous incident where forced re-auth caused user drop-off. This is a UX judgment call, not a technical impossibility.

*Classification:* **Soft.** What it would take to move: demonstrating that the security benefit of re-auth in this context outweighs the UX cost, or finding a re-auth implementation that's low-friction (OAuth token refresh rather than password re-entry).

**Constraint: "We can't touch the billing service"**

*Why not?*

Billing services are high-risk to change (revenue impact). This is probably a real risk-management constraint.

*Classification:* **Soft-Hard (risk management, not technical).** What it would take to move: a clear impact analysis showing what changes are needed, why they're low-risk, and who owns the review. If billing team sign-off is the real requirement, that's a process constraint, not a technical one.

**Summary:**
None of these constraints are hard in the technical sense. All are movable with the right conversation or proposal. The most important question to answer immediately: what drives the 4-week deadline? That's the only constraint that might be genuinely non-negotiable.
