# systems-feedback-mapping

> Maps the reinforcing and balancing feedback loops that drive behavior in a system.

**Trigger:** `/s4h-systems-feedback-mapping`

---

## What it does

Identifies the reinforcing loops (R) and balancing loops (B) in a system, maps their interactions, identifies dominant loops and time delays, and explains what behavior the loop structure generates. The behavior of any system is the behavior of its feedback loops.

---

## When to use

- "What's driving this behavior?"
- Interventions keep failing because they don't address the underlying loop structure
- A situation keeps returning to the same state despite apparent changes
- Need root cause at the structural level, not the event level

---

## Example

**Input:**
> Our sales team keeps missing quota. We hire more salespeople to make up for the gap. But quota attainment per rep keeps declining. What's the loop?

**Output:**

**Loop 1 — The Growth Reinforcement Loop (R1)**

Quota gap → hire more reps → more pipeline coverage → more revenue → capacity to hire → hire more reps

*This is the intended loop: growth funds more growth.*

**Loop 2 — The Dilution Balancing Loop (B1)**

Hire more reps → same total leads divided among more reps → fewer leads per rep → lower attainment per rep → quota gap remains or worsens → hire more reps...

*This loop is active and counteracting R1. Adding reps without adding leads creates a dilution dynamic — the same demand is shared among more people.*

**Loop 3 — The Culture Erosion Loop (R2)**

Low attainment → low morale → higher rep attrition → more open territories → worse attainment → lower morale... 

*A reinforcing loop that amplifies the problem. Once this loop is active, it accelerates.*

**Key time delays:**

- Hiring → productivity: new reps take 3-6 months to reach full quota performance. So the workforce capacity added by a new hire is delayed — but the lead dilution is immediate.
- Attrition signal: experienced rep attrition often lags morale decline by 3-6 months. The system looks stable until it isn't.

**What the loop structure predicts:**

The standard response (hire more to make up the gap) is feeding B1 faster than R1. Each hiring wave dilutes leads further, worsening attainment, triggering another hiring wave. The system will oscillate until either lead generation scales or the hiring stops.

**High-leverage interventions (by loop):**

- *Address B1 directly:* Scale lead generation before scaling headcount. The ratio of leads to reps is the constraint, not headcount.
- *Break the R2 loop:* The attrition accelerator needs to be stopped before it compounds. Quota relief for struggling reps, transparent pipeline visibility, and manager support all address the loop before it goes positive.
- *Change the metric:* If leadership is measured on quota attainment rather than attainment per rep, the dilution is invisible. Making attainment-per-rep the primary metric changes the information flows.
