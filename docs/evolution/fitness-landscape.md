# `/s4h-evolution-fitness-landscape`

> *Gradient-following finds local peaks. The global optimum may require crossing a valley — and valleys are dangerous.*

**Trigger:** `/s4h-evolution-fitness-landscape`

---

## What it does

Maps the solution space as a topographic landscape — axes are the dimensions along which a strategy or entity can vary; elevation is fitness. Identifies where the current entity sits (which peak, which slope, which valley), how rugged the landscape is (how many local peaks exist, how deep the valleys between them), and what a valley-crossing to higher ground would require. Sewall Wright's 1932 insight: adaptive evolution is reliable uphill movement, which is exactly why it gets trapped on local peaks.

Stephen Jay Gould's work on contingency enriches the analysis: where a lineage ends up depends entirely on where it started. Many organisations are on their current peak not because it's the best available but because it was nearest when they first started climbing. Path dependence is the rule, not the exception.

---

## When to use it

- "We keep improving incrementally but we seem to be hitting a ceiling"
- "We know we need to transform but the transition feels too risky"
- "Why does the better solution keep failing to gain adoption?"
- A strategy is working well by current metrics but you suspect it will stop working
- You want to understand whether a discontinuous change is necessary versus whether continued incremental improvement will get you there

---

## When *not* to use it

**Don't use fitness landscape analysis when the landscape is smooth.** If there is clearly one best solution and incremental improvement reliably approaches it, the metaphor adds no insight. The tool earns its value in rugged landscapes — where multiple local optima exist and path dependence is real. If you're confident improvement is monotonic, stay in `/s4h-decision`.

**Fitness landscape is not a planning tool.** It identifies structural constraints on where you can get from here, and the cost of valley-crossing. It does not tell you which peak to aim for — that is a strategic values question. Use this analysis to understand what is structurally possible, then use `/s4h-strategy` to decide what to pursue.

The nearest neighbor: [`/s4h-evolution-variation-selection`](variation-selection.md) — if the question is "what is the environment selecting for?" rather than "are we stuck on a local peak?", start with variation-selection to map the selection pressures before mapping the landscape topology.

---

## Example

**Input:**
> A 15-year-old B2B logistics software company has a market-leading product in warehouse management systems (WMS) for mid-sized UK manufacturers. Their product has strong customer retention (92%) and solid NPS. For the past three years, incremental improvements — new features, UX improvements, expanded integrations — have yielded diminishing sales returns. New customer acquisition has slowed. The CEO believes they need to "transform," but the board is sceptical because the existing product is still performing. They want to understand whether they're stuck on a local peak and what transformation would actually require.

---

**Output:**

**Landscape Definition**
Entity: the company's product and business model. Key axes: (1) product architecture depth (point solution → end-to-end platform); (2) integration approach (closed/proprietary → open API ecosystem); (3) target buyer (operations team → C-suite supply chain decision-maker). Fitness measure: new logo acquisition and revenue expansion in the current UK mid-market. Landscape type: rugged — multiple distinct peaks with meaningful valleys between them, based on the evidence below.

---

**Current Position**
The company sits on a **local peak** defined by: deep WMS functionality, semi-proprietary integration approach, operations-team buyer focus. This peak was high when it was reached — mid-market manufacturers needed powerful warehouse functionality and were willing to implement a point solution if it worked well. The peak is still high relative to the immediate surroundings (hence 92% retention — customers on this peak don't want to move), but the peak is not growing, and new customers are less willing to climb to it.

**Evidence for Local Peak Status**
- Incremental feature improvements show diminishing return on new logo acquisition (three consecutive years of slower growth despite increased investment)
- The product outperforms competitors on warehouse-specific functionality benchmarks — yet win rates on new deals are declining
- Customer retention is strong but expansion within accounts is flattening — existing customers are satisfied but not expanding scope
- Enterprise-tier deals are repeatedly lost to broader supply chain platforms that offer lower WMS depth but higher C-suite visibility

These are the classic signatures of a local peak: strong relative performance within the immediate neighbourhood, but the neighbourhood is being bypassed by buyers climbing a different peak.

---

**Adjacent Peaks**

| Peak | Description | Relative Fitness | Valley Depth | Valley Width | Path Options |
|---|---|---|---|---|---|
| Supply chain platform | End-to-end visibility (WMS + TMS + demand planning) with C-suite dashboards | Higher | Deep — 18–24 months of investment in capabilities not currently present | Wide — multiple product domains to build or acquire | Acquire a TMS point solution as a stepping stone |
| API-first WMS ecosystem | Maintain WMS depth, open platform architecture, become the integration layer others build on | Roughly equal at current size; higher at scale | Moderate — requires architectural rebuild of integration layer | Moderate — 12–18 months re-architecture | Partner with integration platforms before full rebuild |
| Vertical WMS specialist | Deepen further into one vertical (e.g., pharmaceutical, cold chain) with compliance and regulatory features incumbents under-serve | Potentially higher in a smaller market | Shallow — builds on existing depth | Narrow — one vertical to re-tune for | Pharmaceutical compliance as initial vertical investment |

---

**Valley-Crossing Viability Assessment**

| Factor | Assessment |
|---|---|
| Slack available | Moderate — 92% retention generates stable ARR; 18 months of investment headroom before pressure mounts |
| Valley duration | Supply chain platform: 24–36 months. API-ecosystem: 12–18 months. Vertical specialist: 6–12 months |
| Landscape stability | Shifting. The supply chain platform peak is growing in height as buyer preference consolidates upward. The current peak is not eroding rapidly, but new buyer cohorts are increasingly reaching it by accident rather than by choice |
| Forcing mechanism | Present but slow. Enterprise deals being lost to platform competitors will force the question within 2–3 years if not addressed |

---

**Strategic Implication**
The company is at a genuine local peak, and incremental improvement is reliably failing to reach the adjacent higher peaks — the structural reason is valley depth, not effort. The choice is not whether to transform but which valley to cross and when.

The supply chain platform peak is the largest opportunity but requires the deepest valley crossing and the longest duration of sub-fitness. The API-ecosystem peak requires architectural investment but preserves the core WMS depth — this is the most tractable valley crossing for a 15-year-old product with real technical debt to manage. The vertical specialist peak is the shallowest valley and the most defensible on a 3-year horizon, but it accepts a ceiling on market size.

Recommendation for the board: the question is not "do we have a problem?" — the local peak evidence is clear. The question is "which valley can we actually cross?" The CEO's instinct to transform is structurally correct. The board's scepticism about disrupting a working business is the natural resistance to valley-crossing. The productive conversation is about which transition preserves the most downside (the vertical specialist path) versus which creates the most upside (the platform path). These are different bets, not the same bet at different risk levels.

---

## Related skills

- [`/s4h-evolution-variation-selection`](variation-selection.md) — understand the selection pressures that are reshaping which peaks are highest
- [`/s4h-evolution-niche`](niche.md) — map the competitive space around the peaks you're considering
- [`/s4h-strategy-timing`](../strategy/timing.md) — determine when the moment is right to attempt the valley crossing
