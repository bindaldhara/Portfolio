import React, { useState, useEffect, useCallback } from "react";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaBriefcase, FaTrophy } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const navLinks = [
  { id: "home", label: "Home", icon: <AiOutlineHome /> },
  { id: "about", label: "About", icon: <AiOutlineUser /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "projects", label: "Projects", icon: <AiOutlineFundProjectionScreen /> },
  { id: "achievements", label: "Achievements", icon: <FaTrophy /> },
  { id: "testimonials", label: "Testimonials", icon: <CgFileDocument /> },
  { id: "resume", label: "Resume", icon: <CgFileDocument /> },
  { id: "contact", label: "Contact", icon: <SiGmail /> },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const scrollPos = window.scrollY + window.innerHeight / 3;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop <= scrollPos) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-900/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo("home")}
          className="text-accent font-serif text-2xl font-semibold hover:text-accent-light transition-colors bg-transparent border-none cursor-pointer"
        >
          DB
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm tracking-wide transition-colors bg-transparent border-none cursor-pointer ${
                activeSection === link.id
                  ? "text-accent"
                  : "text-gray-400 hover:text-accent-light"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-6 h-0.5 bg-accent transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-accent transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-accent transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark-900/98 backdrop-blur-md border-t border-dark-600 px-6 py-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left py-3 text-sm bg-transparent border-none cursor-pointer transition-colors ${
                activeSection === link.id ? "text-accent" : "text-gray-400 hover:text-accent-light"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                {link.icon} {link.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
