# ethics-vendor-review

> Evaluates a third-party vendor, supplier, or integration against ethical standards before signing or shipping.

**Trigger:** `/ethics-vendor-review`

---

## What it does

Applies two ethical lenses to vendor evaluation: virtue ethics (what does choosing this vendor say about who we are?) and justice/fairness (are the benefits fairly distributed, or does this relationship depend on someone else bearing a cost we don't see?). Assesses track record, business model alignment, data practices, labour practices, market power dynamics, and exit/lock-in risk. The standard: not just legally acceptable but genuinely the kind of organisation we want to be in relationship with.

---

## When to use

- "Vet this vendor"
- "Is this supplier ethical?"
- "Ethics check on this partner"
- Before signing a contract with any significant vendor or integration
- When considering SaaS tools, data providers, API integrations, or outsourcing arrangements
- When labour practices, data handling, or business model alignment are considerations

## When NOT to use

- For consent flows or data sharing decisions — use `ethics-consent-review` or `ethics-data-audit`
- For full multi-framework analysis of a business decision — use `ethics-check`
- For pre-ship impact assessment — use `ethics-impact-scan`

---

## Example

**Input:**
> We're considering integrating a credit scoring API for our lending platform. The vendor uses an "alternative data" model — they score applicants using social media activity, app usage patterns, and inferred social network quality. They claim higher accuracy than traditional credit models. The pricing is significantly cheaper than the major bureaus. Vet them ethically.

**Output:**

---

**Vendor Being Vetted:**
Alternative credit scoring API using social media activity, app usage patterns, and social network quality to score loan applicants. Cheaper than traditional credit bureaus; claims higher accuracy.

---

**Virtue Ethics Assessment**

| Dimension | Finding | Concern Level |
|---|---|---|
| Track record | Alternative credit scoring using social data is a relatively new category — limited long-term track record; regulatory scrutiny is increasing in the US and EU for social data use in credit decisions | 🟡 |
| Business model alignment | Their revenue model depends on their data being used to make credit decisions. They have a commercial incentive to claim accuracy that may not be independently validated. Ask: has their accuracy been audited by an independent third party? | 🟡 |
| Values alignment | Social media activity as a credit signal means people who are less active online, who use platforms differently, or who have smaller networks are penalized — not because of financial behavior but because of a social media behavior model. This values choice about what "creditworthy" means should be visible. | 🔴 |
| Transparency | "Inferred social network quality" — what does this mean specifically? How is it calculated? Can applicants understand their score? If the scoring mechanism is a black box, that's a values concern independent of accuracy claims. | 🔴 |

**Justice Assessment**

| Dimension | Finding | Concern Level |
|---|---|---|
| Labour practices | API vendor; no supply chain labour concerns identified | 🟢 |
| Data practices | Social media data and app usage patterns were collected for social purposes; using them for credit decisions is a significant purpose expansion users did not explicitly consent to | 🔴 |
| Market power | Using social network quality as a credit signal creates a Matthew effect: people with larger, higher-status networks score better → get better credit → build more resources → build larger networks. This amplifies existing social inequality rather than expanding credit access. | 🔴 |
| Displacement | If social data scoring systematically disadvantages communities with lower social media adoption (older populations, lower-income communities, rural populations) while claiming to increase access, the displacement harm is significant and falls on the people the lending industry is most often criticized for underserving. | 🔴 |

**Dependency Risk:**
Credit scoring integrations create deep operational dependency — switching scoring models requires re-underwriting existing loans, recalibrating risk models, and regulatory disclosure. Exit is expensive and slow. This vendor's relative novelty and regulatory exposure increases the risk that you'd need to exit under adverse conditions.

---

**Verdict:**
Do not proceed without significant due diligence.

The business case (cheaper, higher accuracy) is real but does not address the three significant concerns: (1) the data practices concern — social data used for credit decisions without explicit consent from the people being scored; (2) the market power concern — social network quality as a credit signal amplifies existing inequality; (3) the transparency concern — if applicants cannot understand or contest their score, the consumer protection framework is incomplete.

If the goal is expanding credit access to underserved populations, the mechanism being used (social network quality) may systematically disadvantage exactly those populations. The accuracy claim should be audited specifically on the demographic segments you most care about reaching.

**Conditions if proceeding:**
- Require an independent bias audit segmented by demographic proxy before integration
- Require full documentation of what "social network quality" means and how it's calculated
- Ensure your own loan decisions using this score are subject to your adverse action notice obligations, including explanation of which factors affected the score
- Legal review of jurisdiction-specific regulations on alternative credit scoring data types before deploying in any regulated market
