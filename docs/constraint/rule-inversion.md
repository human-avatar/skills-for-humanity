# constraint-rule-inversion

> Flips a constraint into a creative driver — uses the limit as the generative force rather than working around it.

**Trigger:** `/constraint-rule-inversion`

---

## What it does

Takes a constraint that's being treated as an obstacle and converts it into a design requirement. The key insight: solutions that only work because of the constraint are often better than solutions that would exist without it. Produces 3–5 solutions that are impossible or inferior without the constraint, then selects the one where the constraint creates the most unexpected advantage.

---

## When to use

- "Invert this constraint"
- "Use the limitation"
- "What if this limit was the requirement?"
- When a constraint feels like a wall and you want to make it a foundation
- When the options that ignore the constraint all feel compromised

## When NOT to use

- When you need to route around a hard constraint to reach the same goal — use `constraint-workaround-mapping`
- When you need to test whether the constraint is actually hard — use `constraint-hardness-testing`
- When you want to reduce scope by cutting features — use `constraint-scope-reduction`

---

## Example

**Input:**
> We're a startup with no marketing budget. We can't pay for ads, sponsored content, or PR firms. Everyone says we need to "just focus on product and hope for word of mouth," but that feels passive. Invert the budget constraint.

**Output:**

---

**Constraint (precise):**
> $0 budget for paid marketing, paid media, or external agency support for the next 6 months.

**Inverted form (as design requirement):**
> Every marketing activity must cost nothing and create value for someone beyond us.

---

**Solutions that use the constraint:**

| # | Solution | Why it requires the constraint | Strength |
|---|----------|-------------------------------|----------|
| 1 | Build in public — share the real process of building the company, including failures and decisions | Paid ads don't require genuine transparency; the $0 constraint forces authenticity that money couldn't buy | Creates trust-based audience that competitors with budget can't replicate because it requires actually doing it |
| 2 | Create the definitive free resource for the exact problem your product solves (guide, tool, template) | Companies with budget would pay to produce and distribute this; the constraint forces creating something genuinely useful enough that people share it | Generates inbound from exactly the segment that has the problem; builds SEO authority |
| 3 | Form an integration partnership with a non-competing tool used by your target segment and co-promote | Mutual value means both parties do the work; the $0 constraint eliminates options that don't work both ways | Access to an established audience with no spend; the partner's credibility endorses the product |
| 4 | Produce and give away the analysis your customers need to justify the purchase decision | Budget companies outsource thought leadership; the constraint forces becoming the source of intelligence rather than just the vendor | Customers who use the analysis are already sold on the problem; the pitch is already made |
| 5 | Design a referral mechanic where using the product in a social context advertises it naturally | Paid campaigns generate impressions; the constraint forces designing the product itself to be visible | Every usage becomes a distribution event; advertising scales with the product, not with budget |

**Most promising:**
Solution 2 — **create the definitive free resource.** The $0 constraint forces genuine usefulness: a paid campaign can afford to be mediocre because reach is purchased; a free resource only gets distributed if people find it valuable enough to share. The constraint eliminates the option of buying attention and forces creating a reason to pay attention. This produces an asset that a competitor with budget can't replicate with money — it requires actually knowing the problem well enough to solve it for free.
