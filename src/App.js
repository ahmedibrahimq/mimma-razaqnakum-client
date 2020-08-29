import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Register from "./components/register/Register";
import Login from "./components/Login";
import Header from "./components/header/Header";
import GroupList from "./components/group/GroupsList";
import GroupDetail from "./components/group/detail/GroupDetail";
import CampainDetail from "./components/campain/CampainDetail";
import NotFound from "./components/NotFound";
import Admin from "./components/admin/Admin";

const App = () => {
  return (
    <div className="container font-family-karla bg-gray-100 sm:px-6 mx-auto">
      <Header />
      <Router>
        <GroupList path="/" />
        <Login path="/login" />
        <Register path="/register" />
        <GroupDetail path="/:group" />
        <CampainDetail path="/:group/:campainTitle" />
        <Admin path="/admin" />
        <NotFound default />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
