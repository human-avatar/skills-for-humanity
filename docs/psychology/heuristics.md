# psychology-heuristics

> Fast thinking is compressed expertise — when it's reliable, and when it's not.

**Trigger:** `/s4h-psychology-heuristics`

---

## What it does

Identifies the heuristic (fast-thinking pattern) at work in a specific judgment or decision, assesses whether it's operating in its domain of reliability, evaluates the distortion risk, and produces a concrete recommendation: trust the fast thinking, override it with deliberate analysis, or supplement it with additional information. Grounded in Kahneman's System 1/System 2 framework and the research on naturalistic decision-making.

---

## When to use

- "Should I trust my gut here, or do I need to slow down?"
- An experienced person has a strong intuition that can't be immediately articulated
- A decision is being made under time pressure where deliberate analysis isn't feasible
- Fast thinking produced a strong reaction and you want to know whether it's signal or noise
- A situation looks familiar but something feels slightly off — pattern recognition may be failing

## When *not* to use

- The question is about a systematic distortion in a group's beliefs or conclusions over time → [psychology-cognitive-biases](cognitive-biases.md) (biases are population-level and compound; heuristics are the mechanism of a specific fast judgment in a specific moment)
- The decision is clearly novel with no relevant precedent → skip the heuristic assessment and go straight to deliberate analysis; there is no fast-thinking expertise to evaluate

The nearest-neighbor trap: **heuristics are not biases, though they produce them.** Availability is a heuristic — a fast-thinking shortcut. Availability bias is what happens when that heuristic is applied outside its domain (estimating a rare event's frequency based on how easily examples come to mind). When you're asking "what am I doing when I think fast?", that's a heuristics question. When you're asking "what's systematically wrong with our conclusions?", that's a biases question.

---

## Example

**Input:**
> I've been investing for fifteen years, mostly in early-stage B2B SaaS. A founder just pitched me on an edtech startup. My gut reaction was strongly negative — I couldn't put my finger on why, but something felt off about the team dynamic in the room. My analyst thinks the numbers look solid and the market is real. Should I trust my gut here?

**Output:**

### Situation
Experienced SaaS investor with strong negative intuition about an edtech startup, despite solid fundamentals according to analyst.

### Heuristic Identified
**Expert intuition / affect heuristic** — The "something felt off" signal is pattern recognition, possibly running through the affect channel (the negative feeling is the output of a fast comparison between observed team dynamics and a prototype of "team that will execute"). Fifteen years of early-stage investing builds genuine expertise about founder dynamics; this heuristic is not without basis.

### Domain Assessment
- **Familiarity:** Medium — B2B SaaS expertise is genuinely adjacent to edtech; team dynamics are domain-general. But edtech has distinct dynamics (institutional sales cycles, curriculum lock-in, regulatory context) that may differ from the SaaS pattern library.
- **Feedback regularity:** Medium — early-stage investing provides feedback, but it's noisy (most failures are over-determined) and delayed (often 5-7 years). This limits how precisely calibrated the intuition can be.
- **Exploitation risk:** Low — no obvious engineered signals here; the negative reaction went against what the analyst found positive, which rules out a persuasion attempt.
- **Emotional contamination:** Unknown — "something felt off in the room" could be genuine pattern recognition, or it could be a mild personal dislike for one of the founders that's being back-rationalized. Worth examining directly.

### Distortion Risk
**Direction:** The affect heuristic runs in both directions — positive gut reactions to charismatic founders can override weak fundamentals. Here, it's producing a negative signal against positive fundamentals. The risk is that the "team dynamic" signal is anchored to B2B SaaS team archetypes that don't generalize to edtech, where founder profiles are often different.

**Magnitude:** Moderate. A 15-year investor's read on team dynamics is not noise — but it's not certainty either. The base rate of "I had a bad gut feeling and I was right" vs. "I had a bad gut feeling and passed on something great" is not 100/0.

### Recommendation
**Supplement** — Don't override the intuition, but don't defer to it alone.

The negative signal should not be dismissed — it's the output of genuine expertise and it went against the grain of positive analytical signals, which gives it some credibility (it's not just confirming what the numbers show). But it also can't be validated or examined yet because it's not articulable. The right move: schedule a second conversation focused specifically on team dynamics. Ask the founders to describe the last time they strongly disagreed with each other, and how it was resolved. Watch for the specific dynamic that triggered the gut reaction — it needs to either be identified concretely (and assessed on its merits) or cleared. If after a second meeting the feeling persists and still can't be named, weight it more heavily; persistent unexplained negative reactions in experienced investors have a real signal rate. If the feeling fades or can't be reproduced, treat the first meeting as noise.

---

## Related skills

- [psychology-cognitive-biases](cognitive-biases.md) — when the question is about systematic distortions in conclusions, not a specific judgment call
- [psychology-motivation](motivation.md) — when the "gut feeling" may be driven by what you want to be true rather than pattern recognition
- [decision-criteria-weighting](../decision/criteria-weighting.md) — when the deliberate analysis needs structure alongside the intuitive read
- [probability-confidence-calibration](../probability/confidence-calibration.md) — for calibrating how much confidence to place in uncertain judgments
