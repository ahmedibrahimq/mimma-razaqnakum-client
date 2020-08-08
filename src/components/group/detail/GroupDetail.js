import React, { useState, useEffect } from "react";

import SideBar from "../../SideBar";
import CampainsList from "../../campain/CampainsList";
import RightSidebar from "./RightSidebar";
import Footer from "../../Footer";
import { getGroupMembers, getGroupTags } from "../../../utils/api";

function GroupDetail({ group }) {
  const [tags, setTags] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    Promise.all([getGroupTags(group), getGroupMembers(group)]).then(
      ([{ data: tagsList }, { data: membersList }]) => {
        setTags(tagsList);
        setMembers(membersList);
      }
    );
  }, []);

  return (
    <div className="flex">
      <SideBar tags={tags} />
      <div id="panel" className="relative mt-16 w-full flex flex-col">
        <h1 className="sm:hidden text-2xl font-bold border-b mb-6">{group}</h1>
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
