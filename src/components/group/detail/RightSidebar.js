import React from "react";

import MemberCard from "../../member/MemberCard";

function RightSidebar({ members }) {
  return (
    <div id="side-r" className="hidden lg:block border flex-grow max-w-xs px-6">
      <div className="pt-16">
        <h1>Group Members</h1>
        {members.map((member) => (
          <MemberCard key={member.username} {...member} />
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
