import React, { useState, useEffect } from "react";
import pdf from "../../Assets/Dhara_Bindal.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { RevealWrapper } from "../../hooks/useScrollReveal";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="bg-dark-900 pt-32 pb-20">
      <div className="section-divider max-w-4xl mx-auto mb-0" />
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <RevealWrapper>
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Resume</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-medium">My CV</h2>
            </div>
            <a href={pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-dark-900 font-medium rounded hover:bg-accent-light hover:shadow-[0_0_30px_rgba(201,168,108,0.2)] transition-all duration-300 no-underline text-sm">
              <AiOutlineDownload size={18} />
              Download
            </a>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={150}>
          <div className="flex justify-center bg-dark-800 border border-dark-600 rounded-lg p-4 md:p-8 hover:border-accent/20 transition-colors">
            <Document file={pdf}>
              <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
            </Document>
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
}

export default ResumeNew;
