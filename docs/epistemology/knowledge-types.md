# epistemology-knowledge-types

> Map what kind of knowing is in play before testing whether the claim is true.

**Trigger:** `/epistemology-knowledge-types`

---

## What it does

Classifies the kind of knowing a claim invokes — a priori (reason alone) vs. a posteriori (requires evidence); propositional (knowing that) vs. procedural (knowing how) vs. acquaintance (knowing of); and the source of the knowledge (perception, inference, testimony, intuition, memory). Different knowledge types have different justification standards, different evidentiary requirements, and different failure modes. Mixing them up is a recurring source of bad reasoning.

---

## When to use

- "What kind of claim is this actually?"
- You're in an argument where one person treats something as obvious and another treats it as empirical — you need to establish what kind of question it is
- Someone is citing testimony with the weight of direct observation, or treating intuition as evidence
- A claim is being made a priori ("any reasonable person would agree") that is in fact a posteriori (it's an empirical question)
- You want to know what evidence is relevant before gathering it

## When *not* to use

- You've already identified what kind of claim it is and want to test whether it's justified → [epistemology-justification](justification.md)
- You want calibration across a whole domain, not classification of a single claim → [epistemology-epistemic-status](epistemic-status.md)
- The issue is inference validity (does the conclusion follow from premises?) rather than knowledge-type misclassification → [logic-check](../logic/logic-check.md)

The nearest-neighbor trap: knowledge-types is often confused with justification. The difference: knowledge-types asks "what *kind* of claim is this?" — justification asks "is this claim *supported*?" You need to know the type before you can apply the right justification standard. A claim that looks unjustified by empirical standards may be trivially true by definition, or vice versa.

---

## Example

**Input:**
> Our VP of Engineering just told the board that "we have a strong engineering culture." A board member pushed back: "How do you actually know that?" The VP seemed thrown by the question. What kind of claim is being made here, and what would it take to support it?

**Output:**

### The Claim
"We have a strong engineering culture."

### Primary Classification
**A posteriori.** This is an empirical claim about a state of affairs in the world — specifically, about the properties of a particular organization at a particular time. It is not true by definition, and the world could be otherwise. The fact that it was asserted with confidence doesn't make it a priori.

The VP may have implicitly treated it as *self-evident* — something like "we obviously have a strong culture, it doesn't need justification." That's a category mistake: moving an empirical claim into the a priori zone by asserting it as obvious. The board member's "how do you know?" is epistemically correct.

### Form of Knowing
**Type:** Propositional — a factual claim about a state of affairs ("the culture has property X")

But there's a hidden procedural and acquaintance element: the VP's confidence likely comes from *being inside the organization and having lived experience of it* (acquaintance) and *knowing how to run an engineering organization* (procedural). Neither of these is the same as propositional knowledge that the culture is strong. The VP knows what it *feels like* from the inside; that's different from having established that the culture is strong by any defensible standard.

### Source Analysis
| Source in Play | Weight Given | Assessment |
|----------------|-------------|------------|
| Acquaintance (lived insider experience) | High | Rich but unreliable — insiders often can't see their own culture accurately; you can't observe your own blind spots |
| Intuition (pattern recognition from experience) | High | Plausible in expert leaders, but hard to separate from motivated reasoning; this is a claim the VP benefits from believing |
| Testimony (from team members, 1:1s, etc.) | Implicit | Possible, but testimony about culture is highly filtered — people tell leaders what leaders want to hear |
| Systematic measurement (surveys, attrition data, output metrics) | Low/absent | The VP didn't cite any; this is the source that would actually ground the claim |

### Epistemic Implications
**What this kind of knowing can establish:**
- Impressions and felt sense of how the organization operates
- Patterns visible from a leadership vantage point
- Anecdotes consistent with (or inconsistent with) a "strong culture" characterization

**What it cannot establish:**
- Whether the culture is *actually* strong by any objective or comparative standard
- How the culture is experienced by people who don't report directly to the VP
- How the culture compares to peer organizations
- Whether the claim is stable or reflects a recent high-water mark

### Type Confusion Identified
**Confusion:** A posteriori claim treated as self-evident (a priori-ification)
**Effect:** The VP presented an empirical claim as if it didn't require support. The board member's challenge was legitimate — "how do you know?" is exactly the right question. The VP being "thrown" by it suggests they hadn't considered what kind of claim they were making.

### Upshot
The VP is working from acquaintance knowledge and intuition — both of which are real and can be informative — but neither constitutes propositional, evidence-backed knowledge that the culture is strong. To support the claim at board level, the VP needs empirical evidence: engagement survey results, voluntary attrition rates vs. industry benchmarks, feedback from recent hires, exit interview themes. The claim isn't wrong — it may well be true — but it was presented as established when it's actually believed. The fix is to either back it with evidence or present it honestly as a belief: "I believe we have a strong culture, and here's what I'm basing that on."

---

## Related skills

- [epistemology-justification](justification.md) — once you've classified the type, test whether the belief is actually supported
- [epistemology-epistemic-status](epistemic-status.md) — calibrate confidence across multiple claims in the domain
- [logic-check](../logic/logic-check.md) — test inference validity once the premises are classified
- [probability](../probability/) — when the a posteriori claim needs quantified uncertainty
