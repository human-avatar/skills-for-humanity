# logic-consistency-check

> Surfaces internal contradictions in documents, specs, and plans.

**Trigger:** `/s4h-logic-consistency-check`

---

## What it does

Reads for conflict rather than comprehension: finds requirements that contradict each other, claims that are mutually exclusive, and edge cases that expose hidden conflicts. Essential for documents that grew incrementally or had multiple contributors.

---

## When to use

- Spec or requirements doc that has grown over time
- "Something feels off but I can't pin it down"
- Before committing to a design or implementation
- Document with multiple contributors or editing rounds

---

## Example

**Input:**
> Review this product spec excerpt for consistency:
> "Users can delete their account at any time. All user data is retained for 90 days after deletion for fraud prevention. Users have the right to request immediate deletion of all their data under GDPR. The system uses user behavioral data to improve recommendations for up to 1 year after last session."

**Output:**

**Contradiction 1 — "Delete at any time" vs. "retained 90 days"**

"Can delete their account at any time" implies immediacy and finality. "Data retained 90 days for fraud prevention" means deletion is not actual deletion — it's a deactivation with a retention period. These two claims are inconsistent unless "delete account" is explicitly defined as "deactivate with 90-day retention." The spec doesn't make that distinction.

*Resolution needed:* Define "delete" precisely. If it means deactivation with retention, say so explicitly. If it means actual deletion, the fraud prevention retention needs a different legal basis.

**Contradiction 2 — 90-day retention vs. GDPR immediate deletion right**

The spec offers GDPR immediate deletion on request. But the system retains data 90 days post-deletion. These are in direct conflict. GDPR Article 17 allows retention for legitimate interest (fraud prevention is potentially legitimate), but the spec doesn't acknowledge the tension or resolve how they coexist. A user could read both clauses and reasonably believe immediate deletion deletes the fraud-prevention copy.

*Resolution needed:* Specify whether GDPR deletion requests delete the fraud-prevention copy. If not, explain the legal basis for retaining it post-request.

**Contradiction 3 — "All user data" deletion vs. "1-year behavioral data retention"**

GDPR clause says "all their data." The recommendation clause retains behavioral data for 1 year post-session. If a user requests GDPR deletion at month 11, does that include the behavioral data? The spec implies yes (all data) but the retention period implies no.

*Resolution needed:* Either the behavioral retention survives GDPR requests (requires explicit legal basis) or it doesn't (requires the recommendations system to handle data gaps).

**Summary:** Three structural contradictions, all involving deletion semantics. The spec was likely written by different people at different times without reconciling the implications. Requires legal review before implementation.
