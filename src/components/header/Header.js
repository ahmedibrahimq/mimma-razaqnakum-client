import React from "react";

import UserAvatar from "../shared/UserAvatar";

function Header({ user }) {
  return (
    <header className="fixed top-0 inset-x-0 border-b bg-white z-20">
      <div className="container flex h-16 items-center px-6 mx-auto">
        <div id="logo-container" className="w-1/2 flex">
          <h1 className="hidden md:block text-gray-700 text-xl font-semibold hover:text-gray-900">
            <a href="/">Mimma Razaqnakum</a>
          </h1>
          <button className="toggle-button text-2xl">☰</button>
        </div>
        <div className="relative w-1/2 flex justify-end">
          {user ? (
            <UserAvatar />
          ) : (
            <>
              <a
                href="/login"
                className="mr-1 py-1 px-2 hover:bg-gray-200 rounded"
              >
                Sign in
              </a>
              <a
                href="/register"
                className="py-1 px-2 bg-indigo-500 hover:bg-indigo-800 rounded text-white"
              >
                Get Started
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
