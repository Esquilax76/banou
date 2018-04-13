import React from "react";
import { Link } from "react-router";

export class Graph extends React.Component {
    render() {
        return (
            <div className="content">
                <Title/>
            </div>
        );
    }
}

export class Title extends React.Component {
    render() {
        return (
            <div className="row">
                PAGE 2
                <br/>
                <Link to="detail">Page 3</Link>
            </div>

        );
    }
}
