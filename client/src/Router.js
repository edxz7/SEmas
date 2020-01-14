import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import {LogIn} from "./pages/login/LogIn";
import DashboardPage from "./pages/dashboard/DashboardPage"
import NotFound from "./pages/404/NotFound.js";
import MasterForm from "./pages/SignUp/SignUp";
import {ProtectedRoute} from './pages/ProtectedRoutes';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={MasterForm} />
      <ProtectedRoute exact path="/profile" component={DashboardPage} />
      <ProtectedRoute exact path="/metricas" component={DashboardPage} />
      <ProtectedRoute exact path="/ventas" component={DashboardPage} />
      <ProtectedRoute exact path="/inventario" component={DashboardPage} />
      <Route path='*' component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
