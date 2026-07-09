export const PORTFOLIO_DATA = {
  name: "Azad",
  role: "Full-Stack Web Developer, Software Engineer & Intelligent Systems Specialist",
  college_info: "Pursuing B.Tech in Electrical Engineering from Government Engineering College (GEC) Siwan (2022 - 2026), affiliated with Bihar Engineering University, Patna.",
  
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
  ],

  projects: [
    {
      title: "Agentic-IoT Based Decision Support System For Smart Agriculture",
      stack: ["GPT-4o-Mini", "Node.js", "IoT Components", "Arduino", "Raspberry Pi", "RESTful API", "MQTT Protocol"],
      description: "Integrates physical IoT devices (sensors, actuators) with an AI-powered cloud backend to automate precise irrigation metrics, monitor live crop health, and execute intent-based operational tasks via localized NLP parsing."
    },
    {
      title: "Training and Placement Cell Portal",
      stack: ["#FullStackProject", "RBAC System", "N-Tier Architecture"],
      description: "An advanced RBAC application featuring an N-Tier architecture (Route-Controller-Service-Model) that safeguards student and admin modules. Houses custom token middleware, automated OTP validation layers, and structural Frontend-to-Backend Service Mirroring."
    },
    {
      title: "Technical Club Website",
      stack: ["React.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
      description: "Architected a dedicated institution platform featuring a custom Automated Credentialing System designed to dynamically serve verified cryptographic performance certificates to students by cleanly linking real-time backend datasets. Live at https://www.techkshitiz.in"
    },
    {
      title: "Certificate Management and Generation",
      stack: ["React.js", "Node.js", "MongoDB"],
      description: "Built a certificate generation and verification system that issues signed PDF certificates, stores records in MongoDB, provides secure access links and supports bulk uploads."
    }
  ],

  skills_categories: [
    { category: "Languages & Core", items: ["JavaScript", "TypeScript", "Java", "C++", "ABAP", "SQL"] },
    { category: "AI & Intelligent Systems", items: ["LLM Integration", "RAG", "Agentic IoT", "Embedded Systems", "System Prompts"] },
    { category: "Frontend & Mobile", items: ["React.js", "Next.js", "React Native", "Redux Toolkit", "APIs Integration"] },
    { category: "Backend & Cloud Dev", items: ["Node.js", "Express.js", "Spring Boot", "ABAP Cloud (RAP)", "Docker", "AWS Cloud", "MongoDB"] }
  ],

  education: [
    { college: "Government Engineering College, Siwan", period: "2022 - 2026", details: "B.Tech in Electrical Engineering — Bihar Engineering University, Patna", metric: "CGPA 7.47/10" },
    { college: "Government Polytechnic, Chhapra", period: "2019 - 2022", details: "Diploma in Computer Science and Engineering — SBTE Bihar", metric: "CGPA 8.48/10" }
  ],

  certifications: [
    { title: "SAP ABAP Cloud Backend Developer", issuer: "Certified at BIPARD, Patna" },
    { title: "IoT (NPTEL) — Elite Silver (86%)", issuer: "Hardware-Software integration & Real-time data parsing" },
    { title: "Cloud Computing (NPTEL)", issuer: "Architecting scalable, highly distributed cloud infrastructure systems" }
  ]
};