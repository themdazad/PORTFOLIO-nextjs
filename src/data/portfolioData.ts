// src/data/portfolioData.ts

export const portfolioData = {
  name: "Azad",
  role: "Full-Stack Web Developer & Software Engineer",
  college: "Government Engineering College (GEC) Siwan, Bihar (7th Semester, Electrical Engineering)",
  
  skills: [
    "Next.js", "React.js", "Node.js", "Express.js", "MERN Stack", 
    "Java (DSA)", "Flutter", "Docker", "AWS EC2", "SAP/ABAP"
  ],

  projects: [
    {
      title: "AI-Based Decision Support System for Smart Agriculture",
      description: "7th-sem EE Minor Project. An IoT system integrated with an AI backend to automate precise irrigation metrics via NLP and localized intent parsing using MQTT protocol.",
      techStack: ["Node.js", "IoT", "MQTT", "Gemini API"]
    },
    {
      title: "Training and Placement (TnP) Cell Website for GEC Siwan",
      description: "A placement portal featuring an integrated AI career assistant powered by RAG (Retrieval-Augmented Generation).",
      techStack: ["Next.js", "React", "Express.js", "RAG"]
    },
    {
      title: "E-Commerce App using MERN",
      description: "A fully functional web app with cart system and payment gateway integration.",
      techStack: ["MongoDB", "Express", "React", "Node"]
    }
  ],

  experience: [
    {
      role: "Front-End Developer Intern",
      company: "Acceptare Technology Pvt Ltd",
      duration: "Aug - Dec 2025",
      bullets: ["Responsible for managing client production websites.", "Fixed critical UI bugs."]
    }
  ]
};