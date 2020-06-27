import React from "react";

function Dropdown() {
  return (
    <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
      <a href="#" className="block px-4 py-2 account-link hover:text-white">
        Account
      </a>
      <a href="#" className="block px-4 py-2 account-link hover:text-white">
        Support
      </a>
      <a href="#" className="block px-4 py-2 account-link hover:text-white">
        Sign Out
      </a>
    </div>
  );
}

export default Dropdown;
