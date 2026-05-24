# resource-leverage-mapping

> Finds the highest-leverage use of available resources — where the same input produces the most output.

**Trigger:** `/resource-leverage-mapping`

---

## What it does

Inventories all available resources (including underused ones), lists all candidate uses, estimates output per unit input, identifies multiplier effects (uses that create more resources or unlock other uses), surfaces underused high-leverage resources that are being overlooked, and recommends the highest-leverage allocation. The most reliable finding: an underused relationship, existing data, or key person's attention that is currently being treated as background infrastructure rather than as a strategic lever.

---

## When to use

- "Where should we put our energy?"
- "Resource leverage"
- "Maximize impact"
- "Highest-leverage use of this"
- Before a planning cycle when you want to prioritize rather than spread
- When you feel the team is working hard but not on the right things

## When NOT to use

- When the question is how to distribute resources across competing claims — use `resource-allocation-analysis`
- When the question is where resources are being lost — use `resource-waste-audit`
- When the question is what's slowing the whole system down — use `resource-bottleneck-analysis`

---

## Example

**Input:**
> We're a 15-person B2B startup with $3M ARR and 18 months of runway. Assets: a strong engineering team (8 engineers), 3 advisors with relevant industry connections, a freemium product used by 12,000 users, and a CEO who is well-known in the industry conference circuit. Where's the leverage?

**Output:**

---

### Resource Inventory

| Resource | Available Quantity / Capacity |
|----------|------------------------------|
| Engineering team | 8 engineers; current utilization ~90% on product + maintenance |
| Industry advisors | 3 advisors with warm networks; current use: quarterly check-ins |
| Freemium user base | 12,000 users; conversion to paid currently ~2% |
| CEO industry profile | Conference speaker; known in ecosystem; current use: occasional speaking gigs |
| Runway | 18 months — sufficient for growth, not sufficient for pivots |

---

### Candidate Uses with Output Estimates

| Resource | Use | Estimated Output per Unit Input | Multiplier Effect? |
|----------|-----|--------------------------------|--------------------|
| Engineering team | New feature development | Medium — adds value, maintains product-market fit | No direct multiplier |
| Engineering team | Infrastructure scaling for freemium | Low — enables current trajectory | No |
| Engineering team | Build activation improvement in freemium product | High — raising 2% → 4% conversion doubles revenue from existing traffic | Yes — unlocks the user base resource |
| Industry advisors | Quarterly check-ins (current use) | Low — advice and perspective, limited conversion | No |
| Industry advisors | Targeted warm intros to 10 enterprise prospects | Very high — each intro is a validated pipeline entry | Yes — creates opportunities that would take 3x longer to source cold |
| Freemium user base | Status quo passive conversion | Low — 2% conversion without intervention | No |
| Freemium user base | Segmented activation campaign to top 500 most-engaged users | High — highest-intent segment; disproportionate conversion likely | Yes — activating 5% of top 500 is 25 paid customers from existing traffic |
| CEO profile | Speaking at conferences (current use) | Low-medium — brand awareness, no direct conversion | No |
| CEO profile | CEO-to-CEO outreach to 15 specific target accounts | Very high — CEO-sourced enterprise deals close at higher rates and faster | Yes — leverages existing credibility into pipeline |

---

### Underused High-Leverage Resources

- **Industry advisors** — currently being used for advice (low output) vs. as a warm network for enterprise pipeline (very high output). The gap between current use and potential leverage is the largest in the inventory. Advisor intros are essentially pre-qualified enterprise leads; they're being underdeployed at quarterly check-ins.

- **CEO industry profile** — being used for brand awareness (diffuse, long-feedback-loop output) vs. direct CEO-to-CEO outreach (specific, fast-feedback-loop output). A CEO who is known in the ecosystem can pick up the phone and get 15 target enterprise CEOs to take a meeting. This is a high-leverage asset being used as a marketing channel.

- **Top 12,000 freemium users** — 2% conversion means 98% of an existing, engaged, product-familiar audience is not paying. Even a modest improvement in activation for the top-engaged segment has outsized revenue impact relative to the cost of the activation work.

---

### Recommended Allocation

**Highest-leverage deployment:**

1. **Advisor network → enterprise pipeline (immediate, no incremental cost):** Ask each of three advisors for 5 specific warm introductions to enterprise prospects (15 total). Brief them on ICP. Dedicate one hour per advisor per month for the next quarter. Expected output: 15 qualified enterprise introductions vs. 0 currently.

2. **CEO outreach → 15 target enterprise accounts (1 week of CEO time):** Create a list of 15 target companies where CEO relationships exist or could be established. CEO-sourced outreach to these 15 accounts. Expected output: 8–10 meetings from a category of account that the current sales team cannot reach.

3. **Engineering: activation improvement for top-engaged freemium users (2–3 weeks engineering):** Build a segmented activation flow for the top 500 most-engaged freemium users. Expected output: 3–5% incremental conversion from this segment = 15–25 paid customers from existing traffic.

**What is being deprioritized:** New feature development slows slightly while activation work runs. Conferences continue but CEO time on conference prep is redirected to direct outreach. This is the explicit trade-off.
