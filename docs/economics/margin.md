# `/s4h-economics-margin`

> *Sunk costs are real. They are also irrelevant. Strip them out and ask what the next unit actually produces.*

**Category:** [Economics](README.md) · **Command:** `/s4h-economics-margin` · **Source:** Alfred Marshall — marginal revolution; Daniel Kahneman — sunk cost and loss aversion

---

## What it does

Reframes scale and continuation decisions in purely forward-looking marginal terms: what does the *next unit* cost, and what does it produce? Strips sunk cost reasoning from the analysis (past, irrecoverable expenditure is economically irrelevant to forward decisions) and applies the marginal rule — expand when marginal benefit exceeds marginal cost; stop when it doesn't. The skill also identifies the stopping rule explicitly, so it guides future decisions rather than just the current one.

Draws on Marshall's marginal revolution and on Kahneman's behavioural finding that loss aversion causes people to weight sunk costs heavily — the pain of past investment motivates continued commitment in ways that forward-looking analysis does not support.

---

## When to use it

- "Should we expand this?" — scale, headcount, spend, production volume decisions
- "Should we continue this?" — projects that are running, commitments that are live
- "We've invested so much already, we can't stop" — when sunk cost reasoning is driving the conversation
- "Is average cost the right number here?" — when someone is using average unit cost to make a marginal decision
- "At what point should we stop?" — finding the optimal stopping rule for an ongoing investment

---

## When *not* to use it

**Don't use marginal analysis when the question is which path to take, not how much of a path to take.** Marginal analysis applies to quantity decisions — more or less of something. If the question is which of two discrete alternatives to pursue, the right tool is `/s4h-economics-opportunity-cost`, which identifies what is foregone, not `/s4h-economics-margin`, which identifies when to stop doing what you're doing.

**Marginal thinking is not the same as short-termism.** The marginal comparison includes future costs and benefits; sunk costs are excluded not because the future doesn't matter but because the past cannot be changed. A long investment with a long payoff horizon is a legitimate marginal benefit — it should appear in the forward calculation, not be excluded from it.

The nearest neighbor: [`/s4h-economics-opportunity-cost`](opportunity-cost.md) — for the question "which alternative should I pursue?" rather than "how much of this should I do?"

---

## Example

**Input:**
> We launched a paid newsletter eighteen months ago. We spent £40,000 on design, tooling, and a content consultant in the first six months. Revenue from subscriptions has never exceeded £3,000/month. The newsletter now costs about £4,500/month to produce (one part-time writer, design retainer, email platform, editorial time from our head of content). The team is attached to it. Leadership is arguing "we've come too far to stop." How should we think about this?

---

**Output:**

### Marginal Analysis: Paid Newsletter Continuation

**The Decision at the Margin**
Should the newsletter continue, and if so, at what scale? The relevant unit: one additional month of operation at the current cost structure.

---

**Sunk Costs (Isolated — Economically Irrelevant to Forward Decision)**

| Sunk cost | Amount | Status |
|---|---|---|
| Initial design and tooling | £25,000 | Spent; non-recoverable |
| Content consultant (first 6 months) | £15,000 | Spent; non-recoverable |
| **Total sunk** | **£40,000** | **Does not affect whether to continue** |

"We've come too far to stop" is the sunk cost fallacy. The £40,000 is gone whether the newsletter continues or not. It is not a reason to continue; it is not a reason to stop. It is irrelevant.

---

**Marginal Analysis**

| Period | Marginal cost (monthly) | Marginal revenue (monthly) | Net marginal value | Decision signal |
|---|---|---|---|---|
| Current run rate | £4,500 | £3,000 | **−£1,500/month** | Stop or restructure |
| Optimistic scenario (+50% subscribers in 6 months) | £4,500 | £4,500 | £0 | Indifferent |
| Break-even scenario | £4,500 | £4,500 | £0 | At break-even — evaluate alternatives |
| Growth scenario (double current subscribers) | £5,000 (scale costs) | £6,000 | +£1,000/month | Continue if achievable |

At current rates, the newsletter destroys £1,500/month in value. The forward-looking question is: is there a credible path to break-even or surplus, and how long does it take?

---

**Marginal Cost vs. Average Cost**

The average cost includes the sunk £40,000 amortised over 18 months (≈ £2,222/month) plus current operating cost (£4,500) = approximately £6,722/month average total cost. Against average revenue of £2,500/month, the newsletter has never been close to covering its cost.

However, the sunk cost cannot be recovered. The *marginal* question is: does the next pound spent on the newsletter produce more than a pound of value? At £4,500 monthly cost against £3,000 monthly revenue, the answer is no.

---

**Stopping Rule**

The newsletter should be cut unless either:
1. Subscription revenue reaches £4,500/month within a defined timeframe (e.g., 3 months), or
2. A strategic case is made for the newsletter's value in terms not captured by direct revenue (lead generation, brand authority, enterprise sales support) — and that value is *quantified* and *compared to the monthly cost*, not asserted.

If the strategic case is made, assign a £ value to it. If brand attribution and lead generation are worth, say, £2,000/month, then the break-even subscription revenue target becomes £2,500/month (currently £3,000 — already above that). If that's the case, the newsletter continues with explicit acknowledgment of what it's costing and what it's producing.

---

**Recommendation**

Stop producing the newsletter at the current cost structure, or restructure it significantly. The "we've come too far to stop" reasoning is economically invalid — the £40,000 is already spent and its recovery depends on future subscription growth, not on continued production. The relevant question is whether the next month of operation produces £4,500 of value. It currently produces £3,000.

If the leadership wants to preserve the newsletter, the correct move is: (1) explicitly value the non-revenue benefits and test whether they exceed the £1,500/month shortfall, or (2) redesign the cost structure to bring monthly operating costs under £3,000. Continuing on the current basis because of past investment is the most reliable way to compound the loss.

---

## Related skills

- [`/s4h-economics-opportunity-cost`](opportunity-cost.md) — what else could the £4,500/month produce if redirected?
- [`/s4h-decision-premortem-analysis`](../decision/premortem-analysis.md) — stress-test a decision to continue before committing further
- [`/s4h-economics-incentive-mapping`](incentive-mapping.md) — when sunk cost reasoning is driven by institutional or personal incentives to protect prior decisions
- [`/s4h-probability-expected-value-calculation`](../probability/expected-value-calculation.md) — when the marginal benefit is uncertain and needs a probability-weighted estimate
