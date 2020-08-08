import React, { useEffect } from "react";
import Slideout from "slideout";
import GroupCard from "./group/GroupCard";

function SideBar({ tags = [] }) {
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
      className="relative flex flex-col bg-white w-64 mt-16 md:pt-16 border-r md:border-none md:bg-transparent"
    >
      <div className="mb-6">
        <GroupCard />
        {/* <h1 className="text-2xl font-bold border-b mb-6">{"group"}</h1> */}
      </div>
      {/* <h1 className="text-gray-700 text-lg font-semibold py-2 pl-6 ">Tags</h1> */}
      <nav className="md:border bg-white text-gray-800 text-base font-semibold p-2 pt-3 overflow-auto">
        <a
          href="#"
          className="flex items-center active-nav-link text-gray-800 py-2 pl-6 mb-1 hover:bg-gray-200 rounded-full"
        >
          All Tags
        </a>
        {tags.map((tag) => (
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-gray-800 py-2 pl-6 mb-1 hover:bg-gray-200 rounded-full"
            key={tag.title}
          >
            #{tag.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default SideBar;
