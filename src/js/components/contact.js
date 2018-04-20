import React from "react";

import "../../css/contact.scss";

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="contactContainer">

                <div className="leftColumn">
                    <div className="contactSubtitle">N'hésitez pas à venir nous rendre visite à la microbrasserie! Nous nous ferons un plaisir de vous faire découvrir</div>  
                    <div className="banou">LA BANOU</div>
                </div>


                <div className="rightColumn">
                    <div className="pageTitle contactPageTitle">Contactez-nous</div>
                    <div className="banouPetit">LA BANOU</div>
                    <div className="address">Adresse<br/>Telephone</div>
                    <div className="hoursTitle">Horaires d'ouverture de la microbrasserie:</div>
                    <div className="hours">Du lundi au vendredi, de 9h à 18h<br/>Visite le samedi de 10h à 16h</div>
                    <div className="contactForm">
                        <div className="contactID">
                            <input className="input smallInput" type="text" placeholder="Nom"/>
                            <input className="input smallInput" type="email" placeholder="Email"/>
                        </div>
                        <textarea rows="10" className="message" placeholder="Message"/>
                        <input className="send" type="submit" value="Envoyer"/>
                    </div>
                </div>


            </div>
        );
    }
}
