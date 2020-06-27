import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "./Search";
import Campain from "../campain/Campain";
import Footer from "../Footer";

function Main({ group }) {
  const [campains, setCampains] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    if (!hasMore) return;
    axios
      .get(`http://localhost:3000/api/campain?gn=${group}&pg=${page}&l=10`)
      .then(({ data }) => {
        setCampains(campains.concat(data.data));
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
    <main className="relative w-full h-full flex-grow flex pt-16">
      <div className="flex-grow px-6 mx-auto max-w-38r">
        <Search
          placeholder={group + " campains"}
          classes="sticky top-64px z-10 w-full"
        />
        <h1 className="text-2xl font-bold border-b mb-6">{group}</h1>
        <InfiniteScroll
          dataLength={campains.length}
          next={() => setPage(page + 1)}
          hasMore={hasMore}
          scrollThreshold={0.9}
          loader="loading..."
          endMessage={<Footer />}
        >
          {campains.map((campain) => (
            <Campain {...campain} group={group} key={campain.title} />
          ))}
        </InfiniteScroll>
      </div>
      <div
        id="side-r"
        className="hidden lg:block pt-32 border flex-grow max-w-xs px-6"
      >
        <div className="pt-16 top-64px">
          <hr />0
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Main;
