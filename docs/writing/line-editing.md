# `/writing-line-editing`

> *Line editing removes what is broken. It does not create quality — that is a different task.*

**Category:** [Writing](README.md) · **Command:** `/writing-line-editing`

---

## What it does

Applies five systematic editing passes — redundancy, nominalisation, passive voice, rhythmic monotony, and throat-clearing — to identify and repair sentence-level failures. Produces a line-edit report with quoted instances, specific alternatives, and a rewritten sample paragraph showing all changes applied.

---

## When to use it

- Prose is verbose, wordy, or feels airless despite clear content
- Sentences are passive-heavy in a way that obscures who is doing what
- Writing feels like it was produced by a bureaucracy rather than a person
- Sentences are all the same length and rhythm
- Paragraphs take two sentences to arrive where one would do
- You're preparing a professional document for final review

---

## When *not* to use it

**Don't use this before restructuring.** Line editing sentences that will be cut or moved is wasted work. Structure first, sentences second. If the piece has organisation problems, use `/writing-restructure` first.

**Don't use this expecting it to make flat prose compelling.** Line editing removes problems; it does not create quality. A passage can be zero-redundancy, zero-nominalisation, active-voice throughout, rhythmically varied, and still read as flat because it lacks specific imagery, precise verbs, and sensory grounding. For prose quality, use `/writing-prose-elevation` after line editing.

The nearest neighbor: [`/writing-prose-elevation`](prose-elevation.md) — which raises the quality of prose that is already mechanically clean. Use line editing to remove mechanical failures; use prose elevation to realise the latent quality in what remains. They are the two stages of the same process, in that order.

---

## Full example

**Input:**
> Please line-edit this paragraph:
>
> *"There was a general recognition among members of the committee that there had been an occurrence of a failure to make adequate preparations for the event in advance. A decision was made by the chair that it would be necessary to undertake a postponement of the vote. It is important to note that the majority of attendees expressed feelings of disappointment at this development, although it should be acknowledged that some members were in possession of the view that additional time for preparation would ultimately prove to be of benefit."*

---

**Output:**

### Line-Edit Report

---

**Redundancies:**

1. "in advance" in "failure to make adequate preparations for the event in advance" — "preparations" already implies advance; "in advance" is redundant.
   > Cut: "in advance"

2. "ultimately prove to be of benefit" restates what "additional time for preparation" already implies — if you have more time to prepare, it is self-evidently expected to help. The second clause ("would ultimately prove to be of benefit") adds no information.
   > Cut the entire subordinate clause; tighten to "additional time for preparation would be welcome."

---

**Zombie Nouns (Nominalisations):**

1. "there had been an occurrence of a failure" → "they had failed"
   - "occurrence of a failure" is two nominalisations layered (occurrence + failure)

2. "make adequate preparations" → "prepare adequately"
   - "preparations" nominalises "prepare"

3. "undertake a postponement of the vote" → "postpone the vote"
   - "postponement" nominalises "postpone"; "undertake" adds nothing

4. "expressed feelings of disappointment" → "were disappointed"
   - "feelings of disappointment" nominalises "disappointed"; "expressed feelings of" is throat-clearing

5. "were in possession of the view that" → "believed that"
   - "in possession of the view" is a nominalisation of "believe" wrapped in bureaucratic phrasing

---

**Passive Voice:**

1. "A decision was made by the chair" — agent (the chair) is present but buried at the end, after the action.
   > Reconstruct: "The chair decided"

2. "it should be acknowledged that" — passive construction with no named agent. Who is acknowledging? The writer.
   > Reconstruct: "though some members felt" or simply remove the throat-clearing and state the fact

3. "There was a general recognition among members of the committee that" — existential construction ("there was") with no active agent. Who recognised?
   > Reconstruct: "The committee recognised" or "Most committee members acknowledged"

---

**Rhythm Notes:**

All three sentences are approximately 25–35 words, all begin with a variation of "there was" or passive construction, all use the same subordinate clause structure (main clause + "that" + clause). The result is a machine-like uniformity that produces reader fatigue.

*Prescription: After rewriting, vary sentence length. The third sentence should end with a short declarative that lands the point. The middle sentence (the chair's decision) is load-bearing and should be the shortest.*

---

**Throat-Clearing:**

1. "It is important to note that" — adds nothing. Whatever follows should stand without this preamble.
   > Cut entirely.

2. "it should be acknowledged that" — same pattern. Functions as hedging rather than statement.
   > Cut; state the fact directly.

---

**Rewritten Sample Paragraph:**

> *The committee recognised it had failed to prepare adequately for the event. The chair postponed the vote. Most attendees were disappointed; some believed the extra preparation time would help.*

**Word count: 28 (down from 97)**

All five categories of changes applied:
- Redundancies removed ("in advance," "ultimately prove to be of benefit")
- Zombie nouns converted to verbs ("recognised it had failed to prepare," "postponed")
- Passive voice made active ("The chair postponed")
- Rhythm varied: three sentences of 10, 6, and 12 words respectively — the short middle sentence creates emphasis on the chair's action
- Throat-clearing removed ("It is important to note that," "it should be acknowledged that")

The original meaning is fully preserved. Every fact present in the 97-word original is present in the 28-word revision.

---

## Related skills

- [`/writing-prose-elevation`](prose-elevation.md) — After line editing removes problems, use this to raise the quality of what remains
- [`/writing-restructure`](restructure.md) — Run before line editing; never edit sentences in the wrong order
- [`/writing-tone-alignment`](tone-alignment.md) — Many tone corrections happen at the sentence level; often run together
