import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-600">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Dhara Bindal. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {[
            { href: "https://github.com/bindaldhara", icon: <AiFillGithub size={20} /> },
            { href: "https://www.linkedin.com/in/dhara-bindal-48996a1bb/", icon: <FaLinkedinIn size={18} /> },
            { href: "mailto:dharabindal@gmail.com", icon: <SiGmail size={18} /> },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">{s.icon}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
