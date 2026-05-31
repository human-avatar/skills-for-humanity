# cognition-cognitive-load

> Don't ask people to hold more than working memory allows — redesign the system so they don't have to.

**Trigger:** `/s4h-cognition-cognitive-load`

---

## What it does

Applies John Sweller's Cognitive Load Theory — built on George Miller's finding that working memory holds roughly seven chunks simultaneously — to diagnose where cognitive demand exceeds working memory capacity and prescribe targeted interventions. Distinguishes intrinsic load (inherent complexity), extraneous load (design waste), and germane load (productive schema-building), then eliminates the waste, manages the necessary complexity through chunking and sequencing, and extends effective capacity through offloading strategies.

---

## When to use

- "This is too complex to hold in my head all at once."
- People aren't retaining a training programme, onboarding process, or document
- A system or process produces errors that cluster at moments of high complexity
- "How do I simplify this without losing what matters?"
- Designing a new workflow, interface, or communication for people who need to act on it correctly

---

## Example

**Input:**
> We're redesigning our engineering incident response process. Right now when an incident fires, the on-call engineer has to: check the alert details in PagerDuty, look up the runbook in Confluence (which may be outdated), figure out the severity classification using our 4-level rubric, post a status update in Slack with the right format and in the right channel (which depends on severity), page additional responders if severity is 2 or above using a separate tool, and start filling out an incident timeline doc. Engineers are making mistakes and skipping steps under pressure. We think they're just stressed and not following process. Are we right?

**Output:**

**Load Type Breakdown**

| Source | Load Type | Severity | Reducible? |
|---|---|---|---|
| Alert details (PagerDuty) | Intrinsic — must be understood | Medium | No — this is the actual problem |
| Runbook lookup in Confluence | Extraneous — information architecture overhead | High | Yes — runbook should be linked from the alert |
| 4-level severity classification rubric | Intrinsic (moderate) + Extraneous (recall from memory) | High | Partially — rubric should be surfaced at point of use, not recalled |
| Slack channel selection logic (depends on severity) | Extraneous — conditional logic held in working memory | High | Yes — this should be automated or templated |
| Status update formatting | Extraneous — formatting overhead | Medium | Yes — provide a template that fills itself where possible |
| Paging additional responders (separate tool) | Extraneous — tool switching overhead | High | Yes — severity-triggered paging should be automated |
| Incident timeline doc | Extraneous (during acute phase) | Medium | Yes — defer or template this |

**Bottleneck:** The severity classification step is where load peaks catastrophically. The engineer must simultaneously hold the alert details in working memory while recalling the full 4-level rubric, then apply the rubric to the details, then make conditional decisions (which channel, whether to page) that depend on the classification they just made. This is 4–5 working memory operations happening simultaneously under time pressure. Errors and skipped steps are not a stress problem — they are a design problem.

**Interventions**

| Load Type | Strategy | Specific Action |
|---|---|---|
| Extraneous — runbook lookup | Contiguity | Embed the runbook link (or inline summary) directly in the PagerDuty alert. Eliminate the Confluence lookup step entirely during acute response. |
| Extraneous — severity rubric recall | Signalling + Contiguity | Display the 4-level rubric in the incident response tool or as a pinned Slack message. Never require recall from memory during an incident. |
| Extraneous — Slack channel selection | Automation | Pre-populate the correct Slack channel in the incident template based on auto-detected or manually selected severity. Eliminate conditional logic from the engineer's working memory. |
| Extraneous — status update formatting | Template | Provide a fill-in-the-blank status template. Engineer inserts facts; format is pre-determined. |
| Extraneous — separate paging tool | Automation | Trigger severity-2+ paging automatically from the incident management tool, or provide a single button. Eliminate tool-switching during acute phase. |
| Extraneous — incident timeline (acute phase) | Sequencing | Defer incident timeline documentation to post-incident review. During the acute phase, a single timestamped log is sufficient. Full documentation happens after resolution. |
| Intrinsic — alert details | Chunking | Ensure alerts surface the three most critical facts first (system affected, user impact, error type) before detailed logs. Most engineers are trying to classify severity before they've absorbed the signal. |

**Offloading Plan:**
- All conditional logic (which channel, whether to page, what format) should live in the tooling, not in the engineer's head
- Runbook should be accessible in one click from the alert, not a separate search
- Introduce a single-page "incident card" that surfaces rubric, template, and tooling links in one place — the external representation the engineer can work from rather than hold mentally

**Redesigned Incident Response Flow:**

Alert fires → Engineer sees: (1) alert summary with three key facts pre-highlighted, (2) linked runbook inline, (3) severity rubric alongside the alert
→ Engineer selects severity (one decision, rubric visible)
→ Correct Slack channel and status template auto-populate based on severity selection
→ Severity 2+ paging fires automatically
→ Engineer fills in status template facts (one task, format done)
→ Incident is live — timeline documentation deferred to post-incident

This reduces the acute working memory demand from 7+ simultaneous items to approximately 3 sequential decisions. The errors are not a people problem.

---

## Related skills

- [`/s4h-cognition-attention`](attention.md) — address whether sustained engagement is possible before optimising what happens within sessions
- [`/s4h-communication-clarity-audit`](../communication/clarity-audit.md) — apply cognitive load principles to a specific communication or document
- [`/s4h-aesthetic-simplicity-analysis`](../aesthetic/simplicity-analysis.md) — examine whether complexity is being carried unnecessarily in a design or artefact
