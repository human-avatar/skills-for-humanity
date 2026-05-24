# ethics-impact-scan

> A quick ethical impact assessment on a proposed feature, change, or decision — maps who benefits, who's harmed, and at what scale.

**Trigger:** `/ethics-impact-scan`

---

## What it does

Runs a fast stakeholder map and two-lens analysis (utilitarian for net effect, justice for distribution) to surface ethical flags before a decision is locked in. Designed to take minutes, not hours — it's the filter that tells you whether you need a full `ethics-council`. Flags are color-coded: 🔴 block, 🟡 watch, 🟢 note. The most commonly missed parties: non-users and future parties who are affected but didn't opt in.

---

## When to use

- "Ethics scan"
- "Impact check"
- "Is this safe to ship?"
- "Who does this affect?"
- Any new feature proposal where stakeholder impact is unclear
- Before committing to build anything with non-obvious affected parties

## When NOT to use

- For high-stakes decisions requiring deep deliberation — use `ethics-check` or `ethics-council`
- For an active incident — use `ethics-crisis-triage`
- For consent flow or data practice review — use `ethics-consent-review` or `ethics-data-audit`
- Do NOT use to justify a decision you've already made

---

## Example

**Input:**
> We're adding a feature to our productivity app that detects when employees are "unproductive" (based on mouse movement, keystroke activity, and application switching) and sends weekly reports to their managers.

**Output:**

---

**Subject:** Employee productivity monitoring feature — automated detection of "unproductive" periods + weekly manager reports

---

**Stakeholder Map**

| Stakeholder | Affected How | Scale |
|---|---|---|
| Direct users (employees) | Primary subjects of monitoring; behavior data collected continuously; risk of misclassification as "unproductive" | All active users |
| Managers | Receive reports; gain surveillance capability they may not have asked for; potential for misuse | All manager users |
| HR/Legal (employer) | New liability exposure from monitoring data; compliance requirements vary by jurisdiction | Employer organizations |
| Non-users in employees' households | Remote workers may be monitored in shared spaces; household members' behavior may incidentally be captured | Variable |
| Employees in jurisdictions with strict monitoring laws | GDPR, California law, and others have specific requirements for employee monitoring consent and limits | Users in relevant jurisdictions |
| Future employees | New hires who never consented to legacy monitoring may be subject to data collected before they joined | Forward-looking |

---

**Utilitarian Assessment**

The aggregate benefit (managers get visibility into team productivity patterns) is real but modest — most managers already have output-based metrics. The aggregate harm is potentially large: continuous behavioral monitoring affects psychological safety, creates anxiety even for "productive" employees, and misclassification risk is high (a surgeon reviewing X-rays appears "unproductive" by mouse movement). At scale across an employee population, the psychological cost of known surveillance is not small. The net effect is likely negative — the monitoring benefit to managers is outweighed by the psychological cost to employees, especially given the availability of output-based alternatives that carry lower harm.

**Justice Assessment**

Benefits (visibility) flow primarily to managers (higher power, higher organizational position). Harms (surveillance, stress, misclassification risk) fall primarily on employees (lower power, lower organizational position). This is a distribution of benefits and burdens that flows upward in the power hierarchy — those with less power bear more cost to generate a benefit for those with more. The justice test fails: behind a veil of ignorance (not knowing whether you'd be the monitored employee or the manager receiving reports), this feature is not equitable.

---

**Flags**

- 🔴 Misclassification harm — "unproductive" detection based on peripheral activity proxies (mouse movement, keystrokes) will systematically misclassify deep work, reading, video calls, and creative work as unproductive. The reports will be factually wrong in ways that can damage real employees.
- 🔴 Consent gap — many employees will not meaningfully consent to this monitoring even if a ToS update goes out. The power differential in employment relationships makes opt-out consent effectively coerced.
- 🟡 Jurisdiction compliance — active employee monitoring has specific legal requirements in multiple jurisdictions; shipping this as a default feature without per-jurisdiction configuration is a legal and ethical risk.
- 🟡 Manager misuse risk — surveillance data in managers' hands without training or guardrails creates conditions for punitive or discriminatory application.
- 🟢 Employer liability — employers who deploy this feature may face regulatory scrutiny or employee legal claims; worth flagging in the product's terms.

---

**Bottom Line:**

This feature needs significant rethinking before shipping. The core issue is not the visibility capability but the surveillance mechanism — mouse tracking and keystroke monitoring is a particularly inaccurate proxy for productivity and carries high psychological harm. Consider an alternative framing: opt-in engagement insights for employees themselves (not managers), or output-based metrics that don't require behavioral surveillance. Escalate to ethics-council before any version of this feature is put in front of users.
