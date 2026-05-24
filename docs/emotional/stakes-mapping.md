# emotional-stakes-mapping

> Maps what each stakeholder actually cares about beneath their stated position.

**Trigger:** `/emotional-stakes-mapping`

---

## What it does

Distinguishes stated positions from underlying interests and real stakes. For each stakeholder: what is their stated position, what underlying interest does it serve, and what would they actually need to see to move? Addressing stated positions while missing real stakes accomplishes nothing.

---

## When to use

- Negotiation or alignment is stuck
- Agreement is reached but implementation keeps failing
- "What do they actually want?"
- "Why won't they agree?"

---

## Example

**Input:**
> We're trying to agree on a new product pricing model. Sales wants to keep the current per-seat model. Product wants to move to usage-based pricing. Engineering is neutral. Finance wants predictability. We've had 4 meetings and nothing is moving. Map the stakes.

**Output:**

**Sales — Stated position:** Keep per-seat pricing.
**Underlying interest:** Quota attainability and commission structure. Per-seat pricing is predictable and easy to sell — "X seats, X dollars." Usage-based pricing requires explaining variable billing, managing customer uncertainty about costs, and potentially defending a lower bill when usage is low. The real stake: their compensation model and their ability to close deals without friction.
**What they need to move:** Assurance that their quota is structured around ARR that's as predictable as per-seat, and that they have tools to sell and explain usage-based pricing without losing deals.

**Product — Stated position:** Usage-based pricing.
**Underlying interest:** Aligning price with value delivered. The current per-seat model charges the same for a power user and a casual user — which either overcharges light users (churn risk) or undercharges heavy users (revenue leakage). The real stake: a pricing model that doesn't create structural misalignment between what customers pay and what they get.
**What they need to move:** Some form of usage correlation in the model, even if not pure usage-based. A hybrid model would address the underlying interest.

**Finance — Stated position:** Predictability.
**Underlying interest:** Accurate forecasting and investor confidence. Finance needs to tell the board what revenue will be. Usage-based pricing with variable monthly billings is hard to forecast. The real stake is not "per-seat specifically" — it's "predictable ARR I can defend in a forecast."
**What they need to move:** A pricing model with predictable minimums and clear upsell mechanics. Annual commitments with usage-based overage would address this.

**The synthesis:**
The four positions look incompatible but the underlying stakes can be aligned. A model with: annual ARR commitment (Finance satisfied), minimum seat or usage floor (Sales quota protected), usage-based expansion above the floor (Product value alignment achieved). This is the hybrid model that addresses every stakeholder's actual interest — it's just not obvious from their stated positions.

**Why the meetings failed:**
Everyone argued positions, not interests. Positions are incompatible; interests can be synthesized. The 5th meeting should start with: "Let's talk about what we each actually need, not what we're proposing."
