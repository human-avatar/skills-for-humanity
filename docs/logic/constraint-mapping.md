# logic-constraint-mapping

> Maps the full constraint landscape — what's hard, soft, and assumed — for any decision or design.

**Trigger:** `/logic-constraint-mapping`

---

## What it does

Inventories all constraints, classifies each as hard (physical/legal), soft (organizational/political), or assumed (may not be real), identifies conflicts between constraints, defines the actual solution space, and surfaces which constraints — if relaxed — would most expand the options available.

---

## When to use

- "What are we actually working with here?"
- A plan keeps hitting unexpected walls
- Unclear what's genuinely fixed vs. what's just assumed to be
- Before committing to an approach, want to understand the boundary conditions

---

## Example

**Input:**
> We're designing a new checkout flow. Our constraints are: must work on mobile, must not break existing payment integrations, must ship in 6 weeks, must be accessible (WCAG AA), must use our existing design system, cannot require backend changes. Map the constraints.

**Output:**

**Constraint inventory:**

| Constraint | Classification | Basis |
|---|---|---|
| Must work on mobile | Hard | Actual user requirement; 70%+ traffic is mobile |
| Must not break existing payment integrations | Hard | Breaking changes would cause revenue loss |
| Must ship in 6 weeks | Soft | Timeline set by a planning cycle; could be extended with business case |
| Must be accessible (WCAG AA) | Hard | Legal requirement (ADA/WCAG) + ethics baseline |
| Must use existing design system | Soft | Organizational preference; no legal or technical hard requirement |
| Cannot require backend changes | Soft/Assumed | Someone said this; actual constraint depends on engineering capacity and scope |

**Constraint conflicts:**

*WCAG AA + 6 weeks:* Proper accessibility implementation — especially for custom form components — can be time-intensive. These two constraints may conflict if the current design system components don't already meet WCAG AA, which should be verified before committing to the timeline.

*No backend changes + checkout flow redesign:* Checkout flows typically touch session management, cart state, and payment confirmation — all server-side. "No backend changes" may be impossible to satisfy while meaningfully redesigning the flow. This constraint should be challenged.

**Constraints most worth challenging:**

1. **"Cannot require backend changes"** — if this is a capacity constraint rather than a hard technical limit, a scoped conversation about what backend work is acceptable might dramatically expand the design space
2. **"6 weeks"** — if WCAG compliance is genuinely required and the design system isn't ready, 6 weeks may produce a non-compliant checkout rather than an accessible one

**Actual solution space (with constraints as mapped):**

A checkout flow redesign is feasible within these constraints IF: (a) the design system components are already WCAG AA compliant or need only minor adjustment, and (b) "no backend changes" is relaxed to "minimal backend changes." Without verifying (a) and (b), the 6-week timeline is likely to slip or produce something that doesn't meet the accessibility requirement.
