# ethics-bias-check

> Evaluates an algorithm, model, or automated decision process for discriminatory patterns and unfair outcomes — before it ships.

**Trigger:** `/ethics-bias-check`

---

## What it does

Audits any system that makes decisions about or ranks people: identifies the implicit default user the system was optimized for, checks for direct bias (protected characteristics used as features) and proxy bias (correlated features that encode discrimination), examines whether the system creates feedback loops that amplify the patterns it predicts, and assesses how error costs are distributed across demographic groups.

---

## When to use

- "Bias check on this algorithm"
- "Is this fair?"
- "Fairness audit"
- Before deploying any ML model, ranking function, scoring system, or recommendation engine that differentiates between people
- Any automated decision that affects hiring, lending, healthcare, content access, or customer service routing

## When NOT to use

- For consent and data collection ethics — use `ethics-consent-review` or `ethics-data-audit`
- For full multi-framework analysis of a business decision — use `ethics-check` or `ethics-council`
- For pre-ship impact assessment of a non-algorithmic feature — use `ethics-impact-scan`

---

## Example

**Input:**
> We're building a support ticket prioritization model that predicts which tickets are likely to become "high severity escalations" and routes them to senior agents. The model was trained on 18 months of historical tickets, resolution data, and agent notes. We haven't tested it on demographic segments.

**Output:**

---

**System Being Audited:**
Support ticket prioritization model that predicts escalation likelihood and routes high-prediction tickets to senior agents. Trained on historical tickets including resolution data and agent notes. No demographic testing has been run.

---

**Implicit Default**

The model was optimized for customers who wrote tickets in the pattern that historically escalated. This creates an implicit default: customers who write tickets that match the patterns of historical escalations — which likely reflects customers who were most assertive, most fluent in the product's language, or most persistent in following up. Customers who have equally serious problems but express them differently (terse, non-technical, non-native English speakers) may be systematically deprioritized.

---

**Bias Findings**

| Dimension | Finding | Severity |
|---|---|---|
| Direct bias (protected characteristics) | Agent notes are natural language — sentiment classifiers trained on agent notes may systematically encode language-based patterns that correlate with national origin or English fluency. Review whether agent note text is a model feature. | 🔴 |
| Proxy bias (correlated features) | Writing style, vocabulary, ticket length, and use of technical language are likely features. All correlate with education level, which correlates with socioeconomic status and demographic background. A model trained to identify "customers who escalate" may be identifying "customers with the cultural and communication profile to successfully escalate." | 🔴 |
| Training data issues | 18 months of historical data encodes the priorities of the previous system. If the previous system already underserved certain customer segments, the new model will learn those priorities and codify them as "correct." Historical patterns of who was escalated ≠ historical patterns of whose issues deserved escalation. | 🟡 |
| Feedback loop risk | Tickets predicted as high-escalation-risk get routed to senior agents → those tickets get better resolutions → the model sees "these types of tickets resolve well with senior agents" → reinforces the routing → customers not matching the escalation profile never get senior attention and are never in the training data as successful escalations. This loop can compound silently. | 🔴 |
| Error cost distribution | A false negative (failing to route a genuinely serious ticket to a senior agent) is most harmful to customers least likely to escalate successfully — customers with lower assertiveness or lower technical fluency. These customers already receive worse service; the model may systematically amplify this disparity. | 🔴 |

---

**Most Significant Concern**

The feedback loop risk combined with the proxy bias in writing style creates a compounding dynamic: customers who communicate differently are not routed to senior agents, therefore are not in the "successful senior-agent resolution" training data, therefore the model never learns to prioritize their ticket type. The system could produce large disparities in service quality across demographic lines while appearing to optimize for escalation prevention — a performance metric that is itself biased by who escalated in the historical data.

---

**Recommended Actions**

- **Before deploying:** Segment training data by any available demographic proxies (language detected in ticket, region, account type) and check whether the model's escalation predictions have different accuracy rates across segments.
- **If agent notes are model features:** Flag for immediate review — natural language agent notes are a high-risk proxy bias vector. Consider excluding or running a specific audit on note-based features.
- **Design a fairness metric:** Define what "fair routing" means before shipping — e.g., that high-severity tickets (as judged by outcome) should be predicted as such at equal rates across customer segments. Run this measurement before and after deployment.
- **Monitor post-deployment:** Track resolution rates and customer satisfaction scores by demographic proxy after deployment. A clean pre-deploy audit does not guarantee fair real-world performance — monitoring is required.
- **Escalate to ethics-council** if demographic testing reveals material disparities — these findings require a human decision about acceptable trade-offs, not an engineering fix.
