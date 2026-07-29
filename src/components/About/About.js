import React from "react";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { RevealWrapper } from "../../hooks/useScrollReveal";

const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "3", label: "Companies" },
  { value: "500+", label: "DSA Problems" },
  { value: "8.61", label: "CGPA" },
];

function About() {
  return (
    <div className="bg-dark-900 pt-32 pb-20">
      <div className="section-divider max-w-6xl mx-auto mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <RevealWrapper>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">About</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-8">
            A bit about me
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20">
          <RevealWrapper delay={100} className="lg:col-span-3">
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm Dhara Bindal, a Software Engineer at <span className="text-accent font-medium">LG Ad Solutions</span> in Bangalore, 
              where I build scalable backend systems and integrate programmatic advertising pipelines. 
              I graduated from Jabalpur Engineering College with a B.Tech in Computer Science (CGPA 8.61/10).
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Previously, I interned at <span className="text-accent font-medium">Sharechat</span> and <span className="text-accent font-medium">Atlassian</span>, 
              where I worked on automation, backend services in Go and Kotlin, and enhanced code quality through testing and CI/CD integration.
            </p>
            <p className="text-gray-500 text-base italic border-l-2 border-accent/30 pl-4">
              "It's never too late to be what you might've been."
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="card-glow p-5 bg-dark-800 border border-dark-600 rounded-lg text-center hover:border-accent/30 transition-all">
                  <p className="text-3xl font-serif text-accent font-semibold mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={100}>
          <h3 className="text-2xl text-white font-medium mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            Tech Stack
          </h3>
          <Techstack />
        </RevealWrapper>

        <RevealWrapper delay={150} className="mt-16">
          <h3 className="text-2xl text-white font-medium mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            Tools & Platforms
          </h3>
          <Toolstack />
        </RevealWrapper>
      </div>
    </div>
  );
}

export default About;
