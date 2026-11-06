export const profile = {
  name: "Ankit Giri",
  firstName: "Ankit",
  lastName: "Giri",
  headline: "Senior Full Stack Java Engineer",
  roles: [
    "Technical Lead",
    "Backend & Cloud Engineer",
    "Independent Software Developer",
  ],
  email: "javadeveloperankitg@gmail.com",
  phone: "+91-917-404-6419",
  phoneHref: "+919174046419",
  whatsapp: "919174046419",
  location: "India",
  tagline:
    "I design and build scalable, secure and production-ready software systems.",
  bio: "Hi, I'm Ankit Giri. I design and build scalable, secure backend systems that power high-performance applications.",
  valueProposition:
    "I bring a combination of strong backend engineering, full-stack development, cloud experience, technical leadership and product ownership.",
  lifecycle: [
    "Requirement",
    "Architecture",
    "Development",
    "Integration",
    "Testing",
    "Deployment",
    "Optimization",
    "Production Support",
  ],
};

export const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "40+", label: "Projects Delivered" },
  { value: "4", label: "Play Store Apps" },
  { value: "8.0", label: "CGPA / 10" },
];

export const profileSummary = [
  "Senior Full Stack Java Engineer with 6+ years of professional software development experience specializing in Java, Spring Boot, microservices, REST APIs, Angular, React, TypeScript, databases, AWS and cloud-based application development.",
  "Experienced in designing and developing scalable, secure and production-ready software systems, with hands-on expertise across the complete software development lifecycle — from requirements analysis and system design to development, testing, deployment, optimization and production support.",
  "Strong backend engineering background with expertise in Java, Spring Boot, Spring Security, Spring Data JPA, Hibernate, REST APIs, microservices, Kafka and database optimization, combined with full-stack experience using Angular, React, TypeScript and modern frontend technologies.",
  "Experienced in working with event-driven architectures, distributed systems, cloud infrastructure, automated testing, CI/CD pipelines and large-scale data validation systems.",
  "Beyond individual development responsibilities, experienced in technical ownership, mentoring developers, project delivery, technical coordination, architecture decisions, production troubleshooting and cross-functional collaboration.",
  "Currently also working independently on software products, client solutions and technical projects across web applications, mobile applications, AI-powered systems, dashboards, cloud infrastructure and backend platforms.",
];

export const specializations = [
  {
    title: "Backend Engineering",
    items: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Microservices",
      "Feign Client",
      "Kafka",
      "Redis",
    ],
  },
  {
    title: "Frontend Engineering",
    items: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQL optimization",
      "Database design",
      "Data validation",
      "Large-scale data reconciliation",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "AWS Lambda",
      "Docker",
      "Git",
      "CI/CD",
      "SonarQube",
      "Maven",
      "Gradle",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "JUnit",
      "Mockito",
      "PowerMockito",
      "Selenium",
      "Unit Testing",
      "Integration Testing",
      "Regression Testing",
      "Test Automation",
    ],
  },
  {
    title: "Project & Development Tools",
    items: [
      "JIRA",
      "Trello",
      "ClickUp",
      "Postman",
      "IntelliJ IDEA",
      "Eclipse",
      "Spring Tool Suite",
      "Agile / Scrum",
    ],
  },
];

export const coreCapabilities = [
  "Full Stack Application Development",
  "Backend Architecture",
  "REST API Development",
  "Microservices Architecture",
  "Event-Driven Architecture",
  "Cloud Application Development",
  "Database Architecture & Optimization",
  "API Security",
  "JWT Authentication",
  "Role-Based Access Control",
  "Automated Testing",
  "CI/CD",
  "AWS Serverless Architecture",
  "Data Reconciliation",
  "Production Troubleshooting",
  "Performance Optimization",
  "Technical Leadership",
  "Project Delivery",
  "Developer Mentoring",
  "Client Requirement Analysis",
  "Technical Documentation",
];

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technicalFocus: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Software Engineer",
    company: "Amarkosh Linguistics Pvt. Ltd.",
    location: "Ghaziabad, India",
    period: "February 2022 – February 2025",
    summary:
      "Worked as a Senior Software Engineer with responsibilities spanning backend engineering, full-stack development, application architecture, testing, performance optimization and technical collaboration.",
    responsibilities: [
      "Designed and developed scalable and secure REST APIs and microservices using Java, Spring Boot, Spring Data JPA and Spring Security.",
      "Developed backend business logic with a focus on scalability, maintainability and production reliability.",
      "Built frontend components and complete application workflows using Angular, TypeScript, JavaScript and JSP.",
      "Implemented secure authentication and authorization using JWT and Spring Security.",
      "Worked with Kafka-based event-driven communication to enable reliable communication between application services.",
      "Designed and optimized database queries to improve application performance and reduce unnecessary database load.",
      "Implemented unit, integration and automated testing using JUnit, Mockito and Selenium.",
      "Investigated application bottlenecks and production issues and implemented performance and stability improvements.",
      "Participated in code reviews and promoted clean coding and engineering best practices.",
      "Worked within an Agile/Scrum environment using JIRA and Git.",
      "Collaborated with cross-functional teams to understand requirements and deliver complete application features.",
      "Mentored junior developers and supported improvements in development practices and code quality.",
      "Contributed to technical decisions, debugging, release activities and production support.",
    ],
    technicalFocus: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Kafka",
      "Angular",
      "TypeScript",
      "SQL",
      "PostgreSQL",
      "MySQL",
      "Spring Security",
      "JWT",
      "JUnit",
      "Selenium",
      "AWS",
      "Git",
    ],
  },
  {
    role: "Java Spring Boot Backend Developer",
    company: "MyToshika IT Solutions",
    location: "Noida, India",
    period: "April 2020 – February 2022",
    summary:
      "Worked on backend development and application delivery for multiple client-oriented projects across different business domains.",
    responsibilities: [
      "Developed backend applications using Java, Spring Boot and REST APIs.",
      "Designed APIs for business workflows, data processing and application integrations.",
      "Worked on projects across domains including education, healthcare and fintech.",
      "Implemented business logic and database integrations.",
      "Performed debugging, issue resolution and application performance improvements.",
      "Supported functional testing and production release activities.",
      "Worked with development teams to analyze requirements and deliver application functionality.",
      "Followed clean coding practices and structured backend development principles.",
      "Built a strong foundation in enterprise Java development and real-world application problem solving.",
    ],
    technicalFocus: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "JPA",
      "Hibernate",
      "SQL",
      "MySQL",
      "Git",
      "Maven",
      "Postman",
    ],
  },
  {
    role: "Independent Software Engineer & Product Developer",
    company: "Freelance / Independent Software Development",
    location: "Remote",
    period: "2025 – Present",
    summary:
      "Working independently on software products, client solutions and technical projects across web, mobile, cloud, AI and backend engineering — taking projects from requirements and architecture through development, testing, deployment and ongoing improvements.",
    responsibilities: [
      "Analyze business and technical requirements.",
      "Design application architecture and technology stacks.",
      "Develop frontend and backend systems.",
      "Design REST APIs and database structures.",
      "Integrate third-party services and APIs.",
      "Implement authentication and authorization.",
      "Deploy applications to cloud infrastructure.",
      "Configure production environments.",
      "Optimize application performance.",
      "Troubleshoot production issues.",
      "Coordinate development activities.",
      "Manage feature delivery from development through deployment.",
    ],
    technicalFocus: [
      "Full Stack Web",
      "React / Next.js",
      "Java / Spring Boot",
      "REST APIs",
      "Android",
      "Flutter",
      "AWS",
      "AI Applications",
      "Payment Gateways",
      "Cloud Deployment",
    ],
  },
];

export const independentAreas = [
  "Full Stack Web Application Development",
  "React / Next.js Development",
  "Java / Spring Boot Backend Development",
  "REST API Development",
  "Android & Flutter Applications",
  "AWS Cloud Infrastructure",
  "Admin & Analytics Dashboards",
  "AI-powered Applications",
  "API Integrations",
  "Payment Gateway Integrations",
  "Database Design & Optimization",
  "Cloud Deployment",
  "Technical Consulting",
  "Project Ownership",
  "Technical Coordination",
  "Production Troubleshooting",
];

export type ProjectBlock = {
  heading: string;
  items: string[];
};

export type Project = {
  number: string;
  title: string;
  role: string;
  category: string;
  overview: string;
  tech: string[];
  blocks: ProjectBlock[];
  impact?: string;
  gradient: { primary: string; secondary: string };
};

/**
 * Ordered by engineering scale and role seniority — the largest enterprise,
 * data-engineering and platform engagements lead the portfolio.
 */
export const projects: Project[] = [
  {
    number: "01",
    title: "Enterprise Learning & Lesson Management Platform",
    role: "Senior Full Stack Engineer / Technical Contributor",
    category: "Enterprise Full Stack Platform",
    overview:
      "An enterprise learning platform designed to streamline teacher registration, teacher/student management, scheduling and lesson booking workflows.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "Angular",
      "TypeScript",
      "JavaScript",
      "JSP",
      "Kafka",
      "SQL",
      "JUnit",
      "Selenium",
    ],
    blocks: [
      {
        heading: "Key Contributions",
        items: [
          "Designed and implemented REST APIs.",
          "Developed backend business logic using Spring Boot.",
          "Built teacher registration workflows.",
          "Developed scheduling and lesson booking functionality.",
          "Built Angular components and frontend workflows.",
          "Integrated frontend applications with backend services.",
          "Implemented Kafka-based event communication.",
          "Optimized SQL queries and database interactions.",
          "Implemented secure authentication and authorization.",
          "Developed automated tests for critical application workflows.",
          "Supported production troubleshooting and release activities.",
        ],
      },
    ],
    impact:
      "Improved workflow reliability, reduced administrative complexity and created a more efficient digital platform for managing teachers, students and lessons.",
    gradient: { primary: "#F44A22", secondary: "#D1C4E9" },
  },
  {
    number: "02",
    title: "Enterprise Data Reconciliation & Validation Platform",
    role: "Senior Backend Engineer / Data Engineering",
    category: "Data Engineering & Validation",
    overview:
      "A large-scale data reconciliation and validation system designed to compare records between two enterprise source systems.",
    tech: ["Java", "PostgreSQL", "AWS RDS", "AWS Lambda", "SQL", "JSON"],
    blocks: [
      {
        heading: "Key Capabilities",
        items: [
          "Recall data comparison.",
          "Investigation data comparison.",
          "Product validation.",
          "Component validation.",
          "Document validation.",
          "Record-count reconciliation.",
          "Database-level comparison.",
          "Automated discrepancy identification.",
          "Large dataset processing.",
          "AWS Lambda-based execution.",
          "Stage and production validation.",
        ],
      },
      {
        heading: "Engineering Responsibilities",
        items: [
          "Developed data comparison logic.",
          "Designed SQL-based reconciliation queries.",
          "Worked with large datasets.",
          "Investigated mismatched records.",
          "Improved validation workflows.",
          "Generated structured comparison results.",
          "Supported production and staging execution.",
        ],
      },
    ],
    impact:
      "Created an automated approach for identifying data discrepancies between systems and significantly reduced the effort required for manual reconciliation and validation.",
    gradient: { primary: "#9B51E0", secondary: "#E94057" },
  },
  {
    number: "03",
    title: "Automated Data & Image Validation System",
    role: "Backend Engineer / AWS Automation Engineer",
    category: "Cloud Automation & Data Validation",
    overview:
      "An automated validation system designed to validate enterprise database records against image assets stored in AWS S3.",
    tech: [
      "AWS Lambda",
      "AWS S3",
      "PostgreSQL",
      "Node.js",
      "SQL",
      "Email Automation",
    ],
    blocks: [
      {
        heading: "Key Capabilities",
        items: [
          "Database-to-S3 validation.",
          "Image URL validation.",
          "Missing image detection.",
          "Configurable date-range processing.",
          "Stage and production Lambda execution.",
          "Automated result generation.",
          "Email-based reporting.",
          "Database discrepancy identification.",
        ],
      },
      {
        heading: "Engineering Responsibilities",
        items: [
          "Developed Lambda-based validation workflows.",
          "Implemented S3 image validation.",
          "Added configurable processing windows.",
          "Investigated database/image inconsistencies.",
          "Generated automated reports.",
          "Implemented email-based result delivery.",
          "Tested validation logic across staging and production environments.",
        ],
      },
    ],
    gradient: { primary: "#FFAD29", secondary: "#F44A22" },
  },
  {
    number: "04",
    title: "Enterprise CRM & Customer Management Platform",
    role: "Full Stack Developer / Technical Lead",
    category: "Business Application",
    overview:
      "A modern CRM-style business application focused on customer management, analytics and AI-assisted workflows.",
    tech: ["React", "TypeScript", "REST APIs", "Dashboard UI", "Database"],
    blocks: [
      {
        heading: "Key Features",
        items: [
          "Customer management.",
          "Business dashboards.",
          "Search and filtering.",
          "Data visualization.",
          "Customer insights.",
          "AI assistant integration.",
          "Responsive enterprise interface.",
        ],
      },
      {
        heading: "Engineering Focus",
        items: [
          "Designed the platform around a modular frontend architecture and API-driven business workflows.",
        ],
      },
    ],
    gradient: { primary: "#F44A22", secondary: "#FFAD29" },
  },
  {
    number: "05",
    title: "Real-Time Fleet & Truck Tracking Platform",
    role: "System Architect / Full Stack Developer",
    category: "Logistics & Real-Time Tracking",
    overview:
      "A real-time logistics platform designed to connect fleet managers and drivers while providing live vehicle tracking.",
    tech: [
      "Expo",
      "React Native",
      "FastAPI",
      "MongoDB",
      "JWT",
      "WebSockets",
      "REST APIs",
    ],
    blocks: [
      {
        heading: "Architecture",
        items: [
          "Manager application.",
          "Driver application.",
          "JWT authentication.",
          "Role-based access control.",
          "Consent-based driver pairing.",
          "Tracking sessions.",
          "GPS location ingestion.",
          "Bulk location synchronization.",
          "Live tracking APIs.",
          "WebSocket-based real-time updates.",
        ],
      },
      {
        heading: "Engineering Focus",
        items: [
          "The platform was designed around secure driver-manager pairing, real-time location processing and scalable tracking APIs.",
        ],
      },
    ],
    gradient: { primary: "#6A11CB", secondary: "#2575FC" },
  },
  {
    number: "06",
    title: "Enterprise Selenium Automation Framework",
    role: "Automation Engineer / QA Engineering Lead",
    category: "Test Automation",
    overview:
      "A comprehensive automated testing framework designed to automate critical application workflows and reduce repetitive manual regression testing.",
    tech: ["Java", "Selenium", "JUnit", "Mockito", "Git", "CI/CD"],
    blocks: [
      {
        heading: "Key Contributions",
        items: [
          "Automated registration workflows.",
          "Automated lesson booking scenarios.",
          "Built reusable Selenium test cases.",
          "Identified high-impact application defects.",
          "Improved regression testing coverage.",
          "Integrated testing into development workflows.",
          "Reduced repetitive manual testing effort.",
        ],
      },
    ],
    impact:
      "Automation activities reduced recurring manual testing effort by approximately 20 hours per month in key workflows and contributed to reductions of more than 40 hours of manual testing effort per release for targeted regression activities.",
    gradient: { primary: "#00F2FE", secondary: "#4FACFE" },
  },
  {
    number: "07",
    title: "AI-Powered Analytics & Business Dashboard",
    role: "Full Stack Developer / Product Engineer",
    category: "AI + Analytics",
    overview:
      "A modern business analytics platform combining interactive dashboards with an AI-powered conversational interface.",
    tech: ["React", "TypeScript", "REST APIs", "AI Chat", "Dashboard Analytics"],
    blocks: [
      {
        heading: "Key Features",
        items: [
          "Business analytics dashboards.",
          "Customer analytics.",
          "Data visualization.",
          "AI chat interface.",
          "Natural-language data discovery.",
          "API-driven data.",
          "Responsive enterprise UI.",
          "Interactive filtering and data exploration.",
        ],
      },
      {
        heading: "Product Vision",
        items: [
          "The AI assistant allows users to interact with business information using natural language instead of manually navigating through multiple dashboards and reports.",
        ],
      },
    ],
    gradient: { primary: "#38EF7D", secondary: "#11998E" },
  },
  {
    number: "08",
    title: "AI-Powered Local Assistant / Jarvis Engineering",
    role: "AI Systems Engineer",
    category: "AI / Automation / Local LLM",
    overview:
      "Engineering work focused on building and configuring a local AI assistant capable of interacting with local models, tools, memory systems and future voice interfaces.",
    tech: [
      "WSL2",
      "Ollama",
      "Local LLMs",
      "Python",
      "Rust",
      "Agent Tools",
      "Memory Systems",
      "TTS",
    ],
    blocks: [
      {
        heading: "Technical Work",
        items: [
          "Local LLM execution.",
          "Ollama model integration.",
          "Agent/tool architecture.",
          "Local memory extension.",
          "Rust-based memory extension.",
          "WSL2 environment configuration.",
          "AI development environment setup.",
          "Tool execution workflows.",
          "Future voice/TTS integration planning.",
        ],
      },
    ],
    gradient: { primary: "#4A00E0", secondary: "#8E2DE2" },
  },
  {
    number: "09",
    title: "Toyota Chemicals Corporate Web Platform",
    role: "Frontend Engineer / Full Stack Project Delivery",
    category: "Corporate Web Platform",
    overview:
      "A modern corporate web platform developed for a chemical manufacturing organization.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Responsive Web Development",
    ],
    blocks: [
      {
        heading: "Responsibilities",
        items: [
          "React application development.",
          "Website route and page mapping.",
          "Product page implementation.",
          "Responsive UI development.",
          "Product catalogue presentation.",
          "SEO optimization.",
          "Metadata implementation.",
          "Open Graph configuration.",
          "Sitemap and robots configuration.",
          "Performance improvements.",
          "Production deployment preparation.",
        ],
      },
    ],
    impact:
      "Modernized the web experience while maintaining structured content, responsive layouts, SEO requirements and a professional corporate visual system.",
    gradient: { primary: "#e65c00", secondary: "#F9D423" },
  },
  {
    number: "10",
    title: "Indian Transport Academy Platform",
    role: "Full Stack Developer / Project Delivery",
    category: "Education & Payment Platform",
    overview:
      "An education platform designed to support course discovery, course purchasing and digital learning workflows.",
    tech: ["React", "REST APIs", "Razorpay", "SEO", "Cloud Deployment"],
    blocks: [
      {
        heading: "Responsibilities",
        items: [
          "Frontend development.",
          "Course presentation.",
          "Pricing workflows.",
          "Razorpay payment integration.",
          "Backend payment processing.",
          "Responsive UI.",
          "SEO implementation.",
          "Production deployment.",
          "Business workflow integration.",
        ],
      },
    ],
    gradient: { primary: "#3a7bd5", secondary: "#3a6073" },
  },
  {
    number: "11",
    title: "E-Commerce & Business Management Platform",
    role: "Full Stack Developer",
    category: "E-Commerce / Business Application",
    overview:
      "A full-stack business platform supporting product management, customer workflows and digital commerce functionality.",
    tech: ["React", "TypeScript", "REST APIs", "Database", "Responsive UI"],
    blocks: [
      {
        heading: "Responsibilities",
        items: [
          "Frontend development.",
          "Product workflows.",
          "Customer workflows.",
          "API integration.",
          "Responsive design.",
          "Business management interfaces.",
          "Application optimization.",
        ],
      },
    ],
    gradient: { primary: "#2575FC", secondary: "#11998E" },
  },
  {
    number: "12",
    title: "Memes Ki Duniya — Social Content Platform",
    role: "Founder / Full Stack Developer / Product Owner",
    category: "Mobile Application & Social Platform",
    overview:
      "A social content platform focused on Indian entertainment and meme content.",
    tech: [
      "Android",
      "Kotlin",
      "Flutter",
      "Firebase",
      "CakePHP",
      "MySQL",
      "AWS S3",
      "REST APIs",
    ],
    blocks: [
      {
        heading: "Key Features",
        items: [
          "User authentication.",
          "Content upload.",
          "Image and video content.",
          "Content categories.",
          "User interactions.",
          "Media processing.",
          "Firebase integration.",
          "Backend APIs.",
          "Cloud storage.",
          "Content moderation workflows.",
        ],
      },
      {
        heading: "Engineering Responsibilities",
        items: [
          "Application development.",
          "Backend API development.",
          "Database management.",
          "Authentication implementation.",
          "Media storage integration.",
          "Application debugging.",
          "Cloud infrastructure planning.",
          "Mobile application modernization.",
        ],
      },
    ],
    impact:
      "The platform is also being modernized from its legacy Android/Kotlin architecture toward a more maintainable Flutter-based application architecture.",
    gradient: { primary: "#8A2387", secondary: "#E94057" },
  },
];

export const technicalLeadership = [
  {
    title: "Technical Architecture",
    body: "Designing scalable backend systems, API architectures and distributed application workflows with a focus on maintainability, security and performance.",
  },
  {
    title: "Full Stack Ownership",
    body: "Working across frontend, backend, database, cloud and deployment layers to deliver complete features rather than isolated components.",
  },
  {
    title: "Project Delivery",
    body: "Taking features from requirements through architecture, development, testing, deployment and production support.",
  },
  {
    title: "Developer Mentoring",
    body: "Supporting junior developers through code reviews, debugging, architecture discussions and engineering best practices.",
  },
  {
    title: "Technical Coordination",
    body: "Collaborating with cross-functional teams, translating business requirements into technical solutions and coordinating implementation activities.",
  },
  {
    title: "Production Engineering",
    body: "Investigating production issues, analyzing logs and database behavior, resolving deployment problems and improving system reliability.",
  },
];

export const education = {
  degree: "Bachelor of Engineering — Computer Science & Engineering",
  institution: "Laxmipati Institute of Science & Technology, Bhopal",
  period: "July 2016 – April 2020",
  score: "8.0 / 10",
  scoreLabel: "CGPA",
};

export const achievements = [
  {
    title: "Engineering Student Industry Tour",
    body: "Organized and executed an engineering student industry tour involving visits to multiple leading companies, providing students with practical exposure to professional engineering environments and industry workflows.",
  },
  {
    title: "Cricket Leadership",
    body: "Captained state and university-level cricket teams, developing strong leadership, communication, teamwork and decision-making skills through competitive sporting environments.",
  },
];

export const publishedApps = {
  count: 4,
  body: "In addition to enterprise software development, I have worked on Android/mobile applications that have progressed to production and Google Play Store distribution.",
  capabilities: [
    "Android",
    "Kotlin",
    "Flutter",
    "Firebase",
    "REST APIs",
    "Authentication",
    "Push Notifications",
    "Media Upload",
    "Cloud Storage",
    "Application Architecture",
    "API Integration",
    "Production Deployment",
  ],
};

export const professionalStrengths = [
  "Strong backend engineering fundamentals.",
  "Full-stack application development.",
  "Microservices and distributed systems.",
  "API architecture and integration.",
  "Database optimization.",
  "Cloud and AWS development.",
  "Automated testing.",
  "Production troubleshooting.",
  "Technical leadership.",
  "Project delivery.",
  "Developer mentoring.",
  "Agile/Scrum collaboration.",
  "Problem solving.",
  "Product-oriented engineering.",
];

export const careerPositioning = [
  {
    title: "Senior Software Engineer",
    body: "Strong hands-on development experience across Java, Spring Boot, microservices, APIs, databases and cloud.",
  },
  {
    title: "Full Stack Engineer",
    body: "Capable of developing complete applications across backend, frontend, database and deployment layers.",
  },
  {
    title: "Technical Lead",
    body: "Experienced in technical decision-making, architecture, mentoring, code quality and implementation ownership.",
  },
  {
    title: "Project Delivery Lead",
    body: "Capable of coordinating requirements, development, testing, deployment and delivery across project teams.",
  },
  {
    title: "Independent Software Engineer",
    body: "Experienced in independently designing and delivering web, mobile, AI, cloud and business applications.",
  },
];

export const languages = [
  "Java",
  "JavaScript",
  "TypeScript",
  "SQL",
  "HTML",
  "CSS",
];

export const currentFocus = [
  "Enterprise Applications",
  "Full Stack Development",
  "Cloud Engineering",
  "AI Applications",
  "Mobile Applications",
  "Real-Time Systems",
  "Business Dashboards",
  "Automation",
  "Backend Architecture",
];

export const marqueeSkills = [
  "JAVA",
  "SPRING BOOT",
  "MICROSERVICES",
  "REST APIs",
  "KAFKA",
  "POSTGRESQL",
  "ANGULAR",
  "REACT",
  "AWS LAMBDA",
  "DOCKER",
];
