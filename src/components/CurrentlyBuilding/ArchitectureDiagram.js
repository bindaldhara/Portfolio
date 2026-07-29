import React from "react";
import { FaRobot, FaDatabase } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { TbTools } from "react-icons/tb";

const CENTER = { x: 160, y: 128 };
const NODES = [
  { x: 52, y: 44, icon: "rag", label: "AI Engine", tag: "Multi-Agent" },
  { x: 268, y: 44, icon: "api", label: "API" },
  { x: 52, y: 212, icon: "mcp", label: "MCP Tools" },
  { x: 268, y: 212, icon: "data", label: "Data" },
];

function NodeIcon({ type }) {
  switch (type) {
    case "rag":
      return <span className="text-[11px] font-bold text-purple-400 tracking-wide">RAG</span>;
    case "api":
      return <AiOutlineApi className="text-accent text-lg" />;
    case "mcp":
      return <TbTools className="text-accent text-lg" />;
    case "data":
      return <FaDatabase className="text-accent text-base" />;
    default:
      return null;
  }
}

function ArchitectureDiagram() {
  return (
    <div className="relative rounded-xl border border-dark-600 bg-dark-900 overflow-hidden w-full min-h-[380px] flex flex-col">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,108,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,108,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial glow behind hub */}
      <div
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,108,0.12) 0%, rgba(201,168,108,0.04) 40%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col flex-1 p-5 md:p-6">
        {/* Header */}
        <div className="flex items-start justify-between shrink-0">
          <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shadow-[0_0_20px_rgba(201,168,108,0.1)]">
            <FaRobot size={18} />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent/35 text-accent text-[9px] font-medium uppercase tracking-wider bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            In Development
          </span>
        </div>

        {/* Hub diagram */}
        <div className="relative flex-1 flex items-center justify-center my-4 min-h-[260px]">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 320 256"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(201,168,108,0.05)" />
                <stop offset="50%" stopColor="rgba(201,168,108,0.35)" />
                <stop offset="100%" stopColor="rgba(201,168,108,0.05)" />
              </linearGradient>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(201,168,108,0.15)" />
                <stop offset="100%" stopColor="rgba(201,168,108,0)" />
              </radialGradient>
            </defs>

            {/* Connector lines */}
            {NODES.map((node, i) => (
              <g key={i}>
                <line
                  x1={CENTER.x}
                  y1={CENTER.y}
                  x2={node.x}
                  y2={node.y}
                  stroke="url(#lineGrad)"
                  strokeWidth="1"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="3"
                  fill="rgba(201,168,108,0.25)"
                  stroke="rgba(201,168,108,0.5)"
                  strokeWidth="1"
                />
              </g>
            ))}

            {/* Hub outer ring */}
            <circle
              cx={CENTER.x}
              cy={CENTER.y}
              r="62"
              fill="url(#hubGlow)"
              stroke="rgba(201,168,108,0.12)"
              strokeWidth="1"
            />
            <circle
              cx={CENTER.x}
              cy={CENTER.y}
              r="54"
              fill="none"
              stroke="rgba(201,168,108,0.35)"
              strokeWidth="1.5"
            />
            <circle
              cx={CENTER.x}
              cy={CENTER.y}
              r="48"
              fill="#0a0a0a"
              stroke="rgba(201,168,108,0.2)"
              strokeWidth="1"
            />
          </svg>

          {/* Satellite nodes */}
          {NODES.map((node, i) => {
            const left = `${(node.x / 320) * 100}%`;
            const top = `${(node.y / 256) * 100}%`;
            return (
              <div
                key={i}
                className="absolute z-10 flex flex-col items-center gap-1.5 -translate-x-1/2 -translate-y-1/2"
                style={{ left, top }}
              >
                <div className="w-[58px] h-[58px] rounded-xl bg-dark-800 border border-dark-600 flex flex-col items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-accent/30 transition-colors">
                  <NodeIcon type={node.icon} />
                  <span className="text-[7px] text-gray-500 uppercase tracking-wider mt-1">
                    {node.label}
                  </span>
                </div>
                {node.tag && (
                  <span className="text-[8px] px-2 py-0.5 rounded-md bg-accent/10 text-accent border border-accent/25 font-medium whitespace-nowrap">
                    {node.tag}
                  </span>
                )}
              </div>
            );
          })}

          {/* Center hub content */}
          <div
            className="absolute z-20 flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(CENTER.x / 320) * 100}%`,
              top: `${(CENTER.y / 256) * 100}%`,
            }}
          >
            <FaRobot className="text-accent text-2xl mb-1 drop-shadow-[0_0_8px_rgba(201,168,108,0.4)]" />
            <span className="text-[8px] text-gray-500 uppercase tracking-[0.25em]">Agent</span>
            <span className="text-[11px] text-accent font-semibold uppercase tracking-wider">
              Building
            </span>
          </div>
        </div>

        {/* Footer / progress */}
        <div className="shrink-0 pt-2 border-t border-dark-600/60">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em]">
              AI Service Pipeline
            </span>
            <span className="text-[9px] text-accent uppercase tracking-[0.2em]">
              Work in Progress
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-dark-700 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent/30 via-accent/70 to-accent relative"
              style={{ width: "42%" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitectureDiagram;
