import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import SignUp from "./pages/signup/SignUp";
import LogIn from "./pages/login/LogIn";
import DashboardMetrics from "./pages/dashboardMetrics/DashboardMetrics"
import NotFound from "./pages/404/NotFound.js";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/profile" component={DashboardMetrics} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
