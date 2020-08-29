import React from "react";

function AccountType({ selectedAccType }) {
  return (
    <div className="flex flex-wrap items-center w-full justify-evenly mb-10 py-10 text-center bg-white border shadow-md">
      <h1 className="w-full mb-6 text-2xl text-gray-900 font-bold">
        Reach your community easier
      </h1>
      <a
        href="#reg"
        onClick={() => selectedAccType(1)}
        className="flex flex-col items-center cursor-pointer bg-white w-56 p-4 border hover:shadow-lg overflow-hidden"
      >
        <span className="text-gray-900">
          <strong>Create</strong> new organization and invite your team.
        </span>
        <img
          className="h-20 my-6"
          src={require("../../../public/assets/undraw_best_place_r685.svg")}
          alt="Create organization"
        />
        <button
          // onClick={() => selectedAccType(1)}
          className="flex-1 py-2 px-4 bg-gray-700 text-sm text-white rounded hover:bg-gray-600 focus:outline-none"
          type="button"
        >
          Create organization
        </button>
      </a>
      <a
        href="#reg"
        onClick={() => selectedAccType(2)}
        className="flex flex-col items-center cursor-pointer bg-white w-56 p-4 border hover:shadow-lg overflow-hidden"
      >
        <span className="text-gray-800">
          <strong>Join</strong> an organization with an invite code.
        </span>
        <img
          className="h-20 w-32 my-6"
          src={require("../../../public/assets/undraw_Login_v483.svg")}
          alt="Join organization"
        />
        <button
          // onClick={() => selectedAccType(2)}
          className="flex-1 py-2 px-4 bg-gray-700 text-sm text-white rounded hover:bg-gray-600 focus:outline-none"
          type="button"
        >
          Join organization
        </button>
      </a>
    </div>
  );
}

export default AccountType;
