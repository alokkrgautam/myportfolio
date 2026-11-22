// Edit your content here. Values containing "your" are hidden until you fill them in.
export const profile = {
  name: "Alok Kumar Gautam",
  initials: "AG",
  title: "AI Engineer & Full Stack Developer",
  intro: "Building AI-powered solutions and modern web applications.",
  brand: ["AI Engineer", "Full Stack Developer", "Google Student Ambassador", "Training & Placement Coordinator"],
  role: "AI Engineer & Full Stack Developer",
  education: "B.Tech in Computer Science, Government Engineering College, Sheikhpura (CGPA 8.67) · 2024 – 2027",
  objective:
    "To build intelligent, real-world software that combines AI with modern full stack engineering, and to grow as an engineer and leader in a product-focused team.",
  summary:
    "I'm a Computer Science student with hands-on experience in full stack web development, Generative AI, cybersecurity and digital forensics. I enjoy building applications that solve real-world problems, from NGO volunteer platforms to AI-powered tools.",
  email: "mailforalok01@gmail.com",
  github: "https://github.com/alokkrgautam",
  linkedin: "https://www.linkedin.com/in/alokkumargautam/",
  leetcode: "https://leetcode.com/u/yourleetcode", // TODO: add your username (hidden until then)
  location: "Bihar, India", // e.g. "Bihar, India"
  resume: "/resume.pdf",
};

export const nav = ["home", "about", "skills", "projects", "experience", "contact"];

export const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React"],
  Backend: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
  "AI & ML": ["Python", "Generative AI", "NumPy", "Pandas", "TensorFlow", "Scikit-Learn"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Canva"],
  "Core CS": ["Data Structures & Algorithms", "OOP", "Operating Systems", "C / C++"],
  Security: ["Cybersecurity", "Digital Forensics", "Incident Response"],
};

const repos = "https://github.com/alokkrgautam?tab=repositories"; // TODO: replace with each repo's own link

export const projects = [
  { title: "SkillBridge", category: "Full Stack", image: "", stack: ["React", "Node.js", "WebSocket"],
    text: "Platform connecting volunteers with NGOs through role-based dashboards, with authentication, opportunity posting and real-time chat.",
    github: repos, demo: "" },
  { title: "Weather App", category: "Web Development", image: "", stack: ["JavaScript", "OpenWeather API"],
    text: "Responsive weather application with location-based search and live forecasts.",
    github: repos, demo: "" },
  { title: "Portfolio Website", category: "Web Development", image: "", stack: ["HTML", "CSS", "JavaScript"],
    text: "Personal portfolio deployed live on Vercel.",
    github: repos, demo: "https://my-portfolio-vrzp.vercel.app" },
];

export const experience = [
  { position: "Google Student Ambassador – Gemini Program", org: "Google · Remote", duration: "Jun 2026 – Present",
    points: ["Selected as a Google Student Ambassador (GSA) 2026, representing the Gemini Program.",
             "Promote Google technologies through workshops, hackathons and awareness sessions."] },
  { position: "Student Coordinator – Training & Placement Cell", org: "Government Engineering College, Sheikhpura", duration: "Jan 2026 – Jun 2026",
    points: ["Active in technical workshops, sports participation and campus events with a collaborative team approach."] },
  { position: "Web Developer Intern – SkillBridge Project", org: "Infosys Springboard · Remote", duration: "Feb 2026 – Apr 2026",
    points: ["Completed Internship 6.0 (B13): built SkillBridge, a platform connecting volunteers with NGOs.",
             "Worked through structured modules on software development and emerging technologies, industry practices and coding standards."] },
  { position: "Intern (Best Performer) – DFIR", org: "Center of Excellence in DFIR, IIMT College of Engineering", duration: "Jun – Aug 2024",
    points: ["Investigated cyber incidents, analyzed forensic evidence and applied security protocols.",
             "Collaborated with mentors from Future Crime Research Foundation (FCRF)."] },
  { position: "Intern – AI TechSaksham", org: "Microsoft & SAP CSR Initiative", duration: "May – Jul 2024",
    points: ["Built foundational AI projects and explored real-world applications."] },
];

export const certifications = [
  "Web Developer Intern – SkillBridge Project (Infosys Springboard Internship 6.0)",
  "Best Performer – Digital Forensics & Incident Response Internship",
  "Artificial Intelligence: Transformative Learning (Microsoft & SAP TechSaksham)",
  "Python Essentials 1 (Cisco)",
  "JavaScript Essentials (Cisco)",
  "C++ Essentials (Cisco)",
  "Generative AI Literacy (FutureSkills Prime – NASSCOM)",
  "Mastercard Cybersecurity Job Simulation",
];
