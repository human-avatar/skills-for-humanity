# `/s4h-game-theory-prisoners-dilemma`

> *Individual rationality and collective rationality diverge. That gap — not bad faith — is what makes cooperation hard.*

**Category:** [Game Theory](README.md) · **Command:** `/s4h-game-theory-prisoners-dilemma` · **Source:** Flood & Dresher (1950); Robert Axelrod, *The Evolution of Cooperation* (1984)

---

## What it does

Diagnoses cooperation failures by verifying the prisoner's dilemma structure, then identifies the specific conditions — shadow of the future, trigger credibility, payoff structure — that determine whether cooperation is sustainable. Produces concrete prescriptions for changing the game so cooperation becomes individually rational.

The prisoner's dilemma explains why intelligent, rational people repeatedly produce outcomes that are bad for everyone. The problem is not stupidity or bad faith — it is a payoff structure where defection is individually dominant. Naming the structure precisely is the first step to changing it.

---

## When to use it

- Everyone in a market or group is taking an action that makes everyone worse off, but each individual still does it
- You're deciding whether to cooperate with a competitor, a counterpart, or a colleague — and you're not sure whether to trust that they will
- A relationship or partnership has broken down and you want to diagnose why
- You're designing a policy, incentive system, or industry norm and want to ensure it doesn't create a race to the bottom
- You want to understand the structural logic of arms races, price wars, collective action failures, or commons tragedies

---

## When *not* to use it

**Don't apply this framework when defection isn't dominant.** The prisoner's dilemma requires that defection is the best strategy *regardless of what others do*. If cooperation is already individually rational — you'd cooperate even if you were certain your partner would defect — then the structure is different and the analysis changes. Confirm condition (b) before proceeding.

**Don't use prisoners' dilemma analysis as an excuse for defecting.** The framework diagnoses the structure; it doesn't prescribe defection. Many prisoners' dilemma situations have coordination solutions that make mutual cooperation individually rational — the point of the analysis is to find them, not to validate the bad equilibrium.

The nearest neighbor: [`/s4h-game-theory-iterated`](iterated.md) — the formal analysis of how cooperation is sustained in repeated interactions. Prisoners' dilemma analysis identifies the problem and the structural levers; iterated analysis identifies the precise strategies that sustain cooperation over time. For high-stakes ongoing relationships, use both.

---

## Full example

**Input:**
> Two software contractors — call them Alex and Sam — operate in the same regional market for mid-market SaaS implementations. They both know that if they both price competitively at industry rates (~£150/hr), both make reasonable money and the market is healthy. But each is tempted to undercut: if Alex prices at £120/hr and Sam doesn't, Alex wins more bids. The problem is they both keep undercutting each other. Margins are eroding and neither is actually winning more work.

---

**Output:**

### Prisoner's Dilemma Analysis

**Structure Verification**

*Condition (a): Mutual cooperation is better than mutual defection.*
At industry rates (£150/hr), both contractors win their share of work at healthy margins. At discounted rates (£120/hr), both win their share of work at eroded margins. Mutual cooperation (both price at £150) produces better outcomes for both than mutual defection (both price at £120). **Confirmed.**

*Condition (b): Defection is individually rational.*
If Sam prices at £150, Alex's choices: £150 (share the market at good margin) vs. £120 (win more bids at lower margin). With a significant enough volume gain from undercutting, £120 wins. If Sam prices at £120, Alex's choices: £150 (lose bids to cheaper Sam) vs. £120 (compete for bids at thin margin). £120 is better — at least Alex stays competitive. Either way: defection (£120) is Alex's better option. **Confirmed.** The same analysis applies symmetrically to Sam.

*Condition (c): Genuine temptation to defect.*
The temptation is real and large: winning incremental contracts by undercutting can look very attractive in any given month, especially when capacity is available. **Confirmed.**

**Verdict: Confirmed prisoner's dilemma.** The structure fully satisfies all three conditions.

---

**Payoff Map**

Approximate monthly revenue index (100 = normal profit at industry rates):

|  | **Sam: £150/hr** | **Sam: £120/hr** |
|---|---|---|
| **Alex: £150/hr** | 100, 100 | 70, 130 |
| **Alex: £120/hr** | 130, 70 | 75, 75 |

Both cooperate (£150, £150): 100 each — the best mutual outcome.
One defects (£120 vs. £150): the undercutter captures volume but at lower margin (130) while the other loses work (70).
Both defect (£120, £120): 75 each — both lose 25% of normal profit.

The dominant strategy for each is to price at £120, which lands both at 75. The cooperative outcome of 100 each is unreachable through unilateral action.

---

**One-Shot vs. Repeated Assessment**

This is a **repeated interaction**. Alex and Sam operate in the same market across multiple project cycles, are likely to encounter the same clients, and have industry visibility. Neither is exiting the market soon. This matters enormously: in a one-shot interaction, defection is unavoidable; in a repeated game, cooperation is potentially sustainable.

The key question shifts from "what should I do this project?" to "what pricing behaviour can be sustained across the relationship?"

---

**Shadow of the Future Analysis**

Several factors bear on how much the future weighs on today's decisions:

*High discount factor indicators (cooperation more sustainable):*
- Both contractors have long-run interest in the regional market — it's their primary revenue source
- Client relationships are visible and reputation matters — undercutting is observable over time
- Neither is under such acute financial pressure that this month's revenue dominates all future considerations

*Low discount factor indicators (cooperation fragile):*
- Project pipelines can be lumpy — during a slow month, the temptation to undercut to win a specific contract spikes
- There is no formal relationship between Alex and Sam — they haven't discussed pricing and have no mutual commitment

**Assessment: Moderate discount factor.** Cooperation is potentially sustainable but fragile, particularly during low-volume periods when short-term pressure increases.

---

**Trigger Conditions**

What constitutes defection in a cooperative equilibrium? In this market: pricing meaningfully below industry standard rates (say, more than 10% below the prevailing rate for comparable work) to win bids the other would otherwise compete for.

*Detection:* Moderate. Bid outcomes are often visible to both parties through shared client networks and word-of-mouth. There is typically a delay of weeks to months between defection and detection.

*Credibility of punishment:* Retaliation (matching the lower price) is individually rational — if Sam starts undercutting, Alex's best response is to match. This makes the punishment credible. However, retaliation also harms Alex, which means punishment is somewhat painful to execute.

Current status: the cooperative equilibrium has already broken down. Both parties are currently in the defection state (75, 75).

---

**Structural Prescriptions**

Ranked by feasibility and impact:

**1. Make the relationship explicit (highest impact, high feasibility)**
If Alex and Sam were to communicate — even informally — about the market dynamics they both recognise, it changes the game. Not a price-fixing agreement (which may have legal constraints) but a shared understanding that mutual undercutting is destroying both their margins. Making the game visible and naming the structure is often enough to shift behaviour. Simply having this conversation creates common knowledge of the cooperative equilibrium.

**2. Specialise to reduce direct competition (medium impact, high feasibility)**
If Alex and Sam differentiate — one focusing on a specific vertical, technology stack, or project size — the number of direct competitive bids drops. Fewer direct competitions reduce the temptation to undercut because they're rarely bidding for the same work. This shrinks the prisoner's dilemma game without requiring explicit coordination on price.

**3. Increase transparency of pricing (medium impact, medium feasibility)**
If prevailing market rates are more publicly visible — through industry associations, benchmarking tools, or shared rate cards — then undercutting is more visible and social enforcement becomes possible. The discipline of industry norms can function as a coordination mechanism.

**4. Shift to value-based pricing (medium impact, medium feasibility)**
Moving from hourly rates to fixed-project or outcome-based pricing changes the competitive dynamics. Clients are comparing total project cost and quality, not hourly rates — which makes direct undercutting harder and puts more emphasis on differentiation.

**5. Build a direct referral relationship (lower impact, high feasibility)**
If Alex and Sam refer overflow work to each other, they become collaborators on some dimensions and competitors on fewer. Introducing a cooperative element to the relationship raises the cost of defection (you lose referral flow) and creates shared interest in the other's success.

---

## Related skills

- [`/s4h-game-theory-iterated`](iterated.md) — formal analysis of strategies for sustaining cooperation over repeated interactions
- [`/s4h-game-theory-mechanism-design`](mechanism-design.md) — redesigning payoffs and rules to make cooperation individually rational
- [`/s4h-game-theory-equilibrium`](equilibrium.md) — mapping the full payoff matrix and confirming the Nash equilibrium
- [`/s4h-strategy-alliance`](../strategy/alliance.md) — the strategic dimension of cooperative relationships
