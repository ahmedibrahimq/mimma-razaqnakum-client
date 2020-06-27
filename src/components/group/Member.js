import React from "react";

function Member() {
  return (
    <div className="bg-white border overflow-hidden">
      <img
        src="https://avatars.dicebear.com/api/identicon/Group%20Member.svg?m=4"
        alt="avatar"
        className="w-full h-56 mx-auto object-cover object-center"
      />
      <div className="hidden flex items-center px-6 py-3 bg-gray-900">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-current text-white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
          ></path>
        </svg>
        <h1 className="mx-3 text-white font-semibold text-lg">Focusing</h1>
      </div>
      <div className="py-4 px-6">
        <h1 className="text-lg font-semibold text-gray-800">
          Patterson johnson
        </h1>
        <p className="py-2 text-gray-700 truncate">
          Full Stack maker &amp; UI / UX Designer
        </p>
        <div className="flex text-gray-700">
          <div className="flex flex-col items-center">
            <i className="text-xl mt-4 fas fa-phone-square-alt h-6 w-6 fill-current"></i>
            <i className="text-xl mt-4 fas fa-home h-6 w-6 fill-current"></i>
            <i className="text-xl mt-4 fab fa-facebook-messenger h-6 w-6 fill-current"></i>
          </div>
          <div className="flex flex-col justify-evenly">
            <h1 className="px-2 mt-4 text-sm">0101 253 3020</h1>
            <h1 className="px-2 mt-4 text-sm">050 453 1818</h1>
            <h1 className="px-2 mt-4 text-sm">m.me/example0255534534</h1>
          </div>
        </div>
        {/* <div className="flex items-center mt-4 text-gray-700">
          <i className="text-xl fas fa-phone-square-alt h-6 w-6 fill-current"></i>
          <h1 className="px-2 text-sm">0101 253 3020</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <i className="text-xl fas fa-home h-6 w-6 fill-current"></i>
          <h1 className="px-2 text-sm">050 453 1818</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <i className="text-xl fab fa-facebook-messenger h-6 w-6 fill-current"></i>
          <h1 className="px-2 text-sm">m.me/example0255534534</h1>
        </div> */}
      </div>
    </div>
  );
}

export default Member;
