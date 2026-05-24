# `/writing-report`

> *The reader needs the answer. The writer wants to show the work. These are different documents.*

**Category:** [Writing](README.md) · **Command:** `/writing-report`

---

## What it does

Audits business reports, briefing documents, and information reports against five criteria — reader's question, answer-first structure, hierarchy, precision, and navigability — and prescribes specific structural and language corrections. Diagnoses reports written for the writer rather than the reader.

---

## When to use it

- A report has been reviewed and feedback is "the findings are buried" or "I had to read the whole thing to find the point"
- A report is well-researched but structured around the analysis process rather than the reader's decisions
- A quarterly, annual, or project report needs to be restructured before distribution
- You are writing a new report and want to design it answer-first from the start
- A briefing document or board paper needs to be navigable under time pressure

---

## When *not* to use it

**Don't use this for reports where methodology is the primary value.** Academic papers, scientific reports, and technical investigations where the reader needs to evaluate the method before trusting the finding have a different structure — method before results is correct in those contexts. This skill is for business and professional reporting where the reader needs to act, not to peer-review.

**Don't use this when the problem is the analysis, not the writing.** If the report's findings are vague because the underlying analysis is vague, writing improvement won't fix it. A well-structured report with vague findings is still a vague report. Fix the analysis, then fix the report.

The nearest neighbor: [`/writing-executive-summary`](executive-summary.md) — which produces a one-page brief for senior audiences. For most business reports, an executive summary is not optional — it is the primary reading experience for the audience that needs to act. Use `/writing-report` to audit the full document; use `/writing-executive-summary` to produce the brief above it.

---

## Full example

**Input:**
> We have a quarterly business performance report for our board of directors. It runs 18 pages. The board says it "buries the findings" — they have to read to page 11 to find out whether we hit our targets. The current structure: (1) Introduction / company overview (2 pages), (2) Market conditions (2 pages), (3) Operational summary (3 pages), (4) Department-by-department review (4 pages), (5) Financial results (2 pages), (6) Key findings and interpretation (1 page), (7) Outlook and risks (2 pages), (8) Recommendations (1 page), (9) Appendices (1 page).

---

**Output:**

### Report Audit

**Reader's Question:**
The board's actual decision: are we on track, and if not, what needs to change? More specifically per quarter: should they approve the management's recommended response to performance gaps, maintain or revise strategic priorities, and act on any flagged risks?

The board is not reading this report to understand the company — they are directors who already know it. They are not reading to learn about market conditions. They are reading to know: are we on track, what is not working, and what are management recommending?

---

**Answer-First Assessment:**

The answer is on page 11, in section 6 (Key findings and interpretation). The board must read 2 pages of company overview, 2 pages of market conditions, 3 pages of operational summary, and 4 pages of department review before reaching the answer.

The board's question — are we on track? — is answered on page 11 of an 18-page document. The answer-first principle requires it to be on page 1.

---

**Hierarchy Map:**

| Section | Current position | Reader value | Should be |
|---|---|---|---|
| Introduction / company overview | 1st (pages 1-2) | Low | Cut or condense to 1 paragraph in the summary |
| Market conditions | 2nd (pages 3-4) | Medium | After findings, as context |
| Operational summary | 3rd (pages 5-7) | Medium | After findings, as support |
| Department review | 4th (pages 8-11) | Low for board | Appendix or reference section |
| Financial results | 5th (pages 12-13) | High | Second section, after findings |
| Key findings and interpretation | 6th (pages 14-14) | High — THE ANSWER | First |
| Outlook and risks | 7th (pages 15-16) | High | Third section |
| Recommendations | 8th (pages 17-17) | High | Fourth section |
| Appendices | 9th (page 18) | Reference | Remain as appendices |

The section headers are topic headers, not answer headers. "Financial results" doesn't tell the board whether the results are good or bad. "Revenue: 94% of target, Q4 recovery required in three areas" tells them.

---

**Precision Flags:**

Common precision failures in quarterly reports:

| Vague language (likely present) | Specific alternative |
|---|---|
| "Revenue grew significantly in Q3" | "Revenue grew 8.3% in Q3, reaching $12.4M" |
| "Customer acquisition was challenging" | "New customer acquisition fell 23% vs. Q3 target" |
| "We faced headwinds in enterprise" | "Enterprise segment was 41% below plan" |
| "The team performed well in product delivery" | "8 of 9 product milestones delivered on time" |
| "We expect continued improvement" | "Q4 forecast: 6% revenue growth vs. Q3" |

Every use of "significantly," "substantially," "challenging," "strong," "weak," "positive," "negative" as standalone descriptors should be replaced with specific numbers or, if unavailable, "data pending."

---

**Navigability Assessment:**

Current document: not navigable under time pressure. A board member with 10 minutes must read sequentially to find the answer. No executive summary. Section headers are topic labels, not answer labels. The recommendations are on page 17.

A board member preparing for a 90-minute meeting needs to answer "are we on track?" in 2 minutes, find detail on any specific area in 5 minutes, and have full analytical support available if challenged. The current structure requires sequential reading for all three.

---

**Recommended Structural Changes:**

New structure (18 pages, same content):

1. Executive summary (add, 1 page) — Situation / Three key findings / Implications / Recommendations / Next steps.

2. Key findings and interpretation (move to pages 2-3) — The answer, with clear verdict on overall performance. Answer headers: "Revenue: 94% of Target — Three Factors Driving Gap."

3. Financial results (move to pages 4-5) — Numbers supporting the findings.

4. Outlook and risks (pages 6-7) — What happens next, what could go wrong.

5. Recommendations (page 8) — What management is proposing.

6. Operational summary (pages 9-11) — Supporting detail.

7. Market conditions (pages 12-13) — Context for interpretation.

8. Introduction / company overview (cut or move to appendix).

9. Department review + appendices (pages 14-18) — Reference material.

Impact: Board reaches the answer on page 2. Decision-relevant material is complete by page 8. Supporting detail follows for those who need it.

---

## Related skills

- [`/writing-executive-summary`](executive-summary.md) — Produce the one-page brief that the board reads; the full report becomes the reference document
- [`/writing-audience-calibration`](audience-calibration.md) — The board's specific role and decision context shapes every structural choice
- [`/writing-restructure`](restructure.md) — When the report's problems are purely structural
