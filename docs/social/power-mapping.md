# social-power-mapping

> Maps who holds formal authority, informal influence, gatekeeping power, and expertise power.

**Trigger:** `/s4h-social-power-mapping`

---

## What it does

Identifies all four types of power in a situation, maps how they flow and interact, and assesses each power-holder's position on the relevant issue. Produces a navigable picture of who actually decides, who shapes the decision, and who can block it.

---

## When to use

- "Who actually decides this?"
- An initiative keeps getting blocked without clear explanation
- Navigating organizational politics on something important
- Before presenting a proposal, want to understand the room

---

## Example

**Input:**
> We want to adopt a new engineering tool company-wide. The VP of Engineering is supportive. But previous tool adoptions have stalled out. Map the power dynamics.

**Output:**

**Power map:**

**Formal authority**
- VP of Engineering: Can mandate adoption. Supportive. *But: previous mandates have stalled — formal authority isn't translating to actual change.*
- Engineering Directors (3): Report to VP-Eng. Their teams are the adoption target. Their buy-in determines whether directives get implemented or quietly deprioritized.

**Informal influence**
- Principal Engineers (2): No formal authority. High credibility with other engineers. If they're skeptical, adoption will be slow regardless of the mandate. If they're enthusiastic, adoption follows. *These are the most important people to understand and influence.*
- Team Leads: Mid-level informal influence. They control the day-to-day context where adoption happens. Their "we'll look into it" can be genuine or terminal.

**Gatekeeping power**
- IT/Security: Must approve new tools for compliance. Can add friction through slow review or approval conditions that make adoption impractical. *If previous adoptions stalled at the security review stage, this is a key blocker to address proactively.*
- Procurement: Budget and vendor relationship approval. Rarely a blocker for tools, but can add 4-8 weeks of process.

**Expertise power**
- The engineer(s) who evaluated and recommended this tool: Their credibility with peers carries significant weight. If they're known as strong engineers, the recommendation has leverage. If they're unknown or not respected, the recommendation won't move the principal engineers.

**Why previous adoptions stalled (hypothesis):**

VP mandate → Directors said yes in meetings → Principal engineers stayed skeptical → Team leads didn't prioritize → Adoption petered out → VP declared success because no one told them it didn't work.

**Navigation:**

1. Win the principal engineers first, before the mandate. Ask them to evaluate the tool with genuine input rights. Their endorsement changes the dynamic.
2. Run the security review in parallel with early evaluation — don't wait for adoption to discover the compliance blocker.
3. Give Directors a specific metric for "adopted" and a timeline, so "we're looking at it" doesn't pass as compliance.
