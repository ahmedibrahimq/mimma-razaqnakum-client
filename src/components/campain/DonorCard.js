import React from "react";

function DonorCard({ donor, amount, created_at }) {
  return (
    <div className="flex items-center justify-between max-w-md mb-1 p-2 border">
      <div className="flex-grow mb-1 border-r px-3">
        <h1>{donor}</h1>
        <p className="text-xs text-gray-600">{created_at}</p>
      </div>
      <div className="text-center mb-1">
        <a className="text-gray-600 hover:text-gray-800 px-3">{amount} EGP</a>
      </div>
    </div>
  );
}

export default DonorCard;
