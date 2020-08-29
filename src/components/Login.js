import React from "react";

function Login() {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="bg-white w-full max-w-sm border shadow-md overflow-hidden mx-auto">
        <div className="py-4 px-6">
          <h2 className="hidden text-center font-bold text-gray-700 text-3xl">
            Brand
          </h2>

          <p className="mt-1 text-center font-bold text-gray-600 text-xl">
            Organizer Login
          </p>

          <span className="mt-1 text-center text-gray-600">
            Login to your organization
          </span>

          <form>
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
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 bg-gray-100 text-center">
          <span className="text-gray-600 text-sm">
            Do not have an account?{" "}
          </span>

          <a
            href="/register"
            className="text-blue-600 font-bold mx-2 text-sm hover:text-blue-500"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
