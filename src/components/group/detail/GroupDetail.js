import React from "react";
import SideBar from "../../SideBar";
import Main from "./Main";
import Footer from "../../Footer";

function GroupDetail({ group }) {
  return (
    <div className="flex">
      <SideBar />
      <div id="panel" className="relative w-full flex flex-col">
        <Main group={group} />
        <Footer />
      </div>
    </div>
  );
}

export default GroupDetail;
