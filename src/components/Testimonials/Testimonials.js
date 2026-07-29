import React from "react";
import { RevealWrapper } from "../../hooks/useScrollReveal";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote: "I appreciate Dhara for her exceptional contributions during their internship with our team. She has impressed us with her dedication, professionalism, and quick learning abilities. She consistently met all expectations and demonstrated a strong commitment to excellence in her work. I am confident that she will continue to thrive and make valuable contributions in her future endeavours. All the best !!!",
    name: "H.M.",
    designation: "Software Engineer II",
    company: "Atlassian",
    initials: "HM",
  },
  {
    quote: "I highly appraise Dhara for her technical expertise and commitment to delivering high-quality work. While working at Atlassian, I observed her dedication to understand the intricacies of technology, going beyond surface-level solutions. Dhara also brings strong values to the workplace, displaying integrity and reliability. Her focus on both technical excellence and ethical practices makes her an asset to the team.",
    name: "A.P.",
    designation: "Senior Integration Engineer",
    company: "Atlassian",
    initials: "AP",
  },
];

function Testimonials() {
  return (
    <div className="bg-dark-900 pt-32 pb-20">
      <div className="section-divider max-w-6xl mx-auto mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <RevealWrapper>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-16">What colleagues say</h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <RevealWrapper key={i} delay={i * 150}>
              <div className="card-glow h-full flex flex-col p-6 md:p-8 bg-dark-800 border border-dark-600 rounded-xl hover:border-accent/30 transition-all duration-300">
                <FaQuoteLeft className="text-accent/30 text-2xl mb-4 shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-dark-600">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-semibold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.designation}</p>
                    <p className="text-accent text-xs">{t.company}</p>
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

export default Testimonials;
