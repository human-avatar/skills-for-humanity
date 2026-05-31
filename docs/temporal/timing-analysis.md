# temporal-timing-analysis

> Assesses whether now is the right time to act, wait, or prepare.

**Trigger:** `/s4h-temporal-timing-analysis`

---

## What it does

Evaluates four timing dimensions — readiness, window, momentum, and cost of waiting — to produce a timing recommendation: act now, wait until conditions are met, or begin preparing to act. The insight: the same action can succeed at one moment and fail at another. Timing is a dimension of strategy, not just execution.

---

## When to use

- "Should we wait, or act now?"
- "Are we too early?"
- Wondering whether to launch, announce, hire, expand, or enter now vs. later
- Something has changed in the environment and you're reassessing timing

---

## Example

**Input:**
> We've been building a product in the AI coding tools space for 14 months. We have a working product but it's not fully polished. The market is moving fast. Should we launch now or wait another 3 months to polish?

**Output:**

**Dimension 1 — Readiness:** *Is the capability to execute actually present?*

Product: functional but unpolished. Team: technically capable, but marketing and customer success are thin. Infrastructure: can handle early user load.

Assessment: partially ready. The launch infrastructure (onboarding, support, feedback loops) is weaker than the product itself. Launching without those creates a cohort of first users who experience a rough product and never return.

**Dimension 2 — Window:** *Is there a time-limited opportunity or threat?*

The AI coding tools space is moving extremely fast. GitHub Copilot, Cursor, and new entrants are shaping user habits and category definitions in real time. Waiting 3 months means 3 more months of the category being defined without your voice in it.

Assessment: window is real and closing. The first-mover advantage in habit formation is significant in this category. Every month of delay is a month competitors compound their user base and data advantage.

**Dimension 3 — Momentum:** *Is the context moving toward or away from favorable conditions?*

Developer appetite for AI coding tools is currently at peak. Enterprise buyers are actively evaluating. Press coverage is high. Investor interest is high.

Assessment: momentum is favorable right now. It may not be in 12 months as the market matures and consolidation begins.

**Dimension 4 — Cost of waiting:** *Does delay enable important improvements, or does it let the market move on?*

3 months of polish could meaningfully improve first-user experience. But: the improvements are incremental, not transformative. The product is already differentiated on core functionality. 3 months of market feedback would do more to improve the product than 3 months of internal polish.

Assessment: the cost of waiting exceeds the value of the polish. Learning from real users is higher-value than perfecting a product no one is using.

---

**Recommendation: Launch now, but fix the launch infrastructure first.**

The window, momentum, and cost-of-waiting dimensions all point toward launching. The readiness dimension points to a specific gap: customer success and onboarding infrastructure. A 3-week sprint on those (not 3 months of polish) addresses the one legitimate readiness concern. Launch in 3 weeks, not 3 months.
