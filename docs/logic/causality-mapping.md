# logic-causality-mapping

> Maps causal relationships, traces dependencies, and reasons about consequences before acting.

**Trigger:** `/logic-causality-mapping`

---

## What it does

Builds a causal chain: what causes what, what enables or requires what, what must be true for a plan to work, and what breaks if a specific variable changes. Identifies the critical path and the fragile assumptions the whole structure rests on.

---

## When to use

- "What causes this?"
- "What breaks if I change X?"
- Root cause analysis
- Impact assessment before a significant change
- "What has to be true for this plan to work?"

---

## Example

**Input:**
> Our user activation rate dropped from 42% to 28% after we shipped a major redesign last month. Map the causality.

**Output:**

**Establishing the causal candidate:**

The redesign is the most likely cause — the timing is direct. But correlation ≠ causation. The causal map needs to trace the mechanism.

**Causal chain hypothesis (most likely):**

Redesign shipped → [what changed?] → users encounter different UI → [mechanism?] → activation behaviors changed → activation rate dropped

**The mechanism is the key question.** Without it, the causal chain is incomplete and the fix is guesswork. Three mechanisms are plausible:

**Mechanism A — Navigation change:**
Redesign moved or renamed the activation path → users can't find the setup step they used to complete easily → drop in activation

**Mechanism B — Cognitive load increase:**
New design has more choices, steps, or visual complexity at onboarding → users who previously completed setup abandon earlier in the flow

**Mechanism C — Prior behavior assumed:**
Redesign was designed for existing users but onboarding wasn't updated → new users hit a flow that assumes familiarity they don't have

**Causal prerequisites for each:**

For Mechanism A to be causing the drop: the activation step must have moved or been renamed in the redesign. *Test: review the activation funnel before/after and check for the specific drop-off point.*

For Mechanism B: the time-to-complete-setup should have increased, or drop-off should be distributed across the funnel rather than at a single step. *Test: compare funnel step completion rates before/after.*

For Mechanism C: the drop should be concentrated among new users, not returning users. *Test: segment activation rate by new vs. returning users.*

**Critical path:**

The fix depends entirely on which mechanism is active. Implementing the wrong fix (e.g., simplifying design when the problem is a broken link) wastes time and may worsen other things.

**Diagnostic recommendation:**
Before fixing anything: pull the funnel data for the activation flow for the 2 weeks pre- and post-redesign. Find the specific step where drop-off increased. That step is the causal link. Everything else is upstream of that.
