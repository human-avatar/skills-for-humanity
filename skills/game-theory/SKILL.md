---
name: game-theory
description: "Routes to the right game-theory skill for your strategic situation. Triggers: 'game theory', 'strategic interaction', 'what will they do', 'payoff analysis', 'how do I think about this strategically', 'incentive design', 'cooperation problem', 'bidding strategy', any situation where the best choice depends on what others choose."
---

# Game Theory

Your best move depends on what they'll do — and their best move depends on what you'll do. This interdependence is the defining feature of strategic interaction. Game theory provides formal tools for reasoning through it: mapping payoffs, finding stable outcomes, designing incentives, and analysing how cooperation forms and breaks down.

---

## Your Process

**Step 1: Diagnose the interaction type**

Read the situation and identify which of the following patterns applies:

- **One-shot strategic choice** — players make a single decision simultaneously or sequentially, and payoffs depend on the combination of choices. You need to identify the stable outcome (equilibrium) and whether it's efficient.
  → Use `/game-theory-equilibrium`

- **Cooperation vs. defection** — each player is individually tempted to defect even though mutual cooperation would be better for everyone. You're facing a race to the bottom, collective action failure, or asking whether to cooperate or hold back.
  → Use `/game-theory-prisoners-dilemma`

- **Credibility problem** — you have private information and need others to believe your claim, or you're being told something and aren't sure whether to believe it. Cheap talk, costly signalling, commitment devices.
  → Use `/game-theory-signaling`

- **Rule design** — you're not playing the game, you're designing it. You want to create rules, incentives, or mechanisms that make players behave in a desired way — especially to elicit honest information or align self-interest with collective benefit.
  → Use `/game-theory-mechanism-design`

- **Long-run repeated relationship** — the same two or more parties will interact repeatedly over time. Reputation, trust, retaliation, and the shadow of the future are all active.
  → Use `/game-theory-iterated`

- **Coalition and fair division** — multiple players could form alliances and share gains. Which coalition will form? How should value be divided fairly? Who holds power?
  → Use `/game-theory-coalition`

- **Competitive bidding** — a structured auction or procurement process where you're either bidding or designing the process. How much to bid? How to avoid the winner's curse? How to design a revenue-maximising or efficient auction?
  → Use `/game-theory-auction`

**Step 2: Confirm and route**

Present the diagnosis clearly — what kind of interaction this is and which skill fits — then ask:

> *I've read this as [interaction type]. Does that match your situation, or is there a different aspect you'd like to focus on?*

If confirmed, invoke the appropriate skill. If the situation spans multiple types (e.g., a cooperation problem inside a long-run relationship), note both and ask which dimension is most pressing.

---

## Important distinction

Game theory provides formal payoff structure: it tells you what a rational player will do given the rules, payoffs, and other players. Strategy (see `/strategy`) provides contextual wisdom: how to position, when to act, how to use terrain and timing. They are complementary — use game theory to understand the structure of the interaction, and strategy to act effectively within it. When both apply, use game theory first to clarify what the incentives actually are, then strategy to decide how to play.

---

## Notes

The category skills are: `/game-theory-equilibrium`, `/game-theory-prisoners-dilemma`, `/game-theory-signaling`, `/game-theory-mechanism-design`, `/game-theory-iterated`, `/game-theory-coalition`, `/game-theory-auction`.

Related categories: `/strategy` (contextual wisdom for acting within games), `/decision` (single-player choice without strategic interaction), `/social` (power dynamics and coalition politics).
