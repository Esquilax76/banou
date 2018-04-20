import React from "react";

import "../../css/story.scss";
import data from "../data/data.js";

import cuve from "../../img/cuve.jpg";

export class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            story: data.story,
        };
    }

    render() {
        return (
            <div className="storyContainer">
                <div className="pageTitle storyPageTitle">Notre histoire</div>
                <div className="pageSubtitle">Nous souhaitons partager notre passion pour la bière et notre amour de la Corrèze, à travers nos bières brassées de manière artisanale</div>
                <div className="storyItems">
                    {this.state.story.map(function (item) {
                        return (
                            <div className="storyItem">
                                <div className="storyTitle">{item.title}</div>
                                <img src={cuve} className="storyImage"/>
                                <div className="storyDescription">{item.description}</div>
                            </div>
                        );
                    }.bind(this))}
                </div>
            </div>
        );
    }
}
