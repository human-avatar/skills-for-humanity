# 🎯 Game Theory

> *Your best move depends on what they'll do. Here's how to find it.*

---

## What this category is

The game theory toolkit provides formal tools for reasoning about strategic interaction — situations where outcomes depend on the choices of multiple self-interested players. Each tool gives you a different angle on the same core problem: when rational agents each pursue their own interests, what happens, and how can you influence it?

Game theory complements `/strategy` (contextual wisdom for acting in competitive environments) with structural analysis: payoff matrices, equilibrium conditions, formal stability results, and mathematically precise allocation methods. Use game theory to understand *what the incentives actually are* — where rational players will end up, whether that's good or bad, and what changes to the rules could produce better outcomes. Use strategy to act effectively within the game you've identified.

---

## When to reach for it

- You're in a situation where your best choice depends on what another party chooses — and their best choice depends on yours
- A group that could all benefit from cooperating keeps defecting anyway — and you can't figure out how to fix it
- You need others to believe a claim but can't make them believe you by just saying it
- You're designing a system, a process, or rules — and you want the incentives built in so people behave correctly, not because they're asked to
- You're in a long-term relationship after a breakdown of trust and need to know whether and how to rebuild cooperation
- Multiple parties are negotiating to form a partnership or alliance, and the question of who gets what matters
- You're bidding in a competitive process and aren't sure how much to bid or how to think about your competitors

---

## When *not* to reach for it

**Don't use game theory for single-player decisions.** If your outcome doesn't depend on what others choose — you're choosing between two job offers, deciding how to allocate your time, ranking options against criteria you control — there is no strategic interaction and no game. The right tools are in `/decision` or `/probability`. Applying game theory to these situations adds complexity without insight.

**Don't mistake formal analysis for complete analysis.** Game theory assumes rational, self-interested players with reasonably stable preferences — a useful model and often the right starting point, but not a complete description of human behaviour. Players may be irrational, emotional, or have values that aren't captured in the payoff matrix. Use game theory to understand the structural pressures and equilibrium tendencies; pair it with `/social` and `/emotional` tools for a full picture of what people actually do.

The nearest neighbor: [Strategy](../strategy/) — contextual wisdom for competitive and adversarial situations. Strategy answers "how should I act given my position, capabilities, and opponents?"; game theory answers "what is the structural logic of this interaction and where does it lead?" Use game theory first to clarify the structure, then strategy to act within it.

---

## Skills in this category

| Skill | What it does | Trigger when... |
|---|---|---|
| **`/game-theory`** | Routes to the right game-theory skill for your situation | Not sure which tool fits; describe the interaction |
| [`/game-theory-equilibrium`](equilibrium.md) | Maps payoffs and finds stable outcomes — where rational play leads | One-shot strategic interaction; payoff matrix; "where will this land?" |
| [`/game-theory-prisoners-dilemma`](prisoners-dilemma.md) | Analyses cooperation failures and prescribes structural fixes | Race to the bottom; everyone defects despite mutual cooperation being better |
| [`/game-theory-signaling`](signaling.md) | Designs credible signals and commitment devices for asymmetric-information contexts | "They won't believe me"; credibility problems; cheap talk failures |
| [`/game-theory-mechanism-design`](mechanism-design.md) | Designs rules and incentives that make self-interest align with desired behaviour | "How do I design a system that makes people do X?"; incentive alignment; reverse game theory |
| [`/game-theory-iterated`](iterated.md) | Analyses repeated interactions — how cooperation forms, breaks, and recovers | Long-run relationships; reputation; trust repair after defection |
| [`/game-theory-coalition`](coalition.md) | Finds fair allocations (Shapley value) and stable coalitions for cooperative groups | Equity splits; partnership formation; "who should we partner with and how do we divide the gains?" |
| [`/game-theory-auction`](auction.md) | Determines optimal bidding strategy and auction design principles | Sealed bids; competitive offers; winner's curse; procurement auctions |

**Not sure which tool?** → Invoke `/game-theory` — it diagnoses your situation and picks the right skill.

---

## Related categories

- [Strategy](../strategy/) — contextual wisdom for acting in competitive and adversarial situations
- [Decision](../decision/) — for single-player choices under uncertainty without strategic interaction
- [Systems](../systems/) — for understanding feedback loops and emergent behaviour in complex environments
