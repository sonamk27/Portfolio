"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

import { PinContainer } from "./ui/3d-pin";
import { ProjectModal } from "./project-modal";

export const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const getProjectDetails = (projectId: number) => {
    const projectDetails = [
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
    return projectDetails.find(p => p.id === projectId) || null;
  };
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(
          ({ id, des, iconLists, img, link, sourceCode, title }) => (
            <div
              key={id}
              className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem] cursor-pointer"
              onClick={() => handleProjectClick(id)}
            >
              <PinContainer title="View Details" href="#">
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                  <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <Image
                      height={330}
                      width={552}
                      src="/bg.png"
                      alt="bg-img"
                    />
                  </div>

                  <Image
                    height={300}
                    width={464}
                    src={img}
                    alt={title}
                    className="absolute bottom-0 z-10"
                  />
                </div>

                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {title}
                </h1>

                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                  {des}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, i) => (
                      <div
                        key={icon}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * i * 2}px)`,
                        }}
                      >
                        <Image
                          height={40}
                          width={40}
                          src={icon}
                          alt={icon}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <Link
                      href={sourceCode}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex text-sm text-purple md:text-xs lg:text-xl"
                    >
                      Source Code
                    </Link>

                    <FaLocationArrow className="ms-3" color="#cbacf9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        project={selectedProject ? getProjectDetails(selectedProject) : null}
        onClose={closeModal}
      />
    </section>
  );
};
