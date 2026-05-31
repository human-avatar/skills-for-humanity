# analogy-perspective-shifting

> Approaches a problem from completely different fields to break the assumption blindness that comes from domain expertise.

**Trigger:** `/s4h-analogy-perspective-shifting`

---

## What it does

Applies the diagnostic instincts and tools of 2–3 genuinely different fields to a problem — not as metaphor, but as actual outside perspectives. An archaeologist, a marine biologist, and a structural engineer don't share the assumptions of someone who's been working in software or business strategy for years. Their first questions break frames that have become invisible. The skill finds what insiders overlook, then identifies cross-field convergences — the observations that multiple outsiders make independently.

---

## When to use

- "Fresh eyes on this"
- "What would a [different expert] say?"
- "We keep coming back to the same solutions"
- "Approach from another field"
- Stuck problems where the usual toolkit has been exhausted
- Any situation where you suspect you're working within inherited assumptions

## When NOT to use

- When you already have a specific analogy you want to test — use `analogy-boundary-testing`
- When you want to map structural correspondence between two specific situations — use `analogy-structure-mapping`
- When the goal is transferring a proven method from another domain — use `analogy-domain-transfer`

---

## Example

**Input:**
> Our B2B SaaS product has a 65% 90-day churn rate. We've done everything the playbook says: better onboarding, more touchpoints, success calls, in-app guidance. Nothing moves the needle. Apply 3 outside perspectives to this problem.

**Output:**

---

**Problem (insider framing):**
> High churn despite standard customer success interventions. The frame: we are not doing enough of the right things to retain customers.

---

**Field perspectives:**

| Field | Core instincts / tools | What they notice | What they'd try first |
|-------|------------------------|------------------|-----------------------|
| **Emergency Medicine** | Triage: identify acuity fast, treat the life-threatening issue first, don't confuse symptoms with cause. Ask: is this stable or deteriorating? | The interventions (onboarding, calls, guidance) are all *preventive* medicine applied to patients who may already be in organ failure. 65% churn in 90 days suggests the problem is not care quality — it's case selection. EM would ask: are you admitting the wrong patients? | Stop optimizing care and audit intake. Which customers actually survive past 90 days, and what do they have in common? The problem may be sales qualification, not customer success. |
| **Archaeology** | Stratigraphic analysis: what layers tell us what was true at different times? Artifacts aren't meaningful in isolation — context and sequence matter. Ask: what does the pattern of what remains tell us about what was lost? | High churn means a lot of customers who have already left. The churned cohort is archaeological evidence. Instead of asking "how do we stop churn," ask "what do the churned customers tell us that the retained ones don't?" | Conduct deep exit archaeology on the churned cohort — not surveys, but interviews that reconstruct the decision sequence: when did they decide to leave, and what triggered it? Look for a specific moment of failure, not a general experience. |
| **Structural Engineering** | Failure analysis: when a structure fails, the cause is almost never where the failure is visible. It's where stress concentrates invisibly. Look for the load path; find where load exceeds capacity. | Customer success interventions are applied at the visible failure point (churn). Structural engineers would look for the load path: where is the stress being applied that eventually causes the failure? In SaaS, that's often the gap between what was sold and what the product delivers — a hidden promise-reality mismatch that success calls can't fix. | Map the load path: what was promised in sales that isn't delivered in the product? Where does the gap between expectation and experience accumulate? The fix may be upstream in sales, not in customer success at all. |

---

**Cross-field patterns (what multiple outsiders see):**

All three fields independently observe that the problem may not be in the place the interventions are targeting. Emergency medicine says "wrong patients." Archaeology says "the evidence is in the churned cohort, not the retained one." Structural engineering says "the failure point is not the visible failure location." This convergence is a strong signal: the interventions are applied downstream of the actual cause.

---

**Most useful foreign insight:**

**Emergency medicine's intake question.** The insider frame is "how do we retain customers better." The EM reframe is "are we admitting customers who can succeed with this product, or are we creating a high-churn problem at the sales stage and then asking customer success to fix it?" This is invisible from inside the customer success frame because customer success professionals see their job as retention, not qualification. But 65% in 90 days is a rate that suggests a structural intake problem, not a care problem — and no amount of better care will fix it.

**Immediate test:** Analyze the surviving cohort (35% who stayed past 90 days) against the churned cohort on deal characteristics, use case, company size, sales rep, and expectations set at sale. If the survivors cluster clearly, the problem is qualification, not retention.
