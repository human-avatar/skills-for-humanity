# resource-waste-audit

> Finds where resources are being lost, duplicated, or underused — the seven wastes applied to knowledge work.

**Trigger:** `/resource-waste-audit`

---

## What it does

Maps a workflow or team's resource consumption against seven waste categories (Waiting, Overproduction, Rework, Duplication, Motion, Inventory, Over-processing), estimates the cost of each waste, identifies root causes, and ranks the top three removals by impact. Adapted from Toyota's lean manufacturing framework for knowledge work, where waste often hides in invisible overhead and coordination patterns.

---

## When to use

- "Waste audit"
- "Where are we wasting resources?"
- "Inefficiency audit"
- "Find the waste"
- When a team feels busy but output feels insufficient for the effort
- Before a headcount request — often finds capacity before adding people

## When NOT to use

- When the question is which single constraint is limiting throughput — use `resource-bottleneck-analysis`
- When the question is how to distribute resources across competing needs — use `resource-allocation-analysis`
- When the question is where highest-leverage use of resources is — use `resource-leverage-mapping`

---

## Example

**Input:**
> Audit the waste in our product development process: ideas come from PMs who write requirements docs, then go to design for wireframes, then engineering estimates, then back to PM for scope review, then back to design for final designs, then engineering builds. Features often change during build when engineers find the requirements ambiguous. Weekly status meetings with the whole team. Everything is tracked in two different tools (Jira and Notion) that aren't synced.

**Output:**

---

### Waste Inventory

| Waste Type | Where It Appears | Estimated Resource Cost | Root Cause |
|-----------|-----------------|------------------------|------------|
| **Waiting** | Features wait at each handoff point (PM→Design, Design→Engineering, Engineering→PM for scope review). Each handoff adds 2–5 business days. For a 6-week feature, handoff waits can consume 20–30% of elapsed time. | 20–30% of feature cycle time, recurring on every project | Sequential handoff process with no concurrent work; unclear who owns decisions between stages |
| **Overproduction** | Requirements docs are written to a level of detail that often isn't needed until engineering builds (or doesn't match what engineering actually needs). Design produces high-fidelity wireframes before the concept is validated. | ~25% of PM and design time on features that change significantly before shipping | No lightweight validation step; full investment before concept is confirmed |
| **Rework** | Features change during build due to ambiguous requirements. "Often" suggests this is a pattern, not an exception. Each in-build change is significantly more expensive than a pre-build change. | Estimated 15–25% of engineering time per feature; the most expensive waste in this system | Requirements written without engineering input; engineers find ambiguity when they try to implement, not before |
| **Duplication** | Two tools (Jira and Notion) tracking the same projects without sync. Teams choose which is "real" ad hoc; information diverges; people check both to be safe. | 30–60 minutes per person per week across the team; misleading data when tools diverge | Two tools adopted for different purposes, never integrated; cultural acceptance of the duplication |
| **Motion** | Multiple handoff points require context-switching and re-briefing. Every person re-reads requirements when they enter the flow. Engineers context-switch into status updates in meetings. | 2–3 hours per engineer per week; 1–2 hours per PM/Designer | Meeting cadence not designed around work rhythm; context-switching cost not measured |
| **Inventory** | Requirements docs and designs waiting in queue at each stage represent work in progress not generating value. If the design queue has 3 features waiting for engineering review, those are 3 features with sunk PM and design time generating no output. | Difficult to quantify without WIP data, but typical for this flow: 30–50% more WIP than the team can actively work on | No WIP limits; features added to queue faster than they're completed |
| **Over-processing** | High-fidelity designs before concept validation. Full requirements docs before engineering feasibility check. Weekly whole-team status meetings for information that could be async. | ~20% of design time; ~2 hours per person per week in meetings | Default to thoroughness over fit-for-purpose; meetings as the default coordination mechanism |

---

### Top 3 Waste Reductions (Ranked by Impact)

1. **Rework** — Add a 30-minute engineering estimate and feasibility check *before* design begins, not after. Engineers flag ambiguity and impossible requirements at the cheapest point. Expected resource freed: 15–25% of engineering time per feature cycle; 2–3x faster identification of requirements issues.

2. **Duplication (tool consolidation)** — Designate one tool as the system of record, deprecate the other for project tracking, migrate existing projects. Spend 3 days migrating, save 30–60 minutes per person per week indefinitely. Expected resource freed: 2+ hours per week per team member once migration is done.

3. **Motion/Over-processing (meeting redesign)** — Replace weekly whole-team status meetings with async status updates (written, 5 minutes per person per week) + 20-minute sync only for decisions and blockers. Expected resource freed: 1–2 hours per person per week; meetings reserved for what can't be done async.

**Note on Overproduction and Inventory:** These require a process change (introduce a lightweight concept validation step before full design investment; add WIP limits to the backlog). They're higher leverage per fix but slower to change because they require PM buy-in and a workflow redesign. Start with Rework, Duplication, and Motion (fast, high-impact, low-resistance) to free capacity for the larger process changes.
