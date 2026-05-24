# creativity-six-hats

> Structured parallel thinking from six distinct angles — the complete picture before committing.

**Trigger:** `/creativity-six-hats`

---

## What it does

Applies Edward de Bono's Six Thinking Hats in sequence: White (facts), Red (emotion/intuition), Black (risks), Yellow (genuine benefits), Green (creative alternatives), Blue (process/meta). Each hat is pure — no mixing modes. Produces a complete multi-perspective map of any decision or situation.

---

## When to use

- Need a complete analysis before committing to a direction
- Team discussions where some people focus only on risks, others only on possibilities
- Preparing for a meeting where you want every angle covered
- A decision where both optimism AND caution need to be genuinely applied
- "Devil's advocate" or "playing it safe" requests — six hats applies both properly

## When *not* to use

- You need a specific creative generation → [lateral-thinking](lateral-thinking.md) or [random-entry](random-entry.md)
- You need to evaluate one specific idea simply → [plus-minus-interesting](plus-minus-interesting.md)
- The problem requires deep exploration of one perspective → [other-perspectives](other-perspectives.md)

---

## Example

**Input:**
> We're deciding whether to sunset our legacy API (v1) which still has 18% of our traffic. The new API (v2) has been available for 8 months. Should we do it?

**Output:**

**🎩 White Hat — Facts only**

- v1 traffic: 18% of total API calls
- v2 available: 8 months
- Migration documentation: exists but last updated 5 months ago
- Support tickets mentioning v1: ~12/month over last quarter
- Known v1-only customers: 3 enterprise accounts, identity confirmed; unknown number of smaller accounts
- Cost of maintaining v1: 1 engineer-day/month for patches + incident response overhead
- Migration effort (estimated): 2–8 hours per integration, depending on complexity

**❤️ Red Hat — Gut and emotion**

The 18% number feels higher than expected for a product that launched v2 eight months ago — something about the migration path must be harder than the docs suggest, or trust in v2 isn't there yet. There's also anxiety about the enterprise accounts: sunsetting feels like it carries real relationship risk with three customers who've said nothing.

**⬛ Black Hat — Risks and problems**

- Three enterprise accounts using v1 exclusively could churn or escalate if surprised by a forced migration
- "18% of traffic" may obscure a long tail of unknown small integrations that will break silently
- Migration docs haven't been updated in 5 months — complexity may be higher than estimated
- Tight sunset timeline could trigger emergency support load right as the team is focused elsewhere
- If any v1 features don't have v2 equivalents, customers who relied on them have nowhere to go

**🌕 Yellow Hat — Genuine benefits**

- Removing v1 eliminates a maintenance surface that will only grow more expensive over time
- Consolidating on v2 simplifies monitoring, security patching, and incident response
- Forces the hand on 18% of traffic that is by definition behind on the product — an opportunity to re-engage those customers
- Clean codebase is a meaningful morale and velocity factor for the engineering team

**🟩 Green Hat — Alternatives and creative options**

- Sunset the unauthenticated/low-usage v1 endpoints first; keep high-usage ones temporarily
- Charge for v1 access — makes cost-of-staying-on-v1 explicit and funds the migration support
- Build an automated migration checker that tells customers exactly what they need to change
- Assign a customer success rep to each of the three enterprise v1 accounts for a 4-week migration sprint before announcement
- Hard sunset date + migration guarantee: "we'll migrate you ourselves if you book a session by [date]"

**🔵 Blue Hat — Process and what's needed**

Before deciding, fill two information gaps: (1) identify every v1 integration beyond the 3 known enterprises — run the analysis this week. (2) Confirm v2 feature parity — are there any v1 capabilities with no v2 equivalent?

Given those, the decision is:
- If no unknown large integrations and full parity exists: proceed with sunset, 90-day notice, free migration support
- If unknown integrations or gaps: fix gaps first, survey unknowns, then sunset

**Decision:** Gather the information gaps before committing to a date. Two weeks of investigation prevents a 6-month customer recovery.
