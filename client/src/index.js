import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";
import MyProvider from "./context";

import 'react-dropdown/style.css';
import './style.css';
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
  <MyProvider>
    <Router />
  </MyProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
