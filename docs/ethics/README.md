# 🧭 Ethics

> *The conflict between frameworks is the finding. That tension is exactly what you need to own.*

---

## What this category is

The ethics toolkit applies five major moral traditions — Utilitarian, Deontological, Virtue Ethics, Care Ethics, and Justice/Fairness — to any decision, design, or practice with stakeholder impact. Each framework generates genuinely different answers to the same question. The point is not to find a consensus; it's to surface the value tensions that make a decision morally complex.

The toolkit scales from a 2-minute impact scan to a full multi-agent council with peer review and an HTML report. Use the lightest tool that actually engages the stakes.

---

## When to reach for it

- About to build or ship something that affects users in ways that aren't fully visible
- A decision involves trade-offs between competing groups' interests
- Something feels wrong but you can't articulate why
- An algorithm, model, or automated system makes decisions about people
- A data practice, consent flow, or vendor relationship needs ethical scrutiny
- Something has gone wrong and you need to reason about the ethical dimensions of your response

---

## When *not* to reach for it

**Don't use ethics tools for purely technical questions.** "What's the best database?" has no ethical dimension. Ethics tools are for situations with real stakeholder impact.

**Don't treat the output as a compliance certificate.** The ethics toolkit surfaces tensions and trade-offs — it doesn't absolve you of judgment. A green result from ethics-impact-scan means "no obvious problems surfaced," not "this is definitely fine."

The nearest neighbor: [Identity](../identity/) — which tests whether something is aligned with character and values. Ethics tools analyze moral frameworks; identity tools test internal consistency with what you've committed to be.

---

## Skills in this category

| Skill | What it does | Trigger when... |
|---|---|---|
| **`/ethics`** | Routes to the right ethics skill for your situation | Not sure which tool fits; describe your situation |
| [`/ethics-council`](ethics-council.md) | Full 5-framework council with peer review and HTML report | High-stakes decision; multiple stakeholders; want thorough, documented analysis |
| [`/ethics-check`](ethics-check.md) | Fast comprehensive ethics report across all 5 frameworks | Need a complete ethical assessment quickly; lighter than the full council |
| [`/ethics-crisis-triage`](ethics-crisis-triage.md) | Rapid ethical response to an active incident | Something has already gone wrong; need ethical clarity under pressure |
| [`/ethics-data-audit`](ethics-data-audit.md) | Audits data collection and sharing against ethical standards | Changing data models, retention policy, or sharing agreements |
| [`/ethics-bias-check`](ethics-bias-check.md) | Evaluates algorithms and models for discriminatory patterns | Any ML model, ranking, scoring, or automated decision system |
| [`/ethics-consent-review`](ethics-consent-review.md) | Reviews UX flows for genuine (not checkbox) consent | Checkout flows, onboarding, notification settings, permissions, dark patterns |
| [`/ethics-impact-scan`](ethics-impact-scan.md) | Quick pre-ship impact assessment | About to ship; want to surface obvious ethical problems before they're embedded |
| [`/ethics-vendor-review`](ethics-vendor-review.md) | Evaluates vendors and partners against ethical standards | Evaluating a new supplier, SaaS tool, API, or partnership |
| [`/ethics-empathy-circle`](ethics-empathy-circle.md) | Applies Lanier's Circle of Empathy to determine which entities deserve moral consideration | AI personhood; "does this system deserve rights?"; human downgrading; category errors |

**Not sure which tool?** → Invoke `/ethics` — it diagnoses your situation and picks the right skill.

---

## Related categories

- [Identity](../identity/) — for character and values alignment
- [Decision](../decision/) — for the decision process once ethical dimensions are understood
- [Social](../social/) — for the power dynamics and stakeholder map
