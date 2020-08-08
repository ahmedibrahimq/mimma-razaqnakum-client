import React from "react";

function Badge({ title, bgColor = "bg-black", txtColor = "text-white" }) {
  return (
    <a href="#">
      <span
        className={`inline-block py-0 px-2 mb-1 mx-1 rounded text-sm font-bold ${bgColor} ${txtColor}`}
      >
        {title}
      </span>
    </a>
  );
}

export default Badge;
