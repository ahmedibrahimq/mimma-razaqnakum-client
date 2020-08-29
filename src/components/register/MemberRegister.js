import React from "react";
import CreateOrganization from "./CreateOrganization";
import JoinOrganization from "./JoinOrganization";

function MemberRegister({ accType }) {
  return (
    <div
      id="reg"
      style={{ scrollMarginTop: 6 + "rem" }}
      className="bg-white w-full mb-10 max-w-sm border shadow-md mx-auto"
    >
      <div className="py-4 px-6">
        <h2 className="hidden text-center font-bold text-gray-700 text-3xl">
          Brand
        </h2>

        <p className="mt-1 text-center font-bold text-gray-600 text-xl">
          {accType === 1 ? "Create" : "Join"} an Organization
        </p>
        <form>
          {accType === 1 ? <CreateOrganization /> : <JoinOrganization />}
          <hr className="mt-6 mb-4" />
          <span className="text-center text-gray-600">Create your account</span>
          <div className="mt-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full mt-2 py-2 px-4 bg-gray-100 text-gray-700 border border-gray-300 rounded  block appearance-none placeholder-gray-500 focus:outline-none focus:bg-white"
              type="email"
              required
              placeholder="Email Address"
              aria-label="Email Address"
            />
          </div>
          <div className="mt-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full mt-2 py-2 px-4 bg-gray-100 text-gray-700 border border-gray-300 rounded  block appearance-none placeholder-gray-500 focus:outline-none focus:bg-white"
              type="text"
              required
              placeholder="Username"
              aria-label="Username"
            />
          </div>
          <div className="mt-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full mt-2 py-2 px-4 bg-gray-100 text-gray-700 border border-gray-300 rounded  block appearance-none placeholder-gray-500 focus:outline-none focus:bg-white"
              type="password"
              required
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <div className="flex justify-between items-center mt-6">
            {/* <a href="#" className="text-gray-600 text-sm hover:text-gray-500">
              Forget Password?
            </a> */}

            <button
              className="flex-1 py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none"
              type="button"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MemberRegister;
