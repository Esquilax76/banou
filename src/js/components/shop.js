import React from "react";

import data from "../data/data.js";

import { Link } from "react-router";

import "../../css/shop.scss";

export class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: data.shop,
            basket: [],
            popup: "hidden",
            currentChoice: data.shop[0]
        };

        this.showPopUp = this.showPopUp.bind(this);
        this.hidePopUp = this.hidePopUp.bind(this);
    }

    showPopUp(item){
        this.setState({ popup: "visible", currentChoice: item });
    }

    hidePopUp(item){
        this.setState({ popup: "hidden" });
    }

    render() {
        let image = "../../img/" + this.state.currentChoice.name.replace(/\s+/g, '_').toLowerCase() + "_unit.jpg";
        return [
            <header className="header">
                <Link to="/" className="headerTitle">LA BANOU</Link>
                <div className="basket">{this.state.basket.length}</div>
            </header>,
            <div className="shopContainer">
                <div className="pageTitle shopTitle">Commandez vos bières en ligne !</div>
                <div className="shopItems">
                    {this.state.products.map(function (item, index) {
                        let source = "../../img/" + item.name.replace(/\s+/g, '_').toLowerCase() + "_unit.jpg";
                        return (
                            <div className="shopItem" key={index} onClick={() => this.showPopUp(item)}>
                                <img className="shopItemImage" src={source}/>
                                <div className="shopItemTitle">{item.name}</div>
                                <div className="shopItemPrice">{item.publicPrice}</div>
                            </div>
                        );
                    }.bind(this))}
                </div>
            </div>,
            <div className="disable" style={{ visibility: this.state.popup }}>
                <div className="popUp">
                    <div className="close" onClick={() => this.hidePopUp()}/>
                    <div className="popUpHeader">FICHE DESCRIPTIVE PRODUIT</div>
                    <div className="popUpContent">
                        <img src={image} className="popUpImage"/>
                        <div className="popUpDescription">
                            <div className="popUpTitle">{this.state.currentChoice.name}</div>
                            <div className="popUpText">{this.state.currentChoice.description}</div>
                            <div className="popUpinput">
                                <div className="inputLabel">Conditionnement</div>
                                <select className="select">
                                    <option value="unit">Unité</option>
                                    <option value="pack">Pack de 6</option>
                                    <option value="carton">Carton de 12</option>
                                </select>
                            </div>
                            <div className="popUpinput">
                                <div className="inputLabel">Quantité</div>
                                <input type="number" defaultValue="1"/>
                            </div>
                            <div className="popUpPrice">{this.state.currentChoice.publicPrice}</div>
                            <button className="addToBasket">AJOUTER AU PANIER</button>
                        </div>
                    </div>
                </div>
            </div>
        ];
    }
}