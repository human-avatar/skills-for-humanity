# decision-premortem-analysis

> Imagines the decision was made and failed — then diagnoses exactly how.

**Trigger:** `/s4h-decision-premortem-analysis`

---

## What it does

Sets the scene 12 months in the future: the decision was made, and it failed. Generates 5+ specific failure paths, ranks them by probability and severity, and produces mitigations for the most critical ones. Breaks the commitment bias that prevents honest risk assessment after a direction has been chosen.

---

## When to use

- Leaning toward a direction and want to stress-test it before committing
- "What could go wrong?"
- About to make a significant or hard-to-reverse decision
- Team is aligned and might be in groupthink — need a structured devil's advocate

## When *not* to use

- Haven't decided yet and need to map options → [option-mapping](option-mapping.md)
- Need to know how much process this decision deserves → [reversibility-analysis](reversibility-analysis.md)

---

## Example

**Input:**
> We're planning to migrate our monolith to microservices over the next 18 months. Run a premortem.

**Output:**

**The scene:** It's 18 months from now. The migration was attempted and failed badly — either it's been abandoned, or it shipped in a state worse than the monolith it replaced, or it consumed the engineering team and the product fell behind competitors.

**Failure paths:**

**Path 1: Scope never stabilized (Probability: High, Severity: High)**
The migration started with one service, then two, then scope expanded to include "while we're at it" improvements. Each service took longer than estimated. At month 12, half the monolith was migrated and the team was exhausted. The remaining half never got done. Result: a hybrid that's harder to operate than the original monolith.

*Mitigation: Define "done" at the start — specific, measurable boundary for what gets migrated and what stays. Time-box the project with a decision gate at month 6.*

**Path 2: Distributed systems complexity was underestimated (Probability: High, Severity: High)**
The team had monolith expertise. Microservices introduced network failures, distributed transactions, service discovery, and observability challenges they hadn't faced before. Incidents increased. On-call load tripled. The performance improvements didn't materialize because the overhead of service communication ate the gains.

*Mitigation: One service in production for 90 days before expanding. Don't expand the migration until the first service is genuinely running well and the team has distributed systems experience.*

**Path 3: Conway's Law mismatch (Probability: Medium, Severity: High)**
The services were drawn around technical boundaries, not team boundaries. Every feature change still required coordination across 3-4 services owned by different people. The coupling moved from code to meetings.

*Mitigation: Design service boundaries around team ownership first, technical boundaries second. Each service should be ownable by one team without needing others.*

**Path 4: Organizational patience ran out (Probability: Medium, Severity: High)**
18 months of "we're in migration mode" created visible slowdowns in feature delivery. Product pressure mounted. Engineers were pulled back to the monolith to ship features mid-migration. The project was never properly completed.

*Mitigation: Get explicit leadership commitment to protected capacity for the migration, with quarterly check-ins to maintain that commitment. Make the trade-off visible before starting, not after the slowdown appears.*

**Path 5: The problem being solved wasn't the real problem (Probability: Medium, Severity: Medium)**
The monolith's scaling bottleneck was actually one specific component (the job processor), not the monolith architecture overall. The migration fixed architecture that wasn't the constraint while the real bottleneck remained.

*Mitigation: Before starting, validate that microservices actually solves the specific problems being experienced. Document the specific bottlenecks the migration addresses and verify they're architectural.*

**Highest priority mitigation:** Path 2 (distributed systems expertise). This is both high probability and high severity, and the mitigation (one service in production for 90 days) is a concrete gate that's actionable before anything else.
