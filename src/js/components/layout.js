import React from "react";
import { Link } from "react-router";
import LogoSYSTRA from "../../img/logoSYSTRA.png";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="headerTitle">LA BANOU</div>
                <nav class="nav">
                    <Link to="bieres" className="navItem">NOS BIERES</Link>
                    <Link to="lieux" className="navItem">LES TROUVER</Link>
                    <Link to="histoire" className="navItem">NOTRE HISTOIRE</Link>
                    <Link to="contact" className="navItem">CONTACT</Link>
                </nav>
            </header>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div>© 2017 LA BANOU</div>
                <div className="links">
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
        return (
            <main>
                <Header/>
                {this.props.children}
                <Footer/>
            </main>
        );
    }
}

export default Layout;
