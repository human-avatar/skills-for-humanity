# play-constraint-inversion

> Removes or inverts the main constraint to see what becomes possible — then uses those unconstrained solutions to find real ones.

**Trigger:** `/play-constraint-inversion`

---

## What it does

Flips a real constraint into its complete opposite, generates freely in that unconstrained world, then extracts the underlying goal of each unconstrained solution and asks whether that goal can be pursued within the real constraint. The most valuable output: identifying which constraints are "doing assumed work" — blocking a goal that turns out to be achievable within the constraint through a route that the constrained framing had ruled out.

---

## When to use

- "What if there were no constraints?"
- "What if we could do anything?"
- "Invert the assumption"
- Stuck problems where every solution feels hemmed in by the same limits
- When the constraint is so internalized it's stopped being visible

## When NOT to use

- When the constraint is confirmed hard and you need to route around it — use `constraint-workaround-mapping`
- When the goal is to invert a specific rule into a creative advantage — use `constraint-rule-inversion`
- When the goal is to cut scope until delivery is possible — use `constraint-scope-reduction`

---

## Example

**Input:**
> We're building a legal document review platform for solo lawyers. The main constraint: we have no budget to hire human legal experts to train our AI or validate its outputs. Every solution we think of requires human lawyer review. Invert the constraint.

**Output:**

---

**Constraint:** $0 budget to hire human legal experts for AI training or output validation.

**Inverted World:** We have unlimited access to 50 expert legal reviewers and can use their time however we want to train and validate.

---

**Unconstrained Solutions**

| Solution | Underlying Goal |
|---|---|
| Have 50 expert lawyers annotate 100k document examples to train the model | Access high-quality labeled training data |
| Run a continuous red-team process where lawyers try to break the AI's outputs | Identify failure modes and edge cases before they reach users |
| Build a "confidence score" system where lawyers rate AI outputs and the ratings improve the model | Create a feedback loop where usage improves accuracy |
| Have specialists in each legal domain (IP, contracts, litigation) verify domain-specific patterns | Ensure domain coverage — not just general legal accuracy |
| Run weekly expert review sessions to check the AI against recent legal changes | Keep the model current with evolving law |

---

**Constrained Versions:** For each goal — does a within-constraint version exist?

1. **Access high-quality labeled training data** → Yes, within constraint. Public court records, filed legal documents, and law school case libraries are publicly available labeled data. The underlying goal (quality training data) doesn't require paid human annotation — it requires existing expert-produced text, which is abundant in the legal domain.

2. **Identify failure modes before reaching users** → Yes, within constraint. The users are solo lawyers. Design a closed beta where early users flag errors in exchange for extended free access. The red-team process uses the actual users rather than paid reviewers — their incentive to identify errors is high because the quality directly affects their work.

3. **Feedback loop that improves accuracy** → Yes, within constraint. Build a thumbs-up/thumbs-down UI into every AI output. Users who are lawyers are already expert reviewers. Every user correction is training data. The payment is making the product better.

4. **Domain coverage** → Yes, within constraint. Law school clinics and bar associations have active participation programs. Partnerships with legal aid organizations can create validation relationships in exchange for discounted access — a non-monetary value exchange.

5. **Keep model current** → Partially within constraint. Regulatory bodies publish rule changes publicly. Legal news services have RSS feeds. Much of the "staying current" work can be automated from public sources.

---

**Real vs Assumed Constraints**

- **Constraints doing real work (goals genuinely blocked):** None identified — every unconstrained goal has a within-constraint path.
- **Constraints doing assumed work (goal achievable within):** All five. The "must hire legal experts" assumption was blocking solutions that are achievable through user-generated validation, public legal data, and partnership structures.

The most valuable finding: the constraint was framing the problem as "we need expert humans we can't afford." The unconstrained exploration reveals the underlying goals don't require hired experts — they require expert feedback, which the users themselves can provide. The product's users *are* the legal experts. This reframe unlocks a design direction (user-as-validator) that was invisible while the constraint was accepted as given.
