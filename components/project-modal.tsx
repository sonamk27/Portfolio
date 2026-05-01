"use client";

import { useState, useEffect } from "react";
import { FaTimes, FaGithub } from "react-icons/fa";

import { MagicButton } from "@/components/ui/magic-button";

interface ProjectDetails {
  id: number;
  title: string;
  badge?: string;
  overview: string;
  features: string[];
  techStack: string[];
  githubLink: string;
}

const projectDetails: ProjectDetails[] = [
  {
    id: 1,
    title: "MAITRI – AI Astronaut Assistant",
    badge: "🏆 SIH Finalist 2025",
    overview: "An AI system designed to monitor the psychological & physical well-being of astronauts in real-time.",
    features: [
      "Modular backend integrating video processing and audio analysis",
      "Real-time alert system for detecting stress, fatigue and abnormal behavior",
      "Voice-activated conversational interface for astronaut interaction",
      "Evidence-based interventions like mindfulness and grounding techniques",
    ],
    techStack: ["Python", "AI/ML", "Audio Analysis", "Video Processing", "NLP"],
    githubLink: "https://github.com/sonamk27",
  },
  {
    id: 2,
    title: "Project Raseed – Receipt Management AI",
    badge: "🏆 AI Day Hackathon Finalist",
    overview: "An AI-powered chatbot to manage and analyze digital receipts with smart expense insights.",
    features: [
      "Google AI tools for OCR and receipt scanning",
      "Chat-based querying for expense history",
      "Automated expense categorization and insights",
      "Smart spending pattern detection",
    ],
    techStack: ["Google AI", "OCR", "Chatbot", "JavaScript", "Node.js"],
    githubLink: "https://github.com/sonamk27",
  },
  {
    id: 3,
    title: "FloatChat – Ocean Data AI Interface",
    overview: "A conversational interface for discovering and visualizing ARGO ocean data using natural language queries.",
    features: [
      "Chat-style frontend UI with natural-language queries",
      "LLM backend integration via REST/MCP APIs",
      "SQL query generation and vector search retrieval",
      "Real-time ocean data visualization",
    ],
    techStack: ["React.js", "LLM APIs", "REST/MCP", "SQL", "Vector Search"],
    githubLink: "https://github.com/sonamk27",
  },
  {
    id: 4,
    title: "Studymate – AI Chat Dashboard",
    overview: "An AI-driven student dashboard providing instant, contextualized solutions to academic questions.",
    features: [
      "LLM-powered natural language Q&A engine",
      "Retrieval-augmented search for accurate answers",
      "Worked examples and citations from curated resources",
      "Instant academic support for students",
    ],
    techStack: ["LLM", "RAG", "React.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/sonamk27",
  },
];

interface ProjectModalProps {
  isOpen: boolean;
  project: ProjectDetails | null;
  onClose: () => void;
}

export const ProjectModal = ({ isOpen, project, onClose }: ProjectModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      setIsAnimating(true);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/[0.1] bg-black-100 shadow-2xl transform transition-all duration-300 ${
          isAnimating ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes size={20} />
        </button>

        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto p-8">
          {/* Badge */}
          {project.badge && (
            <div className="mb-4 inline-block rounded-full bg-purple-500/20 border border-purple-500/50 px-3 py-1 text-sm text-purple-400">
              {project.badge}
            </div>
          )}

          {/* Title */}
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            {project.title}
          </h2>

          {/* Overview */}
          <div className="mb-8">
            <h3 className="mb-3 text-xl font-semibold text-white">Overview</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-white">Key Features</h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="mr-2 mt-1 text-purple-400">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-lg bg-[#10132e] px-3 py-2 text-sm text-gray-300 border border-white/[0.1]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub Button */}
          <div className="flex gap-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <MagicButton
                title="View on GitHub"
                icon={<FaGithub />}
                position="right"
              />
            </a>
            <MagicButton
              title="Close"
              handleClick={handleClose}
              otherClasses="flex-1 !bg-gray-700 hover:!bg-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
