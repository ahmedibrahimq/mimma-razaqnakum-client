import React from "react";

import MemberCard from "../../member/MemberCard";
import GroupStats from "../GroupStats";

function RightSidebar({ members }) {
  return (
    <div id="side-r" className="hidden lg:block flex-grow max-w-xs ml-6">
      <GroupStats />
      <div className="">
        {/* <h1>Group Members</h1> */}
        {members.map((member) => (
          <MemberCard key={member.username} {...member} />
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
