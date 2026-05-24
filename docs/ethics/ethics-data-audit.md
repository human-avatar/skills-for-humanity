# ethics-data-audit

> Audits a data collection, retention, or sharing decision against ethical standards — going beyond legal compliance.

**Trigger:** `/ethics-data-audit`

---

## What it does

Evaluates a data practice through two lenses that legal frameworks underweight: deontological (what do users have a right to, regardless of what the terms allow?) and care ethics (what do you owe the people whose data you hold, given the relationship and vulnerability involved?). A practice can be GDPR-compliant and still be extractive. This audit asks whether the practice is ethical, not just lawful.

---

## When to use

- "Data ethics check on this"
- "Is this data practice ethical?"
- "Audit this data decision"
- Before changing data collection, retention policies, or sharing agreements
- When adding new analytics instrumentation
- Any time you're moving user data in a new direction

## When NOT to use

- For reviewing consent flows specifically — use `ethics-consent-review`
- For pre-ship impact assessment of a feature — use `ethics-impact-scan`
- For a full multi-framework analysis — use `ethics-check` or `ethics-council`

---

## Example

**Input:**
> We're considering sharing anonymized user behavior data with three advertising partners. The data would include browsing patterns within our app, search queries, feature engagement, and inferred user intent. Users consented to "data sharing with partners for personalization purposes" in our ToS. We don't have an explicit opt-out for this specific sharing.

**Output:**

---

**Data Practice Being Audited:**
Sharing anonymized but detailed behavioral data (browsing patterns, search queries, feature engagement, inferred intent) with three advertising partners. Legal basis: ToS consent to "data sharing with partners for personalization purposes." No explicit opt-out mechanism for this specific sharing.

---

**Deontological Findings**

| Duty/Right | Status | Notes |
|---|---|---|
| Informed consent | ⚠️ | "Data sharing with partners for personalization" is technically present in ToS but does not specifically describe advertising partners, behavioral profiling, or inferred intent. Users who clicked through ToS were not practically informed about this use. The standard is genuine understanding, not technical disclosure. |
| Purpose limitation | ❌ | Users signed up for a product. The data being shared is being used for advertising targeting — a purpose substantively different from product use. This is purpose creep covered by vague ToS language, not genuine purpose limitation. |
| Right to exit | ❌ | No explicit opt-out exists for this specific sharing. Users cannot make a meaningful choice. |
| Data as means | ❌ | Users' behavioral data is being used to generate revenue from advertisers — the users are the product, not the customer. The sharing serves the business; there is no benefit to the user from this specific sharing. |

**Care Ethics Findings**

| Dimension | Status | Notes |
|---|---|---|
| Power asymmetry | ❌ | The company knows detailed behavioral patterns about users; users know none of this is happening. This asymmetry is being exploited, not acknowledged. |
| Vulnerable populations | ⚠️ | Inferred intent data may reveal sensitive user states (financial stress, health concerns, relationship status) that users did not explicitly disclose. Advertising targeting based on these inferences is particularly concerning for vulnerable users. |
| Trust test | ❌ | If users knew "you use our app, and we share your search queries and inferred intent with advertisers," the majority would feel the relationship was not what they thought it was. This is the operational definition of a trust violation. |
| Harm potential | 🟡 | Anonymization reduces but does not eliminate risk. "Anonymized" behavioral profiles of sufficient richness can be re-identified. Inferred intent data in the hands of advertisers creates targeting that users cannot see or contest. |

---

**Verdict:**

This practice fails the ethical audit across both lenses. The deontological failures are significant: users do not genuinely understand what they consented to, have no practical opt-out, and derive no benefit from the sharing. The care ethics failures are equally significant: the practice exploits the information asymmetry of the relationship, potentially reveals sensitive states users did not consciously disclose, and would not pass the trust test if made transparent.

The ToS legal cover is real but not ethically sufficient. A practice that is technically disclosed but practically invisible is not genuinely consented to.

**Recommended Actions:**

- Add a clear, specific opt-out for partner data sharing in user settings — not buried in privacy settings, but findable in 30 seconds
- Rewrite the ToS disclosure to specifically name the data types (search queries, inferred intent) and the use case (advertising partners) rather than the current vague language
- Consider whether inferred intent data specifically should be excluded from partner sharing, regardless of opt-out status — this data type carries elevated sensitivity and re-identification risk
- Escalate to `ethics-council` if the advertising partnership is significant enough that potential opt-out volume would materially affect revenue — that's a decision that deserves full deliberation, not a data team decision
