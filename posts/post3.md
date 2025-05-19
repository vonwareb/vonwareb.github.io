# Why Do We Need Bayesian Deep Learning in the
# Age of Large AI Models

**Date:** May 19, 2025  
**Author:** vonwareb  

---

Considerable progress has recently been made in deep learning research. This is thanks to increasingly comprehensive models. However, scaling clearly shows the limits of these models. In terms of uncertainty, reliability, and robustness in practical use, especially.  
And this is precisely where the position paper by Papamarkou et al. comes in, which is an important resource for understanding the subject. Bayesian deep learning (BDL) is not just an optional add-on tool; it is a necessary addition if AI systems are to function reliably and trustworthily in complex environments.

BDL has a crucial property that classic deep learning models can hardly achieve or only achieve to a limited extent. BDL can recognize and quantify uncertainties.

This blog post summarizes the paper's main points. It discusses the role of BDL in modern AI, the challenges it faces, and how it could help shape the next generation of AI.

---
### 🔍 The Central Statement: Why Bayesian Deep Learning
The title of the paper, *Position: Bayesian Deep Learning is Needed in the Age of Large-Scale AI*, clearly indicates the paper's focus. However, Papamarkou et al. not only position their demand, but also explain how AI systems can be made more robust and trustworthy through the interaction of classic deep learning models and BDL.

Current models exhibit excessive self-confidence alongside a lack of uncertainty estimation. They make highly confident statements, even when they originate from noisy or out-of-distribution data. This poses considerable risks, especially in sensitive areas such as medicine and autonomous driving.

BDL is a probabilistic perspective that is capable of providing statements with uncertainty. Specifically, it approximates probability distributions via model parameters or predictions. This makes it possible not only to deliver results but also to demonstrate their reliability in a transparent manner.

The paper does not present BDL as a counterproposal but rather as a supplement to conventional deep learning approaches. This allows the strengths of deep neural networks, such as scalability and efficiency, to be combined with Bayesian methods.

---

### 🌍 The Context: A Crucial Gap in Modern AI
Progress in deep learning has been remarkable in recent years. Language models can pass demanding tests, and image classifiers can outperform radiologists.
However, these models remain blind to their own uncertainty. Many of these systems function deterministically. They provide point predictions without indicating how safe or robust they are. This poses a considerable risk, especially in safety-critical or dynamic fields of application.

This is where BDL comes in. BDL offers the ability to explicitly model epistemic (data-related) and aleatory (stochastic) uncertainties. Unlike classic deep learning models, BDL provides not only a result, but also an assessment of the degree to which this result can be trusted.

However, integrating Bayesian methods into modern deep learning architectures is challenging, especially given two main problems:

**1. Posterior Computation**

Approximating the posterior distribution via high-dimensional model parameters is computationally complex and often requires an approximate solution. Although methods such as variational inference or Monte Carlo dropout exist, they are either biased or require excessive computational effort.

**2. Prior Specification**

Selecting sensible prior distributions is difficult in complex network architectures. While expert knowledge can be used in classic statistical models, deep learning often lacks a well-founded approach. Poor priors lead to distorted uncertainties and impair the strengths of the Bayesian approach.

Many existing BDL methods are feasible for small- to medium-sized networks but quickly reach their limits with modern large language models (LLMs) in terms of memory and computational time because they are not scalable.

This paper does not advocate abandoning established deep learning methods but rather integrating them. BDL is not intended to replace existing architectures but rather to expand specifically in areas where uncertainty plays a significant role.


---

### 🔮 The Outlook: What Comes Next
Papamarkou et al. present a clear message in their paper. AI models must significantly improve their handling of uncertainty to survive in safety-critical or dynamic applications. BDLprovides an opportunity to achieve this goal. It is not intended as a replacement for existing deep learning methods, but rather as a useful extension.

The paper highlights specific methodological and infrastructural hurdles, such as posterior computation, prior selection, and scalability issues, and shows the areas in which technical progress is needed. At the same time, the paper makes it clear that solutions are already in sight, including better sampling methods, hybrid model approaches, and system-related optimizations.

BDL is therefore considered a logical advancement in modern AI. This is especially true in areas where reliability, transparency, and robustness are important.


---

### 🧠 Final Thoughts
Papamarkou et al. provide a clear message: For AI models to survive in safety-critical or dynamic applications, their handling of uncertainty must improve significantly. BDL offers the right framework for this, not as a replacement for existing deep learning methods but as an extension.

The paper highlights specific methodological and infrastructural challenges, such as posterior computation, prior selection, and scalability issues, and indicates areas where technical progress is necessary. At the same time, the paper makes it clear that solutions are already in sight, such as more efficient sampling methods, hybrid model approaches, and system-related optimizations.

BDL is therefore considered a logical advancement in modern AI. Particularly in domains where dependability, clarity, and resilience are crucial.


---

| Sources    |
|----------------|
| T. Papamarkou et al., “*Position: Bayesian Deep Learning is Needed in the Age of Large-Scale AI*,” in Proceedings of the 41st International Conference on Machine Learning, ser. Proceedings of Machine Learning Research, R. Salakhutdinov, Z. Kolter, K. Heller, A. Weller, N. Oliver, J. Scarlett, and F. Berkenkamp, Eds., vol. 235. PMLR, Jul. 2024, pp. 39 556–39 586. [Online]. Available: https://proceedings.mlr.press/v235/papamarkou24b.html  |



