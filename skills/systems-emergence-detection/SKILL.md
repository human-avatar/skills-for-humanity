---
name: systems-emergence-detection
description: "Identifies system-level properties that exist nowhere in any individual component. Use when asked about 'emergent behavior', 'components are fine but the system isn't', 'why does the whole behave like this', or 'what creates this property'."
---

# Systems Emergence Detection

Emergent properties are the most important features of complex systems and the least designed for. They arise from interactions between components, not from the components themselves — which is why fixing individual parts often fails to fix system-level problems. Identifying emergence requires asking not what each component does, but what arises when they interact.

---

## Your Process

**Step 1: State the System-Level Property**
Name the property to explain or design for. Be precise: "the platform feels trustworthy", "the team produces poor decisions", "the market self-corrects". Vague properties produce vague analysis.

**Step 2: List Components**
Enumerate the system's components — people, subsystems, rules, technologies, incentives. These are the parts whose interactions you will examine.

**Step 3: Test Each Component**
For each component: does the property exist in it alone? If trust cannot exist in a single user, the property is emergent. This step confirms emergence and rules out simple aggregation.

**Step 4: Trace the Producing Interactions**
Identify the specific interactions between components that generate the property. Not all interactions contribute equally — find the ones that are necessary and sufficient.

**Step 5: Assess Desirability**
Is this emergent property desirable? If yes: which interactions need protection from being disrupted? If no: which specific interactions need changing — not which components need replacing.

**Step 6: Identify Intervention Points**
If the emergence is undesirable, locate where in the interaction chain the property can be interrupted or redirected with minimum disruption to desirable emergent properties.

---

## Human Check-in

Before proceeding, ask the user:

**How do you want to run this?**

- **A) Full analysis** — complete all steps, reasoning shown throughout
- **B) Key findings only** — bottom-line output, skip step-by-step detail
- **C) Emergence sources only** — where unexpected behavior is coming from, skip implications
- **D) Refine the framing** — adjust what we're analyzing before starting

Proceed based on their choice.

## Output Format

**System-Level Property:** [precise statement]

**Emergence Table**

| Property | Present in Components Alone? | Producing Interactions | Desirable? |
|----------|------------------------------|----------------------|-----------|
| | | | |

**Key Producing Interactions:** [the 2–3 interactions most responsible for the property]

**Intervention Points (if undesirable):** [where to change interactions, not components]

---

## Notes

Removing a component to fix an emergent property rarely works — the interaction pattern will reproduce the property with whatever components remain. Target the interaction, not the part.
