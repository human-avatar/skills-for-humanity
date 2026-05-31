# analogy-domain-transfer

> Imports solutions from unrelated domains by finding structural similarities between your problem and solved problems elsewhere.

**Trigger:** `/s4h-analogy-domain-transfer`

---

## What it does

Identifies the core structure of a problem, searches for domains that have solved structurally similar problems, and maps specific solutions back. The best solutions often come from fields that would never occur to a domain expert.

---

## When to use

- "We've tried everything in our domain's playbook"
- Stuck on a problem that your domain's standard approaches haven't solved
- "Find a parallel problem solved in another field"

---

## Example

**Input:**
> We run a two-sided marketplace. Supply (sellers) and demand (buyers) need to arrive roughly simultaneously for the market to function. We keep having the chicken-and-egg problem — sellers don't join because there aren't enough buyers, buyers don't join because there aren't enough sellers. Where else has this been solved?

**Output:**

**Core problem structure:**
Network effects that require critical mass on both sides simultaneously, before the product delivers value to either side. The chicken-and-egg problem. Neither side will invest in building the habit until the other side is there.

**Domains that have solved structurally similar problems:**

**Domain 1: Urban planning (transit networks)**
Transit systems face the exact same problem: no one rides until the system covers their routes; the system can't justify covering routes until ridership is there. *Solution used:* Initial subsidized routes that connect existing clusters of demand, creating anchors for the network before it's self-sustaining. Artificial density to simulate critical mass. *Mapped back:* Seed your marketplace by finding an existing cluster of supply and demand that already know each other (a community, a geography, a vertical) and being where they already are before expanding.

**Domain 2: Communications protocols (fax, email)**
Early fax networks had no value until both sender and receiver had machines. *Solution used:* Fax machines were initially adopted within single organizations (intra-org use) before inter-org use became valuable. The internal use case funded the installed base that made external use possible. *Mapped back:* Find a version of your marketplace that delivers value to a single "organization" (a tight community, a geography) before solving cross-community exchange.

**Domain 3: Credit card networks (Visa, Diners Club)**
Merchants won't accept cards without cardholders; cardholders won't adopt without merchant acceptance. *Solution used:* Diners Club launched with high-end Manhattan restaurants (curated, desirable supply) and sold directly to high-income individuals (curated, valuable demand). Started with a small, high-quality, closed loop. *Mapped back:* Don't solve the whole market — solve a small high-quality version of it first. Curate both sides tightly in a specific vertical or geography where you can manufacture density.

**Most applicable insight:**
Every successful chicken-and-egg market that worked solved a small, dense version first — not a scaled one. The question for your marketplace isn't "how do we get sellers and buyers simultaneously at scale?" It's "what is the smallest, densest version of this market where we can be the market-maker?"
