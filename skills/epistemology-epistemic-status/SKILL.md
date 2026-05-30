---
name: epistemology-epistemic-status
description: "Produces an honest, rigorous calibration of what you know vs. believe vs. assume vs. hope across a domain. Assigns explicit epistemic statuses to claims and flags when high-confidence claims rest on lower-confidence foundations. Draws from the rationalist tradition of explicit epistemic labeling. Use when you say 'how certain should I be', 'what do we actually know here', 'I want an honest read of our assumptions', 'separate what we know from what we're guessing', 'give me an epistemic audit', 'I want to stop conflating confident with correct', or when producing analysis where the confidence level matters as much as the content."
---

# Epistemology: Epistemic Status

Most thinking conflates knowing with believing, believing with assuming, and assuming with hoping. These are not the same thing. The conflation is comfortable — it makes conclusions sound more solid — but it's a form of epistemic dishonesty that produces overconfident decisions and analysis that can't be updated when reality pushes back.

Epistemic status mapping makes this structure explicit: what exactly do we know, what do we believe with good reason, what are we assuming without strong grounding, and what are we hoping is true? The goal is not skepticism — it's honesty that produces better decisions.

---

## Your Process

**Step 1: Inventory All Claims in Play**
List every claim that the argument, plan, analysis, or domain rests on. Be exhaustive. Include:
- Explicit claims (stated conclusions and premises)
- Implicit claims (what has to be true for the explicit claims to hold)
- Framing assumptions (what the question presupposes)
- Value claims (what is treated as desirable or important)

Resist the urge to prune. The point is to surface everything before classifying anything.

**Framing check:** Confirm the specific domain being audited before continuing. State what you've identified — the actual argument, plan, or body of claims under examination and its central purpose — in one sentence, then use `AskUserQuestion`:
- **Question:** "I'm reading this as: [your one-sentence framing of the specific content being audited]. Is that right?"
- **Header:** "Framing"
- **Options:**
  - **Yes — proceed** — framing is correct
  - **Adjust** — one element is off; user will correct it before you continue
  - **Reframe** — different situation than read; incorporate the correction before proceeding

**Step 2: Assign Epistemic Status**

Use this taxonomy:

| Status | Meaning | Test |
|--------|---------|------|
| **Known** | Established by strong evidence, replication, or logical necessity | Would hold up under adversarial scrutiny from a well-informed skeptic |
| **Reasonably believed** | Well-supported but not certain; evidence is good but not definitive | Rational to act on; would update if strong contrary evidence appeared |
| **Assumed** | Taken for granted without explicit verification; may or may not be true | Could be wrong; hasn't been checked; often invisible because it seems obvious |
| **Hoped** | Believed partly because we want it to be true | Motivated reasoning may be distorting confidence; should be treated with extra skepticism |
| **Unknown** | Genuinely unclear; no basis for confident assignment | The honest answer is "we don't know" |

Assign one status per claim. If you're unsure which status applies, that uncertainty is itself epistemic information — note it.

**Step 3: Identify Dependency Chains**
Map which claims depend on which others. Then flag: where do high-confidence claims rest on lower-confidence foundations?

This is the critical finding. It's common for a conclusion labeled "known" to rest on a chain where one link is "assumed" or "hoped." The conclusion inherits the weakest status in its dependency chain.

**Step 4: Audit for Status Inflation**
Review the inventory for common patterns of epistemic overconfidence:
- **Confidence laundering**: an "assumed" claim is cited repeatedly until it feels established
- **Expertise elision**: someone with authority asserted X, so X has been treated as "known" rather than "reasonably believed"
- **Motivated inflation**: "hoped" claims that have quietly become "assumed" because acting on them is attractive
- **The invisible assumption**: claims so deeply embedded they weren't listed in Step 1 — probe by asking "what would have to be true for this whole analysis to hold?"

**Step 5: Flag High-Stakes Unknowns**
Which unknown or hoped claims are most load-bearing? If the thing you most need to be true turns out to be false, what breaks?

**Before narrowing:** Show the complete set of unknown and hoped claims to the user first. Use `AskUserQuestion`:
- **Question:** "I've identified [N] unknown or hoped claims. Before I select the most load-bearing ones, are there any you'd flag as especially critical, or any I've missed?"
- **Header:** "Prioritise"
- **Options:**
  - **Proceed with your selection** — the set looks right
  - **Flag one** — user will name a specific claim to include
  - **Add a missing one** — user will describe it

These are the priority items for investigation, verification, or contingency planning.

**Step 6: Produce the Map**
Synthesize into a structured output: the full inventory with statuses, the dependency structure, and the highest-priority epistemic gaps.

---

## Human Check-in

Before proceeding, use the `AskUserQuestion` tool. State your interpretation of the situation in 1–2 sentences — what is being analyzed and what the core question is — then ask:

- **Question:** "My read: [your 1–2 sentence interpretation]. How do you want to proceed?"
- **Header:** "Scope"
- **Options:**
  - **Full audit** — Complete inventory, status for every claim, dependency map, status inflation audit
  - **Top-level only** — Classify only the main claims, skip dependency tracing
  - **Assumptions only** — Surface what's being taken for granted; skip known/believed claims
  - **Refine the domain** — Sharpen what we're auditing before starting

Proceed based on their selection. If the user reframes, incorporate the correction before running any analysis.

---

## Output Format

### Domain
[What is being audited]

### Epistemic Status Map

| Claim | Status | Notes |
|-------|--------|-------|
| [Claim 1] | Known / Reasonably Believed / Assumed / Hoped / Unknown | [Why this status; what would change it] |
| [Claim 2] | ... | ... |
| ... | | |

### Dependency Flags
**High-confidence claims resting on lower-confidence foundations:**
- **[Confident claim]** (status: Known/Believed) rests on **[foundational claim]** (status: Assumed/Hoped) — [why this matters]
- [Add more as needed]

### Status Inflation Found
- [Pattern identified, e.g., confidence laundering / expertise elision] — [Specific instance and what to do about it]
- (None — if absent)

### High-Stakes Unknowns
| Unknown / Hoped Claim | Why It's Load-Bearing | Priority |
|----------------------|----------------------|---------|
| [Claim] | [What depends on it] | High / Medium / Low |

### Summary
[One paragraph: what is the honest picture of what's known vs. assumed in this domain, and what are the 1-2 highest priority epistemic gaps to address?]

---

## Notes

This skill maps confidence across a domain — use `epistemology-justification` to go deep on the structure of a single belief's support chain. Use `epistemology-limits` when a claim is unknown not due to lack of investigation but due to a fundamental or structural limit on what can be established. Use `probability` when the goal is to quantify uncertainty numerically rather than categorize it epistemically.

---

## What's Next

After delivering this output, use `AskUserQuestion` to offer the next move:

- **Question:** "Epistemic status assigned. What's next?"
- **Header:** "Next"
- **Options:**
  - `/epistemology-limits` — Map where the knowledge runs out beyond the current status
  - `/probability-confidence-calibration` — Calibrate expressed confidence to match epistemic status
  - `/investigation-evidence-audit` — Audit the evidence underpinning the lowest-status claims
  - **Done** — Wrap up and synthesise what we have so far
