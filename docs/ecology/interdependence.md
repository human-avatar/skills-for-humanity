# ecology-interdependence

> Maps the dependency web — and traces what propagates through it when something changes.

**Trigger:** `/s4h-ecology-interdependence`

---

## What it does

Maps the dependency structure of a system — who relies on whom, in what direction, with what tightness — and traces how changes propagate through that web. Draws on Joseph Connell's community ecology work on competitive, predatory, and mutualistic interactions to distinguish dependency types. Identifies hubs, bridges, and cycles in the structure, then models cascade pathways for specific change scenarios. The output reveals both where the system is brittle (tight dependencies with no substitutes) and where it is resilient (loose dependencies with buffers and redundancy).

---

## When to use

- "What cascades if we change X?"
- Planning a significant change — a restructuring, a vendor switch, a product pivot — and need to trace its propagation
- A change has already happened unexpectedly and you need to understand why the effects are spreading where they are
- Want a structural map of who depends on whom before making a decision
- Post-incident analysis: understanding why a small failure caused a large disruption

---

## Example

**Input:**
> We're a retail platform that is planning to switch our primary payments processor from Stripe to a new vendor. Seems like a technical decision. But every time we try to start the project, someone raises a concern about something else that might break. We can't tell if these concerns are real or if people are being overly cautious. Help us map what actually depends on what.

**Output:**

**System:** Retail e-commerce platform; scope = payments processor switch from Stripe to new vendor.

**Dependency Map**

| Dependency | Direction | Type | Tightness | Substitutability |
|------------|-----------|------|-----------|-----------------|
| Checkout flow → Stripe | A depends on B | Infrastructure | Tight | Medium (new vendor can replicate; 3-4 months of integration work) |
| Fraud detection → Stripe Radar | A depends on B | Feature | Tight | Low (Stripe Radar is deeply integrated; replacement requires new vendor + rebuild) |
| Finance reconciliation → Stripe Dashboard exports | A depends on B | Process | Tight | Medium (requires new reporting pipeline; 4-6 weeks) |
| Subscription billing → Stripe Billing | A depends on B | Feature | Tight | Low-Medium (complex recurring logic; 2-3 months to migrate) |
| Customer dispute management → Stripe Disputes API | A depends on B | Process | Medium | Medium (process rebuild, staff retraining) |
| Mobile app → Stripe iOS/Android SDKs | A depends on B | Infrastructure | Tight | Medium (new SDKs; testing risk high) |
| Tax calculation → Stripe Tax | A depends on B | Feature | Tight | Low (Stripe Tax is deeply embedded in checkout; TaxJar or Avalara would require architecture changes) |
| Analytics dashboards → Stripe webhook event stream | A depends on B | Information | Medium | Medium (event schema migration; 3-4 weeks) |
| Platform → Stripe as brand trust signal (some enterprise buyers) | Bidirectional | Trust | Loose | High (minor for most segments) |

**Structural Features**

- **Hubs:** Stripe is the hub — 8 distinct dependency types flow through a single vendor relationship. This is a highly hub-dependent architecture.
- **Bridges:** The Stripe relationship is the single bridge between the platform's checkout, finance, fraud, tax, subscriptions, and analytics functions. There is no redundant pathway.
- **Cycles:** None identified in this web.
- **Orphans:** Brand trust dependency (enterprise segment) is loose and low-risk.

**The real concern:** This is not a "switch the payments processor" project. It is a 6-9 month multi-workstream programme affecting 6 distinct functional areas, all of which depend on Stripe in ways that are not interchangeable. The concerns being raised are not excessive caution — they are accurate reads of a complex dependency web.

**Cascade Analysis**

| Stage | Affected Nodes | Mechanism | Lag | Amplified or Absorbed? |
|-------|---------------|-----------|-----|------------------------|
| First-order | Checkout flow, mobile SDKs | Direct integration replacement | Weeks 1-8 | Manageable with testing |
| First-order | Fraud detection (Radar) | No equivalent in new vendor; gap period | Weeks 4-16 | Amplified — fraud rates may rise during gap |
| Second-order | Finance reconciliation | Stripe Dashboard exports stop; new reporting pipeline not yet live | Month 2-3 | Absorbed if new pipeline is ready; amplified if not |
| Second-order | Subscription billing | Complex recurring logic migrated mid-cycle | Month 3-5 | High risk of billing errors during migration |
| Second-order | Tax calculation | Stripe Tax embedded in checkout architecture; requires checkout rebuild, not just swap | Month 3-6 | Amplified — this is a hidden dependency that will surface mid-project |
| Third-order | Analytics dashboards | Webhook event schema changes; dashboards report incorrectly | Month 4-5 | Absorbed if flagged early; amplified if discovered late |
| Third-order | Customer dispute management | Process retraining required; disputes may be mishandled during transition | Month 5-7 | Absorbed with deliberate retraining programme |

**Resilience Assessment:**

The current architecture is tightly coupled to a single vendor across 8 dependency types, with no redundancy. This is efficient in stable conditions (single vendor relationship to manage, consistent API surface) but highly brittle under the proposed change. There is no natural absorber — every dependency is tight enough to propagate disruption, and several have no quick substitute.

**Critical Vulnerabilities:**

1. **Stripe Tax is a hidden architectural dependency.** Most project teams framing this as a "payments swap" will not discover it until deep into the project, at which point the scope expansion will cause delay and cost escalation. It should be scoped and resourced upfront.

2. **Fraud gap is a live risk.** There will be a period when Stripe Radar is off and the replacement is not yet tuned to the platform's fraud patterns. This period should be minimised and monitored with elevated attention.

3. **Subscription billing migration is the highest technical risk.** Billing errors on recurring subscriptions create customer-facing consequences (incorrect charges, failed renewals) that are difficult to recover from. This workstream needs dedicated engineering and a staged migration plan.

**Recommended framing:** Restructure the project into six parallel workstreams with explicit dependency sequencing. The checkout flow migration is the gateway — nothing else can complete until it is stable. Fraud detection gap management is the primary risk workstream. Tax calculation is the hidden scope item that must be surfaced and resourced now.

---

## Related skills

- [`/s4h-ecology-keystone-species`](keystone-species.md) — Once the dependency map is built, identify which nodes are structurally irreplaceable
- [`/s4h-ecology-carrying-capacity`](carrying-capacity.md) — Assess whether the proposed change puts load on nodes that are already near their limits
- [`/s4h-systems-feedback-mapping`](../systems/feedback-mapping.md) — Map the reinforcing and balancing loops embedded in the dependency structure
