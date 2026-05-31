# ethics-council

> Five independent ethical advisors, peer review, chair synthesis, HTML report. The full process for high-stakes decisions.

**Trigger:** `/s4h-ethics-council`

---

## What it does

Convenes five ethical framework advisors (Utilitarian, Deontological, Virtue Ethics, Care Ethics, Justice/Fairness) as independent subagents. They analyze in parallel, then peer-review each other's reasoning. A chair synthesizes the framework responses and peer reviews into a verdict. Produces both an HTML report and a full markdown transcript.

This is the heavyweight ethics tool — use it when the stakes warrant thorough, documented analysis.

---

## When to use

- High-stakes decision with real stakeholder impact
- Trade-offs between competing groups' interests that need to be owned explicitly
- Decision you want documented — for your own record or for stakeholders
- "Ethical pressure-test this" or "ethics council this"
- Something you've rationalized and want genuinely stress-tested

## When *not* to use

- Need a quick ethical assessment → [ethics-check](ethics-check.md)
- Something has already gone wrong → [ethics-crisis-triage](ethics-crisis-triage.md)
- Quick pre-ship scan → [ethics-impact-scan](ethics-impact-scan.md)

---

## Example

**Input:**
> We're building a feature that uses AI to score job applicant resumes before they reach human reviewers. The model is trained on our historical hiring data. Is this ethical?

**Output (condensed — full council produces ~2000 words + HTML):**

**The framed question:**
*An AI resume scoring model, trained on historical hiring data, will filter applicants before human review. Stakeholders include: current applicants (especially those unlike historical hires), historical candidates whose data trained the model, hiring managers, and the company. The core tension: efficiency and consistency vs. risk of encoding and amplifying historical bias.*

---

**Where the frameworks agree:**

All five frameworks identify the same primary concern: if the historical hiring data reflects biased past decisions (which hiring data almost universally does), training on it encodes those decisions into a system that will now apply them at scale, consistently, to every applicant — which is more systematically harmful than inconsistent human bias.

All five also agree that **transparency is non-negotiable**: applicants should know an AI system is making screening decisions, and should have recourse.

---

**Where the frameworks conflict:**

The utilitarian framework is willing to accept the system if bias auditing is rigorous and the net outcome (faster hiring, more consistent process) benefits more people than it harms. The deontological framework holds that using a biased proxy to screen people violates their right to a fair evaluation regardless of aggregate outcome — and that training on historical data without consent violates a duty to those whose data was used. Care ethics focuses on the most vulnerable applicants — those from underrepresented groups who already face systemic barriers — and argues that efficiency gains for the hiring process cannot be balanced against compounding harm to the most vulnerable.

*The real value tension:* process consistency and efficiency vs. individual right to unbiased review. These are not reconcilable by the frameworks. You have to choose which value takes precedence, and own that choice.

---

**The recommendation:**

Do not deploy without a completed bias audit. Specifically: (1) Test the model's outcomes across protected characteristics before deployment. (2) Ensure human review of all candidates the model scores below threshold — not just those above it. (3) Build an appeals process. (4) Disclose clearly to applicants.

The model in its current form should be treated as a decision-support tool for humans, not a filter. Remove any applicant from consideration only after human review.

**What would make this clearly ethical:**
Bias audit with published results, human review of all rejections, applicant disclosure, regular retraining with audited data, and a clear appeals process. These aren't nice-to-haves — they're the conditions under which this can be deployed without violating the rights of applicants.

---

*Full council output includes: individual advisor responses (150–300 words each), peer review by all five advisors, chair synthesis, and an HTML report saved to the working directory.*
