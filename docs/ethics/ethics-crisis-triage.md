# ethics-crisis-triage

> Rapid multi-framework ethical assessment when something has already gone wrong — structure for urgent ethical response.

**Trigger:** `/s4h-ethics-crisis-triage`

---

## What it does

Provides a fast, structured ethical assessment for active incidents: establishes the facts first (analysis on wrong assumptions produces wrong conclusions), runs four ethical frameworks quickly (utilitarian, deontological, care ethics, justice), determines immediate obligations (who must be notified, what must stop, what must be preserved), and produces a response framework. Designed for time-pressure situations where full deliberation is impossible.

---

## When to use

- "Ethics triage on this"
- "Something went wrong — how do we handle this ethically?"
- "Incident ethics"
- Any active incident: data breach, harmful product outcome, discriminatory incident, policy failure
- When the ethical dimensions of a response need to be mapped fast

## When NOT to use

- For deliberate pre-decision ethical analysis — use `ethics-check` or `ethics-council`
- For pre-ship impact assessment — use `ethics-impact-scan`
- For auditing an algorithm for bias — use `ethics-bias-check`

---

## Example

**Input:**
> Our app had a data breach 3 hours ago. A third-party analytics vendor we use was compromised. We believe 40,000 users' email addresses and hashed passwords were exposed. We don't know if any plaintext passwords or payment data were accessed. Legal is still assessing disclosure obligations. Marketing doesn't want to announce until we have the full picture. It's been 3 hours and nothing has been communicated to users.

**Output:**

---

**Incident:**
Third-party analytics vendor breach; 40,000 user email addresses and hashed passwords potentially exposed. Payment data and plaintext passwords unknown. 3 hours elapsed since discovery; no user communication issued. Legal assessment ongoing. Marketing recommending delay.

---

**Rapid Framework Sweep**

| Framework | Key Finding | Urgency |
|---|---|---|
| Utilitarian | The harm is ongoing — users who don't know their credentials may be exposed cannot take protective action (password change, monitoring). Every hour without notification increases the harm window. Delay to "get the full picture" extends aggregate harm. | 🔴 |
| Deontological | Users have a right to know when their data has been compromised. This right does not depend on the extent of the breach or whether legal disclosure is required — it is a duty owed to the people whose data was taken. The marketing concern does not override this duty. | 🔴 |
| Care Ethics | 40,000 users are in a relationship of data dependency with this company. They cannot protect themselves without the information. The care obligation is immediate notification, even under uncertainty — especially under uncertainty, because users need time to act. | 🔴 |
| Justice | Delaying notification to protect the company's PR position at the expense of users' ability to protect themselves is a distributional injustice: the company bears the reputational cost of early disclosure; users bear the security risk of delayed disclosure. These costs are not being shared fairly. | 🟡 |

---

**Immediate Obligations**

- **Notify now:** Affected users (40,000) — email notification within the next 2 hours, before full scope is known. "We believe X happened, we don't yet know Y, here is what we recommend you do now." Uncertainty is not a reason to delay; it is a reason to communicate clearly about what is and isn't known.
- **Stop now:** Any further processing or transmission of potentially affected user credentials until scope is fully assessed.
- **Preserve:** All vendor logs, internal access logs, and communications from the past 72 hours. Legal hold applies.
- **Decisions requiring authority:** Full scope communication to users; decision on whether to force password resets; vendor contract review and termination decision — these need C-suite authority. Move immediately.

---

**Response Framework**

- **Transparency:** Notify users now with what is known and unknown. Update when more is known. Do not wait for full picture to issue initial notification. The pattern of behavior — told early, kept informed — matters more to trust than the content of any single message.
- **Accountability:** The company is responsible for the data practices of vendors it integrates. "It was the vendor's fault" is a legal defense, not an ethical response to users. Own the accountability; explain what happened without deflecting to the vendor.
- **Remedy:** Force password reset for all affected users within 24 hours regardless of whether plaintext was accessed. Monitor for account takeover activity. Offer credit monitoring if payment data scope expands. Proportionate to what is known now; scalable as more is learned.
- **Prevention:** Conduct a vendor security review within 30 days; publish a summary of changes made. The users who are angry will become advocates if the response is genuine; they become critics forever if the response is evasive.

**Key Ethical Risk in the Response:**
Marketing's instinct to wait for the full picture before communicating is the single biggest ethical risk in the current response — it prioritizes the company's ability to frame the story over users' ability to protect themselves, which is precisely the trade-off that defines whether this crisis is handled with integrity or without it.
