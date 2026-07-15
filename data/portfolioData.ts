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
        id: "autonomous-agentic-portfolio-assistant",
        title: "Autonomous Agentic Portfolio Assistant",
        tagline: "An AI-powered portfolio assistant with autonomous browser actions.",
        description:
          "Designed and engineered a premium macOS-inspired glassmorphic portfolio experience with fluid GSAP animations, interactive canvas effects, and an Agentic AI pipeline powered by Gemini Function Calling via OpenRouter. The assistant understands user intent and can autonomously execute browser actions such as navigating across multiple social platforms.",
        tech: [
          "Next.js",
          "TypeScript",
          "Google GenAI SDK",
          "GSAP",
          "Tailwind CSS",
          "OpenRouter"
        ],
        screenshots: [
          "https://placehold.co/600x400",
          "https://placehold.co/600x400",
          "https://placehold.co/600x400"
        ],
        github: "",
        live: ""
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
        id: "tnp-cell-website-gec-siwan",
        title: "Training and Placement (TnP) Cell Website for GEC Siwan",
        tagline: "Placement portal with an AI-powered career assistant.",
        description:
          "Developed a modern Training & Placement portal featuring student, recruiter, and administrator dashboards. Integrated a Retrieval-Augmented Generation (RAG) based AI assistant to provide career guidance, placement resources, and company-specific information.",
        tech: [
          "Next.js",
          "React",
          "Express.js",
          "RAG",
          "MongoDB"
        ],
        screenshots: [
          "https://placehold.co/600x400",
          "https://placehold.co/600x400",
          "https://placehold.co/600x400"
        ],
        github: "",
        live: ""
      },
      {
        id: "mern-ecommerce-app",
        title: "E-Commerce App using MERN",
        tagline: "Full-stack shopping platform with secure payments.",
        description:
          "A complete MERN-stack e-commerce application featuring user authentication, product management, shopping cart functionality, order tracking, and payment gateway integration for a seamless online shopping experience.",
        tech: [
          "MongoDB",
          "Express.js",
          "React",
          "Node.js",
          "JWT",
          "Stripe"
        ],
        screenshots: [
          "https://placehold.co/600x400",
          "https://placehold.co/600x400"
        ],
        github: "",
        live: ""
      }
  ],
  education: [
  { college: "Government Engineering College, Siwan", period: "2022 - 2026", details: "B.Tech in Electrical Engineering — Bihar Engineering University, Patna", metric: "CGPA 7.47/10" },
  { college: "Government Polytechnic, Chhapra", period: "2019 - 2022", details: "Diploma in Computer Science and Engineering — SBTE Bihar", metric: "CGPA 8.48/10" }
],
experience: [
  {
    role: "Front-End Developer Intern",
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