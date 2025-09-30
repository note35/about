export interface TalkItem {
  year: string,
  reason: string,
  title: string,
  excerpt?: string,
  links?: Array<{
    source: string,
    url: string
  }>,
  tags?: Array<string>
}

export const TalkItems: Array<TalkItem> = [
  {
    "year": "2025",
    "reason": "PyCon TW",
    "title": "Panel Discussion: \"Coexisting with AI: Will Experts Adapt or Lead?\"",
    "excerpt": "I am the moderator of this panel discussion, the panelists are Donghee Na, Sebastián Ramírez (tiangolo), Tica Lin, and YC Chen.",
    "links": [{
      "source": "Link",
      "url": "https://tw.pycon.org/2025/en-us/conference/panel-discussion"
    }],
    "tags": [
      "ai",
    ]
  }, {
    "year": "2025",
    "reason": "EuroPython",
    "title": "Beyond the Code: Manipulating Bytecode and Building Community",
    "excerpt": "Explore Python bytecode's evolution, its impact on tools like pytype through PEP 709, and the vital role of OSS collaboration in shaping Python's future.",
    "links": [{
      "source": "Youtube",
      "url": "https://www.youtube.com/watch?v=Y0SXvtRbEjg"
    }, {
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2025-bytecode.pdf"
    }],
    "tags": [
      "pep709",
    ]
  }, {
    "year": "2024",
    "reason": "EuroPython, PyCon TW",
    "title": "Demystify Python Types for PEP 729",
    "excerpt": "Uncover the why behind PEP 729. This talk demystifies Python's type system, bridging theory and practice, and explores the challenges across type checkers.",
    "links": [{
      "source": "Youtube",
      "url": "https://www.youtube.com/watch?v=rQur7QphEIw"
    }, {
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2024-type_systems.pdf"
    }],
    "tags": [
      "pep729",
    ]
  }, {
    "year": "2023",
    "reason": "PyCon TW",
    "title": "How to Design a Successful (Intern) Project with Apache Beam?",
    "excerpt": "Discover how Apache Beam simplifies large-scale data processing and is ideal for intern projects. This talk covers project planning, setting expectations, and delivering business impact.",
    "links": [{
      "source": "Youtube",
      "url": "https://www.youtube.com/watch?v=ecUVZMFEdQU"
    }, {
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2023-apache_beam.pdf"
    }, {
      "source": "Code",
      "url": "https://colab.research.google.com/drive/1KT-0pNQbvxjNoLa1me_09uvQSDDwVz0q?usp=sharing"
    }],
    "tags": [
      "apache beam",
      "career",
    ]
  }, {
    "year": "2023",
    "reason": "PyCon US Education Summit",
    "title": "What a Great Software Engineer Intern Host Looks Like",
    "excerpt": "This is a summary of my experiences from 3 internships and from hosting 5 interns.",
    "links": [{
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2023-intern_host.pdf"
    }],
    "tags": [
      "career",
    ]
  }, {
    "year": "2022",
    "reason": "PyCon APAC",
    "title": "Type Erasure in Python",
    "excerpt": "Explore type erasure, a concept from languages like C++. This talk explains what it is, why Python needs it, and demonstrates how to apply it in a CPython extension module.",
    "links": [{
      "source": "Youtube",
      "url": "https://www.youtube.com/watch?v=vhwWcPzvRvk"
    }, {
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2022-type_erasure.pdf"
    }],
    "tags": [
      "cpython",
    ]
  }, {
    "year": "2021",
    "reason": "EuroPython, PyCon TW/APAC",
    "title": "Learn from LL(1) to PEG parser the hard way",
    "excerpt": "Curious about CPython's new PEG parser but not a compiler expert? This talk is for you. It covers the fundamentals, from traditional parsing to PEG, based on the speaker's own learning.",
    "links": [{
      "source":  "Youtube",
      "url": "https://www.youtube.com/watch?v=rlULA4PthKw"
    }, {
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2021-PEG.pdf"
    }],
    "tags": [
      "pep617"
    ]
  }, {
    "year": "2020",
    "reason": "PyCon TW/JP",
    "title": "Time travel: Let’s learn from the history of Python packaging!",
    "excerpt": "Ever wonder about the history of Python packaging? Learn the origins of tools like pip and poetry, and discover how big tech handled packaging before adopting these solutions.",
    "links": [{
      "source": "Youtube",
      "url": "https://www.youtube.com/watch?v=TvFwG2VkpFU"
    }, {
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2020-packaging.pdf"
    }],
    "tags": [
      "pep241", "pep314", "pep345", "pep566",
    ]
  }, {
    "year": "2019",
    "reason": "PyCon TW",
    "title": "The str/bytes nightmare before python2 EOL",
    "excerpt": "Still haunted by Python 2's str vs. bytes nightmare? This talk dissects the root cause and shows the way to handle them in Python 2 and 3.",
    "links": [{
      "source": "Youtube",
      "url": "https://www.youtube.com/watch?v=M5CGocevX9Q"
    }, {
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2019-str_bytes.pdf"
    }],
    "tags": [
      "2to3"
    ]
  }, {
    "year": "2019",
    "reason": "PyCon JP",
    "title": "SupportingPython3 in Large Scale Project",
    "excerpt": "It's the story of migrating one of the world's oldest search engines—Amazon's product search—from Python 2 to 3, focusing on large-scale challenges.",
    "links": [{
      "source": "Youtube",
      "url": "https://www.youtube.com/watch?v=BS-HyV3V7GI"
    }, {
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2019-python3migration.pdf"
    }, {
      "source": "Github",
      "url": "https://github.com/note35/SupportingPython3-notes"
    }],
    "tags": [
      "2to3"
    ]
  }, {
    "year": "2018",
    "reason": "PyCon TW",
    "title": "A Python Engineer Under Giant Umbrella",
    "excerpt": "What's it like for a Python enthusiast in a giant company that doesn't use Python in its core services? This talk shares the journey, from real-world technical demands to hiring standards.",
    "links": [{
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2018-work.pdf"
    }],
    "tags": [
      "career"
    ]
  }, {
    "year": "2017",
    "reason": "Meetup Coffee with Science @ Tokyo",
    "title": "Introduction of CTF and CGC",
    "excerpt": "This slide briefly introduces the types of problems from the Capture the Flag (CTF) competitions I participated in during my master's program.",
    "links": [{
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2017-ctf_cgc.pdf"
    }],
    "tags": [
      "security"
    ]
  }, {
    "year": "2017",
    "reason": "Master Research",
    "title": "CRAXTriage: A coverage based triage system",
    "excerpt": "This is my master's final thesis. I was responsible for the initial concept development and early prototyping stages.",
    "links": [{
      "source": "Slide",
      "url": "https://ieeexplore.ieee.org/document/8073859/"
    }],
    "tags": [
      "security"
    ]
  }, {
    "year": "2017",
    "reason": "PyCon TW",
    "title": "Why do projects fail? Let's talk about the story of Sinon.PY",
    "excerpt": "This talk shares lessons from an unsuccessful open source project to help you avoid common pitfalls before you even start.",
    "links": [{
      "source": "Youtube",
      "url": "https://www.youtube.com/watch?v=5kvgbdC7Bdk",
    }, {
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2017-sinon.pdf"
    }, {
      "source": "Github",
      "url": "https://github.com/note35/sinon"
    }],
    "tags": [
      "open source"
    ]
  }, {
    "year": "2015",
    "reason": "Master Research",
    "title": "Using code coverage as a triage method",
    "excerpt": "This is the initial concept development and early prototyping stages of my master thesis.",
    "links": [{
      "source": "Youtube",
      "url": "https://youtu.be/bKJtygkpJMs"
    }, {
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2015-master_research.pdf"
    }],
    "tags": [
      "security"
    ]
  }, {
    "year": "2014",
    "reason": "Marvell Taiwan",
    "excerpt": "This is a study report from my time on the Compiler team at Marvell. It covers how the GCC backend generates and optimizes machine code.",
    "title": "GCC",
    "links": [{
      "source": "Slide",
      "url": "https://github.com/note35/about/blob/dev/public/slides/2014-GCC.pdf"
    }],
    "tags": [
      "compiler"
    ]
  }
]
