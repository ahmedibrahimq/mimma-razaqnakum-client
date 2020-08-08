import React from "react";

function GroupCard({ group_name = "Test", logo, address = "Cairo" }) {
  return (
    <div className="border p-6 bg-white rounded shadow-sm h-20r relative">
      <div className="w-20 h-20 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 mb-4 overflow-hidden">
        <img
          src={
            logo ||
            `https://avatars.dicebear.com/api/identicon/${group_name}.svg?m=1`
          }
          className="w-full h-full"
        />
      </div>
      <h2 className="text-lg text-gray-900 font-bold mb-2">
        <a href={`/${group_name}`}>{group_name}</a>
      </h2>
      <p className="leading-relaxed text-base absolute bottom-0 pb-4">
        {address}
      </p>
    </div>
  );
}

export default GroupCard;
