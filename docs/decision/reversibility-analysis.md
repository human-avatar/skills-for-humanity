# decision-reversibility-analysis

> Categorizes a decision by how reversible it is — then applies the right amount of process.

**Trigger:** `/s4h-decision-reversibility-analysis`

---

## What it does

Classifies a decision on a reversibility spectrum from fully reversible (two-way door) to effectively permanent (one-way door). Determines what reversing the decision would actually require — cost, time, relationships, reputation. Recommends the appropriate level of deliberation given that classification.

The insight: the cost of over-deliberating a reversible decision exceeds the cost of being wrong. The cost of under-deliberating an irreversible decision can be catastrophic.

---

## When to use

- "How much time should I spend on this?"
- Not sure whether a decision is as reversible as it feels
- Team is debating a decision at the wrong level of intensity for its actual stakes
- About to make a commitment and want to understand what you're actually signing up for

---

## Example

**Input:**
> We're deciding whether to open-source our core engine. Reversibility analysis?

**Output:**

**Decision being analyzed:** Open-source the core engine — make the codebase public under an open license.

**Reversibility assessment:**

*What would reversing this decision require?*

Once code is published under an open-source license, anyone who has accessed it can keep using it and forking it under that license. You cannot un-publish it in any meaningful sense: forks will persist, the internet has cached versions, and the license you granted cannot be revoked for code already distributed under it. You could stop releasing future updates as open source, but the already-published versions are permanent.

Additionally: contributors from the community will have contributed to the codebase under the expectation of it remaining open. Closing it later would burn those relationships.

Commercial users will have built products on top of the engine under the license terms. Changing terms retroactively is legally complex and reputationally damaging.

**Classification: One-way door (irreversibility score: 5/5)**

This is not a "we can try it and see" decision. Once made, the practical ability to reverse it is close to zero.

**Recommended process level:**

Given one-way door classification, this decision warrants:
- Explicit senior leadership decision, not delegated
- Clear articulation of the business rationale and what "success" looks like
- License selection reviewed by legal (GPL vs. MIT vs. Apache have very different implications)
- Community and competitive analysis before announcement
- Defined go-to-market strategy for how open-sourcing serves the business

**What this is *not* saying:**
This analysis doesn't say don't do it. Many excellent decisions are one-way doors. It says: treat it with the process weight it deserves, because reversing it later will cost far more than the deliberation costs now.
