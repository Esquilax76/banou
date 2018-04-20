import React from "react";

import "../../css/beers.scss";
import data from "../data/data.js";

/*
    To add beer to collection :
    => add new object to data.js file's "beers" array with details of the new beer
    => import images for bottle and glass (as shown just below)
    => add new image name to glasses property in state initialisation
    => adjust "positions" property (in state initialisation and hideDetails function) for left margin
*/

/*************** TODO *********************/
/*
    Faire une boucle pour l'affichage des bières
    Passer en constantes certaines propriétés
    Ecartement des bières responsive

*/

import blonde from "../../img/bouteille_blonde.png";
import brune from "../../img/bouteille_brune.png";
import blanche from "../../img/bouteille_blanche.png";
import ipa from "../../img/bouteille_ipa.png";
import rousse from "../../img/bouteille_rousse.png";

import glass_blonde from "../../img/verre_blonde.png";
import glass_brune from "../../img/verre_brune.png";
import glass_blanche from "../../img/verre_blanche.png";
import glass_ipa from "../../img/verre_ipa.png";
import glass_rousse from "../../img/verre_rousse.png";

export class Beers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            positions: ["calc(50% - 500px)", "calc(50% - 300px)", "calc(50% - 100px)", "calc(50% + 100px)", "calc(50% + 300px)"],
            glasses: [glass_ipa, glass_blanche, glass_blonde, glass_rousse, glass_brune],
            glass: glass_blonde,
            active: data.beers[0],
            details: 0,
            beers: data.beers,
        };
        this.showDetails = this.showDetails.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
        this.findBeer = this.findBeer.bind(this);
    }

    findBeer(name) {
        this.state.beers.forEach(function (value) {
            if (value.name == name) {
                this.setState({ active: value });
            }
            return -1;
        }.bind(this));
    }

    showDetails(v, name) {
        let space = 40;
        if (screen.width > 1600) {
            space = 55;
        }
        let newPositions = this.state.positions;
        const left = [-500, -300, -100, 100, 300];
        let newDetails = "calc(50% + " + (left[v] + space) + "px)";
        newPositions.forEach(function (value, i) {
            if (i > v) {
                newPositions[i] = "calc(50% + " + (left[i] + 75) + "px)";
            } else {
                newPositions[i] = "calc(50% + " + (left[i] - 75) + "px)";
            }
        });
        this.findBeer(name);
        this.setState({ positions: newPositions, opacity: 1, details: newDetails, glass: this.state.glasses[v] });
    }

    hideDetails() {
        this.setState({ positions: ["calc(50% - 500px)", "calc(50% - 300px)", "calc(50% - 100px)", "calc(50% + 100px)", "calc(50% + 300px)"], opacity: 0 });
    }

    render() {
        return (
            <section className="beersContainer">
                <div className="pageTitle">Découvrez nos bières artisanales</div>
                <div className="bottleContainer">
                    <div onMouseEnter={() => this.showDetails(0, "IPA")} onMouseLeave={this.hideDetails} className="bottle" style={{ backgroundImage: `url(${ipa})`, left: this.state.positions[0] }}/>
                    <div onMouseEnter={() => this.showDetails(1, "BLANCHE")} onMouseLeave={this.hideDetails} className="bottle" style={{ backgroundImage: `url(${blanche})`, left: this.state.positions[1] }}/>
                    <div onMouseEnter={() => this.showDetails(2, "BLONDE")} onMouseLeave={this.hideDetails} className="bottle" style={{ backgroundImage: `url(${blonde})`, left: this.state.positions[2] }}/>
                    <div onMouseEnter={() => this.showDetails(3, "ROUSSE")} onMouseLeave={this.hideDetails} className="bottle" style={{ backgroundImage: `url(${rousse})`, left: this.state.positions[3] }}/>
                    <div onMouseEnter={() => this.showDetails(4, "BRUNE")} onMouseLeave={this.hideDetails} className="bottle" style={{ backgroundImage: `url(${brune})`, left: this.state.positions[4] }}/>
                    {/* New line here for new beer*/}
                    <div className="description" style={{ left: this.state.details, opacity: this.state.opacity, backgroundImage: `url(${this.state.glass})` }}>
                        <div className="desc">
                            <div className="descTitle">{this.state.active.name}</div>
                            <div className="descText">{this.state.active.description}</div>
                            <div className="descAlcool">
                                <div className="little">ALCOOL</div>
                                <div className="value">{this.state.active.alcool} <span className="unit">%/VOL</span></div>
                            </div>
                            <div className="descIbu">
                                <div className="little">AMERTUME</div>
                                <div className="value">{this.state.active.ibu} <span className="unit">IBU</span></div>
                            </div>
                            <div className="descSRM">
                                <div className="little">COULEUR</div>
                                <div className="value">{this.state.active.ebc} <span className="unit">EBC</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}