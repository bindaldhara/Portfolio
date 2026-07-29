import React from "react";
import ProjectCard from "./ProjectCards";
import { RevealWrapper } from "../../hooks/useScrollReveal";
import reservet from "../../Assets/reservet.png";
import jira from "../../Assets/jira.png";
import yelp from "../../Assets/yelp.png";

const projects = [
  {
    imgPath: jira,
    title: "AI Integration in Jira",
    description: "Built comprehensive unit tests with JUnit and Mockito in Kotlin, elevated SonarQube code coverage from 30% to 80%, and integrated AI capabilities into Jira Service Management using Workato for enhanced automation.",
    demoLink: "https://drive.google.com/file/d/1ZfDbZqqGrkVUaLIuRSeoM9n5jckA6de3/view?usp=drive_link",
    tags: ["Kotlin", "JUnit", "Workato", "Jira"],
  },
  {
    imgPath: yelp,
    title: "Yelpcamp",
    description: "Full-stack campground review app using MVC architecture with NodeJS, MongoDB, and Express. Features CRUD for campgrounds and reviews, PassportJS authentication, and deployed on Vercel.",
    demoLink: "https://yelp-camp-brown.vercel.app/",
    tags: ["Node.js", "MongoDB", "Express", "PassportJS"],
  },
  {
    imgPath: reservet,
    title: "Reservet",
    description: "SIH team project — an e-ticket portal for tourism that can increase tourism by 70%. Built with MERN stack, Firebase authentication, Front-end Redux data flow, and Razorpay API for payments.",
    demoLink: "https://reservet.netlify.app/",
    tags: ["React", "Node.js", "Firebase", "Redux", "Razorpay"],
  },
];

function Projects() {
  return (
    <div className="bg-dark-900 pt-32 pb-20">
      <div className="section-divider max-w-6xl mx-auto mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <RevealWrapper>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Work</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-4">Featured Projects</h2>
          <p className="text-gray-500 mb-12">A selection of things I've built</p>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <RevealWrapper key={i} delay={i * 120}>
              <ProjectCard {...project} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
