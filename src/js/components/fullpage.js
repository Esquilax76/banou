import React from "react";

import { Beers } from "./beers.js";
import { Bar } from "./bar.js";
import { Find } from "./find.js";
import { Story } from "./story.js";
import { Contact } from "./contact.js";

import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

export class Fullpage extends React.Component {
    render() {
        const fullpageOptions = {
            callbacks: ["onLeave"],
            anchors: ["bieres", "bar", "lieux", "histoire", "contact"],
            normalScrollElements: ".findLeftColumn",
            navigation: true
        };
        return (
            <ReactFullpage {...fullpageOptions} licenseKey="OPEN-SOURCE-GPLV3-LICENSE" render={({ state, fullpageApi }) => {
                return (
                    <div>
                        <div className="section">
                            <Beers/>
                        </div>
                        <div className="section">
                            <Bar/>
                        </div>
                        <div className="section">
                            <Find/>
                        </div>
                        <div className="section">
                            <Story/>
                        </div>
                        <div className="section">
                            <Contact/>
                        </div>
                    </div>
                );
            }}
            />
        );
    }
}
