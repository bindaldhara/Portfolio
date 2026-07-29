import React from "react";
import Type from "./Type";
import "./home.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home() {
  const handleScroll = () => {
    const exploreSection = document.getElementById("explore");
    if (exploreSection) exploreSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900 relative overflow-hidden">
      <div className="gradient-orb absolute top-1/4 -right-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="gradient-orb-2 absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[80px]" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(201,168,108,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,108,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <p className="hero-label text-accent text-sm tracking-[0.3em] uppercase mb-6 font-medium">
          Software Engineer
        </p>

        <h1 className="hero-title font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-tight mb-6">
          Hello, I'm Dhara —
          <br />
          <span className="text-accent">
            <Type />
          </span>
        </h1>

        <p className="hero-subtitle text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Software Engineer at LG Ad Solutions, building scalable systems with Go, Python, and cloud-native technologies.
        </p>

        <div className="hero-socials flex items-center justify-center gap-4 mb-12">
          {[
            { href: "https://github.com/bindaldhara", icon: <AiFillGithub size={20} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/dhara-bindal-48996a1bb/", icon: <FaLinkedinIn size={18} />, label: "LinkedIn" },
            { href: "mailto:dharabindal@gmail.com", icon: <SiGmail size={18} />, label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-full border border-dark-500 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent hover:shadow-[0_0_20px_rgba(201,168,108,0.15)] transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <button
          onClick={handleScroll}
          className="hero-scroll flex flex-col items-center gap-2 text-gray-500 text-sm mx-auto bg-transparent border-none cursor-pointer hover:text-accent transition-colors group mb-4"
        >
          <span>Scroll to Explore</span>
          <span className="text-accent text-lg animate-bounce group-hover:animate-none">↓</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
