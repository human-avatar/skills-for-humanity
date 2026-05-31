# information-compression

> Every representation compresses reality. The question is whether it compresses well.

**Trigger:** `/s4h-information-compression`

---

## What it does

Applies Shannon's source coding theorem — the principle that there is a theoretical lower bound on how far any lossless compression can go — to practical problems of representation and communication. Forces the explicit distinction between essential information (cannot be removed without changing the meaning or utility of the output), reconstructable information (can be compressed out because a capable receiver will rebuild it), and discardable information (contributes nothing to the purpose for this receiver). Produces a compression strategy with explicit declarations of what is being dropped and why, and delivers the compressed output alongside a note on what would be needed to reconstruct the full form.

---

## When to use

- "This is too long — what can I cut?"
- "I need to write an executive summary — what has to be in it?"
- "I want to compress this analysis into a one-pager without losing the key insight"
- Producing a briefing, summary, or abstraction for a specific audience and need
- Evaluating whether an existing summary is over- or under-compressed

---

## Example

**Input:**
> I have a 40-page market research report on shifting consumer behaviour in sustainable fashion. I need to present findings to the board in 8 minutes — they're strategic decision-makers, not experts in the space. They need to make a funding decision for a new product line targeting this segment. What's the essential form?

**Output:**

**Compression Brief**
- Purpose: Enable a board funding decision for a new product line targeting sustainable fashion consumers
- Audience: Strategic decision-makers; no domain expertise required in output
- Mode: Lossy (8 minutes of board time cannot transmit 40 pages; compression is substantial)
- Compression ratio: ~15:1

---

**Classification**

| Element | Classification | Rationale |
|---|---|---|
| Market size ($47B global, 12% YoY growth) | Essential | Decision-relevant: establishes whether the opportunity is worth funding |
| Segmentation methodology (conjoint analysis, N=2,400) | Reconstructable | Board needs confidence in credibility, not methodology detail; "statistically robust" covers this |
| Three core consumer personas (detailed profiles) | Lossy → compress to 1 sentence per persona | The board needs to understand who they're targeting; full profiles are for the product team |
| Competitor landscape (12 brands profiled) | Lossy → compress to 2-3 named competitors and key differentiation | Decision-relevant at headline level; full competitive analysis is reconstructable from the report |
| Regression analysis showing price sensitivity by segment | Reconstructable → summarise as "consumers in the premium segment show low price elasticity below £120" | The finding is what matters; the method is for the CFO on request |
| Consumer survey verbatims (18 pages) | Discardable | No decision-relevance at board level; available in appendix |
| Methodology appendices | Discardable | Decision-makers don't need; analysts can access the full report |
| Executive summary already in report | Reconstructable → replace with purpose-specific compression | The report's exec summary was written for a different audience; it is not the right compressed form for this presentation |
| Recommended product positioning | Essential | This is the action-relevant output; board needs to assess whether they believe it |
| Risk factors (market saturation, greenwashing risk, regulatory exposure) | Essential | Funding decisions require risk visibility; omitting creates a misleading compressed form |
| Financial projections (3 scenarios: base, upside, downside) | Essential | Core decision variable |

**What is being dropped (lossy elements):**
Full persona profiles, detailed competitive brand analysis, methodology sections, and all verbatim qualitative data. These are available in the full report. Any board member who wants depth on any point can access it; the presentation creates the map, not the territory.

**Compressed Output (8-minute board presentation structure):**

1. **The opportunity** (90 seconds): Sustainable fashion is a $47B market growing at 12% annually. It is underpenetrated in the mid-to-premium price segment where our brand currently competes. This is a window, not a permanent condition — three major players are moving into this segment in the next 18 months.

2. **Who is buying** (90 seconds): The research identified three meaningful segments. The one we're targeting: 28–45, urban, existing mid-premium fashion consumer, willing to pay up to £120 for credibly sustainable product. Low price sensitivity below that threshold. Strong brand-loyalty potential. Currently underserved by us.

3. **What they want** (60 seconds): Not sustainability as a primary feature — as a qualifier. They want the product to be good first. They are sophisticated enough to detect greenwashing. Credentials must be specific and verifiable, not vague.

4. **Our position** (90 seconds): Recommended positioning: "Made well, made honest." Targets the credibility gap our competitors haven't closed. Three differentiators: supply chain transparency, material certification, and no-compromise on product performance.

5. **The risks** (60 seconds): Market saturation risk if we move slowly. Greenwashing risk if positioning isn't backed by supply chain changes (cost implication — £2.3M in Year 1). Regulatory risk — EU sustainable product regulation in 2026 will require what we'd be doing anyway.

6. **Decision** (60 seconds): Base case: £18M NPV over 5 years. Upside (market leadership): £34M. Downside (late entry): £6M. Funding request: £4.2M for product development and launch.

**Reconstruction Note:** Full report (40pp) is available. Methodology detail, competitive brand profiles, full persona research, and financial model assumptions are all in the appendix. The CFO should review the financial model assumptions before the meeting.

---

## Related skills

- [`/s4h-information-signal-noise`](signal-noise.md) — find the signal before compressing; compressing noise alongside signal produces a smaller but equally noisy output
- [`/s4h-information-redundancy`](redundancy.md) — identify which repetitions in the source are load-bearing before cutting them
- [`/s4h-communication-audience-modeling`](../communication/audience-modeling.md) — model the receiver to understand what is reconstructable vs. essential for this specific audience
