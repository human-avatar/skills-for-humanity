# design-constraints

> Maps the hard limits and soft preferences that define what the solution space actually is.

**Trigger:** `/design-constraints`

---

## What it does

Every design exists within a constraint set. This skill classifies each constraint by hardness (hard, soft, or assumed), maps how constraints interact, identifies the tightest constraint, and describes the territory that remains open for design. Based on Christopher Alexander's understanding that every good form is a resolution of forces in tension, it treats the constraint map as the precise definition of the problem — not its obstacle.

---

## When to use

- "What are we actually working within here?"
- A design brief has a list of requirements and you need to know which are genuinely fixed
- Multiple constraints are present and you need to understand how they interact
- A direction keeps getting blocked and you want to know whether the constraint is real
- Starting a design and want to understand the solution space before generating ideas

---

## Example

**Input:**
> We're designing a new mobile checkout experience for a retail client. The constraints we've been given: must integrate with the existing payment gateway (Stripe), must work on Android 8+, design must follow the brand guidelines, checkout must complete in under 60 seconds for a typical order, we can't store card details, the UI framework is React Native, and legal requires a full terms and conditions display before payment confirmation.

**Output:**

**Constraint inventory:**

| Constraint | Domain | Classification | Notes |
|---|---|---|---|
| Stripe integration | Technical | **Hard** | Signed contract with payment provider; changing would require legal and commercial process |
| Android 8+ compatibility | Technical | **Hard** | Physical device base; cannot serve users on older OS versions without a separate build |
| Brand guidelines | Aesthetic/org | **Soft** | Internal guidelines can be interpreted; edge cases can be discussed with brand team |
| 60-second completion | Performance/UX | **Soft** | No source stated — likely a product team estimate. Needs validation: is this based on user research, or is it a target? |
| No card storage | Security/legal | **Hard** | Likely PCI DSS compliance requirement; truly non-negotiable |
| React Native framework | Technical | **Soft** | Architectural choice that can be revisited if there is strong technical justification, but changing has significant cost |
| T&Cs display before payment | Legal | **Hard** | Legal compliance requirement; cannot be removed, but display format is unspecified |

**Constraint interactions:**

| Pair | Type | Effect |
|---|---|---|
| No card storage + 60-second target | Conflicting | Without stored payment details, users must enter card data manually every checkout. Card entry alone takes 20–30 seconds on mobile. These two constraints together are very tight — they effectively require an optimised card entry experience or an alternative payment method (Apple Pay / Google Pay) that satisfies both simultaneously |
| Android 8+ + React Native | Compounding | React Native on older Android versions has known performance issues; some APIs available on newer versions aren't available on Android 8. This narrows the interaction patterns that can be used |
| T&Cs display + 60-second target | Conflicting | Users must read/scroll a legal document before confirming payment. This adds dwell time. The design must resolve how to present T&Cs in a way that satisfies legal while not creating a bottleneck — a long-scroll wall of text will fail the 60-second target |
| Brand guidelines + T&Cs display | Redundant | The brand guidelines likely specify type treatment; T&Cs only requires display, not a particular visual format. Satisfying brand guidelines on typography likely satisfies T&Cs display requirements for free |

**Tightest constraint:**

The combination of **no card storage + 60-second completion** is the tightest constraint pair. Card entry on mobile takes a significant portion of the 60-second budget, and without stored details, this is unavoidable on first use. This constraint pair effectively forces one of two design decisions: (1) first-class integration with Apple Pay / Google Pay, which bypasses manual entry entirely; or (2) an exceptionally optimised manual card entry experience with autofill, clear field sequencing, and real-time validation.

**Solution space:**

The viable design territory has three distinct regions:

1. **Native payment method-first:** Apple Pay / Google Pay as the primary flow, with manual entry as fallback. Satisfies the 60-second target cleanly, satisfies no-card-storage (tokens only), and is compatible with React Native. The constraint is brand expression — native payment sheets are largely non-customisable.

2. **Optimised manual entry:** A highly engineered card entry flow — autofill support, smart field sequencing, inline validation, no unnecessary steps — that can complete in under 60 seconds. Higher design investment; brand-consistent; but depends on user compliance (no autofill on shared devices).

3. **Hybrid with saved session tokens:** No persistent card storage, but a session token that survives for a defined window (e.g., 24 hours). Legal review needed to confirm this satisfies the no-storage intent; if it does, it makes repeat checkout within a session fast.

**Design direction implied:**

Native payment methods (Apple Pay / Google Pay) should be the primary flow — they are the only option that simultaneously satisfies the 60-second target, the no-storage constraint, and Android 8+ compatibility without exceptional engineering risk. Manual entry becomes the fallback for users who don't have these configured.

---

## Related skills

- [`/design-user-needs`](user-needs.md) — once constraints are mapped, revisit whether the real user need is still being served within this solution space
- [`/design-iteration`](iteration.md) — structure the prototype-test cycle within the solution space identified
- [`/constraint-hardness-testing`](../constraint/hardness-testing.md) — test individual soft or assumed constraints if any need to be challenged
