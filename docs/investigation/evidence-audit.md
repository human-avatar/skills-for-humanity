# investigation-evidence-audit

> Evaluate the quality, strength, and completeness of evidence — including what should exist but doesn't.

**Trigger:** `/s4h-investigation-evidence-audit`

---

## What it does

An evidence audit applies a structured quality assessment to the evidence for a claim: classifying each piece by type (using an evidence hierarchy from RCTs down to assertion), evaluating quality within that tier, checking for conflicts of interest, assessing whether the evidence actually fits the claim it's supposed to support, and — most critically — naming what should exist but doesn't. Evidence is not binary. A study can exist and be structurally incapable of establishing the claim. Multiple pieces of evidence can all be downstream of the same flawed original. The audit surfaces these problems and produces a verdict on what confidence level is actually warranted.

---

## When to use

- "Is there good evidence for this?" — and you want more than a yes/no
- A claim is supported by "research" or "studies" and you want to know what kind and how strong
- You need to stress-test a belief before committing significant resources to it
- Evidence seems thin but you want to articulate why, precisely
- You've done claim decomposition and want to evaluate evidence for the specific load-bearing sub-claims

## When *not* to use

- You haven't identified what you're evaluating evidence for yet → [investigation-claim-decomposition](claim-decomposition.md) first
- You want to know who produced the original evidence and how it's been interpreted → [investigation-source-trace](source-trace.md)
- You want to generate alternative interpretations of the evidence → [investigation-counter-hypothesis](counter-hypothesis.md)

The nearest neighbor trap: Evidence auditing is not fact-checking. Fact-checking asks "is this statement accurate?" Evidence auditing asks "is the evidence strong enough to support this level of confidence in this claim?" A statement can be technically accurate while the evidence cited barely justifies asserting it. The audit evaluates warranted confidence, not just factual accuracy.

---

## Example

**Input:**
> We're making a case to senior leadership that "psychological safety drives team performance." We have a few studies. Can you audit whether our evidence actually supports this?
>
> Evidence we're citing:
> 1. Amy Edmondson's original 1999 paper on psychological safety in hospital teams
> 2. Google's Project Aristotle (2016) finding that psychological safety was the top factor in team effectiveness
> 3. A 2022 Gallup report citing that teams with high psychological safety show 27% higher productivity
> 4. A LinkedIn post by an organizational psychologist saying "we all know psychological safety is the key to high performance"

**Output:**

**Claim being evaluated:** Psychological safety drives team performance (causal claim).

**Evidence Inventory:**

| # | Evidence | Type (Tier) | Quality Assessment | Conflict of Interest |
|---|----------|-------------|-------------------|---------------------|
| 1 | Edmondson (1999) — psychological safety in hospital nursing teams | Observational study, Tier 3 | Strong within tier: rigorous methodology, peer-reviewed in *Administrative Science Quarterly*, original operationalization of construct. Sample: 53 work teams in a single hospital. | None apparent |
| 2 | Google Project Aristotle (2016) | Proprietary internal study, Tier 5-6 | Not peer-reviewed; methodology not independently verified; sample is Google teams specifically (highly specific population). Does not establish causation — correlational. Strong internal validity claims; external validity unknown. | Clear: Google has reputational interest in confirming a finding; results served internal people agenda |
| 3 | Gallup (2022) report, 27% productivity claim | Survey-based, Tier 5 | Precise figure (27%) suggests quantitative rigor it likely doesn't have — "productivity" in surveys is self-reported. Gallup's methodology for this specific figure is not publicly detailed. | Potential: Gallup sells workplace engagement services; findings that support that market create commercial value |
| 4 | LinkedIn post by organizational psychologist | Expert opinion / assertion, Tier 6-9 | No evidence offered; "we all know" is explicitly not an evidential claim. | Unknown |

**Notable Absences:**
- **No RCTs or quasi-experimental designs.** A causal claim ("drives performance") is best supported by studies that manipulate psychological safety and measure performance outcomes. No such evidence is cited.
- **No meta-analysis.** Given 25+ years of research since Edmondson (1999), a rigorous meta-analysis of the psychological safety — performance link would exist if the relationship were robust. The most credible review (Newman, Donohue & Eva, 2017) found evidence of a positive relationship but noted significant heterogeneity and methodological limitations across studies.
- **No evidence of mechanism.** How does psychological safety produce better performance? Without a stated mechanism, the causal claim is assumed, not established.
- **No contradictory evidence considered.** Some research suggests psychological safety can in certain configurations reduce productive conflict or accountability. This dimension is entirely absent.

**Fit Between Evidence and Claim:**
- **Causal gap:** All evidence is correlational. None of the cited sources establishes that psychological safety causes performance improvement (vs. being a byproduct of high-performing teams, or both being caused by a third factor like leadership quality).
- **Population mismatch:** Edmondson's foundational work was on hospital nursing teams; Google Aristotle studied software engineers at a specific company. Applying this to "teams" in general requires an additional generalization that is assumed, not argued.
- **Precision fabrication:** The 27% figure implies measurement precision that survey-based self-reported productivity cannot support.

**Evidence Quality Verdict:**
**Overall tier:** Tier 3-5 (observational, correlational evidence)

**Confidence warranted:** Moderate — "Psychological safety appears to be positively associated with team functioning and performance outcomes across multiple organizational contexts." Weak for a causal claim.

**What adequate evidence would look like:** Pre-registered studies in diverse organizational settings measuring psychological safety and objective performance outcomes (not self-reported), with at least one quasi-experimental design that introduces a psychological safety intervention and tracks outcomes. A rigorous meta-analysis with heterogeneity analysis across contexts.

**Recommended reframing for leadership:** "Research consistently finds that psychological safety is associated with better team outcomes, and the relationship is well-studied since Edmondson's foundational work. We believe it is a significant factor in our team performance. The causal mechanism is plausible and directionally supported, though the evidence base is correlational."

---

## Related skills

- [investigation-claim-decomposition](claim-decomposition.md) — decompose the claim before auditing, so you know which sub-claims to evaluate evidence for
- [investigation-source-trace](source-trace.md) — trace the evidence back to understand its origin and how it has been interpreted
- [investigation-counter-hypothesis](counter-hypothesis.md) — after auditing, generate rival explanations for what the evidence actually shows
- [investigation-triangulation](triangulation.md) — assess whether the sources you have are genuinely independent
