# analogy-boundary-testing

> Finds where an analogy breaks down before it's relied upon.

**Trigger:** `/s4h-analogy-boundary-testing`

---

## What it does

Systematically tests each dimension of an analogy to find where the mapping fails. Analogies fail silently — the damage happens when decisions are made on a comparison that doesn't hold in the relevant dimension.

---

## When to use

- Using a metaphor or analogy to make a case
- "Stress-test this analogy"
- "Does this comparison really hold?"
- About to make a decision based on a comparison

---

## Example

**Input:**
> We keep saying our marketplace is "like Airbnb for office space." We're using this analogy to justify our strategy. Test it.

**Output:**

**The analogy:** Your marketplace is like Airbnb for office space.

**Dimensions where the analogy holds:**

- Two-sided marketplace mechanics (supply side lists, demand side books)
- Variable inventory (different spaces with different characteristics and prices)
- Trust/review mechanisms (hosts and guests rate each other)
- Commission model on transactions

**Dimensions where the analogy breaks:**

**1. Decision complexity and sales cycle**
Airbnb: spontaneous, individual, emotional. "This looks nice, I'll book it." Decision in minutes. Single decision-maker.

Office space: rational, institutional, multi-stakeholder. Requires facilities manager, finance, legal (lease review), and often C-suite sign-off. Sales cycle measured in weeks or months. The "just book it" UX doesn't exist for office space decisions.

*Decision implication:* If your product is designed for spontaneous individual booking (like Airbnb), it doesn't fit the actual decision process for office space. You may need sales support, legal templates, and a longer consideration funnel.

**2. Regulatory environment**
Airbnb: residential leases with standard landlord-tenant law.

Office space: commercial leases, zoning, liability, ADA compliance, insurance requirements, building management involvement. Far more complex legal infrastructure.

*Implication:* Airbnb scaled by reducing friction for individuals. Office space can't reduce legal friction the same way.

**3. Repeat vs. one-time usage**
Airbnb: primarily used for travel — episodic, occasional.

Office space: often a recurring need (consistent workspace for teams, monthly or annual commitments). The retention and LTV dynamics are completely different.

**4. Supply acquisition**
Airbnb: individual homeowners can list independently with minimal friction.

Office space: supply is commercial landlords, coworking operators, or enterprises with underutilized space — all with more complex legal and operational requirements.

**Verdict:**
The analogy is useful for explaining the concept to investors and journalists. It's misleading as a strategic guide. The key differences — sales cycle, regulatory complexity, and supply acquisition — require completely different product and go-to-market strategies than Airbnb used. Building an Airbnb-style product for office space will fail at the points where the analogy breaks.
