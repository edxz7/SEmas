import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import SignUp from "./pages/signup/SignUp";
import LogIn from "./pages/login/LogIn";
import DashboardPage from "./pages/dashboard/DashboardPage"
import NotFound from "./pages/404/NotFound.js";
import Navbar from "./components/Navbar/Navbar";
import MasterForm from "./pages/SignUpTest/SignUp"

const Router = () => (
  <BrowserRouter>
  <Navbar></Navbar>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/profile" component={DashboardPage} />
      <Route exact path="/metricas" component={DashboardPage} />
      <Route exact path="/ventas" component={DashboardPage} />
      <Route exact path="/test" component={MasterForm} />
    </Switch>
  </BrowserRouter>
);

export default Router;
