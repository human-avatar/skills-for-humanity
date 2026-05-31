# temporal-cycle-detection

> Identifies what recurring cycle this situation is an instance of, and where in that cycle you currently are.

**Trigger:** `/s4h-temporal-cycle-detection`

---

## What it does

Matches a situation to known recurring cycles (hype cycles, market cycles, innovation S-curves, organizational life cycles, boom-bust patterns) and identifies the current phase. Knowing the phase changes what the right action is — the same move is correct in one phase and disastrous in another.

---

## When to use

- "Is this a bubble?"
- "Where are we in the cycle?"
- "Have we been here before?"
- Situation has a familiar, cyclical quality — want it named and located

---

## Example

**Input:**
> AI is everywhere. Every company is claiming AI is central to their strategy. Investors are pouring money in. Everyone is excited. My board keeps asking if we're doing enough AI. Where are we in the AI cycle?

**Output:**

**Most likely cycle: Gartner Hype Cycle**

**Evidence for Hype Cycle match:**
- Technology trigger: LLMs burst into mainstream awareness (GPT-3/4, 2022-2023)
- Peak of inflated expectations: ✅ Active now — "every company is AI", board pressure, aggressive investor thesis, hyperbolic claims
- Trough of disillusionment: ahead — when real deployments encounter limitations, accuracy problems, hallucination failures, ROI disappointment
- Slope of enlightenment: further ahead — when practitioners understand what AI actually does well and use cases that genuinely work become clear
- Plateau of productivity: the mature phase where AI is genuinely valuable and less exciting

**Phase assessment: Peak of Inflated Expectations to early decline**

Several indicators of peak-to-early-decline:
- "Everyone is claiming AI" (characteristic of peak — late adopters rushing in)
- Board pressure driven by fear of missing out rather than specific use case (lagging indicator)
- More companies announcing AI strategies than shipping AI products (announcement ≠ deployment)

**What the cycle predicts:**
In the next 12-24 months: AI hype will face a correction as real deployments encounter real limitations. Companies with hype-driven strategies will disappoint. Companies with genuine use cases that work will distinguish themselves. A trough follows.

**What this means for decisions:**

*Don't do:* Make major bets on AI capabilities that don't exist yet, or implement AI for its own sake because the board asked. Hype-phase investments tend to disappoint.

*Do:* Find the specific use cases where AI demonstrably works for your situation, implement those, and be honest about limitations. Companies that survive the trough are the ones who understood what the technology actually does, not what the hype promised.

*On the board pressure:* The board's question "are we doing enough AI?" is a hype-cycle question. The better question to bring back to them: "What specific customer or operational problem would AI solve better than our current approach?" Starting from the problem — not the technology — is how you navigate the cycle successfully.
