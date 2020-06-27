import React, { useEffect, useRef } from "react";
import Headroom from "headroom.js";

function Search({ placeholder = "", classes = "" }) {
  const srchElm = useRef(null);
  let headroom;
  useEffect(() => {
    headroom = new Headroom(srchElm.current, { offset: 64, tolerance: 10 });
    headroom.init();
    return () => {
      headroom.destroy();
    };
  }, []);
  return (
    <div
      ref={srchElm}
      id="search"
      className={`flex flex-row-reverse py-3  ${classes}`}
    >
      <input
        className="w-full rounded-r border-l placeholder-gray-600 bg-gray-200 py-2 px-2 border"
        type="text"
        placeholder={`Type here to search ${placeholder}`}
        dir="ltr"
      />
      <button className="pointer-events-none rounded-l border-r bg-gray-200 px-2 flex items-center border">
        <i
          className="text-gray-600 w-4 h-4 fa fa-search"
          aria-hidden="true"
        ></i>
        <span className="hidden sm:block ml-2 text-gray-600 font-normal">
          Search
        </span>
      </button>
    </div>
  );
}

export default Search;
