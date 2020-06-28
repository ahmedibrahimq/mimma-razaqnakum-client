import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Header from "./components/header/Header";
import GroupList from "./components/group/GroupsList";
import GroupDetail from "./components/group/detail/GroupDetail";
import CampainDetail from "./components/campain/CampainDetail";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="container font-family-karla bg-gray-100 mx-auto">
      <Header />
      <Router>
        <GroupList path="/" />
        <GroupDetail path="/:group" />
        <CampainDetail path="/:group/:campainTitle" />
        <NotFound default />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
