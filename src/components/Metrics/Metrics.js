import React from "react";
import { RevealWrapper } from "../../hooks/useScrollReveal";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";

function CounterCard({ value, suffix = "", prefix = "", label, sublabel }) {
  const numericPart = parseFloat(value);
  const [ref, count] = useAnimatedCounter(isNaN(numericPart) ? 0 : numericPart, 2200);

  return (
    <div ref={ref} className="card-glow p-8 bg-dark-800 border border-dark-600 rounded-xl text-center hover:border-accent/40 transition-all duration-300 group">
      <p className="text-5xl md:text-6xl font-serif text-accent font-bold mb-2 tracking-tight">
        {prefix}{isNaN(numericPart) ? value : count}{suffix}
      </p>
      <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">{label}</p>
      {sublabel && <p className="text-xs text-gray-600">{sublabel}</p>}
    </div>
  );
}

const metrics = [
  { value: "100", prefix: "$", suffix: "K", label: "Deal Powered", sublabel: "Programmatic revenue at LG Ad Solutions" },
  { value: "25", suffix: "%", label: "Efficiency Boost", sublabel: "Inventory filtering & decision optimization" },
  { value: "15", suffix: "%", label: "Fill Rate Increase", sublabel: "SSAI ad request enrichment" },
  { value: "20", suffix: "%", label: "Error Reduction", sublabel: "Request error reduction via supply enrichment" },
  { value: "75", suffix: "%", label: "Code Coverage", sublabel: "Raised from 0% at Sharechat with 100+ tests" },
  { value: "80", suffix: "%", label: "Quality Uplift", sublabel: "SonarQube coverage at Atlassian (from 30%)" },
];

function Metrics() {
  return (
    <div className="bg-dark-900 pt-32 pb-20">
      <div className="section-divider max-w-6xl mx-auto mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <RevealWrapper>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Impact</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-4">
            Numbers that matter
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl">
            Quantifiable impact I've delivered across teams and products.
          </p>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <RevealWrapper key={i} delay={i * 100}>
              <CounterCard {...m} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Metrics;
