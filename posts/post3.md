# Why Do We Need Bayesian Deep Learning in the
# Age of Large AI Models

**Date:** May 18, 2025  
**Author:** vonwareb  

---

Considerable progress has recently been made in deep learning research. This is thanks to ever-larger models. However, this scaling clearly reveals the models' limitations. This is evident in terms of uncertainty, reliability, and robustness in practical use. And that is exactly where this paper by Papamarkou and his team comes in. Bayesian Deep Learning (BDL) is not just an optional add-on tool. It is a necessary addition if artificial intelligence (AI) systems are to function reliably and trustworthily in complex environments.

BDL has a crucial property that classic deep learning models can hardly achieve or only achieve to a limited extent. BDL can recognize and quantify uncertainties.

This blog post summarizes the paper's main points. It discusses the role of BDL in modern AI, the challenges it faces, and how it could help shape the next generation of AI.

---
### 🔍 The Central Statement: Why Bayesian Deep Learning?**
The title of the paper, *Position: Bayesian Deep Learning is Needed in the Age of Large-Scale AI,* makes it clear what the paper is about. Papamarkou et al., however, not only clearly demonstrate this necessity, but also show how the combination of traditional deep learning models and BDL can create more reliable and trustworthy AI systems.

Current models are characterized by excessive self-confidence and an inability to estimate uncertainty. They often make highly confident statements, even when they originate from noisy or out-of-distribution data. This can lead to considerable risks, especially in sensitive areas such as medicine and autonomous driving.

BDL is a probabilistic approach that can provide statements with their corresponding degree of correctness. Specifically, it solves this problem by approximating probability distributions via model parameters or predictions. This makes it possible not only to deliver results but also to transparently assess their reliability.

The paper does not present BDL as a counterproposal but rather as a supplement to conventional deep learning approaches. It combines the strengths of deep neural networks, such as scalability and efficiency, with Bayesian methods.


---

### 🌍 The context: A Crucial Gap in Modern AI**
Progress in the field of deep learning has been remarkable in recent years. Language models are capable of passing challenging tests, and image classifiers, for example those used for computer tomography images, can outperform radiologists.
However, these models remain blind to their own uncertainty. Many of these systems function deterministically. They provide point estimations without indicating how reliable or robust they are. This poses a considerable risk, especially in safety-critical or dynamic fields of application.

This is where BDL comes in. BDL offers the ability to explicitly model epistemic (data-related) and aleatory (stochastic) uncertainties. Unlike classic deep learning models, BDL provides not only a result, but also an assessment of the degree to which this result can be trusted.

However, integrating Bayesian methods into modern deep learning architectures is challenging, especially given two main problems:

**1. Posterior Computation:**

Approximating the posterior distribution via high-dimensional model parameters is computationally complex and often requires an approximate solution. Although methods such as variational inference and Monte Carlo dropout exist, they either involve bias or require excessive computational effort. An efficient, universally applicable posterior approximation has yet to be achieved.

**2. Prior Specification**

Selecting sensible prior distributions is difficult in complex network architectures. While expert knowledge can be used in classical statistical models, deep learning often lacks a well-founded approach. Poor priors lead to distorted uncertainties and impair the strengths of the Bayesian approach.

Many existing BDL methods are feasible for small- to medium-sized networks but quickly reach their limits with modern large language models (LLMs) in terms of memory and computing time because they are not scalable.

The paper does not advocate for a break with established deep learning methods, but rather for an integrated interaction. BDL is not intended to replace existing architectures; rather, it is designed to expand upon them in areas where uncertainty plays a significant role. Combining powerful neural networks with probabilistic methods is presented as a decisive step toward creating a robust, scalable, and trustworthy next-generation AI.

---

### **🔮 The Outlook: What comes next?**
Papamarkou et al. not only highlight shortcomings and absent capabilities. In their paper, they also provide long-term perspectives on how BDL can be integrated into AI systems.

A central goal is to make probabilistic methods scalable. New sampling algorithms should efficiently approximate posterior distributions, even in networks with billions of parameters. This is linked to developing hybrid approaches that combine the expressive power of classical neural networks with the uncertainty modeling of Bayesian methods.

Another focus is extending the model space. Methods such as Deep Gaussian Processes and Deep Kernel Machines will be further developed to model complex relationships, including uncertainties. This is particularly relevant for scientific questions and data-poor areas of application.

New perspectives are also emerging regarding learning paradigms. In semi-supervised and self-supervised learning scenarios, Bayesian methods can help incorporate uncertainty into the formation of representations. This offers the potential for more robust and adaptable models, especially in situations with little labeled data.

For these concepts to be practically applicable, however, progress must also be made at the system technology level. The paper mentions strategies such as mixed-precision computing and tensor compression as key technologies for efficiently applying probabilistic models to existing hardware and infrastructures.

BDL is not an isolated method but rather a development path from an academic special case to a potential core technology for scalable, trustworthy AI.

---

### **🧠 Final Thoughts**
Papamarkou et al. provide a clear message: For AI models to survive in safety-critical or dynamic applications, their handling of uncertainty must improve significantly. BDL offers the right framework for this, not as a replacement for existing deep learning methods but as an extension.

The paper highlights specific methodological and infrastructural challenges, such as posterior computation, prior selection, and scalability issues, and indicates areas where technical progress is necessary. At the same time, the paper makes it clear that solutions are already in sight, such as more efficient sampling methods, hybrid model approaches, and system-related optimizations.

BDL is therefore considered a logical advancement in modern AI. Particularly in domains where dependability, clarity, and resilience are crucial.


---

| Sources    |
|----------------|
| T. Papamarkou et al., “*Position: Bayesian Deep Learning is Needed in the Age of Large-Scale AI*,” in Proceedings of the 41st International Conference on Machine Learning, ser. Proceedings of Machine Learning Research, R. Salakhutdinov, Z. Kolter, K. Heller, A. Weller, N. Oliver, J. Scarlett, and F. Berkenkamp, Eds., vol. 235. PMLR, Jul. 2024, pp. 39 556–39 586. [Online]. Available: https://proceedings.mlr.press/v235/papamarkou24b.html  |



