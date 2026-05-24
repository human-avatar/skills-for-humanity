# probability-expected-value-calculation

> Calculates expected value to compare options under uncertainty.

**Trigger:** `/probability-expected-value-calculation`

---

## What it does

For each option, maps possible outcomes with probabilities and values. Calculates expected value (sum of probability × value). Identifies asymmetric risk profiles — limited downside, large upside — that intuition frequently misses.

---

## When to use

- "Is this risk worth taking?"
- Comparing options with different probability/payoff profiles
- "Expected value?" or "What's the EV?"
- Decision involves variable outcomes, not a certain result

---

## Example

**Input:**
> We're deciding whether to spend $50k and 3 months building an integration with a potential enterprise customer. They've said they'll buy if we build it. If we build it, there's a 70% chance they sign ($200k ARR), 20% chance they sign but at a lower value ($80k ARR), and 10% chance they don't sign. Should we build?

**Output:**

**Expected value calculation:**

| Outcome | Probability | Value (Year 1 ARR) | EV contribution |
|---|---|---|---|
| Sign at $200k | 70% | $200,000 | $140,000 |
| Sign at $80k | 20% | $80,000 | $16,000 |
| Don't sign | 10% | $0 | $0 |
| **Expected ARR** | | | **$156,000** |

**Cost:** $50k cash + 3 months of engineering capacity (opportunity cost).

**Net expected value:** $156k ARR (year 1) - $50k cost = $106k net.

**But this analysis has hidden assumptions:**

*1. The integration has no other value.* If this integration also makes your product more attractive to other enterprise accounts, the expected value is higher. If the integration is completely bespoke and useless to anyone else, the calculation above is correct.

*2. The ARR is annual recurring.* If the customer churns after year 1, the 3-month build was spent for one year of value. If they're likely to stay 3+ years, EV = ~$468k against $50k cost — obviously worthwhile.

*3. The 70/20/10 probabilities are accurate.* "They said they'll buy if we build it" is a soft commitment, not a hard one. How well do you know this buyer? If the real probability of a sign is 50% (not 70%), EV drops to $120k — still positive, but less clearly so.

**Asymmetry check:**
Downside: $50k + 3 months of engineering. Upside: $200k+ ARR with high probability. This is a positive-asymmetry bet — limited downside, substantial upside. The main risk isn't the EV calculation; it's whether the integration becomes a maintenance burden that consumes ongoing engineering time.

**Recommendation:** Build, but with these conditions: the integration must be designed to be maintainable with <2 engineer-days/month ongoing, and the customer relationship should be validated (direct call with economic buyer, not just champion) before starting.
