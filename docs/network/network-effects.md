# network-effects

> Each new user either makes the product better for everyone — or doesn't. That difference is everything.

**Trigger:** `/s4h-network-effects`

---

## What it does

Analyzes how value scales with participation in a product, platform, or market — identifying which type of network effect is operating, where the tipping point lies, and whether the structure creates winner-take-all or winner-take-most dynamics. Grounded in Metcalfe's Law (network value scales with n²) and extended through modern platform economics, the skill distinguishes direct, indirect, data, and local network effects — which have different tipping points, different defensibility, and different competitive implications. The analysis translates structural findings into strategic choices: how to reach critical mass, how to defend a moat, or where a challenger can enter.

---

## When to use

- "Do we actually have network effects, or are we just calling it that?"
- "When do we hit critical mass / when does growth become self-sustaining?"
- "How defensible is our competitive position?"
- "Is this market winner-take-all?"
- "How could a challenger displace us?"

---

## Example

**Input:**
> We run a B2B procurement marketplace. Buyers post purchasing needs; suppliers respond with offers. We have 4,000 active buyers and 1,800 suppliers across six industry verticals. We've been growing 30% year-on-year but growth is uneven — two verticals feel like they're tipping, four feel like we're fighting for every transaction. A well-funded competitor just entered. Help us understand our network effect structure and what it means for our competitive position.

**Output:**

**Network Effect Inventory**

| Type | Mechanism | Strength | Evidence |
|------|-----------|----------|---------|
| Indirect (cross-side) | More buyers attract more suppliers; more suppliers improve buyer outcomes | Strong in 2 verticals; weak in 4 | Buyer-to-supplier ratio, response rates, and NPS vary dramatically by vertical |
| Data | More transaction history improves matching quality, pricing benchmarks, and fraud detection | Medium — early stage | Matching quality correlated with vertical maturity; thin verticals have poor match rates |
| Local (vertical-specific) | Value is driven by depth within a vertical, not breadth across the marketplace | Strong — the dominant structure | The two tipping verticals are the most concentrated; cross-vertical spillover is minimal |

**Direct network effects:** Not present. Buyers do not directly benefit from other buyers; suppliers do not directly benefit from other suppliers.

**Key structural finding:** This is a *local* network effects business, not a global one. Value is generated within vertical communities, not across the platform as a whole. A buyer in construction does not benefit from a thriving chemicals vertical. This means: the platform does not tip globally — it tips vertical by vertical.

**Tipping Point Analysis**

*General principle:* For a two-sided marketplace, the tipping point requires sufficient density on both sides that participants reliably get what they need faster and better than through alternatives. Below tipping: the marketplace is a complement to existing channels. Above tipping: the marketplace becomes the default channel.

*Vertical-specific assessment:*

| Vertical | Buyer-Supplier Ratio | Response Rate | Estimated Position | Time to Tip |
|----------|---------------------|--------------|-------------------|-------------|
| Manufacturing | 4.2:1 | 87% | Post-tipping | Already tipped |
| Construction | 3.8:1 | 81% | Post-tipping | Already tipped |
| Chemicals | 2.1:1 | 54% | Transition | 6–12 months with investment |
| Food & Beverage | 1.4:1 | 41% | Pre-tipping | 18+ months |
| Logistics | 1.1:1 | 33% | Pre-tipping | Uncertain |
| Healthcare | 0.7:1 | 28% | Pre-tipping | Uncertain |

**Current Position:** Post-tipping in 2 verticals; mixed across 4.

The two tipped verticals exhibit self-reinforcing dynamics: buyers return because suppliers respond; suppliers invest because buyers are active. These verticals are now compounding. The four pre-tipped verticals are still being subsidised by marketing and sales — not yet self-sustaining.

**Defensibility Assessment**

| Factor | Assessment | Implication |
|--------|-----------|-------------|
| Switching costs | Medium — buyer switching requires requalifying suppliers; supplier switching requires rebuilding bid history | Moderate moat once transactions accumulate; thin moat for new participants |
| Multi-homing | Common — buyers and suppliers regularly use 2–3 marketplaces | Weakens the moat significantly; participants are not locked in |
| Tipping structure | **Local (vertical)** — the platform tips vertical by vertical, not globally | Challenger does not need to beat the whole platform — only needs to tip one vertical |
| Disintermediation risk | Medium — high-value repeat transactions between known parties often move off-platform | Erodes the network over time in mature verticals |

**Winner-take-all or winner-take-most?**

**Winner-take-most within verticals; fragmented across verticals.** Local tipping means the platform that first tips a vertical has a durable position in that vertical — but a competitor can enter other verticals without contesting the tipped ones. Your moat is vertical-specific, not platform-wide.

Competitive threat from the new entrant: they do not need to displace you in Manufacturing or Construction (the tipped verticals). They can enter Healthcare or Logistics — where you have not yet established the network effect — and tip those verticals before you do. Once they tip two or three verticals, they have a platform story and funding advantage.

**Strategic Recommendations**

1. **Defend the tipped verticals by raising switching costs.** In Manufacturing and Construction, invest in features that increase transaction history lock-in: preferred supplier lists, performance benchmarking, automated reordering. Make leaving more expensive as the relationship matures.

2. **Prioritise Chemicals to create a third tipped vertical before the competitor does.** At 2.1:1 buyer-supplier ratio and 54% response rate, Chemicals is closest to tipping. Concentrated investment — supplier acquisition subsidies, dedicated vertical team, category-specific features — could tip it within 6–12 months.

3. **Abandon or delay Logistics and Healthcare for now.** Resources spent trying to tip two thin verticals simultaneously is worse than concentrating on one. These can be re-entered once the core platform is more defensible.

4. **Address multi-homing directly.** The biggest structural weakness is that participants use multiple marketplaces. The highest-leverage defense is features that reward loyalty — exclusive supplier relationships, preferential pricing tiers, or transaction-based pricing improvements — rather than better marketing.

---

## Related skills

- [`/s4h-network-contagion`](contagion.md) — model the adoption spread path within a target vertical and identify the tipping cascade trigger
- [`/s4h-strategy-positioning`](../strategy/positioning.md) — translate the network moat and vertical tipping analysis into a competitive positioning strategy
- [`/s4h-decision-reversibility-analysis`](../decision/reversibility-analysis.md) — assess the reversibility of committing resources to tip a specific vertical before the network effect is confirmed
