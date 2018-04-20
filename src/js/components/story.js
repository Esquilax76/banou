import React from "react";

import "../../css/story.scss";
import data from "../data/data.js";

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
                <div className="pageTitle">Notre histoire</div>
                <div className="pageSubtitle">Nous souhaitons partager notre passion pour la bière et notre amour de la Corrèze, à travers nos bières brassées de manière artisanale</div>
                <div className="storyItems">
                    <div className="storyItem">
                        <div className="storyTitle">{this.state.story[0].title}</div>
                        <img src=""/>
                        <div className="storyDescription">{this.state.story[0].description}</div>
                    </div>
                </div>
             </div>
            
        );
    }
}
