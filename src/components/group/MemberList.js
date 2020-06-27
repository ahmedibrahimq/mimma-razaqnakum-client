import React from "react";
import Member from "./Member";

function MemberList() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them.
          </p>
        </div>
        <div className="flex justify-center flex-wrap -m-4">
          <div className="p-4 xl:w-1/4 lg:w-1/3 md:w-1/2">
            <Member />
          </div>
          <div className="p-4 xl:w-1/4 lg:w-1/3 md:w-1/2">
            <Member />
          </div>
          <div className="p-4 xl:w-1/4 lg:w-1/3 md:w-1/2">
            <Member />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemberList;
