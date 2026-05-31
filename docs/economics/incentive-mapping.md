# `/s4h-economics-incentive-mapping`

> *People don't do what you ask them to. They do what the structure rewards them for.*

**Category:** [Economics](README.md) · **Command:** `/s4h-economics-incentive-mapping` · **Source:** Principal-agent theory; Kahneman & Tversky — loss aversion; Charlie Munger

---

## What it does

Systematically maps who benefits, who pays, and what the incentive structure actually rewards for every party in a system — then identifies where the structure's predictions diverge from the desired behaviour. The insight: incentives are the operating system of behaviour. When behaviour is wrong, the incentive structure is almost always the proximate cause. This skill diagnoses that structure explicitly, generates the predicted behaviour from first principles, and surfaces redesign options that close the gap between what the structure rewards and what the system needs.

Draws on principal-agent theory (the classic case of diverging incentives between decision-maker and consequence-bearer), and on Kahneman's finding that loss aversion makes negative incentives systematically stronger than equivalent positive ones.

---

## When to use it

- "Why do people keep doing X even though we've told them not to / rewarded them not to?"
- Behaviour consistently diverges from stated goals, policies, or training
- A new policy, compensation structure, or rule is being designed and you want to check whether the incentives actually point where intended
- "Who benefits from the current state of affairs?" when the answer isn't obvious
- A system, organisation, or market is producing outcomes that no one claims to want

---

## When *not* to use it

**Don't use incentive mapping as a substitute for understanding values, culture, or psychology.** Incentive mapping models people as rational responders to costs and benefits — a useful simplification, but not a complete model. Some behaviour is driven by identity, intrinsic motivation, social norms, or habit in ways that don't reduce to incentive analysis. Over-applying the incentive lens can produce cynical diagnoses and miss the actual driver. When the behaviour seems to track meaning, connection, or identity rather than reward, use `/s4h-psychology-motivation` or `/s4h-emotional-motivation-mapping`.

**Be careful about conflating prediction with moral judgment.** Saying "the incentive structure pushes people toward X" is a structural diagnosis, not an accusation. People responding to incentives are not misbehaving — the structure is misbehaving. Keep the analysis clinical and directed at redesign.

The nearest neighbor: [`/s4h-game-theory-mechanism-design`](../game-theory/mechanism-design.md) — the formal, mathematical version of incentive redesign. Use incentive mapping to diagnose; use mechanism design when you need to formally specify the optimal rule or mechanism.

---

## Example

**Input:**
> We run a software engineering organisation of 200 people. We recently introduced peer code review as a mandatory step before merge. Three months in, code review is happening — but it's perfunctory. PRs get approved with a single comment, often within minutes of being raised. The quality problems we introduced the policy to fix are still occurring. Engineers say they value code review; their behaviour says otherwise.

---

**Output:**

### Incentive Map

**System being examined:** Mandatory peer code review process in a 200-person software engineering organisation

---

**Party Incentive Analysis**

| Party | Desired behaviour | What they gain from desired behaviour | What they lose | What the structure actually rewards | Predicted behaviour | Misalignment? |
|---|---|---|---|---|---|---|
| **Author (PR submitter)** | Submit well-prepared PRs; incorporate review feedback thoughtfully | Better code; learning from reviewers | Time; ego if code is criticised | Fast merge; shipping velocity; manager praise for delivery speed | Submit PRs quickly; push back on substantive feedback; request approval from least demanding reviewer | Yes — speed rewarded, quality not |
| **Reviewer** | Give thorough, constructive review; flag real issues | Better codebase; colleague development | Time; social friction from raising criticism; delayed own work | Being seen as helpful and unblocking; not being seen as a bottleneck | Approve quickly with minimal comment; avoid the friction of raising real issues | Yes — speed and agreeableness rewarded, thoroughness not |
| **Engineering manager** | Hold the review standard; reward thoroughness | Code quality; fewer incidents | Short-term velocity; need to defend slower throughput to product | Team throughput metrics; delivery to sprint commitments; perceived as unblocking | Implicitly or explicitly pressure for fast review cycles; treat review as overhead | Yes — delivery rewarded, quality downstream effects invisible |
| **Product/project stakeholders** | See features ship reliably and without quality degradation | Predictable delivery | Nothing in the current structure penalises poor review | Fast delivery; visible features | Indifferent to review quality; may actively pressure for speed | Neutral — not causing the problem but amplifying incentives that are |

---

**Key Misalignments**

1. **Speed vs. thoroughness for reviewers.** A thorough review costs the reviewer time, creates social friction, and may make them appear to be a "bottleneck." An approving comment with minimal substance costs almost nothing and signals helpfulness. The rational reviewer approves quickly.

2. **Attribution gap for authors.** When a production bug results from insufficiently reviewed code, the cost is borne by the team (debugging time, incident response) not specifically attributed to the reviewer who approved it or the author who submitted a poor PR. The accountability signal is delayed, diffuse, and rarely lands on the individual who made the decision.

3. **Manager velocity incentive.** Managers are measured on delivery; code quality is invisible in sprint metrics until it produces a major incident. They are structurally incentivised to treat code review as overhead and to celebrate fast-shipping engineers regardless of review quality.

4. **Loss aversion working against the system.** The reviewer's fear of being seen as blocking (a near-term, concrete loss) is stronger than their concern about downstream quality issues (a future, diffuse, uncertain loss). Kahneman's loss aversion predicts that reviewers will sacrifice quality to avoid the immediate social cost of being seen as obstructive.

---

**Redesign Options**

*Misalignment 1 — Reviewer incentive:*
- **Option A (social accountability):** Make review quality visible. Track and report not just "was code reviewed?" but "how often did reviewers flag issues that were later confirmed?" Reward the reviewers whose flags prevented problems.
- **Option B (attribution):** When a bug in recently-merged code is discovered, route the post-mortem to the reviewing engineer as well as the author. Create shared responsibility for the output.

*Misalignment 3 — Manager incentive:*
- **Option A (metric visibility):** Add code quality indicators — post-merge bug rate by team, incident frequency per feature shipped — to the same dashboards that show delivery velocity. Make the tradeoff visible.
- **Option B (accountability cascade):** Manager performance reviews should include code quality outcomes, not just delivery throughput, so managers have direct skin in the review standard.

*Misalignment 2 — Attribution gap:*
- **Option A (explicit pairing):** Assign named reviewers to PRs, and track the downstream quality of code they approved. This converts a diffuse shared cost into an individual accountability signal.

---

**Recommended Interventions (Prioritised)**

1. **Immediate — review quality visibility:** Build a lightweight dashboard showing which reviewers flag issues vs. approve without comment, and track post-merge bug rate against reviewer. Takes 1 sprint to build; directly addresses the core misalignment.
2. **Structural — shared attribution for post-merge bugs:** Amend the incident post-mortem template to include the reviewing engineer. Requires team norm change, not technical work.
3. **Manager-level — add quality metrics to the sprint review:** Requires product and engineering leadership alignment; medium effort but addresses the root of the managerial incentive problem.

---

## Related skills

- [`/s4h-game-theory-mechanism-design`](../game-theory/mechanism-design.md) — formally design the rules that make the desired behaviour individually rational
- [`/s4h-economics-externalities`](externalities.md) — when the misalignment involves costs falling on parties outside the decision
- [`/s4h-economics-coordination`](coordination.md) — when the incentive problem is producing collective action failure across a group
- [`/s4h-social-incentive-analysis`](../social/incentive-analysis.md) — for the political and relational dimensions of incentive dynamics
