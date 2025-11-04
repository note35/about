---
slug: 20251104-open-source-vibe-coding
title: AI Goes to Work: Blind PR to Airflow
excerpt: Can AI submit a blind PR? An experiment in "vibe coding" with Apache Airflow at PyCon JP 2025.
date: 2025-11-04
author: Kir Chou
tags: [ai, sprint]
---

Vibe coding is great. But can a purely AI‑driven workflow actually help shape an open‑source project? To put this to the test, I set up an extreme experiment at the [PyCon JP 2025 sprint](https://pyconjp.connpass.com/event/361701/).

The sprint is a classic developer gathering: maintainers, contributors, and newcomers all converge to tackle real issues in open‑source repos. Usually, a maintainer will point you to a bug or feature, and you’ll dive in, debug, and submit a pull request.

For my experiment, I imposed a series of strict constraints:

- **Mediator Only** – I act solely as a bridge between the maintainers and the AI.
- **Blind to the Issue** – I read nothing about the issue at hand. 
- **No Code Touching** – I never modify the code myself; the AI generates the patch.
- **No Runtime Verification** – Neither I nor the AI runs the code; the patch is never executed, only reviewed.

In other words, it’s a blind open‑source contribution: the AI attempts to fix a problem it does not even know exists. This experiment will tell us whether an AI can, in isolation, still produce meaningful, maintainer‑acceptable pull requests—and whether that’s a viable model for future contribution workflows.

So the next step is to find a target where theory can be put into practice.


# The target - Apache Airflow

I sat at the sprint tables beside two Airflow maintainers, [Lee Wei](https://github.com/Lee-W) and [TP](https://github.com/uranusjr). Though I’d never collaborated with them directly, I’d met them at past community events and heard about their impressive sprint host experiences. Apache Airflow’s widespread impact made it an ideal testbed, and these factors gave me the confidence to propose my unconventional experiment to them.

I explained my plan and asked them to suggest issues that might be suitable for a sprint. Lee Wei provided two possibilities: https://github.com/apache/airflow/issues/55521 and https://github.com/apache/airflow/issues/53474.

The first issue turned out to be a poor fit. It does not satisfy the fourth condition—**No Runtime Verification**—of my criteria, because it requires running code and we cannot generate a result from its execution. This mismatch was immediately recognized by the AI when the issue was fed into the prompt.

Having ruled out the first issue, I turned my attention to the second one and began the Vibe coding process.


# Vibe coding

By 2025, the most exciting part of the “vibe coding” experience still happens at the outset. After that initial spark, the workflow scales back markedly to make the code production‑ready. Will I experience the same pattern?


## With Gemini Pro 2.5

The first step is to provide the AI IDE (powered by Google’s Gemini Pro 2.5) with the URL of the second GitHub issue and open the root directory of Apache Airflow (https://github.com/apache/airflow) —no file is specified for editing. The IDE identifies a bug related to **Python JSON‑encoding** and proposes a fix in [serde.py](https://github.com/apache/airflow/blob/c3a0651b0c3739f5a842b0f49e1a11a0a385e862/airflow-core/src/airflow/serialization/serde.py#L196).

```
try:
    import numpy
    if isinstance(o, numpy.generic):
        return o.item()
    if isinstance(o, numpy.ndarray):
        return o.tolist()
except ImportError:
    pass
```

After showing TP the proposed patch, he raised two practical questions that clarified the design decisions:

1. Why do you need to check numpy generic?
2. Why do you expect an ImportError?

AI answered respectively:

1. `numpy.generic` is the base class for most NumPy scalar types. The issue reported was specifically for `numpy.float64`, but other NumPy types like `numpy.int64`, `numpy.bool_`, etc., would cause the same JSON serialization error because they are not standard Python types.
2. numpy is not a required core dependency of Airflow.

After reviewing the AI‑generated response, TP noted that the solution seemed incomplete and suggested a deeper dive. (This is a typical reaction when a maintainer does not provide a direct guide to the specific answer.)

Note that the latest AI answer appears to have helped TP gain a clearer understanding of the problem. He added a [comment](https://github.com/apache/airflow/issues/53474#issuecomment-3342231243) to clarify the error message with the issue reporter.

Gemini Pro 2.5 couldn’t generate alternative fixes after TP’s reply. The AI got stuck in a loop, repeatedly applying the same change to multiple files because the guidance was too limited. I was exhausted and stepped away for lunch to clear my head.

**Why didn't I ask for more hints from TP?** My goal was to make the AI behave like an engineer—trying the right solutions or asking for clarifications. Yet in this case the model kept insisting on the same, incorrect fixes.


## With Sonnet 4.5

At that point I switched to Claude’s Sonnet 4.5 on their web interface (check out the entire conversation [here](https://claude.ai/share/868ccd0c-e3d5-40a7-a48c-71c942be0ea4)). I didn’t give Sonnet any of Gemini’s work; instead I asked it to start from scratch: to first pinpoint the root cause and then suggest fixes.

Sonnet identified the same JSON‑encoding bug as the root cause and delivered a full solution. It proposed adding a helper in `airflow/utils/asset_helpers.py` that defines a `normalize_asset_metadata` function to correctly serialize the metadata before storing it.

```python
def normalize_asset_metadata(metadata_dict: Dict[str, Any]) -> Dict[str, Any]:
    """
    Normalize Asset metadata to ensure JSON serializability.
    This function should be called before creating AssetMetadata objects.
    
    Location to integrate: airflow/assets.py or wherever AssetMetadata is created
    """
    def _normalize_value(value: Any) -> Any:
        if isinstance(value, dict):
            return {k: _normalize_value(v) for k, v in value.items()}
        elif isinstance(value, (list, tuple)):
            return [_normalize_value(item) for item in value]
        elif isinstance(value, np.integer):
            return int(value)
        elif isinstance(value, np.floating):
            return float(value)
        elif isinstance(value, np.bool_):
            return bool(value)
        elif isinstance(value, np.ndarray):
            return value.tolist()
        elif isinstance(value, np.complexfloating):
            return {"real": float(value.real), "imag": float(value.imag)}
        else:
            return value
    
    return _normalize_value(metadata_dict)
```

Sonnet’s solution was deemed comprehensive enough by TP. He then asked to find where to plug the new **normalize_asset_metadata helper**, and suggested that the function be moved into a different directory.

PS: both TP and Lee Wei pointed out that placing the helper in airflow/utils is not ideal because the long‑term plan for the project (which isn’t publicly documented) will eventually require a different architecture.


## Wrapped up in a pull request

Using Gemini Pro 2.5 in my AI IDE, I identified every spot where the function needs to be applied and rewrote the related code according to the Sonnet 4.5 output. The result is a review‑ready [pull request](https://github.com/apache/airflow/pull/56175/files)! 

Following my constraints, even though I didn't read the issue, I could connect the solution to my Python's data transformation experience and one of my PyCon talks: [Type Erasure in Python](https://www.youtube.com/watch?v=vhwWcPzvRvk).

Both the maintainer and I identified two viable solutions:

1. Handle each special type explicitly.
2. Introduce a generic encapsulation that covers all types.

The AI-generated PR implements the first approach. The rationale behind this choice is detailed in the [comment](https://github.com/apache/airflow/issues/53474#issuecomment-3342414047).
 

# Takeaways

The entire task—identifying the spots for the new function, updating the code, and pushing the pull request—took under four hours. I started early in the morning, wrapped up the changes, and finished around 3 pm.

During the PyCon JP Sprint I had a brief [presentation](https://docs.google.com/presentation/d/1Ft5jPegcGFFoOtk1MGjtXkhElb_GN87N1-BUmFH4vEM/edit?slide=id.g384671eb448_17_13#slide=id.g384671eb448_17_13) to showcase the outcome: 

```
Title: Blind Bug Fixing with LLM?

- Issue #53474: PR - https://github.com/apache/airflow/pull/56175/files
- Issue: JSON serialization issue for np.float64 in extra.
- Progress: Implemented 1 possible solution + Recognized other solutions.
- Next step: Core dev to follow-up the best solutions. 
- LLM limitations
  - Core dev identifies the issue that LLM may be able to solve.
  - Dev needs help from core dev to know if the LLM result is on the right track.
  - The final decision still needs to be continued by humans.
  - Preparing this slide needs context beyond the context I had during vibe coding.

Takeaways: LLM can create a PR even without any project setup and repro.
```

This experience underscores the power of “vibe coding” while also highlighting the indispensable role of human communication. Even in 2025, AI still struggles to make meaningful contributions to open‑source projects because it lacks the contextual understanding of human experience. It also falls short when asked to clarify ambiguous requirements. A promising approach is to pose the same question to multiple models and then orchestrate their collaboration, letting each model compensate for the others’ blind spots. I intend to revisit this strategy regularly as AI continues to evolve rapidly.

> In the [closing panel discussion at EuroPython](https://youtu.be/Sf2AqQ5a38Y?si=AW0btcqM5yrItC7l&t=2645), Brett Cannon was asked, “Do you see a risk for maintainers because of AI?”. He responded, “No—I think that’s part of the human condition to want that engagement and connection to other people.”

By 2025, I recognize that AI still falls short of matching the depth and nuance of human contribution. Yet I’m unsure how far away that milestone will be. Whether I lean toward optimism or pessimism, I believe it could arrive sooner than we expect.

