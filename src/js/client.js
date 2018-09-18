import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory, hashHistory } from "react-router";

import { Beers } from "./components/beers.js";
import { Shop } from "./components/shop.js";
import { Credits } from "./components/credits.js";
import { Fullpage } from "./components/fullpage.js";
import Layout from "./components/layout.js";

import "../css/common.scss";

require("../img/favicon.png");

const app = document.getElementById("app");
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Fullpage}></IndexRoute>
            <Route path="boutique" component={Shop}></Route>
            <Route path="credits" component={Credits}></Route>
        </Route>
    </Router>,
    app
);
