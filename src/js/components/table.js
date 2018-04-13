import React from "react";
import { Link } from "react-router";
import axios from "axios";
import moment from "moment";

export class Table extends React.Component {
    render() {
        return (
            <div>
                ACCUEIL
                <br/>
                <Link to="graph">Page 2</Link>
            </div>
        );
    }
}
