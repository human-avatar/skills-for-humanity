# logic-argument-validation

> Checks whether an argument's premises actually support its conclusion, and identifies logical fallacies.

**Trigger:** `/logic-argument-validation`

---

## What it does

Maps the argument structure (premises → conclusion), tests each premise and the inference step, identifies logical fallacies, and distinguishes between valid arguments (structure holds) and sound arguments (structure holds AND premises are true). Focused on a single argument rather than a full document.

---

## When to use

- Specific argument with a conclusion that needs checking
- "Does this logic hold?"
- "Is this a fallacy?"
- Reviewing a design decision, technical proposal, or product argument
- Before presenting an argument to others who will scrutinize it

---

## Example

**Input:**
> "Our competitor raised $50M last month. Investors clearly believe in this market. Therefore, we should raise now before the window closes."

**Output:**

**Argument structure:**

- P1: Competitor raised $50M last month
- P2: (implied) Investors who fund competitors believe in the market
- P3: (implied) When investors believe in a market, funding windows are open
- P4: (implied) Funding windows close after they open
- C: We should raise now before the window closes

**Premise analysis:**

*P1:* True as stated — take at face value.

*P2:* Partially true, but contains a hidden assumption: that investor interest in one company generalizes to investor interest in you. Investors fund competitors for many reasons, including exclusive conviction in that specific team. One competitor fundraise doesn't establish general market enthusiasm.

*P3:* False as stated. Investor interest in a market can produce more funding activity, but it can also produce a competitive dynamic where investors concentrate bets on the perceived leader. After a large competitor fundraise, some investors close their position ("they already have our horse in this race").

*P4:* True that windows exist, but the timeline is not established. "Before the window closes" implies urgency that isn't supported — the window may be years long.

**Fallacies identified:**

1. **Hasty generalization:** One data point (competitor fundraise) is used to conclude general market sentiment.
2. **False urgency:** "Before the window closes" creates a time pressure that isn't established by the premises.
3. **Suppressed premise:** The argument assumes that what worked for a competitor will work for you — identical market conditions, investor appetite, and company stage.

**Verdict:** Invalid. The conclusion doesn't follow from the premises as stated. A competitor fundraise is a signal worth considering, but it doesn't establish that the window is open, that it's about to close, or that you're positioned to raise on similar terms.

**What a sound argument would look like:**
"Our competitor raised $50M. We've had inbound investor interest this quarter. Our metrics hit the thresholds typically required for a Series A. Three investors we respect are actively deploying in this category. We should raise now." That argument has defensible premises that support the conclusion.
