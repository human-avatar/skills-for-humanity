# decision-option-mapping

> Makes all real options visible before evaluating any — counters the false dichotomy.

**Trigger:** `/s4h-decision-option-mapping`

---

## What it does

Generates options at three levels — direct solutions, reframings, and combinations — and enforces a quota of at least 5 options before evaluation begins. The first two options that come to mind are rarely all that exists, but they crowd out better alternatives when evaluation starts too early.

---

## When to use

- "What are my options here?"
- About to choose between two options — a third or fourth may be better
- "False dichotomy check"
- Planning something and want to make sure no approach was missed

## When *not* to use

- Options are clear and you need to compare them → [criteria-weighting](criteria-weighting.md)
- You need to stress-test a direction you're leaning toward → [premortem-analysis](premortem-analysis.md)

---

## Example

**Input:**
> Our engineering velocity has dropped significantly over the last quarter. The team is split between "we need to hire more engineers" and "we need to reduce technical debt." What are the options?

**Output:**

*Quota: 6 options minimum before evaluating.*

**Option 1: Hire engineers**
Add headcount to increase capacity. Addresses velocity by adding more people.

**Option 2: Tech debt sprint**
Dedicate a 4-6 week period to addressing the most impactful debt. Addresses velocity by removing drag.

**Option 3: Diagnose before deciding**
Neither hiring nor a debt sprint — first understand why velocity dropped. Dropped velocity has multiple possible causes (debt, process overhead, unclear priorities, team dynamics, scope creep) and the right fix depends on the actual cause.

**Option 4: Change the work allocation mix**
Shift the existing team's time — more time on core product, less on maintenance, migrations, and internal tooling. Addresses velocity without hiring or a dedicated debt sprint.

**Option 5: Reduce scope**
Velocity is output divided by capacity. If capacity is fixed, reduce the complexity of what's being built. Simplify the roadmap, cut features, or tighten specifications.

**Option 6: Address process overhead**
Dropped velocity often traces to meetings, context-switching, approval bottlenecks, or unclear ownership — not engineering capacity at all. Audit how engineering time is actually spent before adding to it.

**Option 7: Both hiring and debt, sequenced**
Hire one or two engineers specifically to accelerate the debt paydown, funded by the productivity gains.

---

**Analysis:**
Options 1 and 2 treat the symptom differently but both assume they know the cause. Option 3 is the diagnostic prerequisite: without understanding why velocity dropped, any intervention is a guess. The most common finding in these situations is Option 6 — process overhead and context-switching are consistently underestimated as velocity drains.
