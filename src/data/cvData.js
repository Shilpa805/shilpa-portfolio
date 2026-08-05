export const PERSONAL_INFO = {
  name: "Shilpa Kumari",
  role: "Full Stack Developer",
  tagline: "Building scalable web applications with modern web technologies and creating delightful user experiences.",
  email: "shilpakumari12911@gmail.com",
  phone: "+91-9316220198",
  location: "Punjab / Himachal Pradesh, India",
  github: "https://github.com/Shilpa805/",
  linkedin: "https://www.linkedin.com/in/shilpa-kumari08/",
  portfolio: "https://shilpabytes.vercel.app/",
  tcsBadge: "TCS Digital Offer Holder (₹7 LPA)",
  aboutStory: [
    "I am a Computer Science undergrad at Lovely Professional University (LPU '26) driven by solving complex engineering problems and crafting high-performance full-stack applications.",
    "From optimizing database query execution times by 65% on Contest Tracker to engineering real-time WebSocket communication channels and contributing to open-source developer tooling like NitroStack, I focus on clean code, scale, and user delight.",
    "Having secured a TCS Digital offer (₹7 LPA) through campus recruitment and solved 500+ competitive programming challenges across LeetCode, GFG, and HackerRank, I thrive in fast-paced software development environments."
  ]
};

export const PROJECTS = [
  {
    id: "contest-tracker",
    title: "Contest Tracker",
    subtitle: "Real-Time Competitive Programming Aggregator & Platform",
    description: "Full-stack MERN application tracking 100+ coding contests across Codeforces, CodeChef, and LeetCode with intelligent platform filtering and query optimization.",
    longDescription: "Contest Tracker solves the fragmented competitive programming experience by aggregating live and upcoming contest data into a unified dashboard. Engineered custom indexing strategy in MongoDB that cut query latency by 65% (1.2s to 400ms) across 15+ RESTful endpoints.",
    metrics: [
      "Reduced database query execution time by 65% (1.2s to 400ms)",
      "Engineered 15+ RESTful APIs with pagination & filtering",
      "Aggregates 100+ live & upcoming contests automatically"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    liveUrl: "https://contest-tracker-app-lime.vercel.app/",
    githubUrl: "https://github.com/Shilpa805/CONTEST-TRACKER-APP",
    caseStudy: {
      problem: "Competitive programmers struggle to keep track of overlapping contest schedules across multiple coding platforms, leading to missed rounds and suboptimal preparation.",
      solution: "Built a centralized aggregator with real-time API sync, indexed MongoDB schemas, custom platform filters, and bookmarking functionality.",
      keyLearnings: [
        "Mastered database indexing and query optimization techniques in MongoDB",
        "Implemented RESTful API caching and payload compression",
        "Designed clean dark-mode UI with high contrast accessibility"
      ]
    }
  },
  {
    id: "socialink",
    title: "SociaLink",
    subtitle: "Real-Time WebSocket Messaging & Media Platform",
    description: "High-performance real-time messaging web application featuring low-latency Socket.IO event channels, JWT cookie authentication, and Cloudinary media processing.",
    longDescription: "SociaLink is a full-stack real-time communication platform that enables instant room-based and direct messaging. Leveraged HTTP-only cookies for secure JWT session storage, protected route middleware, and Cloudinary API for asynchronous media uploads.",
    metrics: [
      "Sub-100ms real-time message delivery via Socket.IO events",
      "Secure authentication with HTTP-only JWT cookies",
      "Asynchronous Cloudinary media pipeline for high-res images"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Cloudinary", "JWT"],
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=1200&q=80",
    liveUrl: "https://socialink-vl14.onrender.com/",
    githubUrl: "https://github.com/Shilpa805/SociaLink",
    caseStudy: {
      problem: "Traditional chat platforms often suffer from high polling overhead, insecure client-side token storage, and unoptimized media uploads.",
      solution: "Designed a pure event-driven WebSocket architecture with server-side HTTP-only JWT cookies and cloud media streaming.",
      keyLearnings: [
        "Handled bidirectional Socket.IO events and reconnect states",
        "Implemented secure JWT authentication pattern preventing XSS token leaks",
        "Optimized client state synchronization with React hooks"
      ]
    }
  },
  {
    id: "urbanbeat",
    title: "UrbanBeat Discovery Platform",
    subtitle: "Responsive Youth Culture & Event Discovery Portal",
    description: "Event discovery platform developed during web development internship at Inglu Global, featuring glassmorphism UI, sticky navigation, and Web3Forms API email integration.",
    longDescription: "Built and enhanced UrbanBeat platform to deliver a modern, interactive youth culture discovery experience. Integrated Web3Forms API for zero-backend contact processing, lazy-loaded visual assets, and customized responsive layouts.",
    metrics: [
      "Delivered production platform during 6-month remote internship",
      "Integrated Web3Forms API for instant email notifications",
      "Optimized client asset loading for sub-second first contentful paint"
    ],
    techStack: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "Web3Forms API", "Vercel"],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80",
    liveUrl: "https://urbanbeat-wordpress.vercel.app/",
    githubUrl: "https://github.com/Shilpa805/urbanbeat-wordpress",
    caseStudy: {
      problem: "Youth organizations needed an engaging, modern discovery platform that loads quickly on mobile devices with zero server maintenance overhead for contact forms.",
      solution: "Developed custom responsive layouts with glassmorphism UI cards, Web3Forms integration, and Vercel edge deployment.",
      keyLearnings: [
        "Bridged traditional CMS architecture with modern frontend asset delivery",
        "Built responsive interfaces prioritizing mobile touch ergonomics",
        "Configured continuous deployment pipelines on Vercel"
      ]
    }
  },
  {
    id: "nitrostack",
    title: "NitroStack Open Source Contribution",
    subtitle: "Developer Tooling Accessibility & UI Performance",
    description: "Merged PR #262 in NitroStack codebase, enhancing dark mode contrast, reduced-motion accessibility, and keyboard navigation across 50 test suites.",
    longDescription: "Contributed to NitroStack, a modern developer ecosystem project. Merged PR #262 to resolve accessibility bottlenecks in documentation interfaces, ensuring full compliance with WCAG standards while maintaining 577/577 passing test suites.",
    metrics: [
      "Merged PR #262 in main repository branch",
      "577/577 test assertions passing across 50 test suites",
      "Enhanced WCAG accessibility & reduced-motion compliance"
    ],
    techStack: ["TypeScript", "Accessibility (A11y)", "Dark Mode", "Jest / Testing"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    liveUrl: "https://github.com/Shilpa805",
    githubUrl: "https://github.com/Shilpa805",
    caseStudy: {
      problem: "Developer documentation interfaces lacked proper contrast ratios for dark mode and failed reduced-motion accessibility standards for neurodivergent users.",
      solution: "Audited components, implemented CSS media query triggers for reduced motion, improved ARIA states, and verified test suites.",
      keyLearnings: [
        "Navigated large open-source TypeScript codebases",
        "Enforced strict WCAG AA/AAA accessibility guidelines",
        "Wrote automated unit & regression tests"
      ]
    }
  }
];

export const EXPERIENCES = [
  {
    id: "tcs-digital",
    role: "Software Engineer (TCS Digital Offer)",
    company: "Tata Consultancy Services (TCS)",
    period: "Campus Recruitment Offer (₹7 LPA)",
    location: "India",
    badge: "Selected for TCS Digital Tier",
    description: [
      "Cleared competitive TCS Digital campus selection rounds, securing the premium ₹7 LPA software engineering role.",
      "Demonstrated advanced proficiency in Data Structures, Algorithms, System Design basics, and Full-Stack problem solving."
    ],
    skills: ["Data Structures", "Algorithms", "System Design", "Java", "SQL"]
  },
  {
    id: "inglu-internship",
    role: "Web Development Intern",
    company: "Inglu Global",
    period: "Jan'26 – Jun'26",
    location: "Remote",
    badge: "Internship",
    description: [
      "Developed and enhanced UrbanBeat, a responsive youth culture and event discovery platform.",
      "Utilized WordPress, PHP, JavaScript, HTML5, and CSS3 to implement dynamic UI components and interactive event cards.",
      "Integrated Web3Forms API for asynchronous user submissions and email notifications.",
      "Managed project lifecycle with Git/GitHub, deploying builds to Vercel for high-availability hosting."
    ],
    skills: ["WordPress", "PHP", "JavaScript", "HTML5/CSS3", "Web3Forms", "Git", "Vercel"]
  },
  {
    id: "cipherschools-training",
    role: "MERN Stack Development Training",
    company: "CipherSchools",
    period: "Jun'24 – Jul'24",
    location: "Online",
    badge: "84+ Hours Certified",
    description: [
      "Completed rigorous 84+ hours hands-on training in MERN (MongoDB, Express, React, Node) stack development.",
      "Built 'Notes App' capstone project featuring full CRUD operations, user authentication, and responsive frontend interface."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "CRUD Operations"]
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: [
      { name: "Java" },
      { name: "JavaScript" },
      { name: "C++" },
      { name: "Python" },
      { name: "PHP" },
      { name: "SQL" },
      { name: "HTML5 / CSS3" }
    ]
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Socket.IO" },
      { name: "Tailwind CSS" },
      { name: "REST APIs" },
      { name: "JWT Auth" },
      { name: "WordPress" }
    ]
  },
  {
    title: "Core Engineering Concepts",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming (OOP)" },
      { name: "Database Management (DBMS)" },
      { name: "Authentication & Authorization" },
      { name: "System Design Basics" },
      { name: "Caching & Indexing" },
      { name: "Query Optimization" }
    ]
  },
  {
    title: "Developer Tools & Platforms",
    skills: [
      { name: "Git & GitHub" },
      { name: "Postman" },
      { name: "MongoDB Compass" },
      { name: "VS Code" },
      { name: "Vercel" },
      { name: "Render" },
      { name: "Web3Forms API" }
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    value: "500+",
    label: "DSA Problems Solved",
    sublabel: "Across LeetCode, GFG & HackerRank",
    iconName: "Code"
  },
  {
    value: "₹7 LPA",
    label: "TCS Digital Offer",
    sublabel: "Campus Recruitment Offer Holder",
    iconName: "Award"
  },
  {
    value: "65%",
    label: "Query Speedup",
    sublabel: "Database Optimization on Contest Tracker",
    iconName: "Zap"
  },
  {
    value: "577/577",
    label: "OpenSource Tests Passed",
    sublabel: "NitroStack PR #262 Merged",
    iconName: "GitPullRequest"
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
    institution: "Lovely Professional University (LPU), Punjab",
    period: "Aug 2022 – Jun 2026",
    score: "CGPA: 7.48",
    details: "Core coursework: Data Structures, Operating Systems, Database Management Systems, Computer Networks, Software Engineering."
  },
  {
    degree: "Senior Secondary (12th Class - Science / Non-Medical)",
    institution: "Kendriya Vidyalaya No. 1, Pathankot",
    period: "Passout 2022",
    score: "Percentage: 84.8%",
    details: "Focused on Physics, Chemistry, Mathematics, and Computer Science."
  },
  {
    degree: "Matriculation (10th Class)",
    institution: "Air Force School, Jamnagar",
    period: "Passout 2020",
    score: "Percentage: 88.4%",
    details: "Strong foundational academic record with distinction in Mathematics and Science."
  }
];
