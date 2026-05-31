# Information

> *Most communication fails not because it is false but because the signal is lost.*

---

## What this category is

Information theory tools apply the mathematical framework that Claude Shannon developed in 1948 — and that Norbert Wiener, Andrei Kolmogorov, and James Gleick extended — to practical problems of communication, data, evidence, and representation. The central insight: information is not a vague property of messages; it is a precisely measurable quantity related to the reduction of uncertainty. That quantity can be analysed, optimised, and used to diagnose failures in how knowledge is transmitted, compressed, and received.

The four skills each address a different dimension of this framework. Signal–noise asks: what in this source actually carries information, and what is artefact? Compression asks: what is the minimum representation that preserves what matters? Redundancy asks: which repetitions are protective and which are wasteful? Entropy asks: how much information does this source actually contain, and am I allocating attention accordingly?

These are not abstract tools. They apply wherever information moves: in strategy documents, research summaries, dashboards, architectures, arguments, organisations, and conversations. The diagnosis is usually the same — not that the information is false, but that the signal has been buried, over-compressed, over-padded, or miscalibrated. The tools make that visible.

---

## When to reach for it

- You have too much data and need to know what's actually telling you something
- A message or document needs to be shorter but you're not sure what can be cut
- Systems or processes seem to be duplicating work — and you're not sure whether that's risk management or waste
- A result or finding is surprising and you're trying to decide how much to update on it
- Evidence is mounting but it's not clear how much of it is actually independent
- A channel or source feels unreliable and you want to understand the noise structure
- You want to calibrate how much weight different inputs deserve

---

## When *not* to reach for it

**Don't reach for information tools when the problem is the truth of the content, not the quality of the transmission.** If the question is "is this claim correct?" rather than "is this signal reaching me cleanly?", you need `/s4h-investigation` or `/s4h-epistemology`, not information theory. Information tools diagnose the channel and the representation; they don't audit the underlying facts.

**Information theory is not a substitute for domain knowledge.** Identifying which signals carry high information content requires knowing what you were expecting — which requires understanding the domain. These tools amplify domain expertise; they do not replace it. If you don't have enough context to estimate what would be surprising, start with `/s4h-epistemology-epistemic-status` to build the prior before applying entropy analysis.

The nearest neighbour: [Epistemology](../epistemology/) — for questions about the nature and limits of knowledge itself, rather than the quality of the channel through which it travels.

---

## Skills in this category

| Skill | What it does | Trigger when... |
|---|---|---|
| **`/s4h-information`** | Routes to the right information skill for your situation | Not sure which tool fits; describe your situation |
| [`/s4h-information-signal-noise`](signal-noise.md) | Separates meaningful signal from background noise; applies SNR thinking to any source | "What actually matters here?" "Cut through the noise." "What's driving the variation?" |
| [`/s4h-information-compression`](compression.md) | Asks what must be preserved and what can be discarded; lossy vs. lossless tradeoffs | "Cut this down." "What can I remove without losing the key point?" "What's essential?" |
| [`/s4h-information-redundancy`](redundancy.md) | Maps where redundancy creates resilience and error correction vs. where it creates waste | "Is this duplication a problem?" "Single point of failure?" "Are we saying the same thing twice?" |
| [`/s4h-information-entropy`](entropy.md) | Measures uncertainty, surprise, and information content in any source | "How surprising is this?" "How much should I update on this?" "Where is the real information?" |

**Not sure which tool?** → Invoke `/s4h-information` — it diagnoses your situation and picks the right skill.

---

## Related categories

- [Epistemology](../epistemology/) — for questions about knowledge structure and justification, not just channel quality
- [Communication](../communication/) — for the design of effective messages and the choice of medium
- [Sensory](../sensory/) — for structured observation and the development of perceptual signal detection
- [Probability](../probability/) — for quantifying and calibrating uncertainty once the signal has been found
