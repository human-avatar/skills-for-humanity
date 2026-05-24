# communication-clarity-audit

> Audits a communication for where the message will be lost, misread, or misunderstood — before it's sent.

**Trigger:** `/communication-clarity-audit`

---

## What it does

Reads a message from the receiver's perspective — without access to the sender's intent — and finds the gaps between what was meant and what will be understood. Checks structure (can the point be found in 10 seconds?), jargon (what requires context the reader may not have?), assumptions (what must already be believed?), and ask clarity (what exactly is the reader supposed to do?). The most valuable output is the most likely misreading — the specific failure that will actually happen if the message is sent as written.

---

## When to use

- "Will this be understood?"
- "Clarity audit on this message"
- "Where will this be misread?"
- Before sending anything important: emails to executives, proposals, sensitive messages, cross-functional requests
- After writing something complex and wanting an outside read before it goes out

## When NOT to use

- When the question is which channel to use, not what to say — use `communication-medium-selection`
- When the question is whether the message is suited to this specific audience — use `communication-audience-modeling`
- When the question is how to handle likely objections — use `communication-objection-mapping`

---

## Example

**Input:**
> "Hi team, as discussed, we're moving forward with the timeline adjustments to ensure alignment with the broader organizational priorities we've been working through. Please ensure your teams are updated by EOW. Thanks."

**Output:**

---

**Issues found:**

| Category | Issue | Severity | Edit |
|---|---|---|---|
| Structure | The main point (what is changing) is not stated. "Timeline adjustments" names a category, not a change. | High | Replace with: "We're moving [specific milestone] from [date] to [date]" |
| Jargon | "broader organizational priorities" — undefined. Different readers will fill this in differently based on what they personally know. | High | Name the priorities, or remove entirely — vague context is often worse than no context |
| Assumptions | "as discussed" assumes all readers were in the same discussion. Likely some readers were not. | Medium | Either include a one-line summary of what was discussed, or link to a record |
| Ask/Action | "ensure your teams are updated" — what does updated mean? Updated on what, specifically? Via what channel? By whose direction? | High | Rewrite as: "By end of Friday, brief your direct reports on [specific change] and confirm they know [specific implication]" |
| Ask/Action | "EOW" — which time zone? By close of business on Friday in what region? | Low | Specify timezone if it matters |

**Most likely misreading:**

A recipient who was not in the original discussion will read this as confirming something they didn't know was happening. They will not know what to tell their team because the actual change is never stated. They will either: (a) ask someone what "timeline adjustments" means, creating noise, or (b) tell their team something vague that doesn't help them plan. The email will be read as bureaucratic cover rather than useful information.

**Priority edits:**

1. **State the specific change**: "We're moving X deadline from Y date to Z date" — this is the entire message; everything else is secondary to this
2. **Specify the ask concretely**: "By Friday 5pm ET, tell your direct reports about the new deadline and flag any conflicts to me"
3. **Remove or replace "as discussed" and "broader organizational priorities"**: vague context anchors creates confusion; remove it or replace with one specific sentence
