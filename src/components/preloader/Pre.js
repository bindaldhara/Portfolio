import React from "react";

function Pre(props) {
  return (
    <div
      className={`fixed inset-0 z-[999999] flex items-center justify-center transition-opacity duration-500 bg-dark-900 ${
        props.load ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        <span className="text-accent font-serif text-xl tracking-widest">DB</span>
      </div>
    </div>
  );
}

export default Pre;
