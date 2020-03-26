import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./RouteWrapper";

import Main from "../Views/Main";
import Login from "../Views/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Main" component={Main} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
