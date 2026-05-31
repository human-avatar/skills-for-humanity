# information-signal-noise

> Separates what's actually there from everything that's in the way.

**Trigger:** `/s4h-information-signal-noise`

---

## What it does

Applies Shannon's signal-to-noise ratio framework to any domain: a dataset, a communication channel, a research base, an organisation's reporting, or a person's attention. Enumerates noise sources — random, systematic, channel, and interference — assesses signal strength relative to the noise floor, and produces a concrete strategy for amplifying signal and suppressing noise. The output is a clear-eyed account of what's actually there versus what's artefact, and which channels and inputs to trust.

---

## When to use

- "What actually matters in all of this data?"
- A dataset, report, or research base feels overwhelming and it's not clear what's real
- Interventions keep failing — possibly because they're responding to noise rather than signal
- You need to assess whether a result is meaningful or within the noise floor
- A communication channel feels unreliable and you want to understand why

---

## Example

**Input:**
> We run a weekly company all-hands where the CEO shares updates on strategy, culture, and metrics. Attendance is high but engagement scores have been declining. We also send a Monday Digest email with the same information plus links, and our Slack #general channel has roughly 200 messages a week — mostly announcements, cross-posts of articles, and congratulations. People say they're overwhelmed by information but also say they don't know what's happening. What's the signal problem here?

**Output:**

**Target Signal:** Strategic direction, decisions that affect employees' work, and metrics that tell employees whether the company is on track. These are what employees need to do their jobs and feel oriented.

**Noise Inventory**

| Noise Source | Type | Estimated Impact | Reducible? |
|---|---|---|---|
| #general Slack messages (cross-posts, articles, congratulations) | Interference | High — buries priority comms in volume | Yes — channel structure redesign |
| Monday Digest re-covering all-hands content | Channel redundancy / duplication | Medium — dilutes attention, creates "I'll read the digest instead" | Partially — depends on whether the digest adds or just repeats |
| All-hands covering strategy + culture + metrics simultaneously | Signal mixing | High — audience cannot distinguish which type of signal each item is | Yes — segment by signal type |
| CEO framing of updates (narrative vs. decision) | Systematic | Medium — not all updates are equal; narrative filler creates noise against decisions | Yes — editorial discipline |
| Congratulations and social content in announcement channels | Interference | Medium — not noise per se, but occupies the same channel as high-value signals | Yes — dedicated channel |

**SNR Assessment:** The signal (strategic direction, decisions, metrics) is present but marginal. Employees are right on both counts: there is too much information and they don't know what's happening. These are not contradictory. The volume is high; the signal-to-volume ratio is low. The channel is operating significantly below its capacity to transmit the target signal because noise sources are consuming most of the bandwidth.

**Signal Amplifiers (preserve and extend):**
- Any moment where the all-hands explicitly flags "this is a decision we made, here's the rationale" — this is high-signal content and should be structurally separated from narrative update content
- Direct manager communication, which carries higher trust and lower noise than broadcast channels
- Asynchronous documentation of decisions with searchable records — allows high-signal content to be found later without requiring real-time attention

**Noise Suppressors (filter or eliminate):**
- Separate #general into distinct channels by signal type: #announcements (high-signal, restricted posting), #articles-and-reads (low-urgency, interest-based), #celebrations (social, opt-in)
- Remove duplication between all-hands and Monday Digest — pick one primary channel and make the other a pointer, not a rebroadcast
- Introduce a "decisions made this week" segment in the all-hands as a distinct, signal-highlighted section — so the target signal is structurally visible, not mixed with culture narrative

**Information Loss (already lost to noise):**
Employees who have trained themselves to skim or ignore #general have likely missed high-signal announcements already posted there. This information is not recoverable unless re-transmitted in a clean channel. The pattern has been established: the channel is low-trust for important news. Structural changes will require a period of demonstrated reliability before attention patterns shift.

**Recommended SNR Strategy:**
1. Restructure Slack: three channels (#announcements, #reads, #celebrations) with different posting permissions and subscription defaults
2. Segment the all-hands: explicit 5-minute "decisions made, context given" section separate from culture and metrics narrative
3. Eliminate the Monday Digest as a standalone product — replace with a pointer to the decisions log and any new content not covered in the all-hands
4. Measure: track whether engagement scores improve and whether "don't know what's happening" complaints decline after three months

---

## Related skills

- [`/s4h-information-compression`](compression.md) — having found the signal, ask what's the minimum representation that preserves it
- [`/s4h-information-entropy`](entropy.md) — measure how much information the signal actually carries and calibrate update weight accordingly
- [`/s4h-communication-clarity-audit`](../communication/clarity-audit.md) — audit whether the signal, once found, is clearly expressed for the intended audience
