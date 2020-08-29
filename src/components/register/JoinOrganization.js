import React from "react";

function JoinOrganization() {
  return (
    <div className="mt-4 w-full">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="Invite Code"
      >
        Invite Code
      </label>
      <input
        className="w-full mt-2 py-2 px-4 bg-gray-100 text-gray-700 border border-gray-300 rounded  block appearance-none placeholder-gray-500 focus:outline-none focus:bg-white"
        type="text"
        required
        placeholder="Invite Code"
        aria-label="Invite Code"
      />
    </div>
  );
}

export default JoinOrganization;
