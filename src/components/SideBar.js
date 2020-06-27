import React, { useEffect } from "react";
import Slideout from "slideout";

function SideBar() {
  let slideout;

  useEffect(() => {
    slideout = new Slideout({
      panel: document.getElementById("panel"),
      menu: document.getElementById("menu"),
      padding: 256,
      tolerance: 70,
    });

    document
      .querySelector(".toggle-button")
      .addEventListener("click", () => slideout.toggle());

    return () => {
      slideout.destroy();
    };
  }, []);
  return (
    <aside
      id="menu"
      className="relative bg-white w-64 mt-16 border-r md:border md:bg-gray-1000"
    >
      <div className="p-6 hidden">
        <div className="logo">
          <a
            href="index.html"
            className="text-gray-700 text-3xl font-semibold hover:text-gray-900"
          >
            Admin
          </a>
        </div>
        <button className="w-full bg-gray-700 text-white font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 hover:bg-gray-900 flex items-center justify-center">
          <i className="fas fa-plus mr-3"></i> New Report
        </button>
      </div>
      <nav className="text-gray-800 text-base font-semibold pt-3">
        <a
          href="index.html"
          className="flex items-center text-gray-600 hover:text-gray-800 py-2 pl-6 hover:bg-gray-400 md:hover:bg-transparent"
        >
          <i className="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </a>
        <a
          href="blank.html"
          className="flex items-center active-nav-link text-gray-800 py-2 pl-6 hover:bg-gray-400 md:hover:bg-transparent"
        >
          <i className="fas fa-sticky-note mr-3"></i>
          Blank Page
        </a>
        <a
          href="tables.html"
          className="flex items-center text-gray-600 hover:text-gray-800 py-2 pl-6 hover:bg-gray-400 md:hover:bg-transparent"
        >
          <i className="fas fa-table mr-3"></i>
          Tables
        </a>
        <a
          href="forms.html"
          className="flex items-center text-gray-600 hover:text-gray-800 py-2 pl-6 hover:bg-gray-400 md:hover:bg-transparent"
        >
          <i className="fas fa-align-left mr-3"></i>
          Forms
        </a>
        <a
          href="tabs.html"
          className="flex items-center text-gray-600 hover:text-gray-800 py-2 pl-6 hover:bg-gray-400 md:hover:bg-transparent"
        >
          <i className="fas fa-tablet-alt mr-3"></i>
          Tabbed Content
        </a>
        <a
          href="calendar.html"
          className="flex items-center text-gray-600 hover:text-gray-800 py-2 pl-6 hover:bg-gray-400 md:hover:bg-transparent"
        >
          <i className="fas fa-calendar mr-3"></i>
          Calendar
        </a>
      </nav>
      <a
        href="#"
        className="absolute w-full bg-gray-400 hover:bg-gray-300 bottom-0 active-nav-link text-gray-800 flex items-center justify-center py-4 md:right-0"
      >
        <i className="fas fa-arrow-circle-up mr-3"></i>
        Upgrade to Pro!
      </a>
    </aside>
  );
}

export default SideBar;
