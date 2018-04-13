import React from "react";
import fermenteur from "../../img/fermenteurs.png";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faExclamationTriangle from "@fortawesome/fontawesome-free-solid/faExclamationTriangle";

export class inProgress extends React.Component {
    render() {
        return (
            <section className="content">
                <FontAwesomeIcon icon={faExclamationTriangle} className="icon"/>
                <h2 className="warning">Le site de la Banou est encore en fermentation...<br/>Il sera bientôt prêt !</h2>
                <img src={fermenteur} className="progressImg"/>
            </section>
        );
    }
}