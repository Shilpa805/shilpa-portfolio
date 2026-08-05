export const personalInfo = {
  name: "Shilpa Kumari",
  title: "Full-Stack MERN Developer & Software Engineer",
  location: "Pathankot, Punjab, India",
  email: "shilpakumari12911@gmail.com",
  phone: "+91-9316220198",
  linkedin: "https://www.linkedin.com/in/shilpa-kumari08/",
  github: "https://github.com/Shilpa805/",
  portfolio: "https://shilpabytes.vercel.app/",
  summary: "Results-driven Software Engineer & Full-Stack Developer with expertise in building high-performance web applications using MERN Stack, React.js, Node.js, and MongoDB. Secured TCS Digital offer (₹7 LPA), solved 500+ DSA problems, and contributed to active open-source repositories.",
  tcsOffer: "TCS Digital Offer Holder (₹7 LPA)",
  dsaCount: "500+ DSA Solved",
  cgpa: "7.48 CGPA (B.Tech CSE)"
};

export const stats = [
  { label: "DSA Problems Solved", value: "500+", detail: "LeetCode, GFG & HackerRank", icon: "Code2" },
  { label: "Campus Recruitment", value: "₹7 LPA", detail: "TCS Digital Profile Offer", icon: "Award" },
  { label: "Contest Retrieval API", value: "65%", detail: "Query Time Reduced (1.2s → 400ms)", icon: "Zap" },
  { label: "Open Source Tests", value: "577/577", detail: "Passing Suites in NitroStack PR #262", icon: "GitPullRequest" }
];

export const skills = {
  Languages: ["Java", "JavaScript", "C++", "Python", "PHP", "SQL", "HTML", "CSS"],
  Technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "REST APIs", "JWT Authentication", "Tailwind CSS", "WordPress"],
  "Core Concepts": ["DSA", "OOP", "DBMS", "Authentication & Authorization", "System Design Basics", "Caching", "Indexing", "Query Optimization"],
  Tools: ["Git", "GitHub", "Postman", "MongoDB Compass", "VS Code", "Vercel", "Render", "Web3Forms"],
  "Soft Skills": ["Communication", "Leadership", "Problem Solving", "Adaptability"]
};

export const experience = [
  {
    role: "Web Development Intern",
    company: "Inglu Global",
    type: "Remote",
    period: "Jan'26 – Jun'26",
    description: "Developed and enhanced UrbanBeat, a responsive youth culture and event discovery platform during my internship.",
    highlights: [
      "Built using WordPress, HTML5, CSS3, JavaScript, and PHP with responsive glassmorphism UI.",
      "Designed interactive event cards, sticky navigation, and smooth UI animations.",
      "Integrated Web3Forms API for asynchronous contact & newsletter form submissions with client-side validation and email notifications.",
      "Optimized performance and accessibility through lazy loading and frontend enhancements, deploying on Vercel."
    ],
    tech: ["WordPress", "HTML5", "CSS3", "JavaScript", "PHP", "Web3Forms", "Git", "GitHub", "Vercel"],
    github: "https://github.com/Shilpa805/urbanbeat-wordpress",
    live: "https://urbanbeat-wordpress.vercel.app/"
  }
];

export const projects = [
  {
    title: "Contest Tracker",
    period: "May'25 – Jun'25",
    role: "Full-Stack Developer",
    subtitle: "Real-time Coding Contests Platform",
    description: "Full-stack application tracking 100+ coding contests across multiple competitive programming platforms with optimized database architecture.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    metrics: [
      "Designed optimized MongoDB schemas with indexing, reducing query time by 65%",
      "Improved API response time from 1.2s down to 400ms through query optimization",
      "Developed 15+ REST APIs with pagination and filtering for scalable contest retrieval"
    ],
    github: "https://github.com/Shilpa805/CONTEST-TRACKER-APP",
    live: "https://contest-tracker-app-lime.vercel.app/",
    featured: true,
    accent: "cyan"
  },
  {
    title: "SociaLink",
    period: "Jun'24 – Jul'24",
    role: "Full-Stack Developer",
    subtitle: "Real-Time Chat & Networking Application",
    description: "Real-time communication application with instant messaging storage, user activity tracking, secure JWT authentication, and Cloudinary media integration.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.IO", "Cloudinary", "JWT"],
    metrics: [
      "Implemented real-time bidirectional communication using Socket.IO events",
      "Designed secure backend APIs with JWT authentication, HTTP-only cookies, and protected routes",
      "Integrated Cloudinary for efficient media handling and optimized communication"
    ],
    github: "https://github.com/Shilpa805/SociaLink",
    live: "https://socialink-vl14.onrender.com/",
    featured: true,
    accent: "violet"
  },
  {
    title: "UrbanBeat Discovery Platform",
    period: "Jan'26 – Jun'26",
    role: "Frontend Developer Intern",
    subtitle: "Youth Culture & Event Discovery Portal",
    description: "Modern, high-performance portal designed for event discovery, glassmorphic UI interactions, lazy loading image optimization, and Web3Forms email alerts.",
    tech: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "Web3Forms", "Vercel"],
    metrics: [
      "Integrated Web3Forms API for zero-backend asynchronous form submissions",
      "Achieved high performance & accessibility scores via lazy loading and clean UI hierarchy"
    ],
    github: "https://github.com/Shilpa805/urbanbeat-wordpress",
    live: "https://urbanbeat-wordpress.vercel.app/",
    featured: true,
    accent: "emerald"
  }
];

export const openSource = [
  {
    project: "NitroStack",
    tech: ["TypeScript", "Accessibility", "A11y", "Dark Mode"],
    period: "Jul'26",
    summary: "Merged PR #262 improving accessibility for NitroStack's MCP documentation interface.",
    details: [
      "Preserved existing manual theme preferences while introducing dark-mode & reduced-motion accessibility fixes.",
      "Validated with 577/577 tests passing across 50 complete test suites."
    ],
    prUrl: "https://github.com/Shilpa805"
  }
];

export const achievements = [
  {
    title: "TCS Digital Profile Offer (₹7 LPA)",
    category: "Campus Placement",
    description: "Secured job offer from Tata Consultancy Services (TCS) for the premium Digital profile (₹7 LPA) through competitive campus recruitment.",
    icon: "Briefcase"
  },
  {
    title: "500+ Data Structures & Algorithms",
    category: "Competitive Coding",
    description: "Solved 500+ problem statements across top competitive programming platforms including LeetCode, GeeksforGeeks, and HackerRank.",
    icon: "Code2"
  },
  {
    title: "Flipkart Hackathon Round 3 Qualifier",
    category: "Hackathons",
    description: "Qualified for Round 3 of Flipkart Hackathon hosted via Unstop, competing against engineering teams across India.",
    icon: "Trophy"
  }
];

export const certificates = [
  {
    title: "Full-Stack Development Using MERN Stack",
    issuer: "CipherSchools",
    date: "Jul'24",
    link: "#"
  },
  {
    title: "Software Engineering: Implementation and Testing",
    issuer: "Coursera",
    date: "Apr'24",
    link: "#"
  },
  {
    title: "Server-Side Scripting",
    issuer: "Coursera",
    date: "Mar'24",
    link: "#"
  }
];

export const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    score: "CGPA: 7.48",
    period: "Aug'22 – Jun'26",
    badge: "B.Tech CSE"
  },
  {
    institution: "Kendriya Vidyalaya No1 School",
    location: "Pathankot, Punjab",
    degree: "Intermediate (12th Grade)",
    score: "Percentage: 84.8%",
    period: "Aug'21 – Apr'22",
    badge: "12th Grade"
  },
  {
    institution: "Air Force School",
    location: "Jamnagar, Gujarat",
    degree: "Matriculation (10th Grade)",
    score: "Percentage: 88.4%",
    period: "Apr'19 – Mar'20",
    badge: "10th Grade"
  }
];

export const training = [
  {
    title: "MERN Stack Development Training",
    organization: "CipherSchools",
    period: "Jun'24 – Jul'24",
    description: "Completed 84+ hours of intensive MERN Stack training covering frontend development, RESTful backends, MongoDB schemas, and production deployment.",
    projectBuilt: "Built a full-stack Notes Application using React.js, Node.js, Express.js, and MongoDB."
  }
];
