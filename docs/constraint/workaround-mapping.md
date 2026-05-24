# constraint-workaround-mapping

> Finds paths around a fixed constraint without removing it — routing around a hard limit to reach the same goal.

**Trigger:** `/constraint-workaround-mapping`

---

## What it does

Takes a confirmed hard constraint, maps its exact boundary (what it does and doesn't prevent), generates the adjacent paths that reach the same goal without crossing the constraint, and assesses the cost of each. A workaround is not a compromise — it's a valid path that respects a real limit while still delivering the outcome.

---

## When to use

- "Work around this"
- "Path around the blocker"
- "How do we do this anyway?"
- "Given this constraint, what are our options?"
- When a constraint is real and cannot be removed, but the goal still matters

## When NOT to use

- When the constraint might not be real — use `constraint-hardness-testing` first
- When the goal is to use the constraint as a creative driver — use `constraint-rule-inversion`
- When the goal is to cut scope until delivery is possible — use `constraint-scope-reduction`

---

## Example

**Input:**
> We need to add real-time notifications to our product, but we can't modify the backend API — it's owned by another team and they're frozen for the next 4 months. We also can't add a new database. The frontend is fully in our control. Find workarounds.

**Output:**

---

**Constraint:**
> Cannot modify or extend the backend API (owned by a frozen team) for 4 months. Cannot add a new database. Frontend fully in our control.

**Constraint boundary:**
- **Blocks:** Changes to backend API endpoints, new API endpoints, backend event hooks, backend push notifications, new data persistence layer
- **Does not block:** Frontend polling of existing endpoints, browser APIs (Service Workers, Web Push), third-party notification services that connect to existing data, integrating a webhooks-as-a-service layer that reads existing data, any frontend-initiated logic that processes existing API responses

---

**Blocked paths:**
- Building a WebSocket server (requires backend changes)
- Server-sent events (requires new backend endpoint)
- Backend-triggered push notifications (requires backend event hooks)
- Using a new real-time database (blocked by no-new-database constraint)

---

**Workarounds:**

| # | Path | How it reaches the goal | Cost vs direct path |
|---|------|------------------------|---------------------|
| 1 | Frontend polling at short intervals (15–30s) | Frontend hits existing read endpoints repeatedly; state changes surface within the polling interval | High network overhead; not truly real-time; works for non-latency-sensitive notifications |
| 2 | Third-party webhook service (Zapier, Make, a minimal worker) that watches the existing API and triggers browser push | Worker layer polls API externally and sends push notifications when state changes are detected | Adds an external dependency; small cost; creates truly push-based notification without backend changes |
| 3 | Service Worker + Periodic Background Sync | Browser-native mechanism where Service Worker wakes periodically to check the API and deliver notifications even when the tab is closed | Browser support varies; iOS limitations; but zero backend changes and zero third-party dependency |
| 4 | Negotiate a read-only event stream as a freeze exception | The constraint is a 4-month freeze; a read-only new endpoint may qualify as "no backend changes" from the owning team's perspective | Requires political negotiation; may not succeed; but the ask is minimal enough to try |

**Recommended path:**
Workaround 2 — **third-party webhook worker.** The cost (a lightweight external service reading the existing API) is low, the result is genuinely push-based notifications, and it doesn't require browser API support negotiation. If the external dependency is a concern, Workaround 3 as a progressive enhancement ensures notifications work even without the worker layer. Use both in parallel for coverage.

**If none of these are acceptable:** Re-examine the goal. If the requirement is truly low-latency real-time notifications with no tolerable workaround cost, the constraint needs to be renegotiated — the 4-month freeze may have flexibility for a read-only webhook endpoint that doesn't constitute a substantive backend change.
