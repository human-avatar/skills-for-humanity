# constraint-scope-reduction

> Finds the minimum that satisfies the actual requirement — stripping away what's wanted but not needed.

**Trigger:** `/constraint-scope-reduction`

---

## What it does

Separates what is genuinely needed from what is wanted, audits each element against the core requirement, and produces the minimum viable version that actually satisfies the need. Useful when scope has grown beyond what's necessary or when capacity requires cutting without losing the core.

---

## When to use

- "What's the minimum we actually need?"
- Scope has grown; delivery is at risk
- "What can we cut without losing the value?"
- Need to ship faster than the full spec allows

---

## Example

**Input:**
> We're building a user notification system. The spec includes: email notifications, in-app notifications, push notifications, SMS notifications, a notification preferences center, read/unread state, notification grouping, batch digest emails, and a notification history page. We have 6 weeks. What's the minimum?

**Output:**

**Step 1 — What is the actual core requirement?**

The notification system exists to tell users about events they care about, in time for them to respond. That's it.

**Step 2 — Audit each element against the core:**

| Feature | Core requirement | Cut / Keep? |
|---|---|---|
| Email notifications | Reaches users off-platform | **Keep** — highest reach |
| In-app notifications | Reaches users on-platform | **Keep** — essential |
| Push notifications | Mobile reach | **Defer** — build after email+in-app work |
| SMS notifications | Highest urgency reach | **Defer** — high complexity, low priority for most use cases |
| Notification preferences center | User control over frequency | **Slim** — ship with binary on/off per type, not full preferences |
| Read/unread state | Helps users know what they've seen | **Keep** — low cost, high value |
| Notification grouping | Reduces noise for high-volume events | **Defer** — needed at scale, not at launch |
| Batch digest emails | Alternative delivery cadence | **Defer** — nice to have |
| Notification history page | Audit trail, recovery | **Defer** — useful, not essential |

**Minimum viable notification system (6-week target):**

1. Email notifications for key events
2. In-app notifications with read/unread state
3. Binary opt-out per notification type (not a full preferences center)

This delivers the core requirement — users are informed, in time to respond — for 80% of use cases. Everything deferred can ship in the next cycle.

**What this removes from scope:** Push, SMS, grouping, digest, history page, and a full preferences center.

**Tradeoff to acknowledge:**
Mobile users who primarily use the app won't get push notifications until the next cycle. If mobile is a significant segment, push should be elevated from "defer" to "ship late in the 6-week window."
