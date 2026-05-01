import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I am a passionate and self-driven engineering student with a strong interest in web development",
    description: "I enjoy crafting responsive, user-friendly websites using modern technologies",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Skills I bring to every project",
    description: "Full Stack Web Development\nUI/UX Design\nDigital Illustration\nAI Integration\nCommunication\nProblem Solving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Education",
    description: "Walchand Institute of Technology, Solapur — B.E. Information Technology Engineering | CGPA: 9.06 / 10",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "SIH Finalist 2025 - MAITRI AI Assistant for Astronauts",
    description: "Achievement in national-level hackathon",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Hands-on experience in both frontend and backend development",
    description: "Technologies: HTML, CSS, JavaScript, React.js, and Node.js",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's collaborate and build something amazing together!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "MAITRI – AI Assistant for Psychological & Physical Well-Being of Astronauts",
    des: "AI system for monitoring astronaut well-being using video/audio analysis, real-time stress detection, voice-activated interface, and mindfulness-based interventions. SIH Finalist 2025.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/sonamk27",
    sourceCode: "https://github.com/sonamk27",
  },
  {
    id: 2,
    title: "Project Raseed – Receipt Management AI Assistant",
    des: "AI chatbot to manage and analyze digital receipts using Google AI tools for OCR and expense insights. AI Day Hackathon Finalist.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/sonamk27",
    sourceCode: "https://github.com/sonamk27",
  },
  {
    id: 3,
    title: "FloatChat – AI-Powered Conversational Interface for ARGO Ocean Data Discovery",
    des: "Chat-style UI with natural-language queries, LLM backend via REST/MCP, SQL generation, and vector search for ocean data discovery.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/sonamk27",
    sourceCode: "https://github.com/sonamk27",
  },
  {
    id: 4,
    title: "Studymate – AI Chat Dashboard",
    des: "AI-driven student dashboard with LLM-powered Q&A engine and retrieval-augmented search for academic solutions.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/sonamk27",
    sourceCode: "https://github.com/sonamk27",
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "SIH Finalist 2025",
    desc: "Selected as a National Finalist in Smart India Hackathon 2025 for building MAITRI — an AI assistant for monitoring psychological & physical well-being of astronauts.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI Day Hackathon Finalist",
    desc: "Reached the finals of AI Day Hackathon by building Project Raseed — an AI-powered receipt management chatbot using Google AI tools for OCR and expense insights.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "9.06 CGPA – Academic Excellence",
    desc: "Maintaining a CGPA of 9.06 out of 10 in Bachelor of Engineering – Information Technology at Walchand Institute of Technology, Solapur.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "4 AI-Powered Projects Built",
    desc: "Successfully designed and developed 4 full-stack AI-powered projects including MAITRI, Project Raseed, FloatChat, and Studymate — each solving real-world problems.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/sonamk27",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/Sonam Korade",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Node.js", "Next.js", "TypeScript", "JavaScript", "HTML & CSS"],
  stack2: ["Tailwind CSS", "MongoDB", "REST APIs", "Git & GitHub", "UI/UX Design", "Python"],
} as const;
