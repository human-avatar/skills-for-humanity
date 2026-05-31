# epistemology-epistemic-status

> Stop conflating confident with correct. Map what you actually know vs. believe vs. assume vs. hope.

**Trigger:** `/s4h-epistemology-epistemic-status`

---

## What it does

Produces a structured epistemic audit of a domain: every load-bearing claim inventoried and assigned an honest status — known, reasonably believed, assumed, hoped, or unknown. Then traces dependencies to flag where high-confidence conclusions rest on lower-confidence foundations. Includes a status inflation audit to catch where assumed claims have quietly been promoted to known through repetition, authority, or motivated reasoning.

---

## When to use

- "Give me an honest read of what we actually know in this space"
- Before a major decision or strategic document — you want to separate established facts from working assumptions
- "I think we're treating some assumptions as facts and I want to make that visible"
- Producing analysis where the confidence level matters as much as the conclusion
- A project has been running for a year and nobody has checked which founding assumptions still hold
- You want to communicate epistemic honesty to stakeholders without undermining the analysis

## When *not* to use

- You want to trace the justification structure of a single specific belief in depth → [epistemology-justification](justification.md)
- You've hit a fundamental limit — not "we don't know yet" but "this can't be known" → [epistemology-limits](limits.md)
- The goal is to quantify uncertainty numerically → [probability](../probability/)
- You're looking for logical contradictions in a document, not confidence calibration → [logic-consistency-check](../logic/consistency-check.md)

The nearest-neighbor trap: epistemic status is often confused with probability. Probability assigns numbers to uncertainty. Epistemic status assigns *categories* — it asks "what kind of epistemic standing does this claim have?" not "what are the odds?" Both are useful; they serve different purposes. Probability is downstream of epistemics: you can only assign good probability estimates to claims you've correctly characterized epistemically.

---

## Example

**Input:**
> We're about to present a market entry strategy to the board. The strategy is built on the thesis that our product is meaningfully better than incumbent X in ways that matter to the enterprise segment we're targeting. Before we present, I want an honest epistemic audit of the claims the strategy rests on.

**Output:**

### Domain
Market entry thesis: product advantage over incumbent X in the enterprise segment

### Epistemic Status Map

| Claim | Status | Notes |
|-------|--------|-------|
| Our product has better UX than incumbent X | Assumed | Based on internal experience and anecdote from friendly customers; no systematic comparison; internal teams are not representative users |
| Enterprise buyers in segment Y care primarily about UX | Assumed | Inferred from product instinct; no enterprise discovery interviews documented; "care primarily" is a strong claim |
| Incumbent X has a poor enterprise support track record | Reasonably believed | Multiple online reviews, two competitor displacement interviews; not a controlled sample but consistent signal |
| The enterprise segment Y is large enough to build a business in | Reasonably believed | TAM analysis done; methodology is plausible but built on market research that's 18 months old |
| Enterprise buyers will switch despite incumbency | Hoped | Switching costs are real and high in this segment; we have one reference customer who switched; one data point |
| Our sales motion is adapted for enterprise | Assumed | We've run SMB sales; we believe the skills transfer; no enterprise sales track record |
| The 18-month product roadmap will close our feature gaps with X | Hoped | Engineering estimates are optimistic by historical base rate; roadmap has not been pressure-tested against competitive moves |
| Pricing at a 20% premium is supportable | Unknown | Not tested with a single enterprise prospect at that price point |

### Dependency Flags
**High-confidence claims resting on lower-confidence foundations:**
- The overall thesis ("we can win in enterprise") depends on **[enterprise buyers care primarily about UX]** (Assumed) — if enterprise buyers weight compliance, integrations, or support SLAs more highly, the entire differentiation argument shifts
- **[Pricing at 20% premium is supportable]** (Unknown) is treated in the financial model as a known — the model can't be read as "reasonably believed" projections when the price point is untested
- **[The 18-month roadmap will close feature gaps]** (Hoped) feeds into the timeline for competitive parity — the strategy's defensibility window depends on a hoped premise

### Status Inflation Found
- **Confidence laundering on UX advantage:** The claim that our UX is meaningfully better has been asserted in three internal decks over six months. Each time it was asserted, it became slightly more treated as established. It is not established — it is an informed belief that has never been tested with target enterprise users.
- **Expertise elision on sales motion:** The belief that SMB sales skills transfer to enterprise came from the CEO, who has enterprise experience. This is testimony from a credible source, but has been treated as known rather than "reasonably believed by analogy from one person's experience."

### High-Stakes Unknowns
| Unknown / Hoped Claim | Why It's Load-Bearing | Priority |
|----------------------|----------------------|---------|
| Enterprise buyers care primarily about UX | The entire differentiation story rests on this; if wrong, we have no compelling story for why they'd switch | High |
| Pricing at 20% premium is supportable | Financial projections assume this; deal economics break if we have to discount to parity | High |
| Switching is viable despite incumbency costs | Whole strategy assumes some % of the market is in play; if switching friction is too high, TAM is much smaller than modeled | High |
| 18-month roadmap closes feature gaps | Timeline-sensitive — competitive window assumes we reach parity before incumbents respond | Medium |

### Summary
The strategy is built on a credible hypothesis, but is being presented with more confidence than the epistemic foundation warrants. Two of the four highest-priority claims are Unknown or Hoped — and both are central to the financial model. The board will be evaluating this as if the assumptions are established. Before the presentation, the minimum standard should be: run 5-8 enterprise discovery interviews to move "enterprise buyers care about UX" from Assumed to Reasonably Believed, and test the price point with at least two prospects. The strategy can still go forward — but it should be presented as a thesis to be validated, not a conclusion that is established.

---

## Related skills

- [epistemology-justification](justification.md) — trace the support chain for a single critical claim in depth
- [epistemology-limits](limits.md) — for claims that are unknown because they're structurally unknowable, not just uninvestigated
- [probability](../probability/) — when the goal is to quantify the uncertainty in specific claims
- [decision-premortem-analysis](../decision/premortem-analysis.md) — if the goal is to find failure modes in the strategy, not just calibrate the epistemic foundation
