import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RevealWrapper } from "../../hooks/useScrollReveal";

function Contact() {
  return (
    <div className="bg-dark-900 pt-32 pb-20">
      <div className="section-divider max-w-6xl mx-auto mb-0" />
      <div className="max-w-3xl mx-auto px-6 pt-16 text-center">
        <RevealWrapper>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-6">Let's work together</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            I'm open to remote opportunities and interesting collaborations. Feel free to reach out if you'd like to connect.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={150}>
          <a href="mailto:dharabindal@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-dark-900 font-semibold text-lg rounded-lg hover:bg-accent-light hover:shadow-[0_0_40px_rgba(201,168,108,0.25)] transition-all duration-300 no-underline mb-10">
            <SiGmail size={20} />
            dharabindal@gmail.com
          </a>
        </RevealWrapper>

        <RevealWrapper delay={250}>
          <div className="flex items-center justify-center gap-6 mt-8">
            {[
              { href: "https://github.com/bindaldhara", icon: <AiFillGithub size={24} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/dhara-bindal-48996a1bb/", icon: <FaLinkedinIn size={22} />, label: "LinkedIn" },
            ].map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-accent transition-all duration-300 no-underline text-sm">
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
}

export default Contact;
