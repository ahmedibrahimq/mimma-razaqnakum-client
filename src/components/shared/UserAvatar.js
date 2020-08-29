import React, { useState } from "react";
import Dropdown from "../header/Dropdown";

function UserAvatar() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <>
      <button
        className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
        onClick={() => setToggleDropdown(!toggleDropdown)}
      >
        <img src="https://avatars.dicebear.com/api/identicon/User%20Header.svg" />
      </button>
      {toggleDropdown ? <Dropdown /> : null}
    </>
  );
}

export default UserAvatar;
