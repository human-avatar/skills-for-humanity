# information-entropy

> Information is what surprises you. Everything else is confirmation.

**Trigger:** `/s4h-information-entropy`

---

## What it does

Applies Shannon's information entropy framework — information content as a function of surprise and uncertainty reduction — to practical problems of attention calibration, evidence weighting, and source assessment. Shannon defined entropy as H = −∑ p(x) log₂ p(x): high when outcomes are unpredictable, low when they are expected. Applied practically: identifies which elements of a source carry genuine information content (because they were surprising given a well-formed prior) and which carry little (because they were expected). Produces a calibrated weighting for where attention and belief-updating should actually go.

---

## When to use

- "How much should I update on this result?"
- A source is producing a lot of output and it's not clear which parts actually tell you something new
- A finding is surprising — you want to know whether to treat it as signal or dismiss it as noise
- Evidence is accumulating but feels redundant — you want to assess how much of it is genuinely independent
- You want to audit whether attention is being allocated according to information content or just volume

---

## Example

**Input:**
> Our quarterly user research programme produces: 20 user interviews, an NPS survey with ~600 responses, weekly support ticket analysis by the support team, and monthly churn interviews with departing customers. We have a research lead who reads all of it and writes a synthesis report. The CEO reads the synthesis report. The product team says they learn more from the churn interviews than from anything else. The CEO says the NPS scores feel important but she's not sure what to do with them. What's the entropy profile here — where is the real information?

**Output:**

**Source:** Quarterly user research programme
**Question being asked of the source:** What do users think, need, and experience — and what should product and strategy decisions account for?

---

**Entropy Profile**

| Element | Predictability | Information Content | Notes |
|---|---|---|---|
| NPS survey (N=600, quarterly) | High — score moves slowly and is well-established | Low per survey cycle | NPS is a lagging indicator with high variance from survey design effects; it confirms direction but rarely surprises. Low entropy source for a company with established NPS history. |
| NPS verbatims (open-text comments) | Medium — themes recur but specific articulations vary | Medium — specific language and framing often surfaces things scores don't | Verbatims carry more entropy than scores; a recurring theme newly expressed sharply can be genuinely informative |
| 20 user interviews (quarterly) | Medium-low if interview guide is consistent | Medium — depends heavily on who is interviewed and how open the questioning is | Structured interviews on known topics have lower entropy than exploratory interviews; the format reduces surprise |
| Support ticket analysis | High — support volume is relatively predictable | Low on aggregate; High on specific emerging issue spikes | The signal is in the outliers: a newly spiking issue category. The aggregate view is predictable and low-entropy |
| Churn interviews | Low predictability — churned users are selected for having had an unexpected experience | High — departing customers have resolved the uncertainty about their opinion; they're talking freely | This matches the product team's intuition. Churn interviews are high-entropy by selection: you're sampling the tail of the distribution, which is where the information lives |
| Research synthesis report | Depends entirely on synthesis quality | Risk of entropy reduction through averaging — if synthesis smooths outliers into themes, it destroys the high-information content | The most dangerous compression point in this system |

**Overall Entropy Assessment:** Mixed. The programme has one genuinely high-entropy source (churn interviews) and several low-entropy sources that confirm the existing picture more than they update it. The NPS number is the lowest-entropy element — it moves slowly, is already well-understood, and rarely generates genuine surprise. The highest information content is in the tails: churn interview findings, support ticket spikes, and NPS verbatims that express a familiar frustration in a newly sharp way.

**High-Information Elements:**
- Churn interview findings, especially anything that contradicts the internal narrative about why users leave
- New issue categories in support ticket analysis — specifically the ones that didn't exist in the previous quarter's report
- NPS verbatims where users articulate a problem in language that differs from how the team internally describes it (different framing = new information even if the underlying issue is known)
- Any user interview where a participant answers a question in a way that wasn't anticipated by the interview guide

**Low-Information Elements:**
- The aggregate NPS score and its quarter-on-quarter movement (unless it moves sharply)
- Restatements of known issues in support tickets
- User interview responses that confirm existing product hypotheses
- The synthesis report's "themes" section if it aggregates without preserving the surprising specifics

**Absence-of-Information Signals:**
- If churn interviews stop surfacing a previously common complaint, that absence is informative — it suggests a past fix may have worked, or that the churning population has shifted
- If NPS verbatims stop mentioning a feature category that was previously prominent, the absence may indicate the issue has resolved (or that the users who cared about it have already churned)

**Calibration Audit:**
The current attention allocation is inverted. The CEO's attention is going to NPS scores — the lowest-entropy output in the programme. The product team has self-corrected and migrated to churn interviews — the highest-entropy source. The synthesis report may be compressing out the high-information content by averaging findings into recurring themes. If the research lead is smoothing churn interview specifics into "users want better onboarding," the entropy of the original source is being destroyed in synthesis.

**Recommended Entropy-Calibrated Weighting:**
1. **CEO attention should shift from NPS scores to churn interview findings** — specifically the direct quotes and the unexpected reasons, not the synthesis summary. This is where the programme's genuine information content lives.
2. **NPS should be tracked but not reviewed intensively each quarter** — it is a confirmation tool. Reserve deep attention for quarters where it moves by more than 5 points.
3. **Support ticket spike detection should be automated and surfaced immediately** — this is where the high-entropy information in the support stream appears; the aggregate analysis can remain quarterly.
4. **The synthesis report needs a structural change:** add a "most surprising finding this quarter" section before the themes section, and protect the specific language of high-information observations rather than generalising them into recurring categories.
5. **Expand churn interview volume** — it is the highest-entropy source in the programme and is currently the smallest in sample size.

---

## Related skills

- [`/s4h-information-signal-noise`](signal-noise.md) — verify whether high-entropy elements are genuine signal or just noise before updating heavily
- [`/s4h-probability-base-rate-anchoring`](../probability/base-rate-anchoring.md) — anchor surprise assessments against correct base rates before treating findings as informative
- [`/s4h-epistemology-epistemic-status`](../epistemology/epistemic-status.md) — map how much the high-information elements should actually update beliefs across the domain
