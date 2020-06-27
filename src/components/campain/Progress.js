import React from "react";

function Progress({ collected, target }) {
  const percent = Math.floor((collected / target) * 100);

  return (
    <div className="my-4">
      <div className="flex text-center justify-between">
        <span className="text-sm font-semibold py-1 text-gray-600">
          Collected: {collected}$
        </span>
        <span className="text-right text-sm font-semibold py-1 text-gray-600">
          Goal: {target}$
        </span>
      </div>
      <div className="overflow-hidden h-2 mb-4 flex rounded bg-gray-200">
        <div style={{ width: `${percent}%` }} className=" bg-gray-500"></div>
      </div>
    </div>
  );
}

export default Progress;
