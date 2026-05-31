# historical-lesson-extraction

> Extracts the transferable principle from a specific historical case — separating contingent surface details from the underlying rule that applies across contexts.

**Trigger:** `/s4h-historical-lesson-extraction`

---

## What it does

Takes a specific historical case — any past experience, failure, success, or incident — strips away the domain-specific surface, and extracts the transferable principle with its mechanism. The mechanism is the crucial element: a principle without a mechanism can't be intelligently applied or tested. Then assesses whether the conditions required for the principle to hold are present in the current situation.

---

## When to use

- "What's the lesson from this?"
- "Generalise from this case"
- "What should we learn from what happened?"
- "Apply this to our situation"
- Post-mortems, retrospectives, strategy sessions referencing past experience

## When NOT to use

- When you want recurring failure modes across multiple historical cases — use `historical-failure-analysis`
- When you want to identify which cycle a current situation is an instance of — use `historical-cycle-detection`
- When you want historical precedents specifically for a new competitive or strategic situation — use `historical-precedent-analysis`

---

## Example

**Input:**
> In 2016, a fintech company launched a premium B2C subscription product at $25/month. Initial growth was strong — 50k subscribers in 6 months. Then they raised the price to $35/month without communicating the reason. Within 3 months, 40% of subscribers cancelled and negative social media commentary spiked. The company reversed the price increase, but subscriber numbers never recovered fully. What's the lesson?

**Output:**

---

**Case:** B2C fintech company raised subscription price from $25 to $35/month without explanation, lost 40% of subscribers despite reversal.

**Surface Events:**
1. Strong initial growth under original pricing
2. Price increase announced without explanation of reasoning
3. 40% churn within 3 months
4. Negative social media commentary — public, amplified
5. Reversal of price increase
6. Incomplete subscriber recovery post-reversal

**Underlying Dynamics:**

The price increase itself was likely not the primary cause of churn at that magnitude. A $10 increase on a $25 subscription is 40% — significant, but subscribers who valued the product at $25 would have evaluated it at $35 on value, not on absolute price. The key variable was the absence of explanation. Subscribers who received no reason were forced to generate one: "the company is now prioritizing profit over customers," "they think they can get away with it," "this is the beginning of an extractive pattern." Once the explanation was constructed negatively, it changed not just the price calculus but the relationship.

The reversal compounded this. Reversal without explanation signals: "we raised the price, got pushback, and retreated." This confirms the negative interpretation (the company was trying to extract value) while also adding a new signal: the company makes decisions based on social pressure, not principle. Subscribers who wanted a reason didn't get one — they got a retreat that felt like admission.

**Abstract Principle:**

When trust relationships involve repeated transactions, price changes are not primarily an economic event — they are a communication event. The same price change communicated as a value-based decision (explained honestly: "we invested in X, which costs Y, and we need to reflect that") produces a different response than the same change communicated as a business optimization (unexplained). The mechanism: subscribers in trust relationships process unexplained changes as signals about the company's intentions, and they generate negative interpretations when none is provided. The interpretation, not the price, drives the decision.

**Transferability Assessment**

| Required Condition | Present in Current Situation? | Notes |
|---|---|---|
| Relationship is ongoing/subscription, not one-time transaction | Required — trust narrative requires repetition | Check: does this apply to B2B contracts, media subscriptions, SaaS pricing changes? Yes to all |
| Price change is visible to customers (not structural/backend) | Required | Any visible change customers must process triggers the mechanism |
| Company communicates the reason before or with the change | Variable — this is the intervention point | Without proactive communication, negative interpretation is the default |

**Application:**

For any upcoming pricing change: communicate the reason before or simultaneously with the change — not after pushback. The reason must be honest and specific, not a generic "to continue delivering value." Customers are sophisticated enough to distinguish genuine cost explanation from marketing language. If the reason is "we need to increase revenue" — that is more honest and will be better received than "to continue investing in the product," which is the same message stated evasively.

For reversals: if a price change is reversed, a reason must accompany the reversal. "We're reversing this because we heard your feedback" is worse than no reversal, because it confirms that the original decision was opportunistic and that pressure, not principle, governs decisions.

**Caveats:** This principle applies most strongly in trust-based subscription relationships with high switching cost and visible community. Commodity services with low switching costs and no community (utilities, interchangeable SaaS tools) may not trigger the interpretation mechanism — pure price sensitivity may dominate.
