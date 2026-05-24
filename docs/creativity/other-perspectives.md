# creativity-other-perspectives

> Thinks genuinely from other people's positions — not sentiment, but structured reasoning from within someone else's situation.

**Trigger:** `/creativity-other-perspectives`

---

## What it does

Applies de Bono's OPS (Other People's Shoes) tool. For each relevant person, reasons genuinely from their actual position: their real goals, constraints, fears, and what a good outcome looks like from where they stand. Structured empathy — used to anticipate response, design better solutions, and find alignment.

---

## When to use

- A decision affects people who aren't in the room
- Need to anticipate how others will respond before presenting
- Designing something for users and want to think from their position
- In a conflict or negotiation and missing the other side's view
- "What will [person] think of this?"

## When *not* to use

- Need to understand the emotional drivers of one specific person → [emotional/stakes-mapping](../emotional/stakes-mapping.md)
- Need to inhabit an opposing position antagonistically → [play/perspective-reversal](../play/perspective-reversal.md)

---

## Example

**Input:**
> We're about to roll out mandatory 2FA across the entire company. The change affects engineers, sales reps, and customer support. How will each group respond?

**Output:**

**🧑‍💻 Engineers**
*Real goal: minimize friction in their workflow. Fear: anything that adds steps to deployment, SSH, or local dev.*

From their position: 2FA on SaaS tools is fine — they probably already have it. The friction point is CLI tools and programmatic access. If they have to re-authenticate every time they run a deployment script or SSH into a server, this becomes a daily annoyance that compounds into resentment. The question from their position is: "Does this touch my terminal workflow or just the web dashboard?" If CLI support is handled well (TOTP in terminal, service accounts with proper key management), engineers will accept it. If it's not, expect workarounds and a lot of tickets.

**📞 Sales Reps**
*Real goal: close deals without friction. Fear: anything that adds steps when a customer is live on a call or a deal is time-sensitive.*

From their position: 2FA is annoying primarily when logging in from different devices and locations. Sales reps are frequently on customer sites, using guest WiFi, on mobile. The number of times they get locked out matters. The question from their position: "What happens when I'm at a customer site and can't access my phone?" If there's a reliable recovery flow, they'll adapt. If being locked out during a demo is possible, they'll push back hard.

**🎧 Customer Support**
*Real goal: resolve tickets fast. Fear: anything that adds steps to the tools they're in all day.*

From their position: they're already logged in constantly to a small set of tools — the initial login friction is a one-time cost, not an ongoing one. Their concern is interruptions: being forced to re-authenticate during a live customer session. If the session timeout is long enough, they'll barely notice. If it's short (security teams often set it too short), expect complaints about being logged out mid-ticket.

---

**Synthesis — what this reveals:**

All three groups have a specific friction fear, not a general security objection. If those friction points are addressed in the rollout design (CLI support for engineers, good recovery flow for sales, reasonable session length for support), adoption will be smooth. Without that design, each group will find their own workaround — which is worse for security than the status quo.

**Design implication:** The rollout announcement should address each group's specific fear directly, not just explain what 2FA is.
