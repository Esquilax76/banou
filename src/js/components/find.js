import React from "react";

import "../../css/find.scss";
import data from "../data/data.js";

import cuve from "../../img/cuve.jpg";
import pictoBiere from "../../img/pictoBiere.png";
import pictoPinte from "../../img/pictoPinte.png";

export class Find extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            story: data.find,
        };
    }

    render() {
        return (
            <div className="findContainer">
            <div className="pageTitle findPageTitle">Les trouver</div>

                <div className="findColumn">
                    <div className="findLeftColumn">
                        <div className="findSubtitle">VENTE DIRECTE</div>
                        <div className="description">N'hésitez pas à venir nous voir, nous serons heureux de vous rencontrer et de vous faire découvrir la brasserie et nos bières!</div>
                        <img src={cuve} className="findImg"/>
                        <div className="description">Vous pouvez aussi les commander directement en ligne:</div>
                        <a className="buttonBoutique" href="#boutique"></a>
                    </div>

                    <div className="findRightColumn">
                        <div className="findSubtitle">REVENDEURS</div>
                        <div className="description">Parcourez la carte pour connaitre les revendeurs de Banou:</div>
                        <div className="legende">  
                            <img src={pictoBiere} className="legendImg"/>
                            <div className="legendText">Les bars où vous pourrez dégustez la Banou</div>
                        </div>
                        <div className="legende">  
                            <img src={pictoPinte} className="legendImg"/>
                            <div className="legendText">Les magasins et caves où vous pourrez en achetez</div>
                        </div>
                        <select className="selectCity">
                            <option>Sélectionnez une ville</option>
                            <option>Sélectionnez une ville</option>
                            <option>Sélectionnez une ville</option>
                            <option>Sélectionnez une ville</option>
                            <option>Sélectionnez une ville</option>
                        </select>
                    </div>
                </div>

            </div>
            
        );
    }
}