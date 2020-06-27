import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Header from "./components/header/Header";
import GroupDetail from "./components/group/Detail";
import CampainDetail from "./components/campain/Detail";
import NotFound from "./components/NotFound";
import GroupList from "./components/group/List";

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
