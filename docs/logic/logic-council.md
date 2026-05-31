# logic-council

> A five-framework reasoning tribunal that stress-tests arguments, plans, and conclusions — catching what single-framework analysis misses.

**Trigger:** `/s4h-logic-council`

---

## What it does

Convenes five reasoning specialists simultaneously — Formal Logic, Systems Thinking, Bayesian Reasoning, First Principles, and Adversarial Logic — each applying their distinct framework to the same argument. They peer-review each other's findings, then a Chair synthesizes the verdict. The multi-framework approach catches more than any single lens because different frameworks find different failure modes.

---

## When to use

- "Pressure-test this reasoning"
- "Is my thinking sound?"
- Complex argument where the conclusion matters and the stakes are high
- A plan with non-obvious logical dependencies
- Reasoning you've invested in and want stress-tested before acting on

## When NOT to use

- For moral questions — use `/s4h-ethics-council`
- For general decisions — use `decision-option-mapping` or `decision-premortem-analysis`
- For quick validation of simple reasoning — `logic-check` or `logic-argument-validation` is faster
- For fixing flawed logic once found — use `logic-fixer` after the council identifies the breaks

---

## Example

**Input:**
> "Our feature adoption is low because users don't understand the value. Therefore, if we improve our onboarding copy, adoption will increase. Our competitor saw 40% adoption after improving onboarding. We should invest in a full copy rewrite."

**Output:**

---

**LOGIC COUNCIL CONVENED**

---

**Formal Logic**

The argument structure: P1 (low adoption because users don't understand value) → P2 (better onboarding copy explains value) → C (adoption will increase). The first premise is not established — it's an assumption masquerading as a diagnosis. We don't know users don't understand the value; we infer it. This is a significant unstated assumption doing hidden work. The competitor evidence is presented as supporting the conclusion, but the inference "competitor saw 40% after copy change → our copy change will also raise adoption" is invalid without establishing that the causal mechanism was the same.

**Systems Thinking**

Onboarding copy is one node in a system that includes product-market fit, activation friction, feature discovery, use case clarity, and ongoing habit formation. Treating it as the primary lever ignores feedback loops. If users reach onboarding but adoption is still low, the bottleneck may be downstream (activation friction, unclear success path) not upstream (copy clarity). A copy rewrite that moves users past onboarding into a still-confusing product doesn't raise adoption — it shifts the drop-off point.

**Bayesian Reasoning**

Base rate: what fraction of product copy rewrites produce 40% adoption improvements? This is not stated. The competitor case is a single anecdote — it may be an outlier. We are also not told the competitor's starting point, the length of time, what else they changed simultaneously, or whether 40% represents absolute adoption or a relative increase. The evidence should shift our prior modestly, not decisively. The current argument treats a single favorable case as strong evidence.

**First Principles**

Why is adoption low? The assumption that it's a comprehension problem is one hypothesis. Alternatives: the problem isn't salient enough to users, the workflow is too different from existing habits, the value is understood but the switching cost exceeds the benefit, the feature solves the wrong problem. A copy rewrite addresses the comprehension hypothesis specifically. If the problem is salience, switching cost, or value mismatch, a copy rewrite will fail to move adoption and the investment will be misattributed.

**Adversarial Logic**

The strongest objection: the conclusion follows only if the premise about cause is correct. The argument contains no evidence establishing that comprehension is the binding constraint. All available evidence (low adoption) is consistent with multiple hypotheses. Investing in a copy rewrite based on an unvalidated hypothesis is an expensive test of a guess. The adversarial case: low adoption indicates a product-market fit or activation problem that copy cannot fix.

---

**PEER REVIEWS**

*Most significant finding identified:* All five frameworks independently flag that the causal premise — users don't understand the value — is unvalidated. This is the strongest signal: when five frameworks reach the same finding via different routes, the finding is reliable.

*Biggest blind spot across responses:* None of the framework analyses addressed how to validate the diagnosis before committing to the solution. The council identifies the problem but not the low-cost test.

---

**LOGIC COUNCIL VERDICT**

**Where the Frameworks Agree**

The causal premise is unvalidated. "Low adoption because users don't understand value" is a hypothesis, not a finding. All five frameworks flag this independently. This is the single most reliable finding from the council: the argument's conclusion is contingent on a premise that has not been established.

**Where the Frameworks Diverge**

Systems Thinking and First Principles both identify the core flaw but emphasise different remedies — Systems Thinking emphasises the downstream bottleneck problem, First Principles emphasises the competing hypotheses. Both are valid.

**The Strongest Single Objection**

The competitor evidence is being used as if it establishes a causal mechanism. It doesn't. It's a single anecdote with unknown confounds. The inference from competitor outcome to our outcome is not supported.

**Verdict**

The reasoning does not hold in its current form. The structure is: assume diagnosis → find confirming anecdote → commit to expensive intervention. The argument would need to: (a) establish the causal diagnosis through user research, (b) establish that copy specifically addresses the identified bottleneck, and (c) offer a proportionate test before committing to a full rewrite.

**What Would Make It Sound**

1. Validate the diagnosis: run user sessions specifically to test whether comprehension is the bottleneck
2. If validated, run a lightweight copy test before committing to a full rewrite
3. Replace the competitor anecdote with base-rate evidence on copy improvements or a structural similarity argument
