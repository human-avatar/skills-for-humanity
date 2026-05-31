# investigation-triangulation

> Verify a claim across genuinely independent sources — and distinguish corroboration from amplification.

**Trigger:** `/s4h-investigation-triangulation`

---

## What it does

Triangulation checks whether a claim is corroborated by genuinely independent lines of evidence, or whether apparent multi-source support is actually amplification of a single origin. The discipline is in classifying independence: sources that all cite the same primary study, or all derive from the same original report, are not multiple data points — they are one data point with multiple references. Once genuine independence is established, triangulation assesses whether independent sources converge or diverge, and what methodological diversity exists across those sources (different methods have different failure modes, so convergence across methods is more informative than convergence within one method).

---

## When to use

- "Multiple sources say X" and you want to know if that's actual corroboration or echo
- A claim appears well-supported because it's repeated everywhere, but you're not sure why you should believe it
- You need to know how confident to be in a claim before acting on it
- You've done an evidence audit and want to check whether the sources you have are genuinely independent
- You're assessing whether "emerging consensus" is real convergence or coordinated amplification

## When *not* to use

- You want to evaluate the quality of individual sources → [investigation-evidence-audit](evidence-audit.md) first
- You want to trace a single claim back to its origin → [investigation-source-trace](source-trace.md)
- You only have one source and need to find others — that's research, not triangulation

The nearest neighbor trap: Triangulation is not citation counting. The number of sources citing a claim tells you nothing about triangulation — what matters is how many genuinely independent sources have reached the same conclusion through separate means. A hundred citations of one study are one data point. A triangulation verdict depends on independence, not volume.

---

## Example

**Input:**
> We keep citing "four independent studies" to support our claim that our sales methodology increases win rates by 15-25%. I want to know if these are actually independent before we put this in a board presentation.
>
> Sources:
> 1. Our own internal analysis of win rates before/after adopting the methodology (2021)
> 2. A case study published by the methodology's creator showing results at three client companies
> 3. A Harvard Business Review article (2022) that references the methodology favorably and cites the creator's case study
> 4. A survey by a sales consulting firm (2023) showing that companies using "structured sales methodologies" have higher win rates than those without

**Output:**

**Claim being triangulated:**
"Our sales methodology increases win rates by 15-25%." (Specific causal claim: this methodology, this magnitude of effect)

**Source Classification:**

| # | Source | What it says | Independence Level | Notes |
|---|--------|-------------|-------------------|-------|
| 1 | Internal win rate analysis (2021) | Before/after comparison at our company | Methodologically independent from 2-4; Structurally dependent on our own operations | Not independent of us as interested parties; no control for confounders |
| 2 | Creator's case study (date unknown) | "15-25% win rate improvement at client companies" | Unknown — origin of the specific figure | This is the source of the specific figure; unclear methodology; producer has direct commercial stake |
| 3 | HBR article (2022) | Favorable description, cites the creator | Direct derivative of Source 2 | Not an independent study; summarizes and endorses Source 2 |
| 4 | Sales consulting firm survey (2023) | Structured methodologies → higher win rates | Structurally dependent — claims correlation, not specific to our methodology; different claim | Independent of sources 1-3 but does not support the specific claim (15-25%, this methodology) |

**Independent Evidence Base:**
**Number of genuinely independent sources for the specific claim:** 1 (Source 2, the creator's case study)

Source 1 is our own analysis (interested party, no external validation). Source 3 is a derivative of Source 2. Source 4 addresses a related but different claim — structured methodology correlation with win rates generally, not this methodology specifically or the 15-25% figure.

**What "four independent studies" actually is:** One source for the specific figure (the methodology creator's own case study), one potentially corroborating internal data point, one citation of the first source, and one independent study on a broader related claim.

**Convergence Assessment:**
Among genuinely independent sources for the specific claim: there is insufficient independent evidence to assess convergence. Source 4 provides weak support for the direction of the general claim (structured methodology → better outcomes) but does not triangulate the specific 15-25% figure.

**Convergence pattern:** Insufficient independent evidence for the specific claim as stated.

**Method Diversity:**
Source 1 (internal before/after) and Source 2 (creator's case study) use similar pre/post methodology. No experimental or quasi-experimental evidence. No evidence from parties without a stake in the finding. Source 4 uses survey methodology, which is methodologically distinct, but measures a different claim.

**Triangulation Verdict:**
**Reliability:** Weak triangulation for the specific claim.

**Reasoning:** The specific figure (15-25% improvement) has one traceable source — the methodology creator's own case study, which has not been independently replicated. Internal data supports direction but is an interested party. The HBR article is not independent evidence. Source 4 provides independent support for the general category claim but not the specific one.

**For board presentation, the honest framing:** "Our internal analysis showed [X% improvement] after adoption. The methodology's creator reports 15-25% improvements at client companies. Industry data on structured methodologies shows a directional positive relationship with win rates. We have not found independent third-party validation of the specific improvement magnitude."

**What adequate triangulation would look like:** Two or three independent analyses — ideally from organizations with no commercial stake — comparing win rates before and after adoption of this specific methodology, with at least one using a control group or matched comparison. Absent that, the 15-25% figure should be presented as the creator's self-reported outcomes, not as independently corroborated.

---

## Related skills

- [investigation-source-trace](source-trace.md) — trace sources you thought were independent to determine whether they share a common origin
- [investigation-evidence-audit](evidence-audit.md) — once you've established which sources are independent, evaluate their quality
- [investigation-counter-hypothesis](counter-hypothesis.md) — if independent sources diverge, generate rival explanations for what each is picking up
- [probability-confidence-calibration](../probability/confidence-calibration.md) — translate triangulation findings into calibrated confidence levels for decision-making
