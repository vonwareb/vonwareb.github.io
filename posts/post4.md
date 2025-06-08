# Between Vision and Realization - 
# A Review of the Position Paper on Bayesian Deep Learning

**Date:** June 8, 2025  
**Author:** vonwareb  

---

In their paper, *Bayesian Deep Learning is Needed in the Age of Large-Scale AI,* Papamarkou et al. argue that AI systems should incorporate uncertainty handling as a central component of existing architectures in order to be able to act safely and trustworthily. This is precisely why Bayesian Deep Learning (BDL) is considered a key technology.

The paper has already been examined from different perspectives in the two previous blog posts. Initially, the focus was on the formal structure and writing style. Then, the main message and future perspectives on the topic were analyzed.

This is now followed by a final review of the paper. It is evaluated using the standard scientific review criteria. These criteria include relevance, originality, technical quality, clarity and style, scientific embedding, and an overall assessment of the paper.

Each category is examined and ranked individually on a scale of 1 to 10. The aim is to classify the paper's content, scope, and potential limitations. 
How does the position paper contribute to the link between deterministic and probabilistic models?


---
### 🧭 Relevance - How relevant is the topic really? ⭐⭐⭐⭐⭐⭐⭐⭐⭐☆ (9/10)
Foundation models are being used more and more in safety-critical areas. Consequently, uncertainty modeling is becoming more important. And this problem is precisely what is addressed by Papamarkou et al. Classic deep learning models provide overconfident point predictions without accounting for uncertainty. This risk is addressed by Guo et al. (2017), for example, who point out deficiencies in the calibration of modern neural networks, and Tran et al. (2022), who highlight the challenges of detecting misclassification and out-of-distribution data.

The integration of BDL as a supplementary perspective proposed in the paper is therefore very relevant and topical. Especially in application fields where trust and fault tolerance are crucial, such as in medicine or robotics. The reference to current trends confirms the subject's relevance. These include out-of-distribution detection, model calibration, and interpretable AI. The paper does not view BDL as the sole solution but rather as an interplay of classical methods and Bayesian approaches.

---

### 📣 Significance - How significant is the potential impact on the field? ⭐⭐⭐⭐⭐⭐⭐⭐☆☆ (8/10)
Although the position paper does not introduce a new method, it has the potential to help shape the future of trustworthy AI. Papamarkou et al. argue that uncertainty modeling should be an integral part of modern AI infrastructures such as Foundation Models.

While not technically revolutionary, the paper is conceptually groundbreaking. It formulates a position that could encourage research groups and decision-makers to view BDL not as a niche approach but as a basis for forward-looking, robust AI systems.

This positioning is not a complete game changer. Rather, it is a necessary next step toward systematically combining probability and determinism to make uncertainties in AI systems transparent and quantifiable.


---

### 💡 Originality - How novel and independent is the approach? ⭐⭐⭐⭐⭐⭐⭐☆☆☆ (7/10)
The concept of using Bayesian methods to capture uncertainty in deep learning is not new. Works such as Gal and Ghahramani (2016), and Blundell (2015), have already established BDL as a practical framework for quantifying uncertainty. Earlier theoretical contributions, such as those by MacKay (1995) and Neal (1996), have also explored this topic. Consequently, the paper builds on a well-known paradigm.

However, Papamarkou et al.'s achievement lies in a conceptual advancement. They argue that BDL should be part of the infrastructure of modern AI systems in the future, not just a complementary technique for uncertainty modeling. This is particularly relevant in the context of foundation models for safety-critical applications and scalable architectures.

Individual sections of the paper are new in terms of content. For example, there is a discussion of priors in the function space instead of exclusively on parameters. There is also a reference to deep kernel methods as a link between GP methods and deep learning, as well as an integration of system-related aspects, such as mixed-precision computation and tensor compression. These are aspects that were less addressed in earlier BDL work.

Therefore, the innovation is not so much in new models or algorithms as it is in the repositioning of BDL in the field of AI. This perspective is relevant and differentiated, even if the article is based on familiar methodological approaches.


---

### 🔍 Technical Quality - How well-founded are the arguments and methods? ⭐⭐⭐⭐⭐⭐☆☆☆☆ (6/10)
The paper provides a thorough problem analysis but remains predominantly conceptual. Although central challenges such as posterior approximation, prior specification, and scalability are identified, a detailed analysis of existing solution approaches is lacking.
Although concepts such as sampling algorithms, priors in the function space, and hybrid learning methods (e.g., combinations of Bayesian and frequency-based modeling) are mentioned, they are not theoretically elaborated on or examined in detail. Nevertheless, the paper is convincing due to its conceptual clarity rather than its technical depth.


---

### ✍️ Clarity & Writing Quality - How comprehensible is the paper written? ⭐⭐⭐⭐⭐⭐⭐⭐☆☆ (8/10)
The paper is linguistically precise, well-structured, and easy to understand. It conveys more complex concepts, such as epistemic uncertainty, probabilistic modeling, and functional priors, in an understandable way without getting lost in details. The argumentation is sensibly structured and well-organized. Concrete examples from fields such as medicine or robotics could further illustrate the text's practical relevance. Overall, the text is written in a scientifically clean style, striking a good balance between abstraction and comprehensibility.

---

### 📚 Scholarship - How well is the paper scientifically embedded? ⭐⭐⭐⭐⭐⭐⭐☆☆☆ (7/10)

Papamarkou et al. base their argument on key references in BDL research. These include foundational works, such as MacKay (1992) and Blundell et al. (2015), as well as practical approaches, such as Hoffman et al. (2013) and Sun et al. (2019). This selection adequately covers the theoretical roots and conceptual motivation of BDL.

However, the discussion of more recent developments in uncertainty modeling is rather superficial. Work on relevant topics such as deep ensembles (Lakshminarayanan et al., 2017), confidence calibration (Guo et al., 2017), and the industrial use of Bayesian neural networks is either not mentioned or only dealt with in passing. Additionally, there is a lack of work evaluating BDL in real fields of application, such as medicine, robotics, and autonomous driving.

On a positive note, the paper successfully integrates related topics, such as semi- and self-supervised learning, function-space priors, and system-side optimization (e.g., mixed precision and tensor compression), into its argumentation. As a result, the paper's scientific relevance is well-founded but not fully comprehensive.

---

### 🏅 Overall Score - Overall evaluation of the paper ⭐⭐⭐⭐⭐⭐⭐⭐☆☆ (8/10)
Papamarkou et al. address a central weakness of modern AI systems in their position paper. The inadequate uncertainty modeling. The paper's strength lies in its relevance and clearly structured argumentation.
Methodologically, however, the paper remains rather abstract. Rather than offering new algorithms, benchmarks, or empirical evidence, it aims to question the direction of AI development and highlight the future interplay between classic deep learning methods and Bayesian approaches.



| Sources    |
|----------------|
| Papamarkou, T., Skoularidou, M., Palla, K., Aitchison, L., Arbel, J., Dunson, D., . . . Zhang, R. (2024, July). *Position: Bayesian Deep Learning is Needed in the Age of Large-Scale AI.* In R. Salakhutdinov et al. (Eds.), Proceedings of the 41st International Conference on Machine Learning (Vol. 235, pp. 39556–39586). PMLR. Retrieved from https://proceedings.mlr.press/v235/papamarkou24b.html |
| Guo, C., Pleiss, G., Sun, Y., & Weinberger, K. Q. (2017). *On calibration of modern neural networks.* In Proceedings of the 34th International Conference on Machine Learning - Volume 70 (pp. 1321–1330). JMLR.org. (Place: Sydney, NSW, Australia)|
| Tran, D., Liu, J. Z., Dusenberry, M. W., Phan, D., Collier, M., Ren, J. J., . . . Lakshminarayanan, B. (2022). *Plex: Towards Reliability using Pretrained Large Model Extensions.* ArXiv, abs/2207.07411. Retrieved from https://api.semanticscholar.org/CorpusID:250607941|
| Gal, Y., & Ghahramani, Z. (2016, June). *Dropout as a Bayesian Approximation: Representing Model Uncertainty in Deep Learning.* In M. F. Balcan & K. Q. Weinberger (Eds.), Proceedings of The 33rd International Conference on Machine Learning (Vol. 48, pp. 1050–1059). New York, New York, USA: PMLR. Retrieved from https://proceedings.mlr.press/v48/gal16.html|
| Blundell, C., Cornebise, J., Kavukcuoglu, K., & Wierstra, D. (2015). *Weight uncertainty in neural networks.* In Proceedings of the 32nd International Conference on International Conference on Machine Learning - Volume 37 (pp. 1613–1622). JMLR.org. (Place: Lille,France)|
| MacKay, D. J. C. (1995). *Bayesian neural networks and density networks.* Nuclear Instruments & Methods in Physics Research Section A- accelerators Spectrometers Detectors and Associated Equipment, 354, 73–80. Retrieved from https://api.semanticscholar.org/CorpusID:122200499|
| Neal, R. M. (1995). *Bayesian learning for neural networks.* Retrieved from https://www.semanticscholar.org/paper a22b36cf5dba3e85eb064220be7ef03be4efba48 doi: 10.1007/978-1-4612-0745-0|
| MacKay, D. (1992). *A Practical Bayesian Framework for Backpropagation Networks. Neural Computation,* 4, 448–472. Retrieved from https://www.semanticscholar.org/paper/b959164d1efca4b73986ba5d21e664aadbbc0457 doi: 10.1162/neco.1992.4.3.448|
| Hoffman, M. D., Blei, D. M., Wang, C., & Paisley, J. (2013, May). *Stochastic variational inference.* J. Mach. Learn. Res., 14(1), 1303–134(Publisher: JMLR.org)|
| Sun, S., Zhang, G., Shi, J., & Grosse, R. (2019). *FUNCTIONAL VARIATIONAL BAYESIAN NEURAL NETWORKS.* In International Conference on Learning Representations. Retrieved from https://openreview.net/forum?id=rkxacs0qY7|
| Lakshminarayanan, B., Pritzel, A., & Blundell, C. (2017). *Simple and scalable predictive uncertainty estimation using deep ensembles.* In Proceedings of the 31st International Conference on Neural Information Processing Systems (pp. 6405–6416). Red Hook, NY, USA: Curran Associates Inc. (event-place: Long Beach, California, USA)|

