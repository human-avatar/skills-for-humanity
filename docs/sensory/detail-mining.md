# sensory-detail-mining

> Finds specific details being overlooked — the most important information is often present but not being registered.

**Trigger:** `/s4h-sensory-detail-mining`

---

## What it does

Takes an existing account, analysis, or description and excavates the specific instances behind each abstraction. "Users are frustrated" → which users, in which moment, doing what, saying what exactly. Recovers ignored background details, surfaces notable absences, and reads what the specifics reveal that the abstractions concealed. Most useful immediately before a decision — the moment when abstractions are about to drive action.

---

## When to use

- "What are we missing?"
- "Go deeper on this"
- "Be more specific"
- "What exactly is happening?"
- "Ground this in specifics"
- Before making a diagnosis, design decision, or strategic recommendation based on a summary
- When "feedback shows..." or "data suggests..." is the evidence base for a significant choice

## When NOT to use

- For disciplined observation of a live situation — use `sensory-structured-observation`
- For detecting weak signals in a dataset — use `sensory-signal-detection`
- For auditing assumptions inside a strategy — use `creativity-assumption-excavator`

---

## Example

**Input:**
> Our user research summary says: "Enterprise users frequently struggle with the reporting module. The main issues are slow performance and confusing navigation. Users have difficulty finding the exports they need, and there's often frustration with the filtering options. Overall, the reporting experience is rated poorly compared to competitors."

**Output:**

---

### Abstractions Identified

| Abstraction | Specific Instances Behind It |
|-------------|------------------------------|
| "frequently struggle" | How frequently? In which sessions? At which step? "Frequently" could mean 3 of 10 sessions or 9 of 10 — the design response is completely different. |
| "slow performance" | What is the specific load time? On which reports? Is it slow on all reports or complex/large ones? Is "slow" 3 seconds or 30 seconds? Does it time out or just spin? |
| "confusing navigation" | Which navigation path? Were users trying to find reports by date, by type, or by creator? Where did they click first? Where did they end up? "Confusing" without path data is unusable for design. |
| "difficulty finding exports" | What are they trying to export — CSV, PDF, raw data? Where do they look first (menu? action buttons? right-click?)? Do they find it eventually or abandon? |
| "frustration with filtering options" | Which filters specifically? Are they missing a filter that should exist, or finding existing filters non-functional? Is it the filter UI or the filter logic? |
| "rated poorly compared to competitors" | Which competitors? Which specific features are named? Is the comparison about performance, discoverability, or feature availability? |

---

### Ignored Background Details

- The research summary doesn't specify which enterprise users (company size, technical sophistication, how long they've been customers) — behavior in year 1 vs year 3 customers can be completely different
- No information on device or browser — performance issues are often environment-specific
- No mention of how many users were in the research vs. how many enterprise users total — the summary could represent 4 power users or 40 average users
- No temporal detail — are the issues getting worse? Were they always present? Did something change recently?

### Notable Absences

- No session recording references or direct quotes — all findings are researcher interpretations of user behavior
- No mention of users who *successfully* used reporting — knowing what the non-frustrated users did differently is as important as knowing what the frustrated ones did
- No behavioral data to validate or contradict the qualitative findings (actual load times, actual click paths, actual error rates)

### What the Specifics Reveal

The summary sounds actionable — "fix slow performance, fix navigation" — but without the specific instances, every fix is a guess. "Slow performance" might be the correct diagnosis for an infrastructure team, or it might be a symptom of reports being generated from an unindexed query on large datasets — two completely different interventions. "Confusing navigation" might mean the export button is in the wrong place (a 30-minute fix) or that users have a fundamentally wrong mental model of how reports are organized (a 3-month redesign).

The summary has created a false sense of precision. Before any design or engineering work begins, the team needs: (1) 3–5 specific session recordings of the exact failure moments, (2) the actual load time data from the backend for the affected report types, and (3) one focused 45-minute session with two enterprise users doing the specific task they struggle with, with the team watching. These three things take one week and will produce more actionable detail than the current summary can support.
