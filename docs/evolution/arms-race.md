# `/evolution-arms-race`

> *The cheetah gets faster, the gazelle gets faster. At the end, both are exhausted and the distance between them is unchanged.*

**Trigger:** `/evolution-arms-race`

---

## What it does

Analyses coevolutionary escalation — the dynamic where two parties continuously adapt to each other in cycles, creating a feedback loop of capability investment that may help neither in relative terms. Maps the escalation cycle structure, assesses the asymmetries that determine who prevails if arms-racing continues, evaluates the four exit conditions (exhaustion, stalemate, decoupling, negotiated exit), and delivers a strategic recommendation about whether to escalate, decouple, or seek a negotiated stand-down.

Richard Dawkins and John Krebs identified the core logic in 1979: in predator-prey and competitor-competitor coevolution, each party's adaptations become the primary selection pressure on the other. The result is escalating capability investment with no natural stopping point. Van Valen's Red Queen hypothesis names the treadmill quality: both parties must keep running just to maintain their relative position.

---

## When to use it

- "We improve our product and they match us within six months — it never sticks"
- An industry-wide trend of rising costs (advertising spend, sales headcount, feature counts) with no clear market-share gain for either party
- A price war that is eroding margin for all participants
- "Our hiring process keeps escalating compensation expectations across the industry and none of us are getting better talent for it"
- You suspect you're in a race you can't win and want to understand whether there's an exit

---

## When *not* to use it

**Don't use arms race analysis when parties are responding to the same external pressure, not to each other.** If two companies are both adding AI features because buyers are demanding AI — not because each is responding to the other's AI features — this is parallel adaptation to a shared external pressure, not a coevolutionary arms race. The distinction matters: in a true arms race, improving your capability increases competitive pressure on the other party, which accelerates their response. In parallel adaptation, improving your capability reduces pressure on both parties by satisfying the shared demand signal.

**An arms race analysis does not imply you should stop competing.** It maps the structure of the dynamic to surface the costs and asymmetries. Sometimes the right answer is to escalate — if you hold a structural cost advantage in the escalating dimension, accelerating the race is strategically rational. The tool surfaces what the arms race is costing you and whether the asymmetries favour you; it does not prescribe de-escalation by default.

The nearest neighbor: [`/game-theory-prisoners-dilemma`](../game-theory/prisoners-dilemma.md) — when the arms race has a cooperation structure (both parties would benefit from de-escalating but neither can trust the other to stop first), the prisoners' dilemma tool handles the structural analysis of why mutual restraint fails.

---

## Example

**Input:**
> Two UK meal-kit delivery companies — FreshBox and NourishKit — have been locked in an escalating promotional war for three years. Both started offering discounts to new customers. Then both extended discounts to existing customers to prevent churn. Then both launched referral schemes. Then both introduced loyalty programmes. Each new programme was matched by the other within a quarter. Customer acquisition cost has risen 60% for both. Contribution margins are under pressure at both companies. Neither has meaningfully shifted relative market share. The CFO of FreshBox wants to understand what is happening, whether it can be stopped, and what to do.

---

**Output:**

**Coevolving Parties**
FreshBox and NourishKit are the coevolving parties. Each company's promotional investment is the primary selection pressure on the other: when one runs a discount scheme, the other risks churn and acquisition loss unless it matches. The external environment (consumer price sensitivity, cost of ingredients) is a background pressure but not the primary driver of escalation — the escalation is triggered by competitive response, not by customer demand alone.

---

**Escalation Cycle**

| Round | FreshBox's Move | Pressure Created for NourishKit | NourishKit's Response | Pressure Created for FreshBox |
|---|---|---|---|---|
| 1 | 40% off first three boxes for new customers | Risk of losing new customer pipeline to FreshBox's better offer | Match: 40% off first three boxes | Both acquiring at high discount; pressure to extend further |
| 2 | Extended: 20% off for first three months | Risk of retaining customers becomes harder; FreshBox's customers stay longer | Match: 20% off first three months | Both losing margin on existing customer base |
| 3 | Referral programme: £20 per referral | Referral network advantage; FreshBox acquires referral-sourced customers | Match: £20 referral scheme | Referral costs layered on top of discount costs |
| 4 | Loyalty tier: 15% permanent discount at 6 months | Churn risk among NourishKit's 6-month customers | Match: loyalty programme launch | Both committed to permanent margin reduction for long-tenure customers |

**Cycle Trajectory:** Accelerating. Each round adds a new mechanism on top of existing ones rather than replacing them. The promotional stack is growing, not cycling.

---

**Asymmetry Assessment**

| Asymmetry Type | FreshBox | NourishKit | Advantage Holder |
|---|---|---|---|
| Resource depth | [assume roughly equal from prompt] | [roughly equal] | Roughly equal |
| Cost per escalation unit | Slightly lower (larger supplier relationships, small supply chain advantage) | Slightly higher | FreshBox, marginally |
| Capability ceiling | Near — margin is approaching floor; further discounting is existentially dangerous | Near — same structural constraint | Roughly equal; both near the ceiling |
| Response lag | Historically 1 quarter | Historically 1 quarter | Equal — no meaningful lag asymmetry |
| Commitment asymmetry | Neither holds structural advantage in this dimension; both existentially dependent on subscription revenue | Same | Neither — this is a symmetric treadmill |

---

**Exit Condition Assessment**
The four exit types:

**Exhaustion** — Possible but slow. Both companies are near margin floors; a third round of escalation risks existential damage to either or both. The ceiling is close, which makes exhaustion the likely terminal outcome if nothing changes. Timeline: 12–18 months before one party faces a funding crisis or strategic pivot forced by investor pressure.

**Stalemate** — Already achieved in relative terms (neither is gaining share), but it is an *expensive* stalemate that continues to escalate rather than stabilise. A true stable stalemate would require both parties to stop adding new mechanisms.

**Decoupling** — Available in principle. If FreshBox competes on dimensions where NourishKit cannot or will not follow — product quality, menu variety, nutritionist-curated content, specific dietary niches — it exits the promotional dimension and competes on a different axis. NourishKit cannot profitably match a quality/premium repositioning while maintaining its current price position. Decoupling requires absorbing a short-term customer acquisition dip during the repositioning but breaks the cycle.

**Negotiated exit** — Legally and practically difficult. Direct price coordination between competitors is regulated. Indirect signalling (both companies publicly announcing "no new discount schemes this quarter") is the closest available mechanism, but trust is low after three years of escalation.

**Most likely exit:** Decoupling by FreshBox, if the CFO acts; exhaustion of one or both parties, if the status quo continues.

---

**Red Queen Assessment**
Neither party has gained relative market share through three years of escalating promotional investment. Customer acquisition cost has risen 60% for both. Contribution margins are under pressure at both. This is a textbook coevolutionary treadmill: both parties are running faster to stay in the same place.

Who benefits from the arms race continuing: promotional platform vendors and marketing agencies (more spend flowing through their tools), ingredient suppliers (stable volume regardless of margin), and any third entrant watching both incumbents destroy their unit economics before entering.

---

**Strategic Implication**
FreshBox holds no meaningful asymmetric advantage in the promotional dimension — cost structures and response lags are roughly equal. Continuing to escalate is strategically irrational: it will not produce relative gain and will likely produce exhaustion for both. The recommendation is **decoupling** — competing on a dimension where NourishKit cannot profitably match.

The decoupling move: reposition FreshBox as a premium quality product (nutritionist-designed menus, higher-quality ingredients, a specific dietary identity). Announce "ending first-time discounts" as a brand signal, not just a cost-saving measure. This absorbs near-term acquisition friction but breaks the cycle and exits the treadmill. NourishKit matching a quality premium would require supply chain investment and brand repositioning that is incompatible with its current promotional positioning — it cannot follow without contradiction.

Risk: FreshBox loses acquisition volume short-term as the promotional moat disappears. Mitigation: quality repositioning retains a different, higher-LTV cohort of customers who are less price-sensitive and more loyal — breaking the cycle of discount-seeking churn that makes the arms race self-perpetuating.

---

## Related skills

- [`/game-theory-prisoners-dilemma`](../game-theory/prisoners-dilemma.md) — analyse why mutual de-escalation fails even when both parties would prefer it
- [`/evolution-niche`](niche.md) — map the dimensions along which decoupling could move FreshBox to a different competitive niche
- [`/game-theory-mechanism-design`](../game-theory/mechanism-design.md) — design an exit mechanism that makes mutual stand-down credible
