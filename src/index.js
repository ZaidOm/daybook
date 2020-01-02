import React from 'react';
import ReactDOM from 'react-dom';
import LoginRegister from "./components/login/loginregister";
import { Home } from "./components/home/home";
import { ProtectedRoute } from "./components/routes/protected.route";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LoginRegister}/>
        <ProtectedRoute path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);


