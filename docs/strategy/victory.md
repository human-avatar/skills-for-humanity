# `/strategy-victory`

> *The supreme art of war is to subdue the enemy without fighting.*

**Category:** [Strategy](README.md) · **Command:** `/strategy-victory` · **Source:** Sun Tzu, *The Art of War*; Carl von Clausewitz, *On War*

---

## What it does

Defines what winning actually means before the contest begins — separating the stated objective from the real objective, naming minimum and maximum victory conditions, running the pyrrhic check, and establishing the observable conditions that tell you to stop. Prevents the most common strategic failure: winning in ways that lose the larger goal.

The framework draws on Clausewitz's principle that every military contest serves a political end, and Sun Tzu's principle that the cheapest victory is the best victory. Victory conditions defined in advance prevent the contest from redefining its own terms as it proceeds.

---

## When to use it

- The objective is framed in terms of the contest ("win the trial," "beat the competitor," "get the contract") rather than the underlying goal it serves
- A significant cost is attached to winning and you want to verify the win is worth it before incurring that cost
- A decision-point is approaching — settle or litigate, compete or concede, press or stop — and the criteria for that decision aren't clear
- Something feels like it's turned into a fight about the fight, rather than a fight about the original objective
- Multiple parties are defining success differently and you need a shared definition before strategy can be aligned

---

## When *not* to use it

**Don't use victory definition as a tool for rationalized retreat.** Defining minimum victory conditions can be misused to find reasons to accept less than is achievable with reasonable effort. The discipline is defining what you actually need — not the most you could hope for, and not the least you could get away with. The minimum victory is the honest floor, not a comfortable ceiling.

**Don't skip this in favor of going straight to tactics.** The nearest neighbor: `/strategy-force-economy` — which tells you the minimum intervention to achieve the objective. Force economy analysis requires knowing the objective first; without victory definition, you're optimizing for the wrong thing with great efficiency.

---

## Full example

**Input:**
> We're a company in a commercial dispute with a former supplier. They breached the contract and we lost real money — our legal team says we can probably win at trial. But the trial will take two to three years and cost us $800K–$1.2M in legal fees, and even if we win, collecting from this company may be difficult since they're not well-capitalized. We've been offered a settlement of $350K. Should we settle or fight?

---

**Output:**

### Victory Definition

**Stated Objective**

Win the legal dispute — obtain a favorable judgment that holds the supplier accountable for breach and recovers our losses.

**Real Objective**

Recover the actual financial loss from the breach in a way that doesn't cost more than the recovery is worth. The judgment is a mechanism; the recovery is the point.

Second real objective, which may be equally important: establish that breach of contract with this company has consequences — deterrence for future counterparties considering similar conduct. This objective has value independent of the financial recovery and may be worth some cost.

Third real objective, which should be named: closure. Ending the exposure — management time, legal cost, distraction — so that the organization can move on. This objective argues for settlement in ways the financial analysis alone does not.

The stated objective (win the trial) is in service of these three real objectives, with different weighting depending on circumstances. Optimizing purely for "win the trial" without these in view is where the pyrrhic trap enters.

**Minimum Victory**

The least outcome that makes this effort worth it:
- Net recovery after legal fees is positive — collect something after paying for the collection
- The dispute is resolved and closed within a time horizon that doesn't consume ongoing management attention for years
- No precedent is set that invites future counterparties to behave similarly with confidence of no consequence

At the settlement offer of $350K, with legal fees of $800K–$1.2M at trial, a trial win that produces a judgment of $X and a collection difficulty means the net recovery after fees may be negative or near zero. Minimum victory requires net positive recovery. The settlement offer at $350K, taken immediately, produces net positive recovery of $350K with near-zero legal cost. It clears the minimum victory threshold — if this is framed purely as financial recovery.

**Maximum Victory**

- Full recovery of losses, plus legal fees and interest
- A judgment that is publicly associated with the supplier's reputation (deterrence value)
- A legal record that would help any future counterparty dealing with this supplier understand their behavior pattern

Maximum victory requires a trial win and successful collection — both uncertain — at a cost of $800K–$1.2M with a 2–3 year timeline. If the original loss was significantly larger than $350K and collection is probable, maximum victory may be worth pursuing. If the original loss was $600K–$800K, a trial win produces a judgment that — after fees — may be worth less than the settlement offer.

**Pyrrhic Check**

What does winning at trial actually cost?

*Financial:* $800K–$1.2M in legal fees. If you win and collect $700K, the net is negative. If you win and collect $1.5M (fees plus damages), the net is potentially positive — but collection from a poorly-capitalized defendant is uncertain.

*Time:* 2–3 years of senior management attention, in-house counsel time, and distraction from core business. What is the opportunity cost of that attention?

*Relationship:* No direct relationship to preserve here (former supplier, in dispute). But the litigation record is public and may affect the company's reputation as a counterparty in future negotiations.

*Organizational:* Legal disputes have a morale and distraction cost that doesn't appear in legal fee estimates. The team that managed the supplier relationship, the finance team running the dispute accounting, the management time in depositions. These are real and material.

Pyrrhic outcome on a win: you spend $1.2M to collect $900K from a poorly-capitalized defendant over 36 months, with 2 years of management distraction and a net recovery of negative $300K.

**Victory Recognition Conditions**

The conditions that tell you the contest is over:

- *Settlement scenario:* The moment the settlement amount is received and the release is signed. Done. No further monitoring required.
- *Trial scenario:* The moment a judgment is entered in your favor AND a collection assessment is completed showing the judgment is collectible within a defined timeframe. A judgment against an uncollectable defendant is not victory — it is a document.
- *Stop condition:* If collection efforts at trial exceed 18 months after judgment with less than 50% recovery, reassess whether continuing pursuit is worth the ongoing cost. The fight has been won; the recovery may not be.

**Analysis and Recommendation**

The settlement offer of $350K should be evaluated against one specific number: what is the realistic expected value of a trial?

Expected trial value = (probability of winning) × (expected collected amount) − (legal fees)

If the probability of winning is 70%, the expected collected amount is $600K, and legal fees are $1M:
Expected trial value = 0.70 × $600K − $1M = $420K − $1M = −$580K

In that scenario, the $350K settlement offer dramatically exceeds the expected trial value.

The pyrrhic trap here is common in legal disputes: the framing of "we can win" obscures the distinction between winning a judgment and recovering money. Legal teams are incentivized to litigate — their metric is winning, not your net recovery. The stated objective (win the trial) and the real objective (recover money, achieve closure) are different, and they point in different directions.

The deterrence objective — establishing consequences — is worth examining separately. If there is genuine concern that similar breach will recur with other counterparties, and the supplier is a known player in your industry, there may be a non-financial argument for the trial. But if deterrence is the real motivation, name it explicitly as such and evaluate the $800K–$1.2M cost as the price of a signal, not a recovery.

---

## Related skills

- [`/strategy-force-economy`](force-economy.md) — Once victory conditions are defined, force economy identifies the minimum path to the minimum victory condition
- [`/strategy-terrain`](terrain.md) — Which battles are worth having depends on knowing what winning would actually mean
- [`/strategy-alliance`](alliance.md) — Coalition strategy requires shared victory definitions; if allies define success differently, the alliance fractures
- [`/strategy-timing`](timing.md) — Victory recognition conditions tell you when to stop; timing analysis tells you when to start
