# `/evolution-variation-selection`

> *Selection doesn't design — it filters. Understand the filter and you understand where the population is heading.*

**Trigger:** `/evolution-variation-selection`

---

## What it does

Applies Darwin's variation-selection-retention triad to any evolving system — biological, strategic, cultural, or organisational. Maps what is varying across the population, which selection pressures are differentially rewarding some variants over others, how successful variants are retained and replicated, and what the population looks like after several rounds of selection. As Dawkins extended Darwin's logic: wherever there is heritable variation and differential reproduction, evolution happens — the substrate doesn't matter.

The analysis predicts population trajectories: which strategies, practices, or approaches will increase in frequency; which will be outcompeted and disappear; and which traits may become universal (fixed in the population) versus which will remain polymorphic because multiple variants are stably coexisting.

---

## When to use it

- "Why do some strategies persist in this market even though they seem sub-optimal?"
- You need to predict which of several competing approaches will become dominant over time
- You want to understand what a competitive environment is selecting *for* — what traits are being rewarded
- You're designing an evaluation or selection process and want to understand what it will favour
- A population of approaches, products, or organisations is changing and you want to understand the logic of the change

---

## When *not* to use it

**Don't use variation-selection when the question is about a single entity making a single choice.** If the unit is "what should our company do?" rather than "how will the population of companies in this market shift?", the evolutionary framing adds complexity without insight. Use `/decision-option-mapping` for single-entity choices.

**Don't treat current fitness as permanent.** The most common error: inferring that what is selected for now will always be selected for. Environments shift. The variation-selection tool should always end with an environmental stability assessment — today's winning variant may be tomorrow's dead end. Pair with `/temporal-futures-mapping` when the selection environment itself may be changing.

The nearest neighbor: [`/evolution-niche`](niche.md) — if the core question is who can coexist with whom (not just what gets selected for), niche analysis is more targeted.

---

## Example

**Input:**
> The enterprise software market for project management tools has been shifting over the past five years. Traditional heavyweight tools (complex, deeply integrated, long implementation cycles) dominated for a decade. Now a wave of lightweight, opinionated, quick-to-deploy tools is taking share. A mid-market vendor is trying to understand what is happening and where the population of tools is heading.

---

**Output:**

**Population Definition**
The population: project management software products competing for enterprise adoption among mid-to-large organisations. Time horizon: five years forward. Key outcome: product survival and revenue growth.

---

**Variation Map**

| Dimension | Range | Current Distribution | Heritable? |
|---|---|---|---|
| Configuration complexity | Minimal (opinionated defaults) → Maximal (fully configurable) | Bimodal — cluster at each extreme, middle thinning | Yes — embedded in architecture |
| Integration depth | Standalone → Deep system-of-record integration | Still spread across range, but new entrants cluster at shallow | Partial — can be added later but costly |
| Time-to-value | Days → Months | Strong skew toward fast among new entrants | Yes — core product philosophy |
| Target buyer | Individual team → Enterprise IT department | Shifting toward team-led, IT-ratified | Yes — embedded in sales motion |
| Pricing model | Perpetual licence → Per-seat SaaS | SaaS near-universal in new variants | Yes — determines growth dynamics |

---

**Selection Pressures**

| Pressure | Direction | Strength | Mechanism |
|---|---|---|---|
| Buyer decision-making shift | Selects for: fast time-to-value, team-buyer appeal | Strong | Procurement cycles shortened; teams adopt before IT approves |
| Remote/distributed work | Selects for: async-native, cloud-first, transparent status | Strong | Organisations that went remote needed tools that worked without in-person coordination |
| SaaS economics | Selects for: recurring revenue, low switching cost for buyers | Moderate–strong | VC funding rewards SaaS metrics; buyers prefer opex |
| Enterprise compliance | Selects for: audit trails, permissions, data residency | Moderate | Large enterprise procurement still requires security/compliance checks |
| AI integration capability | Selects for: clean data models, API-first architecture | Growing | New AI features require structured underlying data; heavyweight legacy schemas resist integration |

---

**Retention and Replication**
Successful variants are retained through: (1) customer lock-in via workflow adoption — teams that build processes around a tool don't easily switch; (2) funding — SaaS products with strong expansion revenue attract capital to hire and grow faster; (3) imitation — competitors copy successful product philosophy quickly. Fidelity is moderate: copying a surface feature is fast, copying an architectural philosophy takes years.

**Extinction Mechanism**
Unfit variants exit slowly — enterprise contracts are multi-year, and established tools persist on renewal inertia even when team preference has shifted. Extinction lag is 3–7 years after fitness decline begins.

---

**Projected Population Shift**
After several more selection rounds:
- **Increasing frequency:** Lightweight, opinionated, fast time-to-value, team-buyer-led products. AI-integrated variants with clean APIs will accelerate.
- **Decreasing frequency:** Complex configuration-heavy tools requiring dedicated admin. Long implementation cycles become competitive liabilities.
- **Fixed (becoming universal):** SaaS pricing, cloud-native architecture. These are approaching fixation — holdouts face increasing disadvantage.
- **Remaining polymorphic:** Integration depth. Deep integrators serve a real niche (regulated industries, large IT-led procurement) that won't disappear; shallow integrators serve a different niche. Coexistence is stable across this axis.

---

**Environmental Stability Assessment**
The selection environment is shifting, not stable. The primary shift: AI-capable architectures will become a new selection axis within 2–3 years. Products built on clean, structured data models will gain a capability advantage in AI feature development that legacy architectures cannot cheaply replicate. This will add a new dimension of selection pressure on top of the current shift — a second fitness filter arriving before the first has fully resolved.

---

**Strategic Implication**
The mid-market vendor sits in the middle of the bimodal distribution — complex enough to serve enterprise, not lightweight enough to win team-led adoption. This is the most dangerous position: squeezed between powerful selections from both directions. The fitness landscape is becoming rugged, with the middle ground eroding.

Options: (1) Shift toward the lightweight end — requires architectural changes and willingness to accept a period of reduced enterprise capability; (2) Shift toward the deep-integration/compliance end — defend the enterprise niche while lightweight players ignore it; (3) Segment explicitly — different product lines for different niches. The worst outcome is incremental improvement in all directions without committing to either peak.

---

## Related skills

- [`/evolution-niche`](niche.md) — map which players can coexist in this landscape and where overlap creates displacement risk
- [`/evolution-fitness-landscape`](fitness-landscape.md) — if the mid-market position is a local peak, understand what valley must be crossed to reach a higher one
- [`/temporal-futures-mapping`](../temporal/futures-mapping.md) — map how the selection environment itself is shifting
