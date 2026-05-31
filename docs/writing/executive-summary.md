# `/s4h-writing-executive-summary`

> *The executive doesn't need a tour of your analysis. They need the answer, its implications, and what happens next.*

**Category:** [Writing](README.md) · **Command:** `/s4h-writing-executive-summary`

---

## What it does

Produces one-page executive summaries and board-level briefs from lengthy documents by extracting the situation, three key findings, implications for the reader's decision, a clear recommendation, and next steps. Maximum one page, 300 words. Every sentence must earn its place.

---

## When to use it

- A lengthy report needs a one-page brief for a senior audience that will not read the full document
- A board, executive team, or investor audience needs to make a decision based on analysis you've done
- A document has been written bottom-up (analysis first, conclusion last) and needs to be presented top-down (answer first)
- You are presenting at a leadership meeting and need a pre-read that enables productive discussion rather than information absorption
- A client or stakeholder has asked for a "one-pager" on a complex topic

---

## When *not* to use it

**Don't use this when the audience needs the detail.** An executive summary for an audience that will need to interrogate the methodology, peer-review the analysis, or make technically complex decisions is not appropriate — you need the full document. Executive summaries work for decision-makers who trust the analysis and need the implications; they don't substitute for technical review.

**Don't use this when you don't yet know what the recommendation is.** An executive summary without a recommendation is a document summary, which is not the same thing. If the analysis does not produce a clear recommendation, the summary should say what further work is needed to arrive at one. Hedging the recommendation in the summary ("it may be worth considering...") signals that the analysis is not complete.

The nearest neighbor: [`/s4h-writing-report`](report.md) — which audits the full document structure. Executive summary sits above the report; it is not a substitute for a well-structured document. If the full document is poorly organised, the summary will be harder to produce and the executive who follows up will be frustrated. Use `/s4h-writing-report` to fix the document; use this skill to produce the brief above it.

---

## Full example

**Input:**
> We have a 40-page market research report on the UK premium pet food market. It was commissioned to inform a board decision about whether to enter this market. The board needs a one-page brief for their next meeting. Key facts from the report: the UK premium pet food market is worth £1.4B and growing at 11% per year. Our analysis suggests there is a viable entry point in the functional nutrition segment (supplements, condition-specific food) which is growing faster (18% YoY) and has lower incumbent competition. Entry would require approximately £2.4M in product development and marketing investment. Our model shows breakeven at 18 months and 3-year projected revenue of £3.2M. Key risks: supply chain complexity (functional ingredients are specialty-sourced), the market is crowded at the mass-premium tier but not at the functional tier, and execution timeline is sensitive to a competitor (Nurish UK) who is reportedly in the same segment.

---

**Output:**

### Executive Summary

---

**Situation:** The board commissioned research to evaluate entry into the UK premium pet food market ahead of our Q1 strategy review. Analysis is complete; the case for entry is positive in a specific segment.

---

**Key Findings:**

- The UK premium pet food market is worth £1.4B and growing at 11% annually. The functional nutrition segment (supplements, condition-specific food) is growing faster at 18% and has significantly lower incumbent competition than the broader premium tier.

- Entry requires £2.4M investment (product development + marketing). Financial model shows 18-month breakeven and £3.2M 3-year revenue — a 33% 3-year ROI on investment.

- One competitor (Nurish UK) is reportedly moving into the same segment. Speed of decision is a material factor in whether we enter with first-mover advantage or follow.

---

**Implications:** Entry into functional nutrition is the stronger opportunity than mass-premium, where we would compete on price against established incumbents. The 18% growth rate in functional nutrition suggests the segment is early enough that a well-resourced entrant can take meaningful share. The Nurish UK timing risk changes the decision calculus: this is a 90-day decision, not a 6-month one. If we move by end of Q1, we enter a segment with limited competition. If we delay for further analysis, we may enter as a follower.

---

**Recommendation:** Approve the £2.4M budget to enter the UK functional pet nutrition segment, targeting a Q2 product launch. Do not enter the mass-premium tier.

---

**Next Steps:**

- Finance to confirm budget allocation by end of Q1 (3 weeks)
- Product team to begin supplier qualification for functional ingredients (start immediately on approval)
- Marketing to brief agency on segment positioning and Q2 launch plan (begin parallel to supplier qualification)

---

*[Full 40-page market analysis available on request. This summary reflects analysis as of [date]; Nurish UK market intelligence is based on secondary research and should be validated.]*

---

### Notes on this output

**What was cut:** All methodology, all historical context about pet food market evolution, the analysis of segments we decided not to enter (mass-premium), the full competitive landscape, all data tables, and the appendices. None of this is needed for the board's decision.

**What was preserved:** The three highest-value facts (market size + growth, investment and return, competitor timing risk), the implication that makes the decision urgent (Nurish UK), and a clear single recommendation with scope (functional segment yes, mass-premium no).

**Why the recommendation is specific:** "We should consider entering this market" is not a recommendation. "Approve the £2.4M budget for the functional nutrition segment, targeting Q2" is a recommendation the board can approve, modify, or reject. It creates a decision — which is what the summary is for.

---

## Related skills

- [`/s4h-writing-report`](report.md) — Audit the full document structure; executive summary sits above it
- [`/s4h-writing-audience-calibration`](audience-calibration.md) — The executive's specific role and decision context shapes every word of the summary
- [`/s4h-writing-restructure`](restructure.md) — If the source document is poorly structured, producing the summary requires identifying the findings first
