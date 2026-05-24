# `/writing-audience-calibration`

> *Calibration does not require changing the substance. It requires changing the door.*

**Category:** [Writing](README.md) · **Command:** `/writing-audience-calibration`

---

## What it does

Profiles a specific reader across knowledge, role, stakes, and relationship dimensions — then identifies calibration failures (jargon, over-explanation, wrong assumed prior, wrong emphasis) and rewrites the opening paragraph for the target audience. The substance of the content does not change; the entry point, vocabulary, and emphasis do.

---

## When to use it

- Content written for one audience needs to reach a different one
- Technical documentation needs to work for a non-technical decision-maker
- A piece is "too technical" or "not technical enough" for its intended reader
- A presentation, report, or proposal needs to be recalibrated for a new stakeholder
- Copy, content, or communication is performing differently across audience segments
- You are writing for a known audience and want to verify calibration from the start

---

## When *not* to use it

**Don't use this when the content needs to serve multiple audiences simultaneously.** A single document calibrated for a non-technical executive will confuse engineers; the same document calibrated for engineers will lose executives. If the content genuinely needs to serve both, the solution is two versions or a layered document (executive summary + technical appendix) — not a single document trying to do both.

**Don't confuse calibration with simplification.** A well-calibrated piece for a non-technical reader is not a dumbed-down version of the technical piece. Simplification removes content; calibration changes the approach while preserving the substance. "Database indexing speeds up queries by creating a lookup table that the database reads instead of scanning all data" is not simplified — it is correctly calibrated. The same concept for a DBA would be stated differently: "B-tree index structures improve read performance by O(log n) lookup vs. O(n) table scan."

The nearest neighbor: [`/writing-voice-consistency`](voice-consistency.md) — which ensures the recalibrated content still sounds like the established voice. A piece that has been recalibrated for a new audience but now sounds like a different organisation has traded one problem for another. Run voice consistency after calibration on brand documents.

---

## Full example

**Input:**
> I have a technical explainer about database indexing written for backend engineers. I need to recalibrate it for non-technical product managers who are deciding whether to invest in a database performance improvement sprint. Here is the current opening:
>
> "Database indexing is a data structure technique that improves the speed of data retrieval operations on a database at the cost of additional writes and storage space to maintain the index data structure. An index is a copy of selected columns from a table, with links to the complete row of data, held in a sorted or hashed structure that enables fast search, range queries, and ordered retrieval. Without indexing, a query must perform a full table scan, which grows in time complexity as O(n) with the number of rows. B-tree indexes, the most common implementation, provide O(log n) lookup, while hash indexes provide O(1) lookup for equality searches but do not support range queries."

---

**Output:**

### Calibration Report

**Reader Profile:**

- **Knowledge:** Non-technical product managers. They understand products, users, and business outcomes. They have a general concept of databases ("where data is stored") but not of data structures, time complexity, or query optimization. They do not know what a B-tree is, what O(n) means, or what a full table scan is.
- **Role:** Decision-makers for sprint prioritisation. They approve or deprioritise engineering work based on user impact, business value, and resource cost.
- **Stakes (highest-value question):** Should we invest the sprint in database performance? What will users experience if we do? What will they experience if we don't? What does this cost vs. what is the payoff?
- **Relationship:** Friendly and intelligent; skeptical of technical work that isn't clearly connected to user outcomes. Not hostile to technical investment, but needs the business case articulated.
- **Time:** Moderate. Will read a document that makes the case clearly; will skim or abandon one that requires technical prerequisites they don't have.

---

**Calibration Failures:**

1. **Jargon without definition:** "B-tree indexes," "O(n)," "O(log n)," "O(1)," "hash indexes," "full table scan," "equality searches," "range queries." None of these are defined or explained. A product manager encounters the first technical term in the opening sentence and is immediately behind.

2. **Wrong assumed prior:** The entire opening assumes the reader understands why the distinction between O(n) and O(log n) matters. The reader doesn't know what either symbol means. The benefit being described — faster lookups — is buried inside notation that only makes sense if you already know what it means.

3. **Wrong emphasis:** The opening paragraph is technically precise but answers the wrong question for this reader. It answers "what is an index?" The product manager needs "what happens to our users if we don't fix this, and what happens if we do?"

4. **Over-explanation for the wrong things:** The technical details (B-tree vs. hash index, the specific Big-O notation) are over-explained for a product manager who doesn't need to implement or evaluate the implementation — they need to decide whether to fund it. The implementation details are the engineer's job; the business case is what the product manager needs.

---

**Highest-Value Question:** "What will users experience if we invest in this sprint, and what are we risking if we don't?"

Current answer: Not addressed. The current opening says nothing about user experience. The product manager reading this document will not find an answer to their key question in the opening, and many will not continue.

---

**Framing Adjustments:**

The mechanism to outcome translation:
- "Full table scan O(n)" → "the database reads every single record to answer a question, which gets slower as your data grows"
- "B-tree index O(log n)" → "the index lets the database jump directly to the answer, so query time stays fast even as data grows"
- "Additional writes and storage space" → "small cost: slightly more storage and slightly slower writes"

The correct frame for a product manager is not data structures — it is: what users experience, at what scale, with what cost to fix.

---

**Rewritten Opening Paragraph (for non-technical product manager):**

*"Right now, when a user searches for something in our app, the database reads through every record we have to find the answer. That's fine when we have 10,000 records. At 10 million records — where we'll be in six months — it's slow enough that users notice. Database indexing fixes this: it creates a lookup structure that lets the database jump directly to the answer, so search stays fast regardless of how much data grows. The cost is modest — a few percent more storage and marginally slower writes that users don't notice. The benefit is that search and load times don't degrade as we scale. This sprint makes that investment now, before the performance problem is visible to users."*

Changes applied:
- Removed all technical notation (O(n), B-tree, hash index, full table scan)
- Opened with the user experience consequence ("reads through every record")
- Named the scale at which the problem becomes visible (10 million records / six months)
- Described the solution in outcome terms ("search stays fast regardless of data growth")
- Named the cost in user-experience terms ("users don't notice")
- Connected to the decision: "before the problem is visible to users"

The technical content is identical. The entry point, vocabulary, and emphasis are calibrated to the reader.

---

## Related skills

- [`/writing-executive-summary`](executive-summary.md) — Calibration for senior decision-makers specifically; executive summary format is a specific calibration problem
- [`/writing-technical`](technical.md) — Technical audience calibration; when the question is which technical level to write for
- [`/writing-voice-consistency`](voice-consistency.md) — Recalibrated content must stay in the established voice
