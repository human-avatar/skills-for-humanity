# information-redundancy

> Redundancy has two faces: the backup that saves you, and the duplication that wastes you.

**Trigger:** `/s4h-information-redundancy`

---

## What it does

Maps all instances of redundancy in a system, communication, or organisation and classifies each as load-bearing (fault tolerance, error correction, pattern reinforcement, verification) or wasteful (accumulated duplication, defensive repetition, uncoordinated effort, false safety). Applies Shannon's insight that redundancy is the mechanism of error correction in noisy channels — and distinguishes the purposeful version from the accidental one. Identifies single points of failure exposed by the current redundancy architecture, flags false-safety redundancies (those that appear protective but create coupled failure), and produces a concrete strategy for what to preserve, what to prune, and what to add.

---

## When to use

- "Are we doing the same thing twice?"
- A system has a single point of failure that needs addressing
- A report, document, or communication feels repetitive but you're not sure what to cut
- Multiple teams are working on overlapping problems without coordination
- Backups or fallback systems exist but you're uncertain whether they actually work
- An argument makes the same point in multiple places and you need to decide which instances are earning their place

---

## Example

**Input:**
> We're a 120-person SaaS company. Our product team has three ways they track what they're building: a Jira board updated by engineers, a product roadmap in Notion maintained by PMs, and a slide deck that gets updated for each board meeting. Engineering also has a separate technical backlog in a different Jira project. Sales uses a "product commitments" spreadsheet they maintain themselves to track what they've promised customers. The support team has a known-issues log. Our VP of Engineering says we have "too many sources of truth." Our CEO says we need to cut the overhead. Our Head of Sales says if we kill the spreadsheet, she'll lose track of customer commitments. Where does the redundancy help and where does it hurt?

**Output:**

**Redundancy Map**

| Instance | Type | Classification | Failure Protected | Recommendation |
|---|---|---|---|---|
| Jira board (engineering) | Structural | Load-bearing | Work tracking, sprint integrity, development coordination | Preserve — this is the canonical source for in-flight engineering work |
| Notion product roadmap (PM) | Structural | Load-bearing (partially) | Strategic alignment, cross-functional visibility into direction | Preserve — but scope must be clarified: this should be direction, not a mirror of Jira |
| Board deck slide updates | Communication | Wasteful (as maintained) | Nothing — it's a snapshot, not a source | Convert to generated artifact: board deck should be produced from Notion, not maintained separately |
| Technical backlog (separate Jira project) | Structural | False safety | Appears to separate strategic from tactical — in practice, creates synchronisation failure | Merge or formally link to main Jira board; separate projects create coordination overhead without resilience benefit |
| Sales "product commitments" spreadsheet | Structural | Load-bearing | Customer commitments visibility — information that doesn't exist anywhere else in this form | Preserve with conditions — but integrate into Notion as a formal customer commitments view, so it's not siloed |
| Support known-issues log | Informational | Load-bearing | Support team's ability to respond to known issues without escalating each time | Preserve — and create a one-way sync to PM visibility so product decisions can account for known issues |

**Single Points of Failure:**
- **Customer commitments:** currently only in the Sales spreadsheet. If the spreadsheet owner leaves or the file is corrupted, this information is lost. There is no backup. This is the highest-risk gap in the current architecture.
- **PM direction visibility:** if the Notion roadmap is not maintained, engineering is flying on Jira alone with no cross-functional directional signal. There is no fallback.

**False Safety Redundancies:**
- **Technical backlog as separate Jira project:** creates the appearance of organised separation between strategic and tactical work, but in practice causes synchronisation failures. Items get stuck in the technical backlog without PM visibility; engineering works on them without PM context. The two projects should be linked by epic or merged under a unified Jira structure.
- **Board deck maintained separately:** creates the appearance of a curated, up-to-date board view, but in practice it becomes stale between updates. It provides false confidence to the board that they have current information.

**Net Impact of Recommendations:**

Removing wasteful redundancy:
- Eliminating the separately-maintained board deck saves ~4 hours/month of update overhead and removes the stale-information risk
- Merging the technical backlog into the main Jira structure removes a synchronisation point and reduces coordination failures

Preserving load-bearing redundancy:
- Jira (engineering truth), Notion (directional truth), and Support log (known issues) each serve distinct purposes and should not be merged
- Sales commitments spreadsheet captures information that would otherwise be lost — it should be preserved but integrated

Adding missing redundancy:
- Customer commitments need a backup: integrate into Notion with Sales as editor, so the information survives personnel changes
- Establish a lightweight sync process from Support known-issues log to PM Notion page, so product decisions can account for live support data

**Architecture summary:** The VP of Engineering is right that there are too many sources, but the right response is not to cut to one — it's to distinguish load-bearing sources (Jira, Notion, Support log, Sales commitments) from artefacts that should be generated rather than maintained (board deck). The Sales spreadsheet is the one genuinely isolated source that carries real risk; integrate it rather than eliminate it.

---

## Related skills

- [`/s4h-information-compression`](compression.md) — once load-bearing vs. wasteful redundancy is mapped, compression removes the wasteful instances
- [`/s4h-information-signal-noise`](signal-noise.md) — wasteful redundancy often creates noise in communication channels; SNR analysis addresses the channel-level symptom
- [`/s4h-systems-feedback-mapping`](../systems/feedback-mapping.md) — the dynamics that produced the redundancy pattern (often accretive process design) are best understood through feedback loop analysis
