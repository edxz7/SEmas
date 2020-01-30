import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";
import AuthContextProvider from './contexts/AuthContext';
import MyProvider from "./contexts/context";
import ObserverProvider from './contexts/ObserverContext';

import 'react-dropdown/style.css';
import './style.css';
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
  <ObserverProvider>
  <AuthContextProvider>
    <MyProvider>
      <Router />
    </MyProvider>
  </AuthContextProvider>
</ObserverProvider>,

  document.getElementById("root")
);

serviceWorker.unregister();
