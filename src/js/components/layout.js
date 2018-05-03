import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import { SectionsContainer, ScrollToTopOnMount } from "react-fullpage";

import { Beers } from "./beers.js";
import { Find } from "./find.js";
import { Story } from "./story.js";
import { Contact } from "./contact.js";

import { Link } from "react-router";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Link to="/" className="headerTitle">LA BANOU</Link>
                <nav class="nav">
                    <a href="#bieres" className="navItem hvr-underline-reveal">NOS BIERES</a>
                    <a href="#lieux" className="navItem hvr-underline-reveal">LES TROUVER</a>
                    <a href="#histoire" className="navItem hvr-underline-reveal">NOTRE HISTOIRE</a>
                    <a href="#contact" className="navItem hvr-underline-reveal">CONTACT</a>
                </nav>
            </header>
        );
    }
}

class HeaderReduced extends React.Component {
    render() {
        return (
            <header className="header">
                <Link to="/" className="headerTitle">LA BANOU</Link>
            </header>
        );
    }
}

class Footer extends React.Component {
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
            anchors: ["bieres", "lieux", "histoire", "contact"], // the anchors for each sections
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
                <Footer/>
            </main>
        );
    }
}

export default Layout;
