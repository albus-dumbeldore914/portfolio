// ─── PROJECTS DATA ───────────────────────────────────────────────────────────
// Verified repository links mapped directly to your GitHub account: albus-dumbeldore914

export const projects = [
  {
    id: 1,
    title: "Sentinel Scanner",
    category: "Cybersecurity",
    categoryColor: "cyan",
    description:
      "A cybersecurity-focused security scanner that automates threat identification and analysis. Built to understand real-world security concepts by implementing them from scratch rather than relying on off-the-shelf tools.",
    longDescription:
      "Sentinel Scanner is one of my core cybersecurity projects. The goal was to build something practical that demonstrates security scanning and threat identification — automating a process that would otherwise be done manually. Working on this pushed me to understand how security tools actually work under the hood.",
    tech: ["JavaScript", "Python", "Cybersecurity", "Security Scanning", "Threat Analysis"],
    learned: [
      "How security scanners identify vulnerabilities and misconfigurations",
      "Practical application of cybersecurity concepts beyond theory",
      "Automating security scanning and reconnaissance routines",
      "Threat identification and prioritization logic",
    ],
    githubUrl: "https://github.com/albus-dumbeldore914/SentinalScanner",
    demoUrl: null,
    highlight: true,
  },
  {
    id: 2,
    title: "Voxa — Real-Time Messenger",
    category: "Backend",
    categoryColor: "blue",
    description:
      "A real-time messaging application (Talk. Connect. Belong.) built with TypeScript, modern client-server communication, user authentication, and persistent message storage.",
    longDescription:
      "Voxa represents a full-stack real-time messaging architecture. Building it required orchestrating bidirectional communication, user session authentication, and scalable data models to ensure instant delivery and reliability.",
    tech: ["TypeScript", "Node.js", "Express.js", "WebSockets", "Authentication", "Database"],
    learned: [
      "Implementing bidirectional real-time messaging pipelines",
      "TypeScript typing across backend communication layers",
      "Session management and secure user authentication",
      "Designing responsive message storage schemas",
    ],
    githubUrl: "https://github.com/albus-dumbeldore914/Voxa",
    demoUrl: null,
    highlight: true,
  },
  {
    id: 3,
    title: "RogueStore — Gaming E-Commerce",
    category: "Backend",
    categoryColor: "blue",
    description:
      "A modern full-stack gaming e-commerce platform built with React, Node.js, Express, and MongoDB, featuring secure authentication, shopping cart, order tracking, and automated Google Sheets logging.",
    longDescription:
      "A production-grade web platform deployed on Vercel with MongoDB backend. Manages the complete customer lifecycle from product exploration to cart persistence, order creation, and external webhook integrations.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Google Sheets API"],
    learned: [
      "End-to-end full-stack e-commerce architecture and database modeling",
      "Implementing JWT authentication and secure session states",
      "Automating external order reporting via spreadsheets and APIs",
      "Deploying scalable frontend and backend architectures",
    ],
    githubUrl: "https://github.com/albus-dumbeldore914/RogueStore",
    demoUrl: "https://roguestore.vercel.app",
    highlight: true,
  },
  {
    id: 4,
    title: "Bug Log Tracker",
    category: "Backend",
    categoryColor: "blue",
    description:
      "A developer utility and bug log tracker created to log issues, root causes, and solutions encountered while building systems so they can be referenced and reviewed later.",
    longDescription:
      "Born out of deliberate engineering practice — tracking bugs, edge cases, and debugging steps creates an invaluable personal knowledge base and enhances problem-solving speed.",
    tech: ["JavaScript", "Node.js", "Express.js", "Productivity Tool", "CLI / Web"],
    learned: [
      "Systematic root-cause analysis and defect categorization",
      "Structuring developer toolkits for rapid retrieval",
      "CRUD state management for tracking resolution lifecycles",
      "Translating debugging insights into reusable patterns",
    ],
    githubUrl: "https://github.com/albus-dumbeldore914/bug-log-tracker",
    demoUrl: null,
    highlight: false,
  },
  {
    id: 5,
    title: "My Own AI & Neural Networks",
    category: "AI / ML",
    categoryColor: "purple",
    description:
      "A project exploring AI and deep learning mechanics from first principles — understanding neural networks, backpropagation, training loops, and how weights adjust without relying on high-level black-box wrappers.",
    longDescription:
      "Instead of just calling a vendor API, I started this project to understand what's actually happening inside a model. Studying matrix multiplications, activation functions, loss gradients, and training loops to gain foundational intuition.",
    tech: ["Python", "Neural Networks", "Deep Learning", "Mathematics", "AI Fundamentals"],
    learned: [
      "How forward and backward propagation update network weights",
      "Loss surfaces, optimization gradients, and learning rates",
      "Deconstructing machine learning systems from mathematical basics",
      "Understanding the exact mechanical difference between using an AI and engineering one",
    ],
    githubUrl: "https://github.com/albus-dumbeldore914",
    demoUrl: null,
    highlight: false,
  },
  {
    id: 6,
    title: "OS Scheduling & Computer Architecture",
    category: "CS",
    categoryColor: "green",
    description:
      "Implementations and deep analysis of CPU scheduling algorithms (Priority, Round Robin, FCFS) alongside computer architecture principles like hardwired and microprogrammed control units.",
    longDescription:
      "Translating hardware and OS abstractions into code. Evaluated process turnaround and latency metrics across scheduling algorithms, and studied how instructions get sequenced through the execution pipeline.",
    tech: ["C / Python", "Operating Systems", "CPU Scheduling", "Computer Architecture", "Algorithms"],
    learned: [
      "Tradeoffs between CPU throughput, starvation, and responsiveness",
      "How control units decode opcodes and drive CPU data paths",
      "Low-level process state transitions and context switching",
      "Hardware-software architectural interface dynamics",
    ],
    githubUrl: "https://github.com/albus-dumbeldore914",
    demoUrl: null,
    highlight: false,
  },
];

export const categoryFilters = ["All", "Cybersecurity", "Backend", "AI / ML", "CS"];
