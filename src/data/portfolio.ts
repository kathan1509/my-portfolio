// Portfolio Data - Kathan Patel's Information
export const personalInfo = {
  name: "Kathan Patel",
  title: "Application Developer",
  subtitle:
    "I'm an Application Developer & Freelancer who transforms complex business problems into simple, scalable solutions through clean code and innovative design.",
  email: "kathanpatel15998@gmail.com",
  phone: "9327749209",
  location: "Nadiad, GJ",
  bio: "I specialize in Application Development, Data Engineering, and Cloud Solutions. With 5+ years of experience, I help startups and enterprises build robust data pipelines, scalable web applications, and implement cloud-first architectures. Unlike other developers, I don't just code - I architect solutions that drive real business value.",
  resumeUrl: "/path-to-your-resume.pdf",
  avatar: "/profile-image.jpg",
  availability: true,
  freelanceMessage: "AVAILABLE FOR FREELANCE WORK",
  calendlyUrl: "https://calendly.com/kathanpatel", // Add your actual Calendly URL
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/kathanpatel",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/kathanpatel",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/kathanpatel",
    icon: "Twitter",
  },
  {
    name: "Email",
    url: "mailto:kathanpatel15998@gmail.com",
    icon: "Mail",
  },
];

export const skills = [
  {
    category: "Web Technologies",
    technologies: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "ReactJS",
      "NodeJS",
    ],
  },
  {
    category: "Languages & Database",
    technologies: [
      "JavaScript",
      "Java",
      "C#",
      "Teradata",
      "SQL",
      "MongoDB",
      "Firebase/Firestore",
      "DynamoDB",
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      "AWS Lambda",
      "AWS Amplify",
      "S3",
      "EC2",
      "IAM",
      "GCP",
      "Docker",
      "Git",
    ],
  },
  {
    category: "Tools & Other Skills",
    technologies: [
      "ETL",
      "SaaS",
      "JUnit",
      "Figma",
      "Adobe XD",
      "CI/CD",
      "Linux",
      "GitHub",
      "Jira",
      "Agile",
      "REST API",
    ],
  },
];

export const experience = [
  {
    title: "Application Developer",
    company: "Aureus Infotech Inc. (Remote)",
    duration: "Feb 2025 – Present",
    description:
      "Building and maintaining robust data pipelines and solutions. Develop and maintain ETL workflows using Teradata and SQL. Migrate existing SAP BODS jobs to Teradata BTEQ/TPT, ensuring data accuracy and optimal performance.",
    technologies: ["Teradata", "SQL", "ETL", "BTEQ", "TPT", "Data Validation"],
  },
  {
    title: "Software Developer",
    company: "Ample Infotech, Nadiad, India",
    duration: "Jul 2020 – April 2021",
    description:
      "Integrated ReactJS into the front end, boosting user engagement metrics by 15%. Orchestrated the migration of legacy systems to Java, resulting in a 20% improvement in system responsiveness. Utilized AWS services including EC2, IAM, DynamoDB, and S3.",
    technologies: [
      "ReactJS",
      "Java",
      "AWS",
      "EC2",
      "DynamoDB",
      "S3",
      "REST API",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Creart Solutions, Ahmedabad, India",
    duration: "May 2019 – Jun 2020",
    description:
      "Developed responsive web applications using HTML, CSS, Tailwind, and JavaScript. Contributed to Android application development using Java and Kotlin, resulting in a 15% improvement in app responsiveness. Led initiatives to adopt best coding practices.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
      "Java",
      "Kotlin",
      "Android",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "DALL-E Clone",
    description:
      "Crafted a DALL-E Clone with ReactJS and NodeJS, enabling users to generate and explore creative images. Enhanced user engagement by implementing real-time updates through WebSocket integration.",
    image: "/project1.jpg", // Add project image
    technologies: ["ReactJS", "NodeJS", "MongoDB", "WebSocket"],
    githubUrl: "https://github.com/kathanpatel/dalle-clone",
    liveUrl: "https://your-dalle-clone.com",
    featured: true,
  },
  {
    id: 2,
    title: "MovieAPI",
    description:
      "Engineered MovieAPI in Java with Spring Boot, ensuring a scalable solution for efficient movie data management. Optimized data handling by integrating MySQL and MongoDB databases for diverse storage needs.",
    image: "/project2.jpg", // Add project image
    technologies: ["Java", "Spring Boot", "MySQL", "MongoDB"],
    githubUrl: "https://github.com/kathanpatel/movieapi",
    liveUrl: "https://your-movieapi.com",
    featured: true,
  },
  {
    id: 3,
    title: "FoodResQ",
    description:
      "Leveraged Firebase to build a database and authentication system. Performed CRUD operations in Firestore using Java as the backend for efficient food rescue management.",
    image: "/project3.jpg", // Add project image
    technologies: ["Java", "XML", "Firestore", "GCP", "Firebase Auth"],
    githubUrl: "https://github.com/kathanpatel/foodresq",
    liveUrl: "https://your-foodresq.com",
    featured: false,
  },
];

export const services = [
  {
    title: "Application Development",
    description:
      "Building robust data pipelines and scalable applications using modern technologies and best practices.",
    icon: "Code",
  },
  {
    title: "Data Engineering",
    description:
      "Developing and maintaining ETL workflows, data validation, and implementing data governance practices.",
    icon: "Server",
  },
  {
    title: "Cloud Solutions",
    description:
      "Leveraging AWS and GCP services for scalable, secure, and reliable cloud architecture.",
    icon: "Cloud",
  },
  {
    title: "Full Stack Development",
    description:
      "Creating end-to-end web applications using ReactJS, NodeJS, and various database technologies.",
    icon: "Smartphone",
  },
];

// Educational background
export const education = [
  {
    degree: "Mobile Solutions Development, Applied Computer Science & IT",
    school: "Conestoga College, Waterloo, Canada",
    duration: "May 2021 – Aug 2022",
    description:
      "GPA: 3.55/4.0. Focused on mobile application development and computer science fundamentals.",
  },
  {
    degree: "Bachelor of Engineering, Computer Engineering",
    school: "Gujarat Technological University, India",
    duration: "Aug 2016 – Aug 2020",
    description:
      "GPA: 7.46/10. Comprehensive study in computer engineering with focus on software development.",
  },
];

// Professional Certifications
export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner – Foundational",
    issuer: "Amazon Web Services",
    date: "July 2023",
    credentialUrl: "#", // Add actual credential URL
  },
  {
    title: "GitHub Foundations Certification",
    issuer: "GitHub",
    date: "July 2024",
    credentialUrl: "#", // Add actual credential URL
  },
];

// Testimonials
export const testimonials = [
  {
    name: "John Smith",
    position: "CTO, TechStart Inc.",
    content:
      "Kathan delivered exceptional work on our data migration project. His expertise in Teradata and cloud technologies helped us achieve 99.9% data accuracy while reducing processing time by 40%. Professional, reliable, and highly skilled.",
    avatar: "/testimonial1.jpg",
    company: "TechStart Inc.",
  },
  {
    name: "Sarah Johnson",
    position: "Product Manager, InnovateCorp",
    content:
      "Working with Kathan was a game-changer for our React application. He not only delivered on time but also suggested improvements that boosted our user engagement by 25%. I highly recommend his services.",
    avatar: "/testimonial2.jpg",
    company: "InnovateCorp",
  },
  {
    name: "Michael Chen",
    position: "Founder, DataFlow Solutions",
    content:
      "Kathan's ability to architect scalable cloud solutions is impressive. He migrated our entire infrastructure to AWS, resulting in 50% cost savings and improved performance. A true professional who goes above and beyond.",
    avatar: "/testimonial3.jpg",
    company: "DataFlow Solutions",
  },
];

// Freelancer advantages
export const freelancerAdvantages = [
  {
    title: "Personal Attention",
    description:
      "Unlike large agencies, I personally handle every aspect of your project. You get my undivided attention and direct communication throughout the development process.",
    icon: "User",
  },
  {
    title: "Cost Effective",
    description:
      "No agency overhead or middleman markup. You pay for quality work, not corporate expenses. Get enterprise-level solutions at freelancer-friendly rates.",
    icon: "DollarSign",
  },
  {
    title: "Transparent Process",
    description:
      "Clear pricing, realistic timelines, and regular updates. No hidden costs or surprise delays. You'll know exactly what to expect at every stage.",
    icon: "CheckCircle",
  },
  {
    title: "Technical Expertise",
    description:
      "5+ years of hands-on experience with modern technologies. I stay updated with industry trends and implement best practices in every project.",
    icon: "Code",
  },
];

// Current availability status
export const currentStatus = {
  isAvailable: true,
  currentTime: new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }),
  timezone: "IST",
  responseTime: "Within 24 hours",
};
