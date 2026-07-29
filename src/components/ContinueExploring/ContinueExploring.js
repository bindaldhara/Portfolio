import React from "react";
import { RevealWrapper } from "../../hooks/useScrollReveal";
import { exploreChapters } from "../../data/sections";

function ContinueExploring() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-dark-900 pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <RevealWrapper>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Browse Chapter
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-medium mb-3">
            Continue Exploring
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-8 max-w-xl">
            Jump directly to the chapter most relevant to your review.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div className="relative">
            <div className="chapter-scroll flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
              {exploreChapters.map((chapter) => (
                <button
                  key={chapter.id}
                  type="button"
                  onClick={() => scrollTo(chapter.id)}
                  className="chapter-card snap-start shrink-0 w-[240px] md:w-[260px] text-left p-5 rounded-2xl bg-dark-800 border border-dark-600 hover:border-accent/40 transition-all duration-300 group cursor-pointer"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent text-lg mb-4 group-hover:bg-accent/20 transition-colors">
                    {chapter.icon}
                  </span>
                  <h3 className="text-white font-medium text-base mb-2 group-hover:text-accent transition-colors">
                    {chapter.label}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {chapter.description}
                  </p>
                </button>
              ))}
            </div>

            <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-16 bg-gradient-to-l from-dark-900 to-transparent md:hidden" />
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
}

export default ContinueExploring;
