# `/game-theory-equilibrium`

> *Many Nash equilibria are collectively inefficient. Knowing where rational play lands — and why — is the prerequisite for changing it.*

**Category:** [Game Theory](README.md) · **Command:** `/game-theory-equilibrium` · **Source:** John Nash (1950); Thomas Schelling — focal points

---

## What it does

Maps the payoffs of a strategic interaction, finds all Nash equilibria (the stable outcomes where no player wants to deviate), and assesses whether the equilibrium is collectively efficient or whether rational play leads everyone to a worse outcome.

A Nash equilibrium is not the best outcome — it is the *stable* outcome. Players end up there not because it is optimal for everyone, but because no one, acting alone, can do better by switching. The analysis identifies where the game lands, whether that destination is good or bad, and what mechanisms could move players toward a better outcome if the equilibrium is inefficient.

---

## When to use it

- Two or more players are making strategic choices simultaneously (or you're deciding before seeing what they'll do)
- You want to predict where a competitive or cooperative interaction will stabilise
- You suspect the stable outcome is bad for everyone and want to understand why
- Multiple stable outcomes exist and you need to understand which one is likely
- You're designing an intervention and want to verify it actually changes the equilibrium

---

## When *not* to use it

**Don't use equilibrium analysis when there is no genuine strategic interaction.** If your outcome doesn't depend on what others choose, there is no game — equilibrium analysis adds complexity with no insight. The right tool is `/decision-option-mapping` or `/probability-expected-value-calculation`.

**Don't confuse the equilibrium with a recommendation.** The Nash equilibrium is descriptive, not prescriptive — it tells you where rational play leads, not what you *should* do. If the equilibrium is efficient and you're happy with it, act accordingly. If the equilibrium is inefficient, the question becomes how to change the rules so a better equilibrium exists. That's the job of `/game-theory-mechanism-design`.

The nearest neighbor: [`/game-theory-prisoners-dilemma`](prisoners-dilemma.md) — the most common case of an inefficient Nash equilibrium. If you already suspect you're in a cooperation failure, start there.

---

## Full example

**Input:**
> Two coffee shops, Grounds and Brew Point, operate on opposite ends of the same high-street. Each is deciding, independently and simultaneously, whether to run a 20% discount promotion this month. Neither knows what the other will decide before committing.

---

**Output:**

### Equilibrium Analysis

**Players and Strategies**
- **Grounds**: Run promotion / Don't run promotion
- **Brew Point**: Run promotion / Don't run promotion

Both players decide simultaneously without knowledge of the other's choice.

---

**Payoff Matrix**

Payoffs are estimated monthly profit (relative index — 100 = normal profit), based on the reasoning that: a promotion costs ~15 profit units in margin but attracts customers; if only one shop promotes, it captures significant competitor market share; if both promote, customers don't preferentially shift but both lose margin.

|  | **Brew Point: Promote** | **Brew Point: Don't** |
|---|---|---|
| **Grounds: Promote** | 80, 80 | 115, 60 |
| **Grounds: Don't** | 60, 115 | 100, 100 |

Reading the matrix: if both promote, each earns 80. If Grounds promotes and Brew Point doesn't, Grounds earns 115 (gaining market share) and Brew Point earns 60 (losing customers). If neither promotes, both earn 100.

---

**Dominant Strategies**

Examine Grounds' choices:
- If Brew Point *promotes*: Grounds earns 80 promoting vs. 60 not promoting → promote is better
- If Brew Point *doesn't promote*: Grounds earns 115 promoting vs. 100 not promoting → promote is better

Promote strictly dominates "don't promote" for Grounds — it is the better choice regardless of what Brew Point does.

By symmetry, the same analysis applies to Brew Point: promote is the dominant strategy for both players.

**Conclusion:** Both players have a dominant strategy — **Promote**.

---

**Nash Equilibria**

The outcome (Promote, Promote) is the unique Nash equilibrium.

Verification: at (Promote, Promote), both players earn 80.
- Would Grounds switch to "don't promote"? No — they'd earn 60 instead of 80. Grounds stays.
- Would Brew Point switch to "don't promote"? No — they'd earn 60 instead of 80. Brew Point stays.

No player wants to deviate. **(Promote, Promote) is the Nash equilibrium.**

---

**Efficiency Assessment**

The Nash equilibrium is **Pareto-inefficient**.

At the equilibrium (Promote, Promote): both earn 80.
At (Don't, Don't): both earn 100.

The outcome (Don't, Don't) is strictly better for both players — each earns 20 more per month — yet rational, independent play doesn't reach it. This is a classic prisoners' dilemma structure: each player's dominant strategy (promote) leads both to an outcome worse than what they'd reach if they could credibly commit to mutual restraint.

The efficiency loss — 20 profit units per player per month, or roughly 20% of normal profit — is the cost of strategic independence. Both shops are voluntarily running a promotion that makes both of them worse off.

---

**Coordination Mechanism**

There is only one Nash equilibrium here, so there is no coordination problem between equilibria. The problem is different: the unique equilibrium is bad. The question is how to move from (Promote, Promote) to (Don't, Don't).

Possible mechanisms:
1. **Explicit coordination** (if legal in the jurisdiction): both shops agree not to promote this month. This converts a one-shot prisoners' dilemma into a cooperation problem — credibility of the agreement is the constraint.
2. **Reputation and repetition**: if this is a recurring monthly decision, the game becomes iterated. Either shop that defects from a no-promotion agreement faces retaliation next month. The shadow of the future can sustain (Don't, Don't). See `/game-theory-iterated`.
3. **Public commitment**: one shop publicly announces "we won't run promotions this month unless our competitor does" — a conditional commitment that makes defection costly via reputational damage.
4. **External restraint**: industry coordination through a trade group, or mutual acknowledgment that margin erosion hurts both.

---

**Strategic Implication**

Without coordination, expect both shops to promote — and both to be worse off. If you are one of the shops:

- Don't expect the other shop to unilaterally refrain from promoting just because mutual restraint is better. Promoting is their dominant strategy regardless.
- The path to (Don't, Don't) runs through credible mutual commitment, not unilateral trust.
- If you want to explore coordination, approach it as a mechanism design problem: what agreement, enforcement, or public commitment would make mutual restraint individually rational?

---

## Related skills

- [`/game-theory-prisoners-dilemma`](prisoners-dilemma.md) — deep analysis of the cooperation failure structure identified here
- [`/game-theory-mechanism-design`](mechanism-design.md) — redesigning the rules so the equilibrium is efficient
- [`/game-theory-iterated`](iterated.md) — how repetition enables cooperation when the one-shot equilibrium is bad
- [`/strategy-positioning`](../strategy/positioning.md) — acting effectively given the equilibrium you've identified
