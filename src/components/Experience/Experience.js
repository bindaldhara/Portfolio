import React from "react";
import { RevealWrapper } from "../../hooks/useScrollReveal";

const experiences = [
  {
    company: "LG Ad Solutions",
    role: "Software Engineer",
    period: "December 2024 — Present",
    location: "Bangalore",
    highlights: [
      "Integrated Spring Serve Tiles as a new programmatic partner, implementing request/response connectors with unit and integration tests to open up new revenue opportunities and grow programmatic demand, powering a $100K deal",
      "Revamped inventory filtering in SSP portal with Go-based backend APIs and interactive graph visualization, boosting data clarity, operational visibility, and decision efficiency by 25%",
      "Developed supply enrichment logic to augment SSAI ad requests with external server, improving metadata accuracy for better ad targeting and segmentation; boosted fill rate by 15% and reduced request errors by 20%",
      "Designed LLD for scanned creative fires and optimized PagerDuty incident management by refining schedules, escalation policies, and subscription rules based on severity, guiding deep system-level insight",
    ],
    tech: "Golang, Python, Apache Airflow (DAGs), Kafka, Redis, PagerDuty",
  },
  {
    company: "Sharechat",
    role: "Software Engineer Intern",
    period: "June 2024 — October 2024",
    location: "Bangalore",
    highlights: [
      "Automated the offline report generation for 5+ queries needed by the finance team by writing a cron job in Golang",
      "Implemented frontend automation for MOJ payments using Maestro covering top 10 UI flows",
      "Tested CRON - payout report job in Golang with the Testify library, integrated SonarQube, raised coverage from 0% to 75% by adding 100+ tests and incorporated error handling to cover failure scenarios",
    ],
    tech: "Golang, Maestro, SonarQube, Testify",
  },
  {
    company: "Atlassian",
    role: "Software Engineer Intern",
    period: "June 2023 — July 2023",
    location: "Remote",
    highlights: [
      "In Kotlin, performed unit testing using JUnit and Mockito, crafting 5+ test cases to cover all edge scenarios",
      "Elevated SonarQube integration, augmenting code coverage from 30% to 80%, resulting in significant improvement",
      "Utilized Workato to integrate AI into Jira Service Management project, enhancing its functionality and automation",
    ],
    tech: "Kotlin, JUnit, Mockito, Workato, Jira Service Management",
  },
];

function Experience() {
  return (
    <div className="bg-dark-900 pt-32 pb-20">
      <div className="section-divider max-w-6xl mx-auto mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <RevealWrapper>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Career</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-16">
            Work Experience
          </h2>
        </RevealWrapper>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-dark-600 to-transparent" />

          {experiences.map((exp, i) => (
            <RevealWrapper key={i} delay={i * 150}>
              <div className="relative pl-8 md:pl-20 mb-16 last:mb-0">
                <div className={`absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full bg-accent -translate-x-[5px] ${i === 0 ? "timeline-dot-active" : ""}`} />

                <div className="card-glow bg-dark-800 border border-dark-600 rounded-lg p-6 md:p-8 hover:border-accent/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl text-white font-medium">{exp.role}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-accent mt-1.5 shrink-0">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.split(", ").map((t, j) => (
                      <span key={j} className="text-xs px-2 py-1 rounded bg-dark-700 text-gray-500 border border-dark-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
