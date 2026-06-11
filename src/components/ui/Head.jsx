import React from "react";

function Head({ h1, p, darkmode }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className={`font-bold text-[35px] sm:text-[45px] opacity-[0.9] tracking-tight ${
        darkmode ? "text-white" : "text-slate-950"
      }`}>
        {h1}
      </h2>
      <p className={`font-semibold text-[15px] sm:text-[18px] opacity-80 mt-1 uppercase tracking-wider ${
        darkmode ? "text-indigo-400" : "text-blue-600"
      }`}>
        {p}
      </p>
    </div>
  );
}

export default Head;
