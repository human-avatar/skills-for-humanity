# systems-emergence-detection

> Explains unexpected system behavior that no single part of the system intended or caused.

**Trigger:** `/systems-emergence-detection`

---

## What it does

Analyzes emergent behavior — results that arise from interactions between components, not from any single component. Identifies the feedback loops generating the behavior, explains why intuitive interventions fail, and finds the non-obvious intervention point.

---

## When to use

- System is producing results that surprise everyone — nobody designed this outcome
- "Why does this keep happening even though everyone is doing the right thing?"
- Individual behaviors are rational but collective outcome is irrational or harmful

---

## Example

**Input:**
> Every team in our company estimates conservatively and pads their timelines. As individuals, each team is being rational — they're protecting against uncertainty. But collectively, every project takes twice as long as it should, which creates pressure that causes teams to pad even more. What's happening?

**Output:**

**The emergent behavior:** Systemic schedule inflation driven by rational individual behavior.

**The interaction that generates it:**

Individually: Each team pads estimates because late delivery has costs (loss of trust, escalation, blame) and the cost of padding is low (no one penalizes finishing early).

Collectively: When every team pads, every project takes longer than necessary. This creates resource waste, delays downstream work, and increases pressure on everyone. Teams observe that projects still feel rushed (because dependencies shift and scope changes within padded timelines), which reinforces the belief that padding is necessary. More padding → more delays → more pressure → more padding.

**Why intuitive interventions fail:**

*"Just be more accurate."* Doesn't address the incentive structure. The signal is: late delivery hurts you, early delivery doesn't reward you. Until that changes, rational actors continue to pad.

*"Hold teams accountable to estimates."* If accountability is punitive for lateness, it intensifies the incentive to pad. Teams that face consequences for missing estimates add more buffer, not less.

*"Ask for aggressive timelines."* Creates a performance theater where teams nominally agree to faster timelines and then find reasons why the actual delivery takes longer. The padding moves from the estimate into the work.

**The non-obvious intervention:**

The behavior emerges from an asymmetric incentive structure (late is punished, early is irrelevant). Changing this requires:
1. Reward early delivery explicitly — make finishing ahead of schedule a positive signal
2. Remove punishment for honest uncertainty — distinguish "I was wrong about this" from "I underperformed"
3. Make the system cost of padding visible — show teams how collective padding is creating the pressure they're padding against

The deepest intervention is changing the belief that padding is self-protection. When teams see that their individual padding contributes to the systemic pressure that makes padding feel necessary, the rational response shifts.
