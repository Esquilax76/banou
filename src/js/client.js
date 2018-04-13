import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { Graph } from "./components/graph.js";
import { inProgress } from "./components/inprogress.js";
import Layout from "./components/layout.js";

import "../css/common.scss";
import "../css/inprogress.scss";

const app = document.getElementById("app");
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={inProgress}></IndexRoute>
            <Route path="graph" component={Graph}></Route>
        </Route>
    </Router>,
    app
);
