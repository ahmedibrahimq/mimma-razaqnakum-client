import React, { useEffect, useState } from "react";
import GroupCard from "./GroupCard";
import axios from "axios";

function GroupsList() {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/group")
      .then(({ data }) => setGroups(data.data))
      .catch(console.error);
  }, []);

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="bg-white p-6 sm:p-20 border flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
            Support Your Community
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {groups.map((group) => (
            <div key={group.group_name} className="mx-auto w-250px p-4">
              <GroupCard {...group} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GroupsList;
