# `/s4h-game-theory-iterated`

> *In a one-shot game, defect. In a repeated game with patient players, cooperate first — and mean it.*

**Category:** [Game Theory](README.md) · **Command:** `/s4h-game-theory-iterated` · **Source:** Robert Axelrod, *The Evolution of Cooperation* (1984); Folk Theorem (Aumann, Shapley)

---

## What it does

Analyses repeated strategic interactions — how cooperation can be sustained, how it breaks down, how to recover it, and which strategies hold up over time. Identifies the conditions (patience, observability, credible punishment) that make cooperation a rational equilibrium and prescribes the right strategy for the specific relationship.

The central result: in a repeated game with sufficiently patient players, mutual cooperation can be sustained as a Nash equilibrium — not because players are altruistic, but because future consequences make defection unprofitable.

---

## When to use it

- You're in an ongoing relationship and asking whether to cooperate, retaliate, or restore trust
- A long-term partnership has experienced a defection — deliberate or possibly accidental — and you need to decide how to respond
- You want to know whether the conditions for sustainable cooperation exist in this relationship
- You're trying to understand why a repeated interaction keeps producing mutual defection when both parties would benefit from cooperation
- You want to know which strategy — Tit for Tat, Grim Trigger, Generous Tit for Tat — best fits this relationship

---

## When *not* to use it

**Don't use iterated analysis for one-shot interactions.** If the parties will not interact again — a single auction, a transaction with a stranger, a last-period decision — then the shadow of the future is absent and standard one-shot analysis applies. Cooperation is not individually rational when there is no future to leverage. The prisoner's dilemma analysis applies directly.

**Don't assume repetition solves everything.** Repetition enables cooperation only when the discount factor is sufficiently high. Impatient players, uncertain relationship continuity, high time pressure, or impending relationship exit all reduce the shadow of the future and undermine cooperation even in repeated games. Repetition is the precondition; patience and observability are the enablers.

The nearest neighbor: [`/s4h-game-theory-prisoners-dilemma`](prisoners-dilemma.md) — the one-shot version of this problem. Start there to understand the structural logic; come here to understand how cooperation can be sustained over time.

---

## Full example

**Input:**
> Two co-founders, Maya and Jin, started a company 3 years ago. They had a strong working relationship until six months ago, when Jin missed a critical product commitment — a key feature that a major enterprise customer was counting on. The deal fell through, costing the company roughly £200k in ARR. Jin says it was down to resourcing constraints he flagged but Maya didn't act on. Maya believes Jin over-promised and under-communicated the risk. The company is still alive, relationships with the team are strained, and a key investor meeting is in 6 weeks. Neither wants to exit but neither fully trusts the other right now.

---

**Output:**

### Iterated Game Analysis

**Stage Game**

The one-shot interaction between Maya and Jin in any given decision moment has the following structure: both must choose whether to *fully invest* (share information openly, honour commitments, flag risks early, support each other in front of the team) or *hold back* (protect their position, undercommunicate, hedge commitments).

Approximate payoffs at each combination:
- Both invest fully (CC): best outcome — decisions are better, team trust is maintained, the company performs well. Estimated value: 100 for each.
- One invests, one holds back (CD/DC): the investing party is exposed and vulnerable; the holding-back party has short-term protection but the company suffers and the team loses confidence. Estimated value: 40 for the investor, 70 for the holdback.
- Both hold back (DD): the company limps along with slow decisions, poor information flow, and team morale eroding. Estimated value: 55 for each — worse than mutual investment, but each avoids acute vulnerability.

---

**Cooperation in Stage Game**

Cooperation (mutual full investment) is **not** a Nash equilibrium of the one-shot game. In any single interaction: if Maya is fully investing, Jin does better holding back (70 vs. 100 if also investing, but here he avoids risk). The incentive to hold back exists regardless of what the other does — which is why the relationship has degraded.

This is precisely why repetition matters: it is the only mechanism that makes cooperation rational here.

---

**Discount Factor Assessment**

*Time horizon:* Neither founder has exited. Both have equity, active roles, and the investor meeting is six weeks out — creating immediate shared stake in near-term cooperation. The relationship is expected to continue. Moderately high discount factor on this dimension.

*Relationship value:* Both founders lose significantly if the company fails or if the co-founder relationship collapses in front of investors and the team. The cost of continued mutual hold-back is not just the 55/55 stage game payoff — it is accelerating decline and likely company failure. This raises the effective discount factor substantially.

*Continuation probability:* Currently uncertain. The relationship has been damaged and neither founder is fully confident the other will still be there in 12 months. This is a critical vulnerability: *if either party believes the relationship is likely to end, they have less incentive to cooperate now*, which is self-fulfilling. The uncertainty itself is a threat to cooperation.

*Impatience:* High in the short term. The £200k loss, the strained team relationships, and the impending investor meeting create immediate pressure that may shorten time horizons. Impatient or crisis-driven thinking raises the temptation to play for short-term position at the expense of long-term cooperation.

**Overall assessment: Moderate discount factor.** Sufficient in principle for cooperation to be sustained, but fragile given current uncertainty and short-term pressure.

---

**Folk Theorem Conditions**

*Discount factor sufficient:* **Marginal.** In principle sufficient given shared equity and company stakes; in practice reduced by uncertainty about relationship continuity.

*Defection observable:* **Partial.** Major defections (public undermining, missing critical commitments) are observable. Minor defections (undercommunicating risk, slow information sharing, hedging in investor conversations) are harder to detect promptly. Detection lag weakens punishment credibility.

*Punishment credible:* **Partially credible.** Retaliation (matching the other's hold-back stance) is individually rational for both parties, so punishment is technically credible. However, punishment also harms the punisher — both founders suffer when the company underperforms — which means punishment is painful to execute and both parties have incentive to let defections slide rather than escalate.

**Folk theorem conditions are met but strained.** Cooperation is possible; it is not stable without deliberate reconstruction.

---

**Recommended Strategy: Generous Tit for Tat**

Standard Tit for Tat — cooperate first, then mirror exactly — is the right strategy for stable, high-trust relationships where defections are unambiguous and deliberate. It is the wrong strategy here.

The specific vulnerability in this situation: the original defection (Jin's missed commitment) is ambiguous. Jin believes it was partly Maya's failure to respond to flagged risks. Maya believes it was Jin's over-promising. In an environment with this level of ambiguity about who defected and why, standard Tit for Tat will produce a retaliation spiral: Maya retaliates for the missed commitment; Jin retaliates for what he perceives as an unfair attribution; Maya retaliates again. The spiral is fuelled by different interpretations of the same event, not by ongoing bad intent.

**Generous Tit for Tat** is better suited: cooperate first, mirror defections with probability ~90% (sometimes cooperate even after a defection), and occasionally return to cooperation even without explicit reciprocation. In noisy environments — where it's unclear whether a bad outcome reflects deliberate defection or honest failure — Generous Tit for Tat avoids the spiral by introducing occasional cooperative signals that allow both parties to de-escalate.

Practically, this means:
- **Both founders choose to cooperate first.** Whoever moves first creates the opening; waiting for the other to go first is a coordination trap.
- **Attribute the original defection generously.** The mechanism design question (who was responsible) matters for future process; the iterated game question (how to restart cooperation) requires treating the past defection as at least partly ambiguous and accepting a partial restart.
- **Make cooperation visible.** Actions that are ambiguous don't reinforce the cooperative equilibrium. Both founders should make their investment explicit and legible: "I'm flagging this risk early and explicitly handing it to you" is not a sign of weakness — it is a public cooperative signal.

---

**Defection Spiral Warning Signs**

- Either founder stops proactively sharing difficult information (undercommunication is the first sign of hold-back)
- Accountability language shifts from "we" to "I / they" in team and investor conversations
- Disagreements on product decisions become protracted and politically charged rather than resolved quickly
- Either founder begins separately briefing board members or investors without the other present

---

**Recovery Path**

The relationship is damaged but recoverable. The sequence:

1. **Name the game explicitly (in private).** Both founders need a direct conversation that names the dynamic: "We're in a hold-back equilibrium and it's going to kill the company. Neither of us wants that. What would it take for each of us to fully re-engage?" This is not a blame conversation — it is a coordination conversation.

2. **Establish a process fix for the original failure.** The missed commitment had a real cause. Separate the process question (how do we ensure critical commitments are flagged and escalated before they fail?) from the trust question (do we trust each other?). Fixing the process creates common ground and prevents the same failure mode from recurring.

3. **Cooperate publicly and immediately.** Before the investor meeting — ideally within two weeks — both founders need to execute a visible joint action: a shared team communication about direction, a co-presented product decision, a joint investor briefing. These public cooperative signals are commitment devices: they raise the cost of subsequent defection by making the cooperative stance part of the public record.

4. **Treat the next six weeks as a test period, not a final resolution.** Full trust is rebuilt through a pattern of mutual cooperation, not a single conversation. Consistent small-scale cooperation across the next investor cycle creates the track record. Evaluate the relationship again after the investor meeting with clearer evidence of whether cooperation is being sustained.

---

## Related skills

- [`/s4h-game-theory-prisoners-dilemma`](prisoners-dilemma.md) — the one-shot structure underlying this analysis
- [`/s4h-game-theory-signaling`](signaling.md) — how to make cooperative intent credible through costly signals and commitment devices
- [`/s4h-strategy-timing`](../strategy/timing.md) — when to act, when to signal, and when to wait in a fragile equilibrium
