import React, { useState, useEffect } from "react";
import axios from "axios";

import SideBar from "../../SideBar";
import CampainsList from "../../campain/CampainsList";
import RightSidebar from "./RightSidebar";
import Footer from "../../Footer";

function GroupDetail({ group }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/member?groupName=${group}`)
      .then(({ data }) => setMembers(data.data));
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
