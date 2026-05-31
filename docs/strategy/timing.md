# `/s4h-strategy-timing`

> *Timing exists in everything. When you are able to observe timing thoroughly, you can make use of it.*

**Category:** [Strategy](README.md) · **Command:** `/s4h-strategy-timing` · **Source:** Miyamoto Musashi, *The Book of Five Rings*; Sun Tzu, *The Art of War*

---

## What it does

Analyzes whether to act now or wait, reads the opponent's rhythm to find when they are most off-balance, and identifies the specific trigger conditions that tell you the right moment has arrived. The output is not just "act" or "wait" — it is a precise statement of what must be true before acting, and which error (too early vs. too late) is more recoverable.

The framework draws on Musashi's concept of the interval — the moment when your opponent is committed, off-balance, or mid-transition — and Sun Tzu's water metaphor: adapt to the terrain continuously rather than acting on a fixed internal schedule.

---

## When to use it

- A product, move, or announcement is ready but external conditions feel uncertain
- A competitor has just moved and you're deciding whether to respond immediately or wait
- A window of opportunity seems to be closing and you're not sure whether to act now or whether the urgency is imagined
- A relationship or organizational situation requires a difficult conversation and you're not sure when to have it
- A negotiation is approaching and you're deciding when to make your opening move or first concession

---

## When *not* to use it

**Don't use timing analysis to rationalize indefinite delay.** "The moment isn't right" is a legitimate conclusion — sometimes. It is also the most comfortable story to tell yourself when acting is difficult. If your timing analysis produces "keep waiting" three times in a row without identified trigger conditions, the analysis is probably covering for something else. Name what's actually holding you back.

**Don't confuse timing with preparation.** If the real issue is that you aren't ready — the position isn't built, the intelligence isn't gathered, the product isn't done — that is a preparation problem, not a timing problem. The nearest neighbor: `/s4h-strategy-positioning` — which addresses whether you've done the work that makes the timing right when it arrives.

---

## Full example

**Input:**
> We have a new product feature ready to ship — it's been in the oven for three months, genuinely differentiated, and we were planning to launch next week. Then yesterday, a major competitor announced their own version of this feature, launching in six weeks. Should we rush to launch before them, or does that change our plan?

---

**Output:**

### Timing Analysis

**Conditions Favoring Action Now**

- *First-mover advantage is real in this category:* If the feature is genuinely differentiated and your target users will make a "who has this?" comparison, shipping first means being the definition of the feature rather than a comparison to the competitor's version
- *Announcement effect:* The competitor's announcement has created anticipation in the market. Shipping before their launch converts that anticipation into a demonstration that you were already there — reframes the competitive story from "following" to "ahead"
- *Internal momentum:* Three months of build is ready to ship. Holding it for strategic reasons when it's ready introduces a different kind of risk — team morale, feature drift, and the temptation to keep adding scope
- *Their six-week timeline is uncertain:* Announced ship dates for complex features slip. "Launching in six weeks" may mean launching in ten weeks, or in a degraded form. Announced competition is not the same as shipped competition

**Conditions Favoring Waiting**

- *Launch quality matters more than launch timing in this segment:* If your differentiation is quality, a rough launch under deadline pressure undermines the thing you're competing on
- *Six weeks is not zero weeks:* You have time. The window is not closing today. A two-week delay for a significantly better launch is not the same as waiting until after they ship
- *If your feature is genuinely differentiated, it doesn't need to beat their announcement:* First-mover advantage applies to feature parity races. If your version does something theirs doesn't, the comparison is favorable regardless of sequence

**Situation Type**

**Flowing** — but not at emergency speed. Conditions are changing: the competitor's announcement has shifted the market conversation and created a clock. However, the window is six weeks long, not six days. This is a flowing situation that favors acting within a measured timeline (2–3 weeks), not panic shipping next week.

**Opponent's Rhythm**

The competitor has just committed publicly to a six-week ship date. That commitment creates several interval opportunities:

- *They are in their most resource-constrained phase right now:* The announcement created external expectation they now must meet. Their team is heads-down and not in a position to respond to your launch with a counter-move
- *Their design and messaging is locked:* Whatever they announced is what they're building to. If you ship first with genuine differentiation, they cannot easily pivot their messaging to acknowledge it without looking reactive
- *The interval for them is the gap between announcement and ship:* If you launch in this interval, you get market response and case studies before they have a product. Musashi's principle: act when they are committed and cannot course-correct

**Cost Asymmetry**

| Error | Cost | Recoverable? |
|---|---|---|
| Ship too early (rough launch, bugs, incomplete) | Reputation hit in target segment; first-mover story undermined by poor quality; team morale | Moderately — can patch and recover, but initial impression matters in a tight segment |
| Ship after competitor launch | Not first; comparison framing is theirs to set; press coverage goes to them | Yes — if your feature is genuinely differentiated, sequence matters less than people think |

The cost asymmetry here is moderate rather than severe. Neither error is catastrophic. The relevant question is: can you ship with the quality that supports your differentiation story within 2–3 weeks? If yes, act now. If shipping at quality requires 5–6 weeks, the first-mover advantage from squeezing in before their launch is not worth the quality cost.

**Recommended Timing**

**Act within 2 weeks, not next week and not after their launch.**

Trigger conditions for this:
- "Ready to ship" means: the feature works reliably in production conditions, the core differentiation is fully functional, and your support team is prepared for questions
- Do not ship if the launch would require hiding or disclaiming the parts that aren't ready — that is a quality problem masquerading as a timing decision
- Do ship if the feature is genuinely ready and you're holding it for reasons that are really about nerves, not quality

The competitor's announcement changes the strategic context. It does not change your product. Ship the product you were going to ship — just on a slightly compressed timeline that captures the interval before their launch.

---

## Related skills

- [`/s4h-strategy-intelligence`](intelligence.md) — Timing decisions depend heavily on the accuracy of your picture of the competitor's current state
- [`/s4h-strategy-positioning`](positioning.md) — Sometimes the right timing is simply "when your position is ready" — distinguish timing from preparation
- [`/s4h-strategy-force-economy`](force-economy.md) — In flowing situations with closing windows, the minimum effective launch beats the maximum-effort launch that misses the window
- [`/s4h-strategy-victory`](victory.md) — Knowing your victory conditions (first-mover matters / quality matters more than sequence) clarifies the timing trade-off
