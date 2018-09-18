import React from "react";
import { Footer } from "./layout.js";

import { Link } from "react-router";

import "../../css/contact.scss";

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, input) {
        this.setState({ [input]: e.target.value });
    }

    render() {
        return [
            <div className="contactContainer" key="1">

                <div className="leftColumn">
                    <div className="contactSubtitle">N'hésitez pas à venir nous rendre visite à la microbrasserie! Nous nous ferons un plaisir de vous faire découvrir</div>
                    <div className="banou">LA BANOU</div>
                </div>
                <form action="https://formspree.io/contact@labanou.com" method="POST" className="rightColumn">
                    <div className="pageTitle contactPageTitle">CONTACTEZ-NOUS</div>
                    <div className="banouPetit">LA BANOU</div>
                    <div className="address">Recherche d'un local en cours</div><div>06.58.26.98.58</div>
                    <div className="hoursTitle">Horaires d'ouverture de la microbrasserie:</div>
                    <div className="hours">Du lundi au vendredi, de 9h à 18h<br/>Visite le samedi de 10h à 16h</div>
                    <div className="contactForm">
                        <div className="contactID">
                            <input className="input smallInput" value={this.state.name} name="name" type="text" placeholder="Nom" onChange={(e) => this.handleChange(e, "name")}/>
                            <input className="input smallInput" value={this.state.email} type="email" name="email" placeholder="Email" onChange={(e) => this.handleChange(e, "email")}/>
                        </div>
                        <textarea rows="8" className="message" value={this.state.message} placeholder="Message" name="message" onChange={(e) => this.handleChange(e, "message")}/>
                        <input className="send" type="submit" value="Envoyer" onClick={this.handleSubmit}/>
                    </div>
                </form>
            </div>,
            <Footer key="2"/>
        ];
    }
}
