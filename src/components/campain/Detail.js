import React, { useEffect, useState } from "react";
import Tags from "./Tags";
import Progress from "./Progress";
import Donor from "./Donor";
import MemberList from "../group/MemberList";
import axios from "axios";
import omit from "lodash.omit";
import ArrowAnchor from "../ArrowAnchor";

function Detail({ campainTitle, group }) {
  const [campain, setCampain] = useState({});
  const [tags, setTags] = useState([]);
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    async function getDetails() {
      const { data } = await axios.get(
        `http://localhost:3000/api/campain/${campainTitle}?gn=${group}`
      );
      setTags(data.data[0]["tags"]);
      setDonations(data.data[0]["donations"]);
      setCampain(omit(data.data[0], ["tags", "donations"]));
    }
    getDetails();
  }, []);

  return (
    <section className="text-gray-700 body-font pt-16">
      <ArrowAnchor
        right
        href={`/${group}/`}
        text={`back to ${group}`}
        className="text-gray-700 py-1 pl-5"
      />
      <div className="container flex flex-wrap px-5 pb-24 pt-2 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-300">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            {campain.title}
          </h1>
          <p className="leading-relaxed text-base">{campain.details}</p>
          <Progress
            collected={campain.money_collected}
            target={campain.money_target}
          />
          <a className="text-indigo-500 inline-flex items-center mb-4">
            {2} days remaining
          </a>
          <Tags tags={tags} />
        </div>
        <div className="flex flex-col flex-grow md:w-1/2 md:pl-12 max-h-20r overflow-auto">
          <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">
            Donations
          </h2>
          {donations ? (
            donations.map((donation, index) => (
              <Donor key={index} {...donation} />
            ))
          ) : (
            <h2 className="text-lg opacity-75">Be the first donor ❤️</h2>
          )}
        </div>
      </div>
      <MemberList />
    </section>
  );
}

export default Detail;
