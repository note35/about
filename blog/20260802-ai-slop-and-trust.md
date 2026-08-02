---
slug: 20260802-ai-slop-and-trust
title: AI Can Write the Code, But Can It Earn Trust? Contributing to Linux, Kubernetes, and CPython with Agentic Coding
excerpt: I shipped patches to Linux, Kubernetes, and CPython with AI. Trust was the hard part.
date: 2026-08-02
author: Kir Chou
tags: [ai, takeaways]
---

Following my previous article about blindly using AI to submit a pull request (PR) to Apache Airflow, my journey of contributing to open-source software (OSS) with agentic coding has continued. I have since contributed to Linux, Kubernetes, and CPython. This article summarizes my contributions, what I learned, and my thoughts on 'AI slop'.


# My Contributions

"Talk is cheap. Show me the code." is a principle I respect when joining a new organization/community. Therefore, I believe this article is only convincing if I actually get my hands dirty. In this section, I will walk through some contributions I made using agentic coding.


## Linux

> Highlight: AI serves as an accessible and patient mentor.

### The Barrier: A GitHub-less Workflow

For many developers, the biggest hurdle to contributing to Linux isn't the code; but the "GitHub-less" workflow. You don't just open a PR. You have to navigate specialized tools like `checkpatch.pl` and `get_maintainer.pl`, and send patches via mailing lists using `git format-patch` and `git send-email`.

Without AI, simply learning how to survive this traditional contribution pipeline would have been a massive, time-consuming barrier for me.

### The Solution: An AI Mentor

AI transformed this intimidating process into a transparent one. To be honest, contributing to Linux with AI felt just like participating in the best PyCon sprints. It reminded me of the senior mentors who guided me back when I was a junior engineer.

Even if I could find a human mentor in the Linux community, I probably wouldn't ask them questions as freely as I did with AI. AI automatically constructed the required commands, answered all my "stupid" questions, and allowed me to focus entirely on the actual development.

### The Execution: Finding and Shipping the Patch

Before the AI era, figuring out where to start was exhausting for all the OSS projects. Today, it’s a conversation. Around late 2025, AI helped me explore the codebase and suggested a few entry points (Industrial I/O Subsystem KUnit, and Staging Drivers).

I chose to migrate tests to [**KUnit**](https://docs.kernel.org/dev-tools/kunit/index.html) based on my engineering intuition: the barrier to entry is relatively low, it doesn't break core systems, and senior Linux developers rarely spend time on it. [My first merged contribution](https://github.com/torvalds/linux/commit/bf45794244ca1fb1c135754f36ff765eea01f9e6) was the KUnit test migration for the `glob` module. ([A second patch](https://lore.kernel.org/lkml/?q=random32%3A+convert+selftest+to+KUnit) for `random32` is currently slated to be merged.)

Here is how AI and I pair-programmed the `glob` patch:

1. **Targeting**: After exploring [lib](https://github.com/torvalds/linux/tree/master/lib), I verified there were no ongoing efforts on the [mailing list](https://lore.kernel.org/lkml/) for the `glob` module.
2. **Drafting**: AI generated the first draft, which covered 95% of the final logic. It was mostly correct, except for some architecture-specific configuration details.
3. **Refining**: I manually fixed the remaining `arch/m68k/configs` details, verified the code locally, and submitted the patch.
4. **Iterating**: When the human reviewer provided feedback, I simply fed their suggestions back to the AI. It resolved all of them perfectly, and the patch was accepted.

## Kubernetes

> Highlight: AI acts as a navigator for "exploration and convergence".

### The Funnel of Exploration

Unlike my experience with Linux, finding the right task in Kubernetes required a multi-layered exploration. The ecosystem is massive, so I used AI as a navigator to help me converge on a specific target.

Initially, AI suggested several entry points: addressing failures on [Testgrid](https://testgrid.k8s.io/), migrating SIG-Instrumentation logs, or contributing to the Kubernetes Python Client. As a Pythonista, I naturally chose the Python Client.

From there, AI narrowed the scope further, proposing Watch Optimization, Async I/O Support, or Kubeconfig updates. I selected **Watch Optimization** because the `watch` mechanism is an essential, core component of the project.

### Avoiding the "AI Slop" Trap

Once we dived into the code-level details of Watch Optimization, AI proposed several specific tasks: refactoring the `ApiClient`, removing Python 2 support, adding Type Hints, or fixing a specific "TODO BOOKMARK".

*Here is where human judgment became critical*. I deliberately avoided the large-scale refactors and syntax updates (like Type Hints or Py2 removal). I knew that if a first-time contributor suddenly submitted massive, non-logical code changes without prior community engagement, it would instantly be flagged as "AI Slop."

To build trust and avoid stepping on toes, I picked the highly specific, tightly scoped "TODO BOOKMARK" fix.

### The Execution

Once the target was locked, AI guided me through how the watch component actually works under the hood and helped me verify that the issue could be reliably tested.
The [PR](https://github.com/kubernetes-client/python/pull/2505) was successfully merged. Interestingly, the fix turned out to be much simpler than I anticipated—leaving me wondering why it had been left as a TODO for so long in the first place!

## CPython

> Highlight: AI is a double-edged sword in "development and communication".

### A Different Strategy: Swinging for the Fences

CPython was always on my bucket list of OSS. Unlike Linux and Kubernetes, I was already somewhat familiar with CPython through my background in [PyCon talks](https://note35.github.io/about/talks). Because of this, I decided on a completely different strategy.

Instead of looking for small bugs, I aimed for a notoriously controversial topic: the **multi-line lambda**. My goal was to revive an idea from a discarded PyCon proposal I wrote earlier this year. This time, I used AI to help me build a fully functional Proof of Concept (POC) - [lamdef](https://github.com/note35/lamdef/blob/main/pep-tbd.rst).

### The Sharp Edge: Supercharged Development

On the development side, AI was incredibly powerful. While working on the POC, I had to dive deep into CPython's core build commands (such as `regen-pegen`, `regen-ast`, `regen-keyword`, and `regen-token`).

AI helped me spot side-quest opportunities within these commands, such as fixing compiler warnings and test failures. Along the way, I submitted four PRs to CPython. Two were successfully merged, while another turned out to require a much deeper architectural fix than we initially anticipated. (See my contributions: [1](https://github.com/python/cpython/pulls?q=is%3Apr+author%3Agkirchou) and [2](https://github.com/python/cpython/pulls?q=is%3Apr+author%3Anote35++_crossinterp.py).)

### The Blunt Edge: The "Humanity" Wall

Armed with my working POC, I proudly took my proposal to the [Python discussion forum](https://discuss.python.org/t/typed-anonymous-functions-lamdef/105217). My hope was that having actual, functioning code would elevate the conversation, especially since [past debates](https://discuss.python.org/t/are-better-lambdas-really-impossible/2446/15) on this topic had been purely theoretical. I wanted to prove that AI could make historically difficult implementations achievable.

*Then, I hit a wall.*

The community discussion focused on the debate about "humanity"—specifically, a strong pushback against using AI to write forum posts. The community was highly defensive about maintaining human-only communication. In fact, shortly after my thread, [another developer's proposal](https://discuss.python.org/t/optional-syntax-for-typed-lambda-expressions/105516/17) for lambda expressions met the exact same fate.


# AI Slop? A Confession

What exactly is "AI slop"? It heavily depends on your definition. Honestly, under some stricter definitions, I might be the one generating it.
But to understand why the community is so afraid of it, we have to look past the code itself and look at the fundamental equation of OSS contributions—an equation that AI has permanently broken.

Before:

> The cost to generate a PR ~= The cost to review a PR.

AI-era:

> The cost to generate a PR << The cost to review a PR.

## The Devaluation of "Care"

Historically, submitting a PR was expensive. Just look at what "the cost to generate a PR" used to involve:

1. **The Context (Prerequisites)**: You had to understand the project background, locate the specific issue, and dive deep into code-level details.
2. **The Assembly (Construction)**: You had to consolidate that context into a valid, locally verified solution.
3. **The Delivery (Submission)**: You had to follow specific contribution guidelines just to make your code commit visible.

Because this process was complex, it acted as a natural filter. You had to genuinely care about the project to go through with it. The effort itself was proof of your sincerity.

Today, that cost is cheap. AI enables anyone to rapidly generate and submit a syntactically correct PR to a project they know absolutely nothing about. The "proof of care" is gone.

## The System's Defense

When the care is gone, on the other side of the screen, "the cost to review a PR" stays exactly the same. Maintainers cannot use AI to blindly accept code. They still have to parse the issue, verify the solution, check for edge cases, and take the ultimate responsibility for merging it.

When "the cost to generate a PR" is low, but "the cost to review a PR" remains the same, the sheer volume of PRs inevitably increases. To survive this, OSS projects are adapting from two angles: increasing the bar to submit a PR, and building better processes to filter what to review. Most projects are adopting stricter pre-submit checks, and many have even integrated AI toolings to fight AI with AI. In the foreseeable future, more of these automated defenses will likely be constructed.

## The Paradox: Humanity and Trust

AI slop strengthens the bond between humans and highlights the value of humanity. When a PR is submitted by a "nobody" whom the maintainers have never worked with before, it requires the maintainer to increase their effort to review it. Human communication becomes a vital factor to progress the discussion.

Earning a maintainer's trust is crucial, and the strategy to gain trust is not something AI is good at. We don't have models trained for such a purpose. AI can guide humans to contribute, but humans are ultimately responsible for what they contribute. Without enough context, AI doesn't know what the most suitable target is and will easily pick something that maintainers immediately consider AI slop.

## Beyond PRs: The Unimpacted Zone

This is why OSS development beyond basic PRs remains largely unimpacted. Standard PRs are usually related to bug fixes and reproducible issues. However, design-level changes and new features are clearly out of the scope of AI slop. I would be surprised if a maintainer simply accepts a new feature made by AI; a few iterations of human communication are always required.

This brings me back to my CPython experience. Even if AI can generate a brilliant idea with a working POC, the discussion is hard to proceed without trust based on humanity. It was a harsh but valuable lesson: **AI can easily write the code, but it doesn't help you gain the trust needed to start a conversation for design-level problems.**

In fact, I have since learned that this goes far beyond open source. The ability to effectively communicate and collaborate with "AI skeptics" is increasingly becoming a required soft skill for many new corporate positions in the industry.

# My Takeaways

Through this journey, I discovered several ongoing trends that will shape the future of open source:

- **Mutual AI Adoption**: AI adoption is happening symmetrically. Maintainers are actively integrating AI for code reviews, automated fixes, pre-submit checks, and documentation. As a result, "easy" bug fix opportunities for human contributors are likely to become scarcer. The only remaining blocker is a maintainer's willingness to adopt these automated PR agents.
- **Standardization of Guidelines**: Contribution standards are becoming more rigorous. Contributors use AI to quickly adapt to these strict rules, while maintainers can easily draft and enforce policies by mirroring other iconic projects.
- **The Premium on Trust**: Because AI has drastically lowered the technical barrier to entry, the baseline value of code has dropped. Consequently, trust remains either just as hard—or even harder—to gain.
- **Humanity as a Core Competency**: Human communication is more important than ever. Knowing how to collaborate with people who refuse to use AI, or who resent reviewing AI-generated code, is an essential new soft skill in the AI era.

I hope this article helps you navigate the changing landscape of open source. I will certainly continue my exploration of OSS contributions and share further insights along the way.
