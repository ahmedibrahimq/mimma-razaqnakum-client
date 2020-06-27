import React from "react";
import Progress from "./Progress";
import Tags from "./Tags";

function Campain({
  group,
  title,
  details,
  money_target,
  money_collected,
  tags,
}) {
  return (
    <div className="mb-6 px-6 py-4 overflow-hidden border border-gray-400 bg-white">
      {/* <img
        className="w-full"
        src="https://source.unsplash.com/m5wfguSkioI/1600x900"
        alt="Sunset in the mountains"
      /> */}
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
        {title}
      </h1>
      <p className="leading-relaxed text-base">{details}</p>
      <Progress collected={money_collected} target={money_target} />
      <a className="text-indigo-500 inline-flex items-center mb-4">
        {2} days remaining
      </a>
      <Tags tags={tags} />
      <a
        href={`${group}/${title}`}
        className="text-indigo-500 inline-flex items-center mt-4"
      >
        Learn More
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
}

export default Campain;
