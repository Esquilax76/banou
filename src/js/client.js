import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory, hashHistory } from "react-router";

import { Beers } from "./components/beers.js";
import { inProgress } from "./components/inprogress.js";
import Layout from "./components/layout.js";

import "../css/common.scss";
import "../css/inprogress.scss";

const app = document.getElementById("app");
//ReactDOM.render(
//    <Router history={hashHistory}>
//        <Route path="/" component={Layout}>
//            <IndexRoute component={inProgress}></IndexRoute>
//            <Route path="bieres" component={Beers}></Route>
//        </Route>
//    </Router>,
//    app
//);

ReactDOM.render(
    <Layout/>,
    app
);