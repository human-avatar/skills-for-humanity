# linguistics-framing

> Every description of a situation is also an argument about it.

**Trigger:** `/s4h-linguistics-framing`

---

## What it does

Surfaces the active conceptual frame in any text, conversation, or debate — naming what the frame makes visible and invisible, what conclusions it makes natural, and who benefits from it. Drawing on George Lakoff's research, this skill then generates alternative frames that reveal different solution spaces, and recommends the frame that best fits the audience, context, and goal. The core insight is that you cannot refute a frame by accepting its terms; the counter-move is reframing, not rebuttal.

---

## When to use

- "How is this being framed?"
- A conversation keeps hitting the same wall despite substantive engagement
- Available options feel artificially limited — as if some alternatives are simply not being considered
- Factual corrections are failing to change minds
- You are about to enter a high-stakes negotiation, debate, or communication and want to understand the operative frame
- A competitor, opponent, or colleague is using language that is shaping the terms of a discussion in ways that disadvantage you

---

## Example

**Input:**
> Our internal debate about the engineering team's budget keeps going in circles. Finance calls it "headcount spend" and keeps asking us to justify the ROI of each engineer. Engineering calls it "team capacity" and says we can't assign ROI to individuals. Nobody is changing anyone's mind. What's going on?

**Output:**

**Active Frame**
The Finance frame is dominant: **engineering as a cost centre**.

Core structure: engineering is an operational expense — resources consumed to produce outputs. Each unit of resource (a person) should be justified by a proportional output. The frame derives from manufacturing logic: inputs → outputs → margin.

**Frame Mapping**

| Dimension | Content |
|---|---|
| Makes visible | Individual headcount, cost per engineer, output metrics per person, ROI of discrete hires |
| Makes invisible | Compound capability effects, team cohesion as a multiplier, the cost of capacity constraints (delayed features, technical debt, attrition), the non-linearity of engineering output |
| Natural conclusions | Engineers should be justified individually; the team should be right-sized to current visible demand; cost reduction is straightforwardly achievable by reducing headcount |
| Difficult conclusions | Cutting two engineers might reduce output by 40% (not 10%) due to coordination effects; the constraint may be in the team's capacity, not its efficiency |
| Who benefits | Finance teams optimising for near-term cost ratios; managers who inherited a manufacturing mental model; anyone whose performance metrics are backward-looking |

**Hidden Commitments**
The cost-centre frame assumes that:
- Engineering output is measurable and attributable to individuals
- The relationship between inputs (people) and outputs (features/value) is roughly linear
- The primary risk to manage is over-spend, not under-capacity
- Current demand accurately predicts future demand
- The team is fungible — any engineer can be compared to any other on the same ROI basis

**Alternative Frames**

**Frame 1: Engineering as infrastructure**
- Core structure: engineers are infrastructure, not labour — like servers, networks, or facilities
- Problem definition implied: capacity planning, not cost justification
- Options it opens: infrastructure is sized to peak demand and future growth, not justified by current utilisation; the question becomes "what capacity do we need?" not "can we justify each unit?"
- Vocabulary: capacity, throughput, utilisation rate, infrastructure investment
- Limitation: can obscure individual performance accountability; infrastructure framing resists agility arguments

**Frame 2: Engineering as compound capability**
- Core structure: engineers are not independent units — their output is a function of team composition, knowledge accumulation, and collective capability
- Problem definition implied: the team has emergent properties that individual ROI calculations cannot capture
- Options it opens: makes visible that two engineers working together may produce more than twice the output of one; makes attrition costs visible as capability degradation, not just recruitment cost
- Vocabulary: capability, compounding, institutional knowledge, team health
- Limitation: harder to operationalise for Finance; can appear to resist accountability

**Frame 3: Engineering as option value**
- Core structure: engineers generate future options — the ability to move quickly when conditions change
- Problem definition implied: engineering capacity is an investment in strategic flexibility
- Options it opens: makes visible the cost of capacity constraints on the company's ability to respond to market changes; puts the ROI question in terms Finance already uses (option value)
- Vocabulary: optionality, strategic capacity, speed to market, cost of delay
- Limitation: difficult to quantify without specific modelling; can feel abstract to Finance unless examples are grounded

**Frame 4: Engineering as constraint**
- Core structure: the engineering team is the system constraint — the bottleneck that determines how fast value flows through the organisation
- Problem definition implied: the question is not whether the constraint is expensive, but what it costs the business for the constraint to be binding
- Options it opens: shifts the question from "can we justify this cost?" to "what is the cost of this constraint?"; makes visible the revenue and competitive implications of being capacity-limited
- Vocabulary: constraint, throughput, cost of delay, bottleneck, flow
- Limitation: Theory of Constraints framing requires buy-in to the framework; may feel alien to Finance

**Recommendation**
**Frame 3 (option value) combined with Frame 4 (constraint cost)** is the highest-leverage reframe for this situation. Finance already uses option value reasoning for capital allocation — it is native to their mental model. The constraint framing quantifies the cost of under-capacity in terms Finance cares about: delayed revenue, competitive response time, and feature backlog growth. Together, they shift the question from "justify each engineer" to "what does this capacity cost us when it's binding?" — a question Finance is equipped to answer and that produces a different result.

The reframe does not require Finance to abandon ROI logic. It redirects ROI analysis to the right level (team capacity and strategic optionality) rather than the level where it produces perverse conclusions (individual headcount).

---

## Related skills

- [`/s4h-linguistics-connotation`](connotation.md) — Audit the specific vocabulary within the new frame for hidden freight before adopting it
- [`/s4h-communication-audience-modeling`](../communication/audience-modeling.md) — Test which frame will resonate with the specific audience you need to persuade
- [`/s4h-narrative-frame-analysis`](../narrative/frame-analysis.md) — Extend the frame analysis into the full narrative structure of the communication
