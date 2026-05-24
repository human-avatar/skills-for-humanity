# logic-check

> Fast, comprehensive logic report — premises, inference, fallacies, hidden assumptions, verdict.

**Trigger:** `/logic-check`

---

## What it does

A complete logical assessment in a single pass: validates premises, tests whether conclusions follow, identifies logical fallacies, surfaces hidden assumptions, and issues a verdict with specific diagnosis. Lighter than [logic-council](logic-council.md) (no peer review), heavier than [argument-validation](argument-validation.md) (covers the full reasoning, not just one argument).

---

## When to use

- "Check my reasoning"
- Quick full logic review of a proposal, plan, or argument
- "Is this sound?" — without wanting the full council overhead

## When *not* to use

- Complex argument worth thorough independent pressure-testing → [logic-council](logic-council.md)
- Have broken reasoning that needs repairing → [logic-fixer](logic-fixer.md)
- Need to find contradictions in a long document → [consistency-check](consistency-check.md)

---

## Example

**Input:**
> Our analysis shows that companies in our industry that hired more than 50 engineers last year grew revenue by 30%+. We're planning to hire 60 engineers this year, which should drive similar growth. Does this logic hold?

**Output:**

**Premises:**
- P1: Companies in our industry that hired 50+ engineers last year grew revenue by 30%+. *(stated as fact — but is this correlation data or something more?)*
- P2: We plan to hire 60 engineers this year.
- P3: (unstated) Similar inputs produce similar outputs in this context.

**Inference:**
The argument moves from correlation to causation without establishing the causal mechanism. The observed relationship (50+ hires → 30%+ growth) is correlational. The inference (hiring 60 engineers will cause 30%+ growth) treats it as causal. These are logically distinct claims.

**Fallacy identified:**
**Post hoc / correlation-causation confusion.** Companies that hired aggressively may have done so *because* they had the resources and confidence that comes with strong growth — not *causing* the growth. The direction of causation is likely reversed: revenue growth → ability to hire, rather than hiring → revenue growth.

**Hidden assumptions:**
1. *We have the same conditions as the companies in the data set.* Stage, market position, capital structure, and team quality all affect whether hiring predicts growth.
2. *The 50-engineer threshold is the relevant variable.* It may be that thriving companies hire fast — and that the hiring reflects health rather than producing it.
3. *We can execute on hiring 60 engineers effectively.* Rapid hiring at scale often reduces velocity before it increases it; integration takes time.

**Verdict:** **Unsound.** The conclusion doesn't follow from the premises. The data shows correlation, not causation, and the causal direction is likely inverted. Hiring 60 engineers may be the right call — but not because of this argument. A stronger argument would establish *why* hiring in this category creates growth (specific capabilities that unlock specific revenue streams, for example) rather than relying on industry correlation.
