import React from "react";

import data from "../data/data.js";

import "../../css/credits.scss";

export class CreditsPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="creditsPart">
                <h2 className="creditsTitle">{this.props.title}</h2>
                <div className="creditsContent">
                {this.props.content.map(function (item, index) {
                    return (
                        <div className="creditsParagraph" dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
                    );
                }.bind(this))}
                </div>
            </div>
        );
    }
}

export class Credits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credits: data.credits,
        };
    }

    render() {
        return (
            <div className="creditsContainer">
            {this.state.credits.map(function (item, index) {
                return (
                    <CreditsPart title={item.name} content={item.content} key={index}/>
                );
            }.bind(this))}
                
            </div>
        );
    }
}
