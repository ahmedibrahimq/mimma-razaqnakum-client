import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import CampainCard from "./CampainCard";
import { getGroupCampaigns } from "../../utils/api";

function CampainsList({ group, members }) {
  const [campains, setCampains] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  // get campains
  useEffect(() => {
    if (!hasMore) return;

    getGroupCampaigns(group, page)
      .then(({ data: campaignsList }) => {
        setCampains(campains.concat(campaignsList));
      })
      .catch((err) => {
        // 404 is expected when page is outOf range. This is the way we handle hasMore
        if (err.response && err.response.status === 404) {
          console.clear();
          sethasMore(false);
        }
      });
  }, [page]);

  return (
    <div className="flex-grow px-6 mx-auto max-w-38r">
      <InfiniteScroll
        dataLength={campains.length}
        next={() => setPage(page + 1)}
        hasMore={hasMore}
        scrollThreshold={0.9}
        loader="loading..."
        endMessage={"Donate now ❤️"}
      >
        {campains.map((campain) => (
          <CampainCard
            {...campain}
            group={group}
            members={members}
            key={campain.title}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default CampainsList;
