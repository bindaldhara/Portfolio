import React from "react";
import { RevealWrapper } from "../../hooks/useScrollReveal";
import { FaRobot } from "react-icons/fa";
import ArchitectureDiagram from "./ArchitectureDiagram";

const capabilities = [
  "Natural language codebase interaction",
  "Architectural insights & dependency analysis",
  "Documentation generation",
  "Intelligent code discovery",
];

const techTags = [
  "Multi-Agent RAG",
  "Graph RAG",
  "MCP Tools",
  "Semantic Caching",
  "Hybrid Search",
  "LangGraph",
  "Qdrant",
  "Real-time GitHub Indexing",
  "Docker",
  "Kubernetes",
  "FastAPI",
];

function CurrentlyBuilding() {
  return (
    <div className="bg-dark-900 pt-32 pb-20">
      <div className="section-divider max-w-6xl mx-auto mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <RevealWrapper>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Now Building
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-4">
            Currently Building
          </h2>
          <p className="text-gray-500 max-w-2xl mb-12 leading-relaxed">
            A focused view of active engineering work and the production AI
            skills I am strengthening now.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div className="card-glow rounded-2xl border border-dark-600 bg-dark-800 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-dark-600">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-xl">
                    <FaRobot />
                  </div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/40 text-accent text-xs font-medium uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    In Development
                  </span>
                </div>

                <p className="text-accent text-xs tracking-[0.25em] uppercase mb-2">
                  Now Building / 01
                </p>
                <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">
                  GitSense AI
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  A production-grade AI platform for understanding, indexing, and
                  reasoning over large-scale software repositories — enabling natural
                  language interaction, architectural insights, dependency analysis,
                  documentation generation, and intelligent code discovery.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Combines Multi-Agent RAG, Graph RAG, MCP-compatible tools, semantic
                  caching, and real-time GitHub indexing with Docker and Kubernetes
                  infrastructure.
                </p>

                <ul className="space-y-2">
                  {capabilities.map((cap, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 md:p-8 bg-dark-900/50 flex flex-col justify-center min-h-[420px]">
                <ArchitectureDiagram />
              </div>
            </div>

            <div className="px-6 md:px-10 py-6 border-t border-dark-600">
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techTags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-dark-900 text-gray-400 border border-dark-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
}

export default CurrentlyBuilding;
