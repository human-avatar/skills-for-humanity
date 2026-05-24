# ethics-check

> A fast, comprehensive ethics report — five frameworks applied in a single pass, with synthesis and recommendation.

**Trigger:** `/ethics-check`

---

## What it does

Runs five ethical frameworks (Utilitarian, Deontological, Virtue Ethics, Care Ethics, Justice/Fairness) across a decision or action in sequence, synthesizes where they agree and conflict, and produces a clear recommendation. Lighter than `/ethics-council` (no peer review), heavier than `/ethics-impact-scan` (covers all five frameworks). The right tool when you need a complete ethical read without convening a full deliberation.

---

## When to use

- "Quick ethics review on this decision"
- "Full ethics report before we proceed"
- "Check this ethically"
- Any situation where you want a complete assessment without a multi-hour deliberation
- Pre-decision check that covers all ethical angles

## When NOT to use

- High-stakes decisions with significant ongoing consequences — use `/ethics-council` for deeper deliberation and peer challenge
- Quick pre-ship checks — use `/ethics-impact-scan` for a faster first pass
- Active crisis situations — use `/ethics-crisis-triage` for time-pressured incidents

---

## Example

**Input:**
> We're considering laying off 15% of the company. The business has sufficient runway but growth has stalled. Leadership believes cutting now gives the remaining team 18 months of runway vs 10 months without cuts. We want to avoid further rounds. Employees found out through a news article before the official announcement.

**Output:**

---

**Decision or Action**
Laying off 15% of the workforce, announced to employees via news leak before official communication, with the rationale that it extends runway and avoids future rounds.

---

**Framework Assessments**

**Utilitarian**
The outcome calculation depends heavily on whether the 18-month runway estimate holds and whether a leaner team can execute effectively. If the cuts achieve runway extension and the company survives, the net wellbeing outcome may be positive — 85% retain employment with greater job security than an underfunded alternative. However, the leak of information before official communication amplifies harm: affected employees experienced the disruption of discovering their situation through media, a harm that was entirely avoidable. The second-order effects on remaining employee trust and morale are significant and should be quantified rather than assumed away.

**Deontological**
Employees have a right to be treated as persons with dignity, not as line items to be managed around communication risk. The leak — regardless of cause — resulted in people learning about their potential job loss through news media. This is a failure of the duty of respect owed to affected parties. If leadership knew the announcement was imminent and took no steps to get ahead of the leak, there is a stronger duty violation: the people most affected should be the first to know, not the last. The decision to cut may be defensible on business grounds; the communication failure is a separate deontological breach.

**Virtue Ethics**
A leader of genuine integrity would prioritize the dignity and directness of communication, even under time pressure. The leak raises a character question: was every reasonable step taken to ensure affected employees heard first? If yes, this is an unfortunate operational failure. If the leak occurred because the process was poorly managed or because communication was being delayed for strategic reasons, it reveals priorities that are harder to reconcile with the character a trustworthy organization claims to have.

**Care Ethics**
The employees being laid off are in a relationship of dependency — they have built their lives around this employment. The care ethics standard is responsiveness to vulnerability. Being notified through a news article rather than by a manager is a failure of care toward the most vulnerable people in the situation. The 18-month runway rationale serves the company; the care obligations run toward the people leaving. The question is what support, transparency, and time is being offered to them — severance terms, references, timeline clarity — and whether that is proportionate to the disruption.

**Justice / Fairness**
The 15% carries the cost so that 85% benefits from extended runway. That distribution may be defensible if layoffs are unavoidable, but it must be examined: were other cost-reduction options genuinely considered? Are those being laid off distributed equitably across the organization, or are they concentrated in certain roles, levels, or demographics? The leak creates a procedural fairness problem independent of the distribution: people's access to information about their own situation was determined by who happened to see a news article, not by any fair process.

---

**Agreement and Conflict Summary**

- **Frameworks agree:** The communication failure (leak before official announcement) is an ethical breach across all five frameworks — it is simultaneously a harm (utilitarian), a rights violation (deontological), a character failure (virtue), a care failure (care ethics), and a procedural fairness violation (justice). This is the strongest ethical finding.
- **Frameworks conflict:** On the underlying layoff decision itself, frameworks diverge. Utilitarian analysis may support it if runway extension improves aggregate outcomes. Deontological and care ethics are neutral on the decision if it is genuinely necessary, but demand high standards on how it is executed.

**Values at Stake**
- Dignity and respect of affected employees
- Organizational integrity under pressure
- Procedural fairness in a high-stakes communication
- Care obligations to people in dependent relationships

**Recommendation**

The layoff decision itself requires more information to evaluate completely (were alternatives genuinely considered, is the runway math sound, is the distribution of cuts fair?). The communication failure is unambiguous: regardless of cause, the gap between the leak and the official announcement must be closed immediately. All affected employees should receive direct, personal notification before any further external communication. The organization should not move forward with public announcement until this is done. As a structural recommendation: any future sensitive communications require a controlled disclosure process that places affected employees first.
