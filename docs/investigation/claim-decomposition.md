# investigation-claim-decomposition

> Break a complex claim into its smallest independently verifiable parts — and find which ones are doing the real work.

**Trigger:** `/investigation-claim-decomposition`

---

## What it does

Claim decomposition makes the hidden architecture of a complex claim visible: what sub-claims are bundled inside it, how each one can be independently evaluated, and which sub-claims are doing the most load-bearing work. A claim like "remote work is better for productivity" contains assertions about measurement, population, causation, comparison baseline, time horizon, and definition — each separately falsifiable. The process surfaces these, classifies each as verified, checkable, contested, uncheckable, or assumed, and identifies where investigation effort should focus: the sub-claims where, if wrong, the whole claim falls.

---

## When to use

- A claim feels too big or vague to verify as a unit
- Two people are debating a claim and talking past each other (often because they're disputing different sub-claims)
- "What would I need to show to establish this?" — decomposition answers that question
- Before auditing evidence, to know which sub-claims to audit evidence *for*
- A business or strategic claim is being used to justify a large decision and you want to know what has to be true for it to hold

## When *not* to use

- You already know what the specific verifiable claim is and want to evaluate its evidence → [investigation-evidence-audit](evidence-audit.md)
- You want to know where the claim came from → [investigation-source-trace](source-trace.md)
- The claim is a single, atomic assertion that can't be meaningfully decomposed

The nearest neighbor trap: Claim decomposition is not argument validation. Argument validation checks whether a conclusion follows from premises — it assumes the argument structure is visible. Claim decomposition precedes that: it finds the hidden premises and sub-claims that are being smuggled in as a single assertion. The claim hasn't been structured as an argument yet; decomposition makes that structure explicit.

---

## Example

**Input:**
> Our head of strategy keeps saying "the enterprise software market is shifting decisively toward AI-native products." We're about to make a significant investment decision based on this. What is this claim actually asserting?

**Output:**

**Master claim:** "The enterprise software market is shifting decisively toward AI-native products."

**Sub-Claim Decomposition:**

| # | Sub-Claim | Type | Classification | Notes |
|---|-----------|------|---------------|-------|
| 1 | There is a meaningful distinction between "AI-native" and legacy enterprise software | Definitional | Uncheckable | "AI-native" is not a stable category; different vendors define it differently. This claim has no truth value until defined. |
| 2 | Enterprise software purchasing decisions have changed in direction (away from non-AI-native products) | Trend — direction | Checkable | Requires procurement data or win/loss analysis across cohorts over time |
| 3 | This shift is recent or ongoing (not historical / complete) | Trend — timing | Checkable | Could check analyst data, but depends on definition in #1 |
| 4 | The rate of shift is meaningful — not a marginal or slow change | Trend — magnitude | Contested | Analyst reports differ substantially on pace; depends heavily on segment |
| 5 | The shift is durable — it will continue, not reverse | Trend — durability | Assumed | No evidence cited; depends on whether AI-native products are genuinely better or just presently fashionable |
| 6 | The shift is broad — affecting most enterprise software categories, not just specific ones | Scope | Contested | Strong in some categories (CRM, ITSM); weak evidence in others (ERP, compliance tools) |
| 7 | "AI-native" products outperform alternatives on dimensions customers care about | Causal | Checkable | Requires controlled comparison; much current evidence is vendor-produced |
| 8 | This shift is relevant to our specific investment thesis (our segment, our buyer profile) | Relevance | Assumed | Entirely assumed; market-wide trends may not apply to the specific segment being invested in |

**Load-Bearing Sub-Claims:**

*Highest load:*
- **Sub-claim #1** (definitional) — If "AI-native" has no stable meaning, the entire claim is not evaluable. Investment decisions made on this basis are not actually grounded in the claim.
- **Sub-claim #8** (relevance) — Even if sub-claims 2-7 are all true, this says nothing about our investment unless the shift applies to our specific market segment and buyer profile.

*Critical assumptions:*
- **Sub-claim #5** (durability) — The whole investment thesis depends on this continuing; it is entirely assumed, not argued.
- **Sub-claim #4** (magnitude) — "Decisive" is load-bearing language; a slow or marginal shift doesn't support the investment urgency.

**Dependency Structure:**
- Sub-claims 2-7 all depend on sub-claim #1 being resolved — none of them can be verified without a stable definition of "AI-native."
- Sub-claim #8 is independent of 2-7 and is the critical bridge between the market claim and the investment decision.

**Verification Priorities:**
1. **Sub-claim #1** — Define "AI-native" operationally before verifying anything else. Otherwise we can't actually evaluate this claim.
2. **Sub-claim #8** — Is our target segment and buyer actually part of this shift? What's our evidence? This is the most investment-relevant question and the most assumed.
3. **Sub-claim #5** — What is the argument for durability? AI adoption patterns have reversed before (AI winters, hype cycles). This needs an argument, not an assumption.
4. **Sub-claim #4** — What does "decisive" mean quantitatively, and does the evidence support it at that threshold?

---

## Related skills

- [investigation-evidence-audit](evidence-audit.md) — once you've identified load-bearing sub-claims, audit the evidence for each
- [investigation-source-trace](source-trace.md) — trace the origin of the master claim or its most important sub-claims
- [investigation-counter-hypothesis](counter-hypothesis.md) — generate rival interpretations of the pattern the claim is pointing to
- [logic-argument-validation](../logic/argument-validation.md) — once the claim structure is visible, validate whether premises support the conclusion
