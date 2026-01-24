export interface ResumeItem {
  duration: string,
  employer: string,
  job_title: string,
  job_description?: string,
  languages?: Array<string>
}

export const ResumeItems: Array<ResumeItem> = [
  {
    "duration": "2021-03 - Present",
    "employer": "Google Maps",
    "job_title": "Software Engineer (TL)",
    "job_description": `
*Completed Projects*

**TL – 1st Backend Tier for Google Reviews Offline Consumption** (2025-):

- Backend owner of the offline‑consumption stack. Revamped the entire stack, delivering a cross‑team aligned architecture that reduces latency and ownership complexity and enhances extensibility.

**TL – i18n & l10n UGC Consumption UX** (2022-):

- Led data-driven initiatives to enhance the review consumption UX across human languages, leveraging counterfactual logging enabled experiments to inform AI-powered strategies. 1) Introduced an AI-powered multilingual ranking algorithm for review consumption UX. 2) Standardized the UI across platforms with user metrics to optimize AI-driven content delivery. 3) Expanded i18n coverage for the AI-generated topic summarization.
- Built TB-level data pipelines, cutting storage costs by 32% and processing time by 80% on billions of user generated contents. 
- Improved translation reliability (K-level QPS) from 95% to 99.9% using a hybrid approach, ensuring data availability for AI initiatives.

**TL - Media Upload Reliability** (2024-2025):

- Improved media uploading reliability by identifying opportunities and developing a cross-platform end-to-end user metrics reliability dashboard.
- Developed media upload service with new reliability enhancement feature.

**Miscellaneous:**

- Increased place answers by 25% by implementing location-based notifications on Android within a 2% iCVR goal. This data is integral for the development and refinement of AI-driven strategic initiatives.
- Contributed to PyType, PyCLIF, and CPython, and presented at Python conferences. (2022-2024)
- Hosted 3 interns (2022, 2023, 2024).
    `,
    "languages": ["C++", "Java", "Python", "Colab / SQL", "TypeScript", "Apache Beam", "End‑to‑End Product Experience", "Cross‑functional Team Leadership", "Multi‑Quarter Strategic Planning"]
  }, {
    "duration": "2017-07 - 2021-02",
    "employer": "Amazon Product Search",
    "job_title": "Software Engineer (IC/TL)",
    "job_description": `
- Led automation projects for metadata management: 1) Significantly accelerated client experimentation and AI feature deployment. A/B testing time was cut from 50 to 10 days, accelerating AI innovation time-to-market. 2) Saving 10% annual costs for 2 years to free up resources for investment in AI projects.
- Led a client information management system project, improving onboarding and data collection, and enabling AI solution integration. Reduced onboarding time and increased client satisfaction.
- Implemented an innovative search service debugger on serverless infra, which replaced the legacy server-based service, yielding a 99% reduction in operational costs.
- Led Python 3 migration project, enabling adoption of modern AI tools and workflows, shared to PyCon JP.
- Hosted 2 interns.
    `,
    "languages": ["Flask", "React", "Plotly", "JamStack", "Serverless", "AWS", "Cross‑team Enablement"]
  }, {
    "duration": "2016-03 - 2017-07",
    "employer": "IBM Security",
    "job_title": "Software Engineer (IC)",
    "job_description": `
- Drove the JavaScript framework migration from Dojo 1.6 to 1.0 to improve the XGS frontend accessibility.
    `,
    "languages": ["JavaScript", "Java", "C++"]
  }, {
    "duration": "2015-11 - 2015-12",
    "employer": "HENNGE",
    "job_title": "Intern",
    "job_description": `
- Developed scripts to convert translation file format, and helped translate product interface from English to Traditional Chinese via Transifex.
    `,
    "languages": ["Python", "JavaScript"]
  }, {
    "duration": "2015-07 - 2015-08",
    "employer": "Andes",
    "job_title": "Intern",
    "job_description": `
- Developed electronic design automation (EDA) tools to verify the test coverage.
    `,
    "languages": ["Python", "dot"]
  }, {
    "duration": "2014-07 - 2014-08",
    "employer": "Marvell",
    "job_title": "Intern",
    "job_description": `
- Investigated GCC toolchain.
- Tested customized OpenCL library by standard benchmark tools on different ARM devices.
    `,
    "languages": ["C"]
  }, {
    "duration": "2014 - 2015",
    "employer": "NYCU",
    "job_title": "Master student",
    "job_description": `
- Software Quality Laboratory (SQLab), Shih-Kun Huang Professor
    `,
    "languages": []
  }, {
    "duration": "2010 - 2014",
    "employer": "NCU",
    "job_title": "Undergraduate student",
    "job_description": `
- Co-founded Community of Network and Open Source club, and planned basic Linux class with proxmox.
- Worked for the Computer Center's frontdesk, and planned open Linux courses.
    `,
    "languages": []
  }
]
