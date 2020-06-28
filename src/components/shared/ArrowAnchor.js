import React from "react";

function ArrowAnchor({ href, text, right, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center
      ${(right && "flex-row-reverse") || ""} ${className}`}
    >
      {text}
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className={`w-4 h-4  ${
          (right && "transform rotate-180 mr-2") || "ml-2"
        }`}
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  );
}

export default ArrowAnchor;
