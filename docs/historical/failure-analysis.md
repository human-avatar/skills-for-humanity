# historical-failure-analysis

> Extracts recurring failure modes from similar past situations — most failures have happened before.

**Trigger:** `/s4h-historical-failure-analysis`

---

## What it does

Identifies 3-5 historical situations structurally similar to the current one, maps the failure modes that appear across multiple cases, and produces the specific early warning signs to watch for.

---

## When to use

- "What usually goes wrong with this?"
- "How do these typically fail?"
- About to do something where the failure mode is unknown

---

## Example

**Input:**
> We're about to do a company-wide strategy pivot from horizontal to vertical — moving from a general-purpose tool to a focused industry solution. What are the historical failure modes for this kind of pivot?

**Output:**

**Historical cases with structural similarity:**

**Foursquare (2014):** Pivoted from check-in app for everyone to Swarm (consumer) + Foursquare (location data business). Vertical specialization in B2B data worked eventually, but the transition period lost the consumer base faster than the B2B business could compensate.

**Box.com (~2012-14):** Pivoted from general file storage to enterprise content management. Worked — but required 3+ years of rebuilding the product, rebuilding the sales motion, and losing customers who weren't enterprise.

**Slack (~2013):** Originally a gaming company (Glitch) that pivoted to build the internal tool they used to communicate. Complete business model change, not just target customer. High success, but the original product had to be abandoned.

**Recurring failure modes:**

**Failure 1: The existing customer base doesn't survive the transition.**
When a horizontal tool goes vertical, existing customers in other industries feel deprioritized. Their features stop shipping. Support gets slower. They leave before the vertical business replaces the revenue. *Early warning sign: churning of current horizontal customers accelerates in months 1-6 of the pivot.*

**Failure 2: The vertical product isn't meaningfully differentiated from horizontal.**
Rebrand as "for [vertical]" without actually rebuilding for that vertical's specific workflows. The product is the same tool with different marketing. The target vertical can tell. *Early warning sign: win rate against vertical specialists doesn't improve despite the pivot.*

**Failure 3: The sales motion doesn't change when the customer does.**
Going vertical usually means going upmarket. Upmarket means longer sales cycles, more stakeholders, security reviews, procurement. A team built to sell horizontally can't sell vertically without significant enablement and usually new hires. *Early warning sign: sales cycle length increases without a corresponding increase in deal size.*

**Failure 4: The pivot takes twice as long as planned.**
Rebuilding for a vertical takes 18-36 months in every historical case. Companies that modeled 12 months found themselves caught between two businesses with neither fully operational. *Early warning sign: month 9 roadmap still looks like the horizontal product with vertical branding.*

**Most dangerous failure mode:** #1 — the existing customer churn accelerating before vertical revenue arrives. This is a cash flow cliff that has killed otherwise good pivots.
