import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainNavbar from './components/Navbar/MainNavbar';
import Login from "./pages/Login/Login";
import DashboardPage from "./pages/dashboard/DashboardPage"
import NotFound from "./pages/404/NotFound.js";
import Signup from "./pages/Signup/Signup";
import {ProtectedRoute} from './pages/ProtectedRoutes';

const Router = () => (
  <BrowserRouter>
    <MainNavbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <ProtectedRoute exact path="/profile" component={DashboardPage} />
      <ProtectedRoute exact path="/metricas" component={DashboardPage} />
      <ProtectedRoute exact path="/ventas" component={DashboardPage} />
      <ProtectedRoute exact path="/inventario" component={DashboardPage} />
      <Route path='*' component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
