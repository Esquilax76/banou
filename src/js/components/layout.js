import React from "react";
import { SectionsContainer, ScrollToTopOnMount } from "react-fullpage";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';

import { Beers } from "./beers.js";
import { Find } from "./find.js";
import { Story } from "./story.js";
import { Contact } from "./contact.js";

import { Link } from "react-router";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header className="header">
                <Link to="/" className="headerTitle">LA BANOU</Link>
                <nav class="nav">
                    <a href="#bieres" className="navItem hvr-underline-reveal activeMenu">NOS BIERES<div className="line"/></a>
                    <a href="#bar" className="navItem hvr-underline-reveal">BANOUBAR<div className="line"/></a>
                    <a href="#lieux" className="navItem hvr-underline-reveal">POINTS DE VENTE<div className="line"/></a>
                    <a href="#histoire" className="navItem hvr-underline-reveal">NOTRE HISTOIRE<div className="line"/></a>
                    <a href="#contact" className="navItem hvr-underline-reveal">CONTACT<div className="line"/></a>
                    <Link to="/boutique" className="navItem hvr-underline-reveal">BOUTIQUE<div className="line"/></Link>
                </nav>
            </header>
        );
    }
}

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div>© 2017 LA BANOU</div>
                <Link to="/credits" className="creditsButton footerChild">Mentions Légales</Link>
                <div className="links footerChild">
                    <a href="https://www.facebook.com/bierelabanou" target="blank">
                        <FontAwesomeIcon icon={faFacebookSquare} className="linkIcon"/>
                    </a>
                    <a href="https://www.instagram.com/biere_la_banou/?hl=fr" target="blank">
                        <FontAwesomeIcon icon={faInstagram} className="linkIcon"/>
                    </a>
                </div>
            </footer>
        );
    }
}

class Layout extends React.Component {
    render() {
        let options = {
            activeClass: "active", // the class that is appended to the sections links
            anchors: ["bieres", "bar", "lieux", "histoire", "contact"], // the anchors for each sections
            arrowNavigation: true, // use arrow keys
            className: "SectionContainer", // the class name for the section container
            delay: 1000, // the scroll animation speed
            navigation: true, // use dots navigation
            scrollBar: false, // use the browser default scrollbar
            //sectionClassName: "Section", // the section class name
            sectionPaddingTop: "0", // the section top padding
            sectionPaddingBottom: "0", // the section bottom padding
            verticalAlign: false, // align the content of each section vertical
        };

        return (
            <main>
                {this.props.location.pathname === "/" ? ( <Header/> ) : ( <div/> )}
                {this.props.children}
                {/*<Footer/>*/}
            </main>
        );
    }
}

export default Layout;
