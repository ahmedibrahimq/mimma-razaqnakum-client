import React from "react";

function CreateOrganization() {
  return (
    <>
      <div className="mt-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="Organization Name"
        >
          Organization Name
        </label>
        <input
          className="w-full mt-2 py-2 px-4 bg-gray-100 text-gray-700 border border-gray-300 rounded  block appearance-none placeholder-gray-500 focus:outline-none focus:bg-white"
          type="text"
          required
          placeholder="Organization Name"
          aria-label="Organization Name"
        />
      </div>

      <div className="mt-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="Organization Address"
        >
          Organization Address
        </label>
        <input
          className="w-full mt-2 py-2 px-4 bg-gray-100 text-gray-700 border border-gray-300 rounded  block appearance-none placeholder-gray-500 focus:outline-none focus:bg-white"
          type="text"
          required
          placeholder="Organization Address"
          aria-label="Organization Address"
        />
      </div>
    </>
  );
}

export default CreateOrganization;
