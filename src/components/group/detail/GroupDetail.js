import React, { useState, useEffect } from "react";

import SideBar from "../../SideBar";
import CampainsList from "../../campain/CampainsList";
import RightSidebar from "./RightSidebar";
import Footer from "../../Footer";
import { getGroupMembers } from "../../../utils/api";

function GroupDetail({ group }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getGroupMembers(group).then(({ data: membersList }) =>
      setMembers(membersList)
    );
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div id="panel" className="relative w-full flex flex-col">
        <h1 className="text-2xl font-bold border-b mb-6">{group}</h1>
        <main className="relative w-full h-full flex-grow flex pt-16">
          <CampainsList group={group} members={members} />
          <RightSidebar members={members} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default GroupDetail;
