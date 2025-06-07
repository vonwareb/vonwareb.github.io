# Between Vision and Realization - 
# A Review of the Position Paper on Bayesian Deep Learning

**Date:** June 8, 2025  
**Author:** vonwareb  


---

In the paper *Bayesian Deep Learning is Needed in the Age of Large-Scale AI,* Papamarkou et al. argue that future AI systems must include uncertainty handling as a central component of their architectures in order to act safely and trustworthily. This is precisely why Bayesian deep learning (BDL) is described as a key technology.

The paper has already been examined from different perspectives in previous blog posts. Initially, the focus was on the formal structure and writing style. Then, the main message and future perspectives on the topic were analyzed.

This is followed by a final review of the paper. It is evaluated using the standard scientific criteria for reviews. These criteria include relevance, originality, technical quality, clarity and style, scientific embedding, and an overall assessment of the paper.

Each category is examined and ranked individually on a scale of 1 to 10. The aim is to classify the paper's content, scope, and potential limitations. How does the position paper contribute to the link between deterministic and probabilistic models?


---
### 🧭 Relevance - How relevant is the topic really? (9/10)
Foundation models are being used more and more in safety-critical areas. Consequently, uncertainty modeling is becoming more important. Papamarkou et al. address this issue. Classic deep learning models provide overconfident point predictions without accounting for uncertainty. This risk is addressed by Guo et al. (2017), for example, who point out deficiencies in the calibration of modern neural networks, and Tran et al. (2022), who highlight the challenges of detecting misclassification and out-of-distribution data.

Therefore, the integration of BDL as a complementary perspective, as proposed in the paper, is very relevant. Especially in application fields where trust and fault tolerance are crucial, such as in medicine or robotics. The reference to current trends confirms the subject's relevance. These include out-of-distribution detection, model calibration, and interpretable AI. The paper does not view BDL as the sole solution but rather as an interplay of classical methods and Bayesian approaches.

---

### 📣 Significance - How significant is the potential impact on the field? (8/10)
Although the position paper does not introduce a new method, it has the potential to help shape the future of trustworthy AI. Papamarkou et al. argue that uncertainty modeling should be an integral part of modern AI infrastructures, including large-scale systems such as Foundation Models.

While not technically revolutionary, the paper is conceptually groundbreaking. It formulates a position that could encourage research groups and decision-makers to view BDL not as a niche approach but as a basis for forward-looking, robust AI systems.

This positioning gives the paper the necessary weight. Not as a complete game changer, but rather as a necessary next step to systematically combine probabilistics and deterministics approaches in order to make uncertainties in AI systems transparent and quantifiable.


---

### 💡 Originality - How novel and independent is the approach? (7/10)
The concept of using Bayesian methods to capture uncertainty in deep learning is not new. Works such as Gal and Ghahramani (2016), and Blundell (2015), have already established BDL as a practical framework for quantifying uncertainty. Earlier theoretical contributions, such as those by MacKay (1995) and Neal (1996), have also explored this topic. Consequently, the paper builds on a well-known paradigm.

However, Papamarkou et al.'s achievement lies in a conceptual advancement. They argue that BDL should be part of the infrastructure of modern AI systems in the future, not just a complementary technique for uncertainty modeling. This is particularly relevant in the context of foundation models for safety-critical applications and scalable architectures.

Individual sections of the paper are new in terms of content. For example, there is a discussion of priors in the function space instead of exclusively on parameters. There is also a reference to deep kernel methods as a link between GP methods and deep learning, as well as an integration of system-related aspects, such as mixed-precision computation and tensor compression. These are aspects that were less addressed in earlier BDL work.

Therefore, the innovation is not so much in new models or algorithms as it is in the repositioning of BDL in the field of AI. This perspective is relevant and differentiated, even if the article is based on familiar methodological approaches.


---

### 🔍 Technical Quality - How well-founded are the arguments and methods? (6/10)
The paper provides a solid analysis of the problem but remains at a conceptual level. Key challenges, such as posterior approximation, prior specification, and scalability, are identified, but there is no detailed analysis of existing solutions or formal derivations. Concepts such as sampling algorithms, priors in the function space, and hybrid learning methods (e.g., combinations of Bayesian and frequency-based modeling) are mentioned but not elaborated on or examined in depth.
Validation through benchmarks, example applications or quantitative comparisons are also not included. However, the paper is convincing due to its conceptual clarity rather than its technical depth.


---

### ✍️ Clarity & Writing Quality - How comprehensible is the paper written? (8/10)
The paper is linguistically precise, well-structured, and easy to understand. The authors present complex concepts, such as epistemic uncertainty, probabilistic modeling, and functional priors, clearly and without getting lost in the details. The argumentation is sensibly structured and well-organized. In some places, concrete examples from fields such as medicine or robotics could further illustrate the practical relevance. Overall, the text is written in a scientifically clean style, striking a good balance between abstraction and comprehensibility.

---

### 📚 Scholarship - How well is the paper scientifically embedded? (7/10)

Papamarkou et al. base their argument on key references in BDL research. These include foundational works, such as MacKay (1992), "A Practical Bayesian Framework for Backpropagation Networks," and Blundell et al. (2015), "Weight Uncertainty in Neural Networks," as well as practical approaches, such as Gal and Ghahramani (2016), "Dropout as a Bayesian Approximation: Representing Model Uncertainty in Deep Learning." This selection adequately covers the theoretical roots and conceptual motivation of BDL.

However, the discussion of more recent developments in uncertainty modeling is rather superficial. Work on relevant topics such as deep ensembles (Lakshminarayanan et al., 2017), confidence calibration (Guo et al., 2017), and the industrial use of Bayesian neural networks is either not mentioned or only dealt with in passing. Additionally, there is a lack of work evaluating BDL in real fields of application, such as medicine, robotics, and autonomous driving.

On a positive note, the paper successfully integrates related topics, such as semi- and self-supervised learning, function-space priors, and system-side optimization (e.g., mixed precision and tensor compression), into its argumentation. As a result, the paper's scientific relevance is well-founded but not fully comprehensive.

---

### ⭐ Overall Score - Overall evaluation of the position paper (8/10)
Papamarkou et al. address a central weakness of modern AI systems in their position paper. The inadequate uncertainty modeling. The strength of the paper lies in its relevance, foresight and clearly structured argumentation. Methodologically, the paper remains deliberately abstract, yet it is limited in its depth of concrete technical challenges addressed. The paper does not offer new algorithms, benchmarks, or empirical evidence; rather, it aims to question the direction of AI development and highlight the future interplay between classic deep learning methods and Bayesian approaches.


| Sources    |
|----------------|
| T. Papamarkou et al., “*Position: Bayesian Deep Learning is Needed in the Age of Large-Scale AI*,” in Proceedings of the 41st International Conference on Machine Learning, ser. Proceedings of Machine Learning Research, R. Salakhutdinov, Z. Kolter, K. Heller, A. Weller, N. Oliver, J. Scarlett, and F. Berkenkamp, Eds., vol. 235. PMLR, Jul. 2024, pp. 39 556–39 586. [Online]. Available: https://proceedings.mlr.press/v235/papamarkou24b.html  |
| C. Guo, G. Pleiss, Y. Sun, and K. Q. Weinberger, *On calibration of modern neural networks,* in Proceedings of the 34th International Conference on Machine Learning, ser. Proceedings of Machine Learning Research, vol. 70. JMLR.org, 2017, pp. 1321–1330. [Online]. Available: https://proceedings.mlr.press/v70/guo17a.html |
| D. Tran et al., *Plex: Towards Reliability using Pretrained Large Model Extensions,* arXiv preprint, vol. abs/2207.07411, 2022. [Online]. Available: https://api.semanticscholar.org/CorpusID:250607941 |
| Y. Gal and Z. Ghahramani, *Dropout as a Bayesian Approximation: Representing Model Uncertainty in Deep Learning,* in Proceedings of The 33rd International Conference on Machine Learning, ser. Proceedings of Machine Learning Research, M. F. Balcan and K. Q. Weinberger, Eds., vol. 48. PMLR, Jun. 2016, pp. 1050–1059. [Online]. Available: https://proceedings.mlr.press/v48/gal16.html |
| C. Blundell, J. Cornebise, K. Kavukcuoglu, and D. Wierstra, *Weight uncertainty in neural networks,* in Proceedings of the 32nd International Conference on Machine Learning – Volume 37, ser. ICML’15. JMLR.org, 2015, pp. 1613–1622. [Online]. Available: https://proceedings.mlr.press/v37/blundell15.html |
| D. MacKay, *A Practical Bayesian Framework for Backpropagation Networks,* Neural Computation, vol. 4, pp. 448–472, 1992. [Online]. Available: https://www.semanticscholar.org/paper/b959164d1efca4b73986ba5d21e664aadbbc0457 |
| R. M. Neal, *Bayesian Learning for Neural Networks,* Springer, 1995. [Online]. Available: https://www.semanticscholar.org/paper/a22b36cf5dba3e85eb064220be7ef03be4efba48 |
| D. J. C. MacKay, *Bayesian neural networks and density networks,* Nuclear Instruments & Methods in Physics Research Section A: Accelerators, Spectrometers, Detectors and Associated Equipment, vol. 354, pp. 73–80, 1995. [Online]. Available: https://api.semanticscholar.org/CorpusID:122200499 |
| B. Lakshminarayanan, A. Pritzel, and C. Blundell, *Simple and scalable predictive uncertainty estimation using deep ensembles,* in Proceedings of the 31st International Conference on Neural Information Processing Systems, ser. NIPS’17. Curran Associates Inc., 2017, pp. 6405–6416. [Online]. Available: https://papers.nips.cc/paper_files/paper/2017/file/9ef2ed4b7fd2c810847ffa5fa85bce38-Paper.pdf |

