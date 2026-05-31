# `/s4h-economics-coordination`

> *Everyone is acting rationally. The outcome is still catastrophic. Here's why — and what to do about it.*

**Category:** [Economics](README.md) · **Command:** `/s4h-economics-coordination` · **Source:** Elinor Ostrom — *Governing the Commons* (1990); Garrett Hardin — "The Tragedy of the Commons" (1968); Mancur Olson — *The Logic of Collective Action* (1965)

---

## What it does

Diagnoses the structural reasons why individually rational behaviour produces collective irrationality — and identifies the institutional arrangements that can resolve it. Maps the coordination failure to its specific problem type (public good, common pool resource, assurance game, coordination game), explains why individual incentives produce the bad collective outcome, and evaluates the solution set: Pigouvian intervention, property rights, community governance à la Ostrom, or coordination mechanisms. The goal is not to identify bad actors but to identify bad structures — and the institutional changes that make cooperation individually rational.

---

## When to use it

- "Everyone is acting in their own interest but the result is terrible for everyone"
- Classic tragedy of the commons: shared resource is being overused and depleted
- Free-rider problem: a public good isn't being funded or maintained because everyone waits for someone else
- "We all agree cooperation is better but no one will cooperate first"
- Designing a policy, community rule, or incentive structure intended to solve collective action failure

---

## When *not* to use it

**Don't diagnose a coordination failure when the problem is bilateral — a straightforward dispute between two parties.** Two people or organisations in conflict over resources or interests is usually better addressed by `/s4h-game-theory-equilibrium` or `/s4h-game-theory-prisoners-dilemma`. Coordination failure analysis is most valuable when there are *many* actors, the resource or good is shared across a group, and individual rational choice produces collective harm.

**Don't assume the tragedy is inevitable and that only top-down intervention works.** Ostrom's core finding overturned this assumption. Communities have governed shared resources sustainably for centuries without privatisation or state control. Before recommending regulation or privatisation, assess whether the conditions for community governance are present — they often are.

The nearest neighbor: [`/s4h-game-theory-prisoners-dilemma`](../game-theory/prisoners-dilemma.md) — the formal analysis of the two-party cooperation failure. Use `/s4h-economics-coordination` for multi-party and institutional analysis; use the prisoners' dilemma skill when you need to model the payoff structure and find paths to cooperation in a bilateral or small-group setting.

---

## Example

**Input:**
> I'm a manager at a large law firm. We have a shared associate pool — junior lawyers who work across multiple practice groups. Everyone agrees the associates are overworked and that the overwork is causing attrition that's damaging the firm. But every time we discuss reducing the load, each partner says they can't afford to reduce their demands because the others won't. Associates keep being overworked. What's happening here?

---

**Output:**

### Coordination Failure Analysis: Associate Overwork in a Shared Staffing Pool

**The Coordination Failure**

Associates are a shared resource. Each partner who draws on the associate pool captures the full benefit of that associate's work (their deals close, their clients are served) while bearing only a fraction of the cost of overwork (their share of attrition risk, future hiring costs, and reputational damage). The attrition cost is borne by the firm collectively, not by the partner who generated the workload.

The result: every partner is individually rational to extract maximum associate hours. Collectively, all partners doing this depletes the resource — associates burn out and leave. This is a classic common pool resource tragedy.

---

**Problem Type: Common Pool Resource + Assurance Game (Compound)**

*Primary structure — Common pool resource:*
The associate pool is depletable and partially non-excludable (each partner can draw on it). Each partner's extraction imposes a cost (depletion risk, attrition risk) on all other partners, but they capture the full benefit of their extraction. This is the structural logic of overuse: private benefit, shared cost.

*Secondary structure — Assurance game:*
When asked whether they would reduce demands if others did, partners say yes. This is the signature of an assurance game: everyone prefers the cooperative outcome (sustainable workload, reduced attrition) but will only cooperate if they're confident others will too. Each partner rationally refuses to reduce their demands unilaterally because they'd be the only one doing so — carrying the cost of restraint while others continue extracting. The assurance problem is sustaining the credible mutual commitment.

---

**Incentive Structure**

| Party | Benefit of extracting (over-assigning associates) | Cost they bear | Cost externalised | Incentive |
|---|---|---|---|---|
| Partner A | Faster deal execution; client satisfaction; partner revenue share | Marginal share of associate attrition cost | Majority of attrition cost to firm + other partners | Extract up to the limit |
| Partner B | Same | Same | Same | Extract up to the limit |
| Associates | — | Full cost: burnout, overwork, health, career damage | None — they bear the full individual cost | Leave |
| Firm (collective) | — | Recruiting cost, training cost, institutional knowledge loss, reputational damage with future associates | — | Bear the collective cost of individual rational extraction |

The associates bear the full individual cost of overwork and are not party to the decision about how their time is allocated. This is both an externality (their welfare is not in the partners' cost-benefit calculation) and a power asymmetry.

---

**Existing Institutions**

Current mechanisms:
- *Informal norms* — partners are aware overwork is a problem; there's a stated norm of "sustainable practice." Not enforced; no accountability mechanism.
- *Partner discussion* — collective discussion occurs but produces no binding commitment. Classic assurance game failure: no one believes others will follow through.
- *HR/talent function* — tracks attrition but is not empowered to allocate associate time across practice groups.

Applied to Ostrom's design principles:
- **Clearly defined boundaries?** Partial — the associate pool is defined but usage rights are not.
- **Rules matched to local conditions?** No — no per-partner or per-practice-group limits exist.
- **Affected parties have voice in rule-making?** No — associates have no formal input into workload governance.
- **Monitoring?** Weak — attrition is tracked; per-partner extraction is not.
- **Graduated sanctions?** None.
- **Conflict resolution?** None specific to this problem.

The current institutional structure fails on almost every Ostrom criterion. The problem will persist.

---

**Institutional Solutions**

| Mechanism | Type | How it changes incentives | Conditions for success | Key risk |
|---|---|---|---|---|
| **Associate hour caps per partner/practice group** | Internal regulation | Makes overextraction impossible; forces each partner to face their constraint directly | Management willingness to enforce; clear measurement | Partners game around caps; associates poached from other pools |
| **Attrition cost attribution** | Ostrom — accountability | When an associate leaves citing overwork, attribute the recruiting and replacement cost to the practice group responsible | Requires good attribution data; management spine | Contested attribution; gaming |
| **Associate governance council** | Ostrom — community governance | Associates have formal input into workload allocation decisions; creates peer monitoring and voice | Culture shift; associate trust that voice is real | Tokenistic if partners don't actually adjust |
| **Partner compensation linked to associate retention** | Pigouvian — internalise the externality | Partners who retain associates well (3+ year tenure) receive a retention bonus; partners with high attrition bear a cost | Partner buy-in to the metric; attribution accuracy | Attrition for reasons outside partner control |
| **Transparent utilisation reporting** | Information mechanism | Publish each partner's associate utilisation rate to all partners; social accountability | Genuine transparency; willingness to act on data | Naming/shaming without enforcement has limited effect |

---

**Recommended Approach**

The problem requires two simultaneous interventions addressing the two overlapping structures:

1. **Address the common pool problem** with a structural constraint: per-partner associate hour limits, enforced by a central allocation function. Without a binding constraint, voluntary restraint will always be outcompeted by continued extraction. This is the Ostrom lesson: rules work when they are clearly defined, monitored, and enforced.

2. **Address the assurance problem** by creating visible, binding mutual commitment: publish utilisation rates and make the cap public across partners. When Partner A can see that Partner B is also operating within their cap, the assurance condition is met — A can cooperate without fear of being the only one doing so.

The attrition cost attribution mechanism is a powerful complement: it internalises the externality that currently makes overwork individually costless for partners who generate it. Start with the caps (structural) and the attribution (incentive alignment). The transparency and governance mechanisms follow.

---

## Related skills

- [`/s4h-game-theory-prisoners-dilemma`](../game-theory/prisoners-dilemma.md) — formal analysis of the cooperation failure structure and paths to resolution
- [`/s4h-game-theory-mechanism-design`](../game-theory/mechanism-design.md) — design the rules that make cooperation individually rational
- [`/s4h-economics-externalities`](externalities.md) — the overwork problem involves unpriced externalities imposed on associates and the firm
- [`/s4h-systems-archetype-matching`](../systems/archetype-matching.md) — tragedy of the commons is a named systems archetype with a predictable dynamic
