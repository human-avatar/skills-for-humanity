# epistemology-limits

> Some questions resist investigation not because you haven't tried hard enough, but because there's a structural wall. Know where it is — and what you can establish on this side of it.

**Trigger:** `/epistemology-limits`

---

## What it does

Classifies what can't be known and why: fundamental limits (underdetermination, observer effects, counterfactual unavailability), practical limits (evidence destroyed, inaccessible, or too costly), or conceptual limits (the question is malformed). Then identifies what *can* be established within those limits, and reframes the original question into its answerable part. The output is not "we can't know" — it's precise about what kind of knowing is available, which almost always turns out to be more than nothing.

---

## When to use

- "We keep investigating this question and it never seems to settle"
- "Is this question even answerable?"
- A decision keeps being delayed because the key unknown can't be resolved
- You need to communicate what can and can't be established to stakeholders
- The question feels answerable but you suspect it might be malformed
- Investigation has been thorough and the question is still open — something structural may be in play

## When *not* to use

- The question is answerable but you just haven't investigated → investigate first
- You want calibration across a domain, not diagnosis of a single unanswerable question → [epistemology-epistemic-status](epistemic-status.md)
- The question is unanswerable because it's poorly justified, not because it's structurally limited → [epistemology-justification](justification.md)
- You need to act under unresolvable uncertainty without analyzing it further → [decision](../decision/)

The nearest-neighbor trap: limits is often confused with "we don't have enough data yet." Most "epistemic limits" someone claims are actually practical limits that more effort could address. This skill is for genuine structural limits — after exhausting investigation, or where you can see in advance that investigation won't resolve it. Claiming limits prematurely is a way of giving up on real questions. This skill should make you *less* likely to claim unknowability carelessly — because it forces a precise classification that often reveals the question is answerable after all.

---

## Example

**Input:**
> We ran a major rebranding campaign six months ago. Since then, organic traffic is up 35%, enterprise leads are up 20%, and NPS improved by 8 points. Leadership is asking: "Did the rebrand cause this?" We can't run the counterfactual. Is this question answerable?

**Output:**

### The Question
Did the rebrand cause the improvements in organic traffic (+35%), enterprise leads (+20%), and NPS (+8 points)?

### Investigation Status
**Has thorough investigation been done?** Partial
**Existing evidence:** Before/after data; correlation between rebrand timing and metric improvements; no explicit attribution work done

**What could still be investigated:** Customer survey data asking how they heard of us / what led them to engage; cohort analysis separating rebrand-aware from non-aware acquisition paths; comparison against industry trend data for the same period; checking whether the improvements predated the rebrand in early-indicator metrics

### Limit Classification
**Type:** Fundamental (Counterfactual unavailability) + Practical (Attribution gap)

**Why this limit applies here:** The causal question "did the rebrand cause X?" requires comparing what happened to what would have happened without the rebrand. That counterfactual world didn't occur — it cannot be observed. This is not a data-gathering problem; it's a structural feature of causal inference from observational data.

Additionally, there is a practical attribution gap: the company didn't build the measurement infrastructure at the time of the rebrand (pre/post brand awareness surveys, controlled holdout groups) that would have made tighter attribution possible. Some of what could have been knowable is now practically inaccessible.

**Important caveat:** The counterfactual unavailability is real, but this does not mean causation can't be assessed at all. It means the standard for causal attribution is probabilistic and inferential, not certain — which is true of most causal claims outside controlled experiments.

### What Can Still Be Established
- **The metrics improved** — this is known; the direction and magnitude are established
- **The improvements are temporally correlated with the rebrand** — this is established; correlation is real even if causation isn't certain
- **Whether macro-level tailwinds can explain the improvement** — industry trend data can partially isolate whether the company's gains were above or below market
- **Whether specific rebrand elements were encountered by new customers** — customer interviews can establish whether the rebrand featured in the acquisition path
- **A probability range for causal contribution** — not certain, but a defensible estimate like "the rebrand likely contributed to 40-70% of the enterprise lead improvement" can be constructed from inference and triangulation
- **Whether the rebrand produced the *right* kind of customer** — NPS and enterprise lead quality can be assessed without resolving the causal question

### Reframed Question
**Original:** "Did the rebrand cause these improvements?"
**Reframed:** "What is the most defensible estimate of the rebrand's causal contribution, and what does the evidence most clearly support — with honest uncertainty bounds?"

**Why this is the right reframe:** The original question demands certainty about causation that observational data can't provide. The reframed version acknowledges the limit while still producing useful, actionable analysis. It moves from "prove it" to "best estimate with honest confidence intervals" — which is what decisions actually need.

### Practical Significance
**Does this limit matter for the decision?** Partially

**Assessment:** If the question is "should we continue investing in brand?" — the causal uncertainty matters but probably doesn't change the decision. The improvements are real; the brand is currently in better shape than before; the counterfactual limit means we can't prove the rebrand did it, but we also can't establish that it didn't. A more important question for the decision may be "are the right customers engaging with the new brand?" which is answerable. If the question is "how much should we invest in the next brand initiative?" — the causal uncertainty matters more, because it affects ROI estimates. Here, building attribution infrastructure before the next initiative is the right response to the limit.

---

## Related skills

- [epistemology-epistemic-status](epistemic-status.md) — when the goal is honest confidence calibration across a domain, not diagnosing a single limit
- [probability](../probability/) — when the limit is practical and the right response is to quantify the remaining uncertainty
- [decision](../decision/) — for acting under the unresolvable uncertainty this skill identifies
- [logic-causality-mapping](../logic/causality-mapping.md) — for tracing the causal chain when the question is causal inference from available evidence
