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
            currentChoice: data.shop[0],
            quantity: 1,
            package: "unit",
            size: 33,
            rent: "yes",
            basketAnimation: "0",
            basketVisibility : "hidden"
        };

        this.showPopUp = this.showPopUp.bind(this);
        this.hidePopUp = this.hidePopUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addToBasket = this.addToBasket.bind(this);
        this.showBasketMenu = this.showBasketMenu.bind(this);
    }

    addToBasket(){
        const corres = {
            unit: "A l'unité",
            pack: "Pack de 6",
            carton: "Carton de 12",
            fut: "Fût"
        }
        let basket = this.state.basket;
        let name;
        let rent = " - avec location de tireuse";
        if (this.state.rent === "no"){
            rent = "";
        }
        if (this.state.package === "fut"){
            name = this.state.currentChoice.name + " - " + corres[this.state.package] + rent;
        } else {
            name = this.state.currentChoice.name + " - " + this.state.size + "cl - " + corres[this.state.package];
        }
        let newItem = {
            name: name,
            package: this.state.package,
            quantity: this.state.quantity,
            price: parseFloat(this.getPrice())
        }
        basket.push(newItem);
        this.setState({ basket: basket, basketAnimation: "20%" });
        this.hidePopUp();
    }

    showPopUp(item){
        this.setState({ popup: "visible", currentChoice: item });
    }

    hidePopUp(){
        this.setState({ popup: "hidden", package: "unit", size: 33, quantity: 1 });
    }

    handleChange(e, item){
        switch(item){
            case "quantity":
                this.setState({ quantity: e.target.value });
            break;
            case "package":
                this.setState({ package: e.target.value });
            break;
            case "size":
                this.setState({ size: e.target.value });
            break;
            case "rent":
                this.setState({ rent: e.target.value });
            break;
        }
    }

    getPrice(){
        let rent = 0;
        if (this.state.rent === "yes" && this.state.package === "fut"){
            rent = 15;
        }
        return (parseInt(this.state.quantity) * parseFloat(this.state.currentChoice.publicPrice[this.state.package][this.state.size]) + rent).toFixed(2) + "€";
    }

    addRent(){
        if (this.state.package === "fut" && this.state.rent === "yes"){
            return "+ 15.00€";
        } else {
            return;
        }
    }

    showBasketMenu(){
        this.setState({ basketVisibility: "visible", basketAnimation: "20%" });
    }

    render() {
        let image = "../../img/" + this.state.currentChoice.name.replace(/\s+/g, "_").toLowerCase() + "_" + this.state.package +".jpg";
        return [
            <header className="header" key={"header"}>
                <Link to="/" className="headerTitle">LA BANOU</Link>
                <div className="basket" onClick={() => this.showBasketMenu()}>{this.state.basket.length}</div>
            </header>,
            <div className="shopContainer" key={"content"}>
                <div className="pageTitle shopTitle">Commandez vos bières en ligne !</div>
                <div className="shopItems">
                    {this.state.products.map(function (item, index) {
                        let source = "../../img/" + item.name.replace(/\s+/g, "_").toLowerCase() + "_unit.jpg";
                        return (
                            <div className="shopItem" key={index} onClick={() => this.showPopUp(item)}>
                                <img className="shopItemImage" src={source}/>
                                <div className="shopItemTitle">{item.name}</div>
                                <div className="shopItemPrice">{item.publicPrice[this.state.package][this.state.size]}</div>
                            </div>
                        );
                    }.bind(this))}
                </div>
            </div>,
            <div className="disable" style={{ visibility: this.state.popup }} key={"popup"}>
                <div className="popUp">
                    <div className="close" onClick={() => this.hidePopUp()}>+</div>
                    <div className="popUpHeader">FICHE DESCRIPTIVE PRODUIT</div>
                    <div className="popUpContent">
                        <img src={image} className="popUpImage"/>
                        <div className="popUpDescription">
                            <div className="popUpTitle">{this.state.currentChoice.name}</div>
                            <div className="popUpText" dangerouslySetInnerHTML={{ __html: this.state.currentChoice.description }}></div>
                            {this.state.currentChoice.name !== "PACK DECOUVERTE" &&
                                <div className="popUpinput">
                                    <div className="inputLabel">Conditionnement</div>
                                    <select
                                        className="popUpSelect"
                                        onChange={(e) => this.handleChange(e, "package")}
                                        value={this.state.package}
                                    >
                                        <option value="unit">Unité</option>
                                        <option value="pack">Pack de 6</option>
                                        <option value="carton">Carton de 12</option>
                                        <option value="fut">Fût</option>
                                    </select>
                                </div>
                            }
                            {this.state.package !== "fut" &&
                                <div className="popUpinput">
                                    <div className="inputLabel">Taille</div>
                                    <select
                                        className="popUpSelect"
                                        onChange={(e) => this.handleChange(e, "size")}
                                        value={this.state.size}
                                    >
                                        <option value="33">33cl</option>
                                        <option value="75">75cl</option>
                                    </select>
                                </div>
                            }
                            {this.state.package === "fut" &&
                                <div className="popUpinput">
                                    <div className="inputLabel">Prêt Tireuse (15€)</div>
                                    <input type="radio" className="radio" name="rent" value="yes" checked={this.state.rent === "yes"} onChange={(e) => this.handleChange(e, "rent")}/>Oui
                                    <input type="radio" className="radio" name="rent" value="no" checked={this.state.rent === "no"} onChange={(e) => this.handleChange(e, "rent")}/>Non
                                </div>
                            }
                            <div className="popUpinput">
                                <div className="inputLabel">Quantité</div>
                                <input
                                    className="popUpNumber"
                                    type="number"
                                    min="1"
                                    value={this.state.quantity}
                                    onChange={(e) => this.handleChange(e, "quantity")}
                                />
                            </div>
                            <div className="popUpPrice">
                                {this.getPrice()}<span className="popUpPriceDetail"> ( {this.state.currentChoice.publicPrice[this.state.package][this.state.size]} x {this.state.quantity} {this.addRent()} )</span>
                            </div>
                            <div className="addToBasket" onClick={() => this.addToBasket()}>AJOUTER AU PANIER</div>
                        </div>
                    </div>
                </div>
            </div>,
            <div className="disable" style={{ visibility: this.state.basketVisibility }} key={"basketMenu"}>
                <div className="basketMenu" style={{ width: this.state.basketAnimation}}/>
            </div>
        ];
    }
}