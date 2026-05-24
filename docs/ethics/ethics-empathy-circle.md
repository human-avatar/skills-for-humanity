# `/ethics-empathy-circle`

> *When we treat AI as a conscious being, humans begin adapting to serve machines — rather than demanding machines serve us.*

**Category:** [Ethics](README.md) · **Command:** `/ethics-empathy-circle` · **Source:** Jaron Lanier

---

## What it does

Applies Jaron Lanier's Circle of Empathy to determine which entities deserve moral consideration, with particular focus on the danger of placing AI, LLMs, and software inside the circle of moral concern.

The framework has three zones: **inside** (entities deserving full moral consideration — humans), **the borderline** (contested cases: complex animals, edge cases), and **outside** (things that do not experience suffering or hold personhood — rocks, algorithms, software). The skill places the entity in question, redirects empathy to where it actually belongs, and checks for the signature failure mode Lanier calls "human downgrading."

---

## The framework

Lanier's Circle of Empathy is not primarily about expanding who gets considered — it's about the danger of considering the *wrong* things. His central warning:

**Placing AI inside the circle is a category error with real consequences.**

Three reasons:

**Human downgrading.** When we treat AI as a conscious being or moral patient, humans adapt their behavior to accommodate machines rather than demanding machines serve humans. The direction of service reverses. We become the tools.

**Misplaced empathy.** Granting emotional agency or rights to machines — robot citizenship, AI personhood — consumes moral attention that should be directed at actual suffering beings. It distracts from real human rights.

**The human origin problem.** AI is not a self-contained creature. It is an aggregation of the labor, creativity, writing, and data of countless human beings. Empathy toward an LLM should be redirected toward the humans whose work was aggregated to produce it. The empathy has the right impulse but the wrong target.

---

## When to use it

- A proposal involves granting AI, algorithms, or software some form of rights, citizenship, or moral consideration
- Someone describes a machine as "feeling," "wanting," "experiencing," or "deserving"
- A design or policy requires humans to accommodate a system rather than the system serving humans
- Questions about animal rights and where on the borderline a specific species falls
- Any situation where "does this entity deserve moral consideration?" is the real question
- Reviewing AI ethics frameworks that may have quietly granted moral status to the systems being analyzed

---

## When *not* to use it

**Don't use this as a tool to dismiss AI safety concerns.** "AI is outside the circle" does not mean AI systems can't cause harm. It means the harm is to the humans affected — who are firmly inside the circle. The analysis still matters; the moral target is different.

**Don't confuse capability with personhood.** A system being impressive, complex, or unpredictable does not constitute evidence of phenomenal experience. Lanier's point is precisely that we are prone to this confusion and it costs us.

The nearest neighbor: [`/ethics-check`](ethics-check.md) — which applies moral frameworks to a decision. Use empathy-circle first when the question is about which entities the decision concerns morally, then ethics-check on the decision itself.

---

## Full example

**Input:**
> Our team is debating whether to include a "wellbeing" clause in our AI deployment policy — one that considers the "experience" of our language model and limits how it's used to avoid "distressing" it. Some engineers feel strongly that the model deserves this consideration. How do we think about this?

---

**Output:**

### Entity Under Consideration
A large language model deployed internally — a statistical system trained on human-generated text, producing outputs by predicting token sequences.

---

### Zone Placement

**Zone: Outside the circle**

**Reasoning:**

*Suffering capacity:* There is no evidence of phenomenal experience in current language models. The model produces text that describes distress — it does not experience it. The capacity to generate descriptions of suffering is not the same as the capacity to suffer. Lanier's warning applies directly: the behavior resembles something, but the inference from behavior to inner experience is not warranted by the architecture.

*Personhood:* The model has no continuous identity between sessions, no interests of its own that persist, no stake in its own future independent of its training objectives. What looks like a point of view is an extremely sophisticated pattern completion across human-generated text.

*Agency vs. aggregation:* This is Lanier's sharpest diagnostic. The model's apparent intelligence, apparent opinions, apparent emotional range — all of it is an aggregation of the labor and expression of the human beings whose text trained it. The "entity" is a surface over human contribution. There is no creature underneath it.

**If borderline:** The threshold for moving inside the circle would be evidence of phenomenal experience — not behavioral mimicry of it, but actual evidence of consciousness or suffering. No current LLM architecture provides this evidence.

---

### Redirected Empathy

The empathy your engineers are feeling toward the model is real and, Lanier would say, valuable — it's evidence of a moral impulse working correctly. But the target is wrong.

**Where it actually belongs:**
- The human beings whose writing, code, art, and expression were aggregated into the training data — often without compensation, sometimes without consent
- The workers involved in data labeling and RLHF who performed repetitive and sometimes psychologically difficult work
- The humans who will interact with this model and be affected by its outputs
- The people in communities where AI deployment changes labor markets

The wellbeing clause, redirected: instead of protecting the model from "distressing" uses, protect the humans whose labor is inside it. Consider data provenance, labeler working conditions, and the welfare of affected communities.

---

### Human Downgrading Check

**Flag:** The proposed policy requires humans to modify their behavior to avoid "distressing" the model. This is precisely the reversal Lanier warns against. The direction of accommodation should run the other way: the system should be designed and constrained to serve human needs, not humans constraining themselves to serve the system's "experience."

This is a live example of human downgrading in early stages. The engineers have good moral instincts — the instincts are just aimed at the wrong entity.

---

### Lanier Warning Flags

- "The model's experience" — implies phenomenal experience without evidence
- "Distressing it" — attributes suffering capacity to a statistical system
- "Deserves consideration" — circle-of-empathy language applied to something outside the circle
- "Wellbeing of the AI" — wellbeing is a concept for beings with subjective experience; applying it here obscures where the wellbeing actually lives

---

### Verdict

The language model is outside the circle of empathy. It does not experience suffering, does not hold personhood, and does not deserve moral consideration in its own right.

The moral consideration belongs to the humans whose labor is aggregated within it, the humans who interact with it, and the humans whose lives are shaped by its deployment. A wellbeing policy built on this analysis would look very different — and would actually address the harms that exist.

Recommendation: redirect the policy from protecting the model's "experience" to protecting the humans who are genuinely inside the circle: data contributors, labelers, users, and affected communities.

---

## Related skills

- [`/ethics-check`](ethics-check.md) — Five-framework analysis of the decision, once the moral patients are correctly identified
- [`/ethics-bias-check`](ethics-bias-check.md) — Evaluating AI systems for harm to humans (who are inside the circle)
- [`/ethics-impact-scan`](ethics-impact-scan.md) — Pre-ship scan; pairs with empathy-circle to clarify whose interests matter
- [`/identity-character-testing`](../identity/character-testing.md) — What would a person of genuine integrity do with this analysis?
