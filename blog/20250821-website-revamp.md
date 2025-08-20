---
slug: 20250821-website-revamp
title: I Let Cursor Rebuild My Website
excerpt: I used Cursor + Gemini to rebuild my website in 6 hours. We'll dive into what AI gets right and wrong. And explore what this powerful new paradigm means for the future of software engineers.
date: 2025-08-21
author: Kir Chou
tags: [ai, opinion]
---

# Context

In 2020, during an employment gap, I developed my personal website as a Single Page Application (SPA) using Create React App (CRA) and Material UI v4, following a [Zhihu guide](https://zhuanlan.zhihu.com/p/102642360).

I've been contemplating a website revamp, primarily to incorporate a blog feature. The [sunsetting of CRA](https://react.dev/blog/2025/02/14/sunsetting-create-react-app) around February 2025, along with the announcement of [Material UI v4 to v5 migration](https://mui.com/material-ui/migration/migration-v4/), provided a timely impetus. Additionally, the recent Large Language Model (LLM) hype has piqued my curiosity, prompting me to explore how the programming world has evolved, especially with tools like [Cursor IDE](https://cursor.com/en/agents).

# Implementation

## Step 1: Cursor IDE

I revamped my website to [Vite](https://vite.dev/) and [Tailwind CSS](https://tailwindcss.com/) using Cursor, a process that took roughly one hour. Interestingly, I didn't even choose these tech stacks; Cursor made that decision for me. Let me explain how it happened.

The one-hour timeframe was largely due to a free quota limitation, which allowed me to ask nine questions with a budget of 5.5 million tokens:

```
Date,User,Kind,Max Mode,Model,Tokens,Cost ($)
"2025-08-20T03:58:45.884Z","You","free","No","auto",1501891,"Included"
"2025-08-20T03:53:30.803Z","You","free","No","auto",2001541,"Included"
"2025-08-20T03:49:12.855Z","You","free","No","auto",1657418,"Included"
"2025-08-20T03:47:22.833Z","You","free","No","auto",101775,"Included"
"2025-08-20T03:46:28.498Z","You","free","No","auto",100505,"Included"
"2025-08-20T03:44:47.355Z","You","free","No","auto",99355,"Included"
"2025-08-20T03:44:39.709Z","You","free","No","auto",0,"Included"
"2025-08-20T03:42:36.503Z","You","free","No","auto",145848,"Included"
"2025-08-20T03:41:41.558Z","You","Errored, Not Charged","No","auto",131507,"Included"
"2025-08-20T03:36:35.864Z","You","Errored, Not Charged","No","auto",228672,"Included"
"2025-08-20T03:16:11.931Z","You","free","No","auto",479597,"Included"
```

Although I don't recall my exact prompts, my key requirements were:
- A SPA built with modern solutions, avoiding outdated options like CRA and Material UI v4.
- A blog feature.
- Dark mode functionality.

The entire experience was truly astonishing 🤯! I initiated the process around lunchtime in JST. I simply typed in my needs, then enjoyed my lunch while Cursor completed the work. The only intervention required from me was running the development build after new packages were installed. Beyond that, my involvement was minimal—just verifying that the UI performed as expected.

## Step 2: Code Review with Gemini Pro

Is that amazing feeling a Mirage? Yes and no.

I investigated Cursor's capabilities. After about five hours, I completed tasks that Cursor didn't address within the nine commands I used. Here's a breakdown of the issues I encountered, listed in order of discovery:

1. **Dark mode compatibility**: The CSS styling was missing `dark:` in many places, leading to poor dark mode integration. **Solution**: The issue was resolved by examining a portion of the code written by Cursor with Gemini. This also led to the suggestion of creating a reusable template for rendering grids, which is a task for future development and not something I intend to address at this time.
2. **Missing footer**: The footer was absent from paths other than the default one. **Solution**: I was able to solve this directly, as I have sufficient context on how to modularize the footer as a component.
3. **Mixed language comments**: Comments contained a mix of Chinese and English, despite my prompt being in Chinese. **Solution**: I incrementally fixed this by navigating all files modified by Cursor.
4. **Static blog feature**: The blog feature relied on a static JavaScript object rather than dynamically reading markdown files. I discovered this when I was creating a new article to replace dummy blogs (interestingly, Cursor marked the work as a TODO with an unused function in the util). **Solution**: I ultimately needed to create a separate script to generate JavaScript objects with articles in markdown.
5. **Deployment root path issue**: Deployment didn't work correctly with the root path, as GitHub Pages published the site to `/about/`. **Solution**: This issue was resolved incrementally with Gemini during development. Cursor was unable to identify this requirement due to a lack of awareness regarding my GitHub configuration.
6. **Router functionality**: The router failed for other paths (e.g., `/about/talks`), resulting in 404 pages. **Solution**: Deploying was difficult for Cursor, a common problem in 2020. This time, I used Gemini, which offered a new solution (using 404.html redirection) that I wasn't aware of back then.

Note: Cursor knows the existing code contains linter, but the revamp code has nothing related to the linter. I've decided to omit a linter from the revamped code as I believe AI can easily handle formatting, rendering a dedicated linter unnecessary.

Additionally, Gemini assisted with various other tasks, including implementing distinct meta tags in the header HTML for SPAs and making numerous minor UI adjustments to font sizes, colors, grid row numbers, and button widths.

# Engineers Coexisting with AI?

## What AI can not do well today?

Living in a "tech island" has limited my experiences outside of the enterprise world. I've often heard positive feedback about AI IDEs, particularly Cursor, and finally had the opportunity to validate these claims with a real-world application.

From my experience, Vibe Coding doesn't **YET** fully replace engineers due to a few key factors:

1. **Problem Definition**: I need to clearly define the problem. While Cursor can generate a general personal website, it struggles with specific contexts like content and tech stack.
2. **UI Verification**: The proposed UI outcome requires visual verification. Humans can much more comprehensively verify the outcome than AI. Although AI can improve in this area (such as verifying why a build failed and fixing it), I believe human involvement will remain crucial in 2025.
3. **Code Review**: I can quickly review the generated code. Unless we reach a point where we trust AI to rebuild everything every time a prompt is entered, humans will still be responsible for maintaining existing codebases.

## General software engineers may vanish soon

Vibe Coding is a thing. General software engineers coexisting with AI won't stay long.

I anticipate a decline in general software engineering roles, as evidenced by [job postings on Indeed in the United States](https://fred.stlouisfed.org/series/IHLIDXUSTPSOFTDEVE). I also believe the "junior engineer" title may vanish within 3 years. You might wonder how we'll develop senior engineers without junior positions. My answer is that we won't need to hire junior engineers; we'll hire individuals who can manage AI to write code, much like current senior engineers.

## Transition to AI engineer

While the longevity of senior engineers is uncertain, I believe we should prepare for a transition to AI engineers:

- **Pre-training**: This specialized area typically requires a Ph.D. and is generally not suited for general software engineers.
- **Post-training / Fine-tuning**: A viable path for software engineers with a strong interest in data and a knack for bridging the gap between customized models and real-world applications. 
- **Model Serving**: This direction is suitable for software engineers proficient in overall backend development, including areas like parallel programming and Site Reliability Engineering (SRE).
- **Agent / RAG**: This is a promising avenue for application engineers. To understand the requirements for positions in this domain, today's typical engineers should research companies like Perplexity and Cursor.

# Ending

I understand the risk of becoming irrelevant in this industry if I don't take action soon. I hope this article can guide other software engineers toward a clear path.
