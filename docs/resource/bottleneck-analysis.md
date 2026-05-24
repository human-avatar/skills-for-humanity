# resource-bottleneck-analysis

> Finds what is actually constraining throughput — the system can only move as fast as its slowest point.

**Trigger:** `/resource-bottleneck-analysis`

---

## What it does

Applies Theory of Constraints logic: identifies the true bottleneck (not a symptom), verifies it's the system constraint, and maps what would be needed to elevate it. Adding resources anywhere except the bottleneck doesn't improve throughput.

---

## When to use

- "Why are we moving slowly?"
- Work is queuing up somewhere
- Adding resources hasn't improved velocity
- Theory of Constraints analysis

---

## Example

**Input:**
> Our engineering team ships features slowly. We've added 4 engineers in the last 6 months. Velocity hasn't improved. Where's the bottleneck?

**Output:**

**Step 1 — Identifying the candidate bottlenecks:**

Where does work wait? Trace the process: idea → spec → design → engineering → code review → QA → deployment → release.

Without specific data, common bottlenecks in this situation:

**Candidate A: Specification/decision quality.** Engineers are waiting for clear requirements, or starting on underspecified work and re-doing it. Adding engineers to an unclear spec makes this worse, not better.

**Candidate B: Code review.** Pull requests waiting for review. If 2 senior engineers review everyone's PRs, review is the bottleneck — and it scales linearly with team size, which explains why adding 4 engineers didn't help.

**Candidate C: QA/Release pipeline.** If a small QA function or a manual release process is shared across an enlarged team, more engineers producing more PRs creates more queue at QA.

**Candidate D: Decision authority.** Someone with limited bandwidth approves all technical decisions. Team size increased but decision throughput didn't.

**Verifying the bottleneck (diagnostic questions):**
1. Where is WIP (work in progress) accumulating? That's the queue upstream of the bottleneck.
2. What step has the longest average wait time?
3. What step is never idle?

**Why adding engineers didn't help:**

If the bottleneck is code review or QA, adding engineers increases code production without increasing review/QA capacity. The queue at the bottleneck grows. Velocity stays flat or declines due to coordination overhead.

**Most likely bottleneck:**

Code review is the most common bottleneck in teams that have scaled engineering headcount without scaling senior review capacity. 4 new engineers producing PRs requires 4x more review hours from the same reviewers.

**Recommendation:**
Before any other change, measure PR cycle time (time from PR opened to merged). If the average is >24 hours, code review is the bottleneck. The fix: distribute review responsibility, require same-day review response, or invest in automated testing that reduces the manual review burden.
