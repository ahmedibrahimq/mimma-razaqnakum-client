import React, { useState } from "react";
import Dropdown from "./Dropdown";

function Header() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
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
          <button
            className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          >
            <img src="https://avatars.dicebear.com/api/identicon/User%20Header.svg" />
          </button>
          {toggleDropdown ? <Dropdown /> : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
