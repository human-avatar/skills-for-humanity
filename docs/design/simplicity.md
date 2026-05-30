# design-simplicity

> Removes what's unnecessary to find the form that does exactly what is needed — nothing more.

**Trigger:** `/design-simplicity`

---

## What it does

Applies systematic subtraction to a design: enumerates every element, tests each against its primary function using Dieter Rams' removal test, identifies redundancies and over-specification, and produces a simplified form with reasoning for each removal. The goal is not minimalism — it is fitness. The test is not "can this be removed?" but "does removing it break the function?" Edward Tufte's data-ink ratio provides the underlying logic: of everything present, what fraction does real work?

---

## When to use

- "This feels more complicated than it needs to be."
- A design has accumulated features or elements over time and needs rationalisation
- Something exists that technically works but takes too long to understand
- Preparing for an iteration cycle and want to remove clutter before testing
- A document, interface, or system has grown beyond its original scope

---

## Example

**Input:**
> Our internal analytics dashboard has grown over 18 months. It now has: a header with logo, product name, and navigation; a sidebar with 14 filter options; a top stats bar showing 8 summary metrics; a main chart area with a default line chart; a secondary chart below it that shows the same data as a bar chart; a data table at the bottom showing the same records as the charts; a "last updated" timestamp; a help button; an export button; a "customize view" button; a legend; filter tags showing applied filters; a "clear all filters" button; a "save view" button; and a color-coded status badge on each row. Users complain it's "overwhelming."

**Output:**

**Design under review:** Internal analytics dashboard — primary function: enable users to understand key performance metrics and investigate anomalies.

**Element inventory:**

| Element | Current function | Removal test | Verdict |
|---|---|---|---|
| Header (logo, product name, nav) | Navigation and branding | Navigation is needed; logo and product name inside an internal tool with no other pages serve no function | **Reduce** — keep navigation, remove logo and product name |
| Sidebar with 14 filters | Data filtering | Filtering is needed; 14 options is an implementation decision, not a requirement | **Reduce** — audit which filters are actually used; default to 4–5 most used; collapse the rest behind "more" |
| Top stats bar (8 metrics) | Summary overview | Some summary metrics are needed; 8 is likely over-specified | **Reduce** — identify which 3–4 metrics are decision-relevant; remove or demote the others |
| Main line chart | Visualise trend over time | Core function; load-bearing | **Keep** |
| Secondary bar chart (same data) | Alternative view of same data | Fails removal test — same data, same records, adds no new information | **Remove** — offer a toggle if both views are genuinely needed, don't show both by default |
| Data table (same records as charts) | Access to raw records | If the primary use case is anomaly investigation, raw data access is load-bearing; if it's overview, it's redundant | **Keep with caveat** — should be collapsed by default; expand on demand |
| Last updated timestamp | Data freshness indicator | Small but genuinely useful — users need to know if data is current | **Keep** |
| Help button | Support access | In an internal tool: who uses this? If help content is poor, the button doesn't solve the problem | **Remove pending audit** — if help content is inadequate, the button adds clutter without solving anything |
| Export button | Data extraction | Load-bearing for users who need to share or process data elsewhere | **Keep** |
| Customize view button | Personalisation | What does it do that Save View doesn't? Likely redundant with Save View | **Remove** — consolidate with Save View or eliminate one |
| Legend | Chart interpretation | Load-bearing if chart has multiple data series | **Keep** — but could be embedded in chart axis labels rather than a separate element |
| Filter tags (applied filters) | Current state visibility | Load-bearing — users need to see what filters are active | **Keep** |
| Clear all filters | Reset shortcut | Load-bearing — useful when multiple filters applied | **Keep** |
| Save view button | Persist configuration | Useful for power users; adds complexity for casual users | **Keep but deprioritise** — move to secondary action area |
| Colour-coded status badge (each row) | Status at a glance | What statuses exist and are they meaningful? If there are only 2–3 distinct states, this is load-bearing. If badges encode rarely-used states, they add visual noise | **Audit needed** — reduce to states that drive action; remove decorative status coding |

**Complexity sources identified:**

- **Redundant elements:** Secondary bar chart + data table both repeat the line chart data. The data table may be justified for investigation; the bar chart is not justified.
- **Over-specified elements:** 14 filter options, 8 summary metrics — both over-specified beyond what users actually interact with. (Analytic evidence should confirm which filters and metrics are used; if unavailable, this is a hypothesis to test.)
- **Fear-driven elements:** Help button (added "just in case"), Customize view (added alongside Save view rather than replacing it), secondary bar chart (added because "some users prefer bar charts" — a preference that doesn't justify permanent screen real estate).
- **Legacy elements:** Logo and product name in header — carried over from public-facing design conventions into an internal tool where they serve no function.

**What to remove:**

1. **Secondary bar chart** — same data as main chart; no new information; offer toggle if needed
2. **Logo and product name** from header — serves no function in an internal tool
3. **Help button** — audit help content first; if content is poor, the button doesn't help; if good, surface it differently
4. **Customize view button** — consolidate with Save View

**What to reduce:**

1. Sidebar filters — from 14 to 4–5 visible, rest collapsed
2. Summary metrics bar — from 8 to 3–4 decision-relevant metrics
3. Status badges — audit to only states that drive user action

**What remains:**

Navigation header (no logo/branding), 4–5 visible filters + expandable rest, 3–4 summary metrics, main line chart with legend, collapsible data table, filter tags + clear all, export, save view, last updated timestamp.

**Function test on simplified form:**

The simplified dashboard still serves the primary function: understanding key metrics and investigating anomalies. The main chart, filter system, and data table are all present. Summary metrics are reduced but more decision-relevant. No primary function has been removed — only redundant representations and under-used controls.

**What the simplification achieves:**

Removes approximately 4 elements entirely and reduces 3 others. Estimated cognitive load reduction: significant — users no longer need to decide whether to look at the chart or the duplicate bar chart, and the header and filter sidebar no longer compete with the data for visual attention.

---

## Related skills

- [`/design-iteration`](iteration.md) — test whether the simplified design still satisfies users
- [`/aesthetic-simplicity-analysis`](../aesthetic/simplicity-analysis.md) — apply simplicity analysis specifically to the visual and aesthetic form
- [`/constraint-scope-reduction`](../constraint/scope-reduction.md) — for removing scope from a project brief before building, not from a design that already exists
