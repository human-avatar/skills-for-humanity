# historical-cycle-detection

> Identifies what recurring cycle the current situation is an instance of — and where in that cycle you currently are.

**Trigger:** `/historical-cycle-detection`

---

## What it does

Matches a current situation to one of six recurring historical cycles (hype, bubble-and-bust, adoption curve, political, organizational change, competitive), identifies your position in the cycle using observable evidence, and maps what typically follows. The most valuable output: divergences — where the current instance departs from the typical pattern — because that's where the highest-value analytical findings live.

---

## When to use

- "What cycle is this?"
- "Where are we in the cycle?"
- "Is this a bubble?"
- "What comes next?"
- "Have we been here before?"
- Evaluating a trend, technology, market, or organizational dynamic and wanting historical orientation

## When NOT to use

- When you want recurring failure modes from historical cases — use `historical-failure-analysis`
- When you want to extract a transferable principle from a specific case — use `historical-lesson-extraction`
- When you want historical precedents for a specific strategic situation — use `historical-precedent-analysis`

---

## Example

**Input:**
> Analyze where we are in the generative AI cycle. It's early 2026. Every company is rushing to add AI features. There are hundreds of new AI companies being funded. Enterprise adoption is patchy — many POCs, few scaled deployments. There's pressure on AI companies to show revenue. Some early prominent AI companies have already failed or pivoted. Valuations remain extremely high relative to revenue.

**Output:**

---

**Cycle Match:** Hype cycle — specifically the late phase of the Peak of Inflated Expectations, beginning transition toward the Trough of Disillusionment.

The hype cycle is the correct match because the situation shows the characteristic sentiment-fundamentals divergence: valuations and interest are extremely high (sentiment), but actual scaled enterprise deployment is patchy and some prominent early entrants have already failed (fundamentals starting to show their floor). The adoption curve match would be wrong — there's no plateau of productivity yet.

---

**Current Position:** Late Peak / Early Trough transition

Observable evidence locating this position:
1. Failure of prominent early entrants despite high capital — characteristic of the trough's leading edge, when the initial cohort who bet on the first wave starts separating winners from failures
2. Pressure on revenue despite high valuations — the marginal investor is starting to require evidence, which historically precedes the trough
3. "Hundreds of new companies funded" — this is a late-peak signal, not an early adoption signal; new entrant flood typically peaks just before sentiment correction

---

**Characteristic Signs**

| Sign of Current Phase | Present / Absent / Partial | Notes |
|---|---|---|
| Peak media coverage | Present | AI coverage is at all-time high in mainstream business press |
| New entrant flood | Present | Hundreds of well-funded AI startups; every incumbent adding AI features |
| Sentiment-fundamentals gap | Present | Valuations high, scaled revenue still limited |
| First failures of prominent entrants | Present | Several high-profile AI companies have failed or pivoted |
| Enterprise "wait and see" | Partial | Many POCs suggests early majority interest but not commitment |
| Investor pressure on revenue | Present | Revenue requirements emerging in funding conversations |

**Typical Next Phase:** Trough of Disillusionment (12–24 months out in most historical technology cycles). Characteristic: media narrative shifts to failure and disappointment, multiple high-profile failures, valuations compress sharply, funding dries up for weaker entrants, companies that are not producing clear revenue struggle to raise. The early majority stops doing POCs and starts demanding either scaled deployment or clear ROI evidence.

The Slope of Enlightenment follows — where specific use cases that generate clear ROI become obvious, tooling matures, and the surviving companies with real deployments grow steadily. The Plateau of Productivity typically arrives 5–8 years after the peak for major technology cycles.

---

**Divergences:**

1. **Infrastructure moat:** In most previous technology hype cycles, the infrastructure layer is commoditizing by the trough. In this cycle, the infrastructure layer (foundational models) has high capital requirements that limit new entrants. This may compress the trough and accelerate recovery for infrastructure plays even as application-layer companies fail.

2. **Breadth of potential applications:** Most previous cycles (cloud, mobile, blockchain) showed concentrated use case early adoption. Generative AI shows genuine breadth of applicable use cases — this may elongate the Peak phase and prevent the sharp trough that characterizes narrower technology cycles.

3. **Enterprise commitment already visible:** Some enterprise companies have crossed the POC/deployment threshold in specific verticals (legal, code generation, customer support). Prior cycles typically see zero meaningful deployment before the trough. This divergence suggests the Plateau may arrive with less trough than historical patterns predict for comparable technologies.

**Implications:** The trough is likely but may be shallower and shorter than historical analogs. Companies with specific, deployed, measurable use cases in large enterprises are well-positioned. Companies that are "AI-first" without a clear deployed revenue base are at highest risk. Infrastructure plays with differentiated models may compress the trough entirely for that layer.
