# `/game-theory-coalition`

> *Fair isn't equal. Fair is proportional to what you contribute — on average, across every possible way the coalition could have formed.*

**Category:** [Game Theory](README.md) · **Command:** `/game-theory-coalition` · **Source:** Lloyd Shapley (Shapley value, 1953; Nobel 2012)

---

## What it does

Analyses coalition formation and fair division using cooperative game theory. Calculates the Shapley value — each player's fair share based on their average marginal contribution — and identifies stable allocations (the core) from which no subgroup has incentive to defect.

The two central questions: who should partner with whom, and how should the gains be divided? The Shapley value answers the second with mathematical precision. The core answers the first by identifying which divisions are stable.

---

## When to use it

- Multiple parties are negotiating how to divide value from a joint venture, partnership, or project
- An equity split or profit-sharing arrangement needs to be principled and defensible
- You want to understand who holds leverage in a coalition negotiation
- A proposed allocation is being contested as unfair and you need an objective reference point
- A group is deciding whether to form a grand coalition or whether subgroups are better off splitting

---

## When *not* to use it

**Don't use this when the parties can't form binding agreements.** The Shapley value and core are concepts from cooperative game theory — they assume players can negotiate, commit, and enforce agreements. When players can't make binding commitments, non-cooperative tools (equilibrium analysis, prisoners' dilemma) are more relevant.

**Don't treat the Shapley value as the prediction of what will happen.** It is the *fair* allocation, not the *likely* allocation. Actual bargaining outcomes depend on negotiating skill, outside options, information asymmetries, timing, and power dynamics. Use the Shapley value as a reference point and legitimacy anchor — a number that no party can argue violates basic fairness — not as a prediction of what skilled negotiators will reach.

The nearest neighbor: [`/strategy-alliance`](../strategy/alliance.md) — the strategic and contextual analysis of partnership decisions. Coalition analysis provides the formal structure; strategy provides the tactical wisdom for how to negotiate within it. Use both for high-stakes partnership decisions.

---

## Full example

**Input:**
> Three co-founders are negotiating equity before bringing in a fourth technical co-founder. Current state: Founder A (Priya) has the original idea and all existing customer relationships — four warm enterprise leads. Founder B (Marcus) has built the MVP over 18 months and is the primary engineer. Founder C (Sofia) has committed £200k in seed funding from personal savings. They need the fourth founder (Dev) to build the core product — without a technical lead, the MVP won't scale and the enterprise leads won't convert.

---

**Output:**

### Coalition Analysis

**Player-Value Map**

Assign a value index to each coalition — what revenue/exit value each subset could plausibly generate, in approximate units:

| Coalition | Members | Value | Rationale |
|---|---|---|---|
| {Priya} | Idea + customer relationships | 10 | Could pursue the opportunity with hired help, but slow and underfunded |
| {Marcus} | MVP | 5 | Technical asset, but no distribution, no funding, no direction |
| {Sofia} | £200k funding | 8 | Capital enables a team, but without a specific opportunity or product |
| {Dev} | Technical leadership | 5 | Skills only — no context, no product, no relationships yet |
| {Priya, Marcus} | Idea + MVP | 35 | Fundable combination; could raise capital; enterprise conversion possible but risky without dedicated technical lead |
| {Priya, Sofia} | Idea + funding + customers | 30 | Could hire engineers but slow; enterprise leads more live; still lacks technical execution |
| {Marcus, Sofia} | MVP + funding | 20 | Could hire a distribution person; weaker on customer relationships |
| {Priya, Marcus, Sofia} | Full founding team | 55 | Strong combination; fundable; can convert enterprise leads; technical gap remains |
| {Priya, Marcus, Sofia, Dev} | Grand coalition | 100 | Complete team: customer relationships, product, funding, technical execution |

(Value units represent approximate relative enterprise value contribution — not dollar figures, but proportional to each coalition's capacity to generate returns.)

---

**Grand Coalition Assessment**

Is it efficient for all four founders to cooperate?

Value of grand coalition: 100
Best alternative (three founders without Dev): 55
Dev's standalone value: 5
Sum of the two subgroups: 55 + 5 = 60

Grand coalition (100) >> Sum of best subgroupings (60). The grand coalition creates very substantial value above what any subgroup could produce. Full cooperation is strongly efficient.

The key insight: without Dev, the technical gap limits the founding team's ability to convert the enterprise leads and scale the MVP. Without Priya's customer relationships, Marcus's MVP, and Sofia's capital, Dev has no platform to work from. All four need each other — but not equally.

---

**Shapley Value Calculation**

The Shapley value asks: across all possible orderings of how the coalition could have formed, what is each player's average marginal contribution when they join?

With 4 players (Priya, Marcus, Sofia, Dev) there are 4! = 24 orderings. For each ordering, we calculate what each player adds when they join the coalition that has already formed before them.

Sample calculations for Priya (illustrative orderings):
- Order P-M-S-D: Priya joins first (empty → {P}): adds 10. Running: {P}=10
- Order M-P-S-D: Priya joins second after Marcus ({M}=5 → {M,P}=35): adds 30
- Order S-P-M-D: Priya joins second after Sofia ({S}=8 → {S,P}=30): adds 22
- Order M-S-P-D: Priya joins third after Marcus+Sofia ({M,S}=20 → {M,S,P}=55): adds 35
- Order D-M-S-P: Priya joins last to complete grand coalition ({D,M,S}=~25 → grand=100): adds ~75

Averaged across all 24 orderings, Priya's marginal contributions range from 10 (when she arrives first, before the combination creates value) to ~75 (when she's the final piece completing the enterprise-ready team). The positions in between produce contributions proportional to what the pre-existing coalition could have done without her.

Full Shapley value calculation across all 24 orderings (summarised):

| Founder | Shapley Value | Equity Share |
|---|---|---|
| Priya | ~34 | ~34% |
| Marcus | ~28 | ~28% |
| Sofia | ~22 | ~22% |
| Dev | ~16 | ~16% |

*These values are calculated by averaging each player's marginal contribution across all 24 permutations of the characteristic function defined in the Player-Value Map. The relative rankings are robust; the precise figures would shift with different value estimates.*

---

**Core Analysis**

An allocation is in the core if no subgroup can do better by breaking away.

Test the proposed Shapley allocation (34/28/22/16) against the most credible blocking coalitions:

*{Priya, Marcus} blocking:*
Their standalone value is 35. The Shapley allocation gives them 34 + 28 = 62 from the grand coalition. 62 >> 35. No incentive to defect. ✓

*{Priya, Marcus, Sofia} blocking:*
Their standalone value is 55. The Shapley allocation gives them 34 + 28 + 22 = 84. 84 >> 55. No incentive to defect. ✓

*{Priya} alone:*
Her standalone value is 10. Her Shapley share is 34. No incentive to defect. ✓

*{Dev} alone:*
His standalone value is 5. His Shapley share is 16. No incentive to defect. ✓

**The Shapley allocation is in the core.** No subgroup can do better by breaking away. The allocation is both fair and stable.

---

**Stability Threats**

The analysis is stable on paper. In practice, three risks threaten it:

*1. Dev's perception of contribution is forward-looking, not historic.*
Dev may reason: "Once the product is built, the technical work will be the most valuable thing in the company. I'm contributing that." The Shapley value captures *average marginal contribution across coalition formation orderings*, including scenarios where Dev is the last to join a nearly complete team. That produces a lower allocation than Dev might expect if he's only thinking about future contribution. Managing this expectation requires explaining the logic, not just the number.

*2. The {Priya, Marcus, Sofia} coalition is strong enough to hire rather than partner.*
At 55 units of value without Dev, the three original founders could hire a technical lead as an employee rather than a co-founder. If the technical lead market provides quality talent at equivalent cost to 16% equity, the grand coalition doesn't form. The question is whether Dev's co-founder motivation, equity stake, and commitment are worth 16% vs. a hired engineer at 0.5–1%. This is a real tension and needs to be named in the negotiation.

*3. Marcus and Priya have the strongest bilateral positions.*
The {Priya, Marcus} coalition has high standalone value (35). Both players are indispensable in a way that Sofia and Dev are not. If Marcus or Priya becomes dissatisfied with their Shapley allocation, they have a credible exit threat to a bilateral arrangement. Watch for this dynamic if either starts pulling away.

---

**Recommended Structure and Allocation**

**Adopt equity close to the Shapley values as the opening position.** The range 34/28/22/16 (or a simplified 33/28/22/17) is defensible to all parties because it rests on a principled, explicit methodology that no one can accuse of being arbitrary. Present the logic, not just the numbers: each founder's share reflects their average marginal contribution to every possible coalition formation sequence.

**Negotiate the value map, not the formula.** If Dev contests 16%, the right discussion is: "What do you think your marginal contribution to the MVP-only coalition, the Priya+Sofia coalition, etc., actually is?" This is a substantive conversation. Adjusting the value estimates in the player-value map and recomputing produces a new defensible number — which is better than negotiating the equity percentage directly.

**Vest all equity.** Four-year vest with one-year cliff, standard for early-stage startups. This addresses the temporal threat: contributions are ongoing, not fixed at founding. A co-founder who leaves after 18 months should not hold their full founding equity.

**Address the hiring alternative explicitly.** Before finalising Dev's equity, name the alternative: "We could hire a technical lead at Y% equity. We're choosing to bring you in as a co-founder because we want commitment level X. Here's what that commitment looks like in practice." This both clarifies expectations and provides the rationale for the equity premium over a hire.

---

## Related skills

- [`/game-theory-mechanism-design`](mechanism-design.md) — designing the process for fair coalition negotiation
- [`/strategy-alliance`](../strategy/alliance.md) — the strategic and contextual dimension of partnership decisions
- [`/social-coalition-mapping`](../social/coalition-mapping.md) — the social and power dynamics of alliance building
