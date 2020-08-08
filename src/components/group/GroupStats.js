import React from "react";
import Badge from "../shared/Badge";

function GroupStats() {
  return (
    <div className="p-6 border-b md:border bg-white">
      <h1>Group Statistics</h1>
      <div className=" flex flex-wrap justify-center">
        <Badge
          bgColor="bg-green-500"
          txtColor="text-white"
          title="Active (35)"
        />
        <Badge
          bgColor="bg-blue-500"
          txtColor="text-white"
          title="Fulfilled (13)"
        />
        <Badge
          bgColor="bg-yellow-400"
          txtColor="text-black"
          title="Expired (1)"
        />
        <Badge bgColor="bg-red-500" txtColor="text-white" title="Closed (3)" />
        <Badge
          bgColor="bg-gray-200"
          txtColor="text-black"
          title="Total Money ($32K)"
        />
        <Badge title="Total donations (4.3K)" />
      </div>
    </div>
  );
}

export default GroupStats;
