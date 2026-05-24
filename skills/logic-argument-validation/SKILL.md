---
name: logic-argument-validation
description: "Check whether an argument's premises actually support its conclusion, and identify logical fallacies. Use when reviewing a design decision, technical proposal, product argument, or any reasoning where the conclusion needs to hold up under scrutiny. TRIGGERS: 'validate this argument', 'does this logic hold', 'check my reasoning', 'is this a fallacy', 'find the flaw in this', any proposal or decision where the reasoning chain matters. Pairs well with logic-consistency-check when a full document needs scrutiny."
---

# Logic Argument Validation

An argument can *sound* compelling while the reasoning is broken. Confident language, plausible premises, a conclusion that feels right — none of these guarantee the argument actually holds. This skill validates the structure: do the premises support the conclusion, and is the reasoning free of fallacies?

---

## Your Process

**Step 1: Extract the argument structure**
Before evaluating, make the argument explicit:
- **Premises**: what claims is the argument built on?
- **Conclusion**: what is it trying to prove?
- **Reasoning**: what's the logical path from premises to conclusion?

Restate this clearly before proceeding. Often the weakest point becomes obvious once the structure is explicit.

**Step 2: Test premise soundness**
For each premise:
- Is it stated as fact? Is it actually established, assumed, or contested?
- Is it relevant to the conclusion, or is it doing rhetorical work without logical work?
- Are there hidden premises — unstated assumptions the argument silently depends on?

**Step 3: Test the inference**
Does the conclusion actually follow from the premises, *even if* the premises are true? Common inference failures:
- The premises support a weaker version of the conclusion than the one being claimed
- The reasoning jumps over a step that would need its own justification
- The conclusion is true but for reasons the premises don't establish

**Step 4: Check for fallacies**
Scan for common fallacies. Name them specifically if found:

| Fallacy | What it looks like |
|---|---|
| **Ad hominem** | Attacking the source rather than the argument |
| **Straw man** | Misrepresenting a position to make it easier to refute |
| **False dichotomy** | Presenting two options when more exist |
| **Circular reasoning** | The conclusion is smuggled into the premises |
| **Slippery slope** | Assuming a chain of consequences without justifying each step |
| **Appeal to authority** | Citing authority as a substitute for evidence |
| **Hasty generalisation** | Drawing broad conclusions from insufficient cases |
| **Post hoc** | Assuming causation from correlation or sequence |
| **Equivocation** | Using the same word in two different senses |

**Step 5: Verdict**

---

## Output Format

**Argument:**
[Premises / Conclusion restated explicitly]

**Premise Assessment**
| Premise | Status | Issue |
|---|---|---|
| [premise] | ✅ Established / ⚠️ Assumed / ❌ Contested | [note] |

**Inference Assessment**
[Does the conclusion follow? Where does the chain hold or break?]

**Fallacies Detected**
- [Fallacy name]: [specific example from the argument] — or "None detected"

**Verdict**
[Does the argument hold? What is the specific weakest point?]

**What would strengthen it**
- [Specific fix — evidence needed, premise to qualify, step to make explicit]

---

## Notes

A broken argument isn't necessarily a wrong conclusion. The conclusion might be correct while the reasoning that supports it is flawed. Flag both: the structural problem *and* whether the conclusion still seems defensible by other means.
