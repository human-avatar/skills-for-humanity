# cognition-metacognition

> The difference between knowing something and thinking you know it is invisible from the inside — until it isn't.

**Trigger:** `/cognition-metacognition`

---

## What it does

Applies John Flavell's three-component metacognition framework — metacognitive knowledge, metacognitive monitoring, and metacognitive control — as a practical diagnostic for a specific domain or decision. Uses three concrete probes (explanation, prediction, contradiction) to distinguish genuine comprehension from recognition familiarity. Calibrates confidence against actual understanding and identifies the highest-priority gaps where the gap between stated confidence and real knowledge is largest.

---

## When to use

- "How confident should I actually be about this?"
- "I've read a lot about X but I keep getting it wrong in practice — what am I missing?"
- Before a high-stakes decision that depends on domain expertise
- "I think I understand this, but I struggle to explain it clearly."
- Preparing to enter a new domain and wanting to map what you actually know vs. what you're about to fake

---

## Example

**Input:**
> I've been working on AI strategy for our company for about a year. I've read a lot — papers, books, industry reports. My colleagues treat me as the internal expert. I'm presenting to the board next month on where AI is heading and what we should do about it. I want to honestly assess whether my understanding is solid enough to be giving board-level advice, or whether I'm in danger of overconfidence.

**Output:**

**Metacognitive Knowledge Assessment**

| Area | Knowledge Type | Status | Evidence |
|---|---|---|---|
| Current AI capabilities (what models can/can't do) | Application | Solid | Can apply accurately to specific use cases |
| AI development timelines and forecasting | Recognition | Illusory | Can cite range of expert views but cannot explain the mechanistic reasoning behind forecasts |
| Organisational AI implementation | Explanation | Partial | Can explain principles but predictions about specific implementation challenges are vague |
| Regulatory and compliance landscape | Recognition | Recognition only | Knows this is important; cannot specify current regulatory status in relevant jurisdictions |
| Economic impact and labour displacement | Recognition | Illusory | Holds confident views; contradicting evidence noted but not integrated |

**Monitoring Results**

- **Explanation probe:** Strong on current capabilities — can explain transformer architecture, model limitations, and benchmark results accurately. Gets vague on why particular timelines are predicted; explanation relies on citing authorities rather than mechanism. Gets vague on implementation details past "change management is hard."
- **Prediction probe:** Specific and testable on capability questions (e.g., "GPT-class models will not reliably solve novel multi-step logic problems without scaffolding"). Vague on timeline questions ("things will accelerate" — not specific enough to be wrong). Vague on implementation: "it depends on the organisation" is not a prediction.
- **Contradiction probe:** Can name contradicting evidence on capabilities. Cannot name specific evidence that would contradict current timeline views — this is the most significant finding. A view with no falsifying condition is not doing real predictive work.

**Control Diagnosis:** Compensating adjustment. When knowledge gaps are noted, the response is to read more broadly — which reinforces recognition familiarity without testing application or prediction. The right adjustment is deliberate retrieval practice and prediction-making on specific questions, not more consumption.

**Confidence Calibration**

| Claim | Stated confidence | Assessed calibration | Adjustment |
|---|---|---|---|
| Current model capabilities and limitations | 80% | Well-calibrated | No change needed |
| AI development timelines over 2–5 years | 70% | Overconfident — views are citations, not models | Reduce to 40–50%; acknowledge genuine expert disagreement |
| Implementation success factors for enterprise AI | 65% | Overconfident — mechanism unclear | Reduce to 45%; be specific about what you do and don't know |
| Regulatory trajectory | 55% | Approximately right — uncertainty acknowledged | Present as genuinely uncertain with monitored landscape |
| Economic/labour impact | 75% | Overconfident — falsifiability test failed | Reduce to 50%; integrate contradicting evidence explicitly |

**Priority Gaps:**
1. **Timeline claims are the most dangerous.** High stated confidence (70%) on the question with the highest falsifiability failure. The board will anchor on these numbers. Either develop a genuine mechanistic view — specifying what would need to be true for different scenarios — or explicitly frame these as "here is the range of expert views, here is where I sit and why, here is what would change my mind."
2. **Implementation advice is currently surface-level.** "Change management is hard" is not actionable board-level guidance. The gap between stated confidence and specificity of prediction is the marker. Develop 2–3 concrete failure patterns with causal mechanisms before the presentation.
3. **Regulatory knowledge is recognition-only.** Get one 90-minute conversation with someone who works in this domain before presenting. This is a known gap and easily closed.

**Recommended metacognitive control adjustment:** For the next three weeks before the board presentation, replace broad reading with narrow prediction-making. For each topic area: write a specific, falsifiable prediction. Then find the specific evidence that supports or contradicts it. This converts recognition knowledge to application knowledge.

---

## Related skills

- [`/cognition-mental-models`](mental-models.md) — if the gaps surfaced here are model-level (not just knowledge gaps), audit the underlying mental models driving the beliefs
- [`/epistemology-epistemic-status`](../epistemology/epistemic-status.md) — examine the evidentiary warrant for the specific claims where confidence is hardest to calibrate
- [`/probability-confidence-calibration`](../probability/confidence-calibration.md) — apply formal probability calibration techniques to the confidence estimates surfaced here
