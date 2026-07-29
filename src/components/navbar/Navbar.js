import React, { useState, useEffect, useCallback } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { sections, primaryNav } from "../../data/sections";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const scrollPos = window.scrollY + window.innerHeight / 3;

    for (let i = els.length - 1; i >= 0; i--) {
      if (els[i].offsetTop <= scrollPos) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
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

          <div className="flex items-center gap-2 sm:gap-4">
            {primaryNav.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm tracking-wide transition-colors bg-transparent border-none cursor-pointer px-2 py-1 ${
                  activeSection === link.id
                    ? "text-accent"
                    : "text-gray-400 hover:text-accent-light"
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => setMenuOpen(true)}
              className="ml-1 sm:ml-2 flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-600 text-gray-400 hover:text-accent hover:border-accent/40 transition-all bg-transparent cursor-pointer text-sm"
            >
              <HiMenu className="text-base" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen chapter menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-dark-900/95 backdrop-blur-lg"
          onClick={() => setMenuOpen(false)}
        />

        <div className="relative h-full overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-8 min-h-full flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-accent text-xs tracking-[0.3em] uppercase mb-2">
                  Navigation
                </p>
                <h2 className="font-serif text-3xl text-white font-medium">
                  Pick a chapter
                </h2>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-dark-600 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/40 transition-all bg-transparent cursor-pointer"
              >
                <HiX size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
              {sections.map((section, i) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  className={`text-left p-5 rounded-xl bg-dark-800 border transition-all duration-300 group cursor-pointer ${
                    activeSection === section.id
                      ? "border-accent/50"
                      : "border-dark-600 hover:border-accent/30"
                  }`}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 text-accent mb-3 group-hover:bg-accent/20 transition-colors">
                    {section.icon}
                  </span>
                  <h3 className="text-white font-medium mb-1 group-hover:text-accent transition-colors">
                    {section.label}
                  </h3>
                  <p className="text-gray-500 text-sm">{section.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
