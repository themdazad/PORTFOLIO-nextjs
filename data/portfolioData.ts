//data/portfolioData.ts

export const PORTFOLIO_DATA = {
  name: "Azad",
  role: "Full-Stack Web Developer & Software Engineer",
  college: "Government Engineering College (GEC) Siwan, Bihar (7th Semester, Electrical Engineering)",

  skills: [
  { 
    category: "Languages & Core", 
    items: ["JavaScript", "TypeScript", "Java", "C++", "ABAP", "SQL"] 
  },
  { 
    category: "AI & Intelligent Systems", 
    items: ["LLM Integration", "RAG", "Agentic IoT", "Embedded Systems", "System Prompts"] 
  },
  { 
    category: "Frontend & Mobile", 
    items: ["React.js", "Next.js", "React Native", "Redux Toolkit", "APIs Integration"] 
  },
  { 
    category: "Backend & Cloud Dev", 
    items: ["Node.js", "Express.js", "Spring Boot", "ABAP Cloud (RAP)", "Docker", "AWS Cloud", "MongoDB"] 
  }
  ],

  projects:[
      {
        id: "agentic-portfolio-assistant",
        title: "Personal Portfolio",
        tagline: "An AI-powered portfolio assistant with autonomous browser actions.",
        description:
          "Designed a premium portfolio experience with fluid GSAP animations, interactive canvas effects, and an Agentic AI pipeline powered by Gemini. The assistant understands user intent and can autonomously execute browser actions such as navigating across multiple social platforms.",
        tech: [
          "Next.js",
          "TypeScript",
          "Google GenAI SDK",
          "GSAP",
          "Tailwind CSS",
        ],
        screenshots: [
          "https://placehold.co/600x400",
          "https://placehold.co/600x400",
          "https://placehold.co/600x400"
        ],
        github: "",
        live: "https://themdazad.vercel.app/"
      },
      {
        id: "ai-decision-support-system-smart-agriculture",
        title: "AI-Based Decision Support System for Smart Agriculture",
        tagline: "AI and IoT-powered precision irrigation system.",
        description:
          "A 7th-semester Electrical Engineering minor project integrating IoT sensors with an AI backend to automate irrigation decisions. The system uses MQTT for device communication and Gemini API for natural language understanding and localized intent parsing.",
        tech: [
          "Node.js",
          "IoT",
          "MQTT",
          "Gemini API"
        ],
        screenshots: [
          "https://placehold.co/600x400",
          "https://placehold.co/600x400"
        ],
        github: "",
        live: ""
      },
      {
        id: "tnp-cell-portal",
        title: "Training and Placement Cell Portal",
        tagline: "Placement portal with an AI-powered career assistant.",
        description:
          "Developed a modern Training & Placement portal featuring student, recruiter, and administrator dashboards. Integrated a Retrieval-Augmented Generation (RAG) based AI assistant to provide career guidance, placement resources, and company-specific information.",
        tech: [
          "MERN",
        ],
        screenshots: [
          "https://placehold.co/600x400",
          "https://placehold.co/600x400",
          "https://placehold.co/600x400"
        ],
        github: "",
        live: "https://training-and-placement-cell-gec-siwan.vercel.app/"
      },
      {
        id: "techkshitiz-website",
        title: "Technical Club Website",
        tagline: "Modern web platform for the technical club.",
        description:
          "A responsive website for the technical club, featuring event announcements, member profiles, and resource sharing.",
        tech: [
          "MERN",
          "GSAP",
        ],
        screenshots: [
          "https://placehold.co/600x400",
          "https://placehold.co/600x400"
        ],
        github: "",
        live: "https://www.techkshitiz.in/"
      }
  ],
  education: [
  { college: "Government Engineering College, Siwan", period: "2022 - 2026", details: "B.Tech in Electrical Engineering — Bihar Engineering University, Patna", metric: "CGPA 7.47/10" },
  { college: "Government Polytechnic, Chhapra", period: "2019 - 2022", details: "Diploma in Computer Science and Engineering — SBTE Bihar", metric: "CGPA 8.48/10" }
],
experience: [
  {
    role: "Full-Stack Developer Intern",
    company: "Acceptare Technology Pvt Ltd",
    duration: "Aug - Dec 2025",
    skills: ["React.js", "Next.js", "API Integration", "UI Optimization"],
    bullets: [
      "Responsible for managing and adding features to active client production websites.",
      "Identified, isolated, and fixed critical UI glitches and cross-device responsiveness bugs."
    ]
  },
  {
    role: "Front-End Developer Intern",
    company: "Sishar Global Pvt. Ltd. (B2B Startup)",
    duration: "July - Aug 2024",
    skills: ["PHP", "Laravel", "Git", "Responsive Design"],
    bullets: [
      "Assisted in the architecture and development of highly responsive consumer user interfaces using PHP and Laravel framework.",
      "Collaborated with cross-functional team configurations using Git version control to guarantee clean deployment workflows."
    ]
  }
]

};