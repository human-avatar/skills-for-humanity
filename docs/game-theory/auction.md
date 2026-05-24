# `/game-theory-auction`

> *In a second-price auction, bid your true value. In a first-price auction, don't. In a common-value auction, winning is bad news — adjust for it.*

**Category:** [Game Theory](README.md) · **Command:** `/game-theory-auction` · **Source:** William Vickrey (1961, Nobel 1996); Paul Milgrom & Robert Wilson (Nobel 2020)

---

## What it does

Analyses bidding strategy for competitive situations — how much to bid, how to account for the winner's curse, and how to avoid the common error of bidding what you think something is worth without accounting for what winning reveals. Also covers auction design: which format maximises revenue or efficiency, and when reserve prices, format choice, and multi-unit considerations matter.

The core insight that most bidders miss: winning a competitive auction is not good news by itself. Winning means you bid higher than everyone else, which means your estimate of the item's value was the most optimistic. In common-value settings, that should lower your estimate. Most bidders don't adjust for this — and overpay.

---

## When to use it

- You're submitting a sealed bid and aren't sure how much to bid
- You're making a competitive offer (on a property, a contract, an acquisition) and need to know how to think about competitor bids
- You're designing a procurement or sales process and want to know which format maximises revenue or ensures the right outcome
- You're bidding in an auction where you're uncertain about the true underlying value and worried about overpaying
- You want to understand how a specific auction format (first-price, second-price, ascending, Dutch) changes the optimal strategy

---

## When *not* to use it

**Don't use this for negotiations where the auction structure isn't explicit.** If you're in a bilateral negotiation — you and one other party, with back-and-forth discussion of terms — the auction framework doesn't directly apply. The strategic dynamics are different: it's closer to bargaining theory than auction theory. The relevant tools are in `/strategy` and `/decision`.

**Don't confuse private-value and common-value logic.** Private-value bidding (bid your true value in second-price; shade in first-price) is only correct when your value is genuinely independent of what others believe. If the thing you're bidding on has an objective value you're estimating — a house you plan to resell, a company you're acquiring, a contract with market-rate costs — the winner's curse applies and you need to adjust. Applying private-value logic to common-value situations is the most expensive mistake in auction theory.

The nearest neighbor: [`/game-theory-mechanism-design`](mechanism-design.md) — the general framework for designing rules to produce desired outcomes. Auction design is a specialised application. If you're designing an auction, start with mechanism design principles and then apply auction-specific results.

---

## Full example

**Input:**
> I'm buying a house in a hot market. Listed at £780k. The seller's agent has confirmed there are 4 other offers coming in, all sealed. The deadline is Friday. I genuinely love this house — I've done detailed research and I'd pay up to £850k for it, but I'd rather not. It's been on the market 12 days, and comparable sales in the last 6 months range from £795k to £840k for similar properties. What should I bid?

---

**Output:**

### Auction Analysis

**Auction Type**

First-price sealed-bid auction. All bidders submit one offer simultaneously (by Friday's deadline); the highest bid wins and the winner pays their own bid. There is no opportunity to revise after seeing others' bids.

This is the format where strategy matters most. In a second-price auction, you'd simply bid £850k (your true value) and pay whatever the second-highest bid was. In a first-price auction, bidding your true value is the wrong strategy.

---

**Value Structure**

This is a hybrid situation requiring careful analysis.

*Private value component:* Your subjective valuation — the utility you'd personally derive from living in this specific house — is genuinely private. Your ceiling of £850k reflects your personal preferences, commute value, life circumstances, and enjoyment. No other bidder has exactly this value; it is genuinely yours.

*Common value component:* The house also has a market value — an objective resale price independent of who owns it. The comparable sales range of £795k–£840k represents the market's best estimate of this common value. All bidders are simultaneously estimating this common value, and winning a competitive auction for a house you're likely to eventually sell means your estimate of its market value was more optimistic than 4 others'.

**This is an affiliated-values auction.** Your private value (£850k) and the common value (market comparables: £795k–£840k) are related. The right strategy accounts for both.

---

**Optimal Bidding Strategy**

**Step 1: Private value ceiling is not the bid.**
Your £850k ceiling is the maximum you'd pay, not the optimal bid. Bidding exactly £850k means you win the house at £850k if you're the highest bidder — paying the maximum you said you'd accept, regardless of whether you needed to. First-price logic: shade below your true ceiling.

**Step 2: Market value anchor.**
The comparable sales range (£795k–£840k) gives you the market value estimate. This is the relevant common-value anchor. The centre of this range — roughly £817k — is the neutral estimate. Strong recent sales at the top end (£840k) suggest continued demand pressure.

**Step 3: Winner's curse adjustment.**
With 4 other competitive bidders, winning means your bid was higher than all of theirs. If everyone is estimating market value from similar comparables, the 5 bids represent 5 draws from roughly the same distribution. Winning means you drew the most optimistic value. You should therefore shade your market-value estimate downward relative to your unconditional estimate.

In a common-value auction with n symmetric bidders, the winner's curse adjustment means your bid should equal your estimate *conditional on winning* — approximately your estimate minus (your estimate − lowest plausible value) / (n + 1). With a range of roughly £795k–£840k and 5 bidders: bid adjusts down by roughly (£840k − £795k) / 6 ≈ £7.5k from the top comparable. This shades your market anchor from £840k to approximately £832k.

**Step 4: First-price shade.**
You're in a first-price auction. Even at your private-value ceiling, some downward shading is rational. The standard result with n symmetric bidders: optimal bid ≈ true value × (n−1)/n. With 4 other bidders (n=5): optimal shade factor ≈ 4/5 = 80% of the gap between your estimate and your fallback.

**Step 5: Competitive premium assessment.**
The house has been on the market 12 days. This is not a stale listing — it moved quickly to competitive offers. The seller confirmed 4 other bids, which means demand is genuine. In a market with active demand, bidders who shade too aggressively lose to others willing to pay closer to true value.

---

**Specific Bid Recommendation**

**Recommended bid: £832,000–£838,000.**

Reasoning:
- Market value anchor (top of comparables, after winner's curse adjustment): ~£832k
- Your private value premium over pure market value: £850k − £832k = £18k. You value the house above market comparables — this is real and justifies bidding above the common-value anchor.
- First-price shade on the private premium: apply some downward shade to the gap between market anchor and private ceiling. A full 20% shade on the £18k premium → bid £832k + £14k = £846k. A 50% shade → bid £832k + £9k = £841k.
- Calibrate by competition intensity: 4 other serious bidders in a 12-day market is strong competition. This argues for bidding closer to your true private value to stay competitive, not for maximal shading.

**Final recommendation: £836,000.**

This is:
- £56k above list price (the price signal in competitive markets is important to sellers)
- £14k above the top comparable (justified by your private value premium)
- £14k below your stated ceiling (preserving rational shading in a first-price auction)
- Likely at or above the second-highest bid if comparable buyers are anchoring on the £795k–£840k range

If winning at all costs within your ceiling matters — for example, if you have strong reasons to avoid the search costs and emotional toll of losing and re-searching — bid £845k. This is close enough to your true ceiling that you preserve small shading while making your offer highly competitive. Bidding your full £850k is a legitimate choice if you are genuinely indifferent to paying £850k vs. £836k but highly averse to losing.

---

**Round Number Trap**

Avoid bids ending in round numbers (£800k, £820k, £840k, £850k). Research on sealed-bid auctions consistently shows that bids ending in non-round numbers (£836k vs. £840k) suggest a deliberate calculation rather than a anchored estimate, and often win ties against identical round-number bids when sellers use non-price factors. The £836k recommendation is intentionally non-round.

---

**Designer Recommendations** *(not applicable — this is a buyer's analysis)*

If you were designing this process as a seller: a transparent ascending auction (English format) would likely maximise your sale price in a 5-bidder competitive market, because it forces bidders to reveal their values sequentially and may raise the second-highest bidder's valuation above what they'd bid in a sealed format. The seller's agent's choice of sealed bid is common in real estate practice but not the revenue-maximising format from a theoretical standpoint.

---

## Related skills

- [`/game-theory-mechanism-design`](mechanism-design.md) — the general framework for designing rule systems, including auction design
- [`/game-theory-equilibrium`](equilibrium.md) — equilibrium analysis of specific auction formats
- [`/probability-expected-value-calculation`](../probability/expected-value-calculation.md) — when the decision is primarily about expected value under uncertainty, not strategic interaction
