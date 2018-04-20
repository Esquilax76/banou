// import React from "react";
// import { Link } from "react-router";
// import LogoSYSTRA from "../../img/logoSYSTRA.png";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
// import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="header">
//                 <div className="headerTitle">LA BANOU</div>
//                 <nav class="nav">
//                     <Link to="bieres" className="navItem">NOS BIERES</Link>
//                     <Link to="lieux" className="navItem">LES TROUVER</Link>
//                     <Link to="histoire" className="navItem">NOTRE HISTOIRE</Link>
//                     <Link to="contact" className="navItem">CONTACT</Link>
//                 </nav>
//             </header>
//         );
//     }
// }

// class Footer extends React.Component {
//     render() {
//         return (
//             <footer className="footer">
//                 <div>© 2017 LA BANOU</div>
//                 <div className="links">
//                     <a href="https://www.facebook.com/bierelabanou" target="blank">
//                         <FontAwesomeIcon icon={faFacebookSquare} className="linkIcon"/>
//                     </a>
//                     <a href="https://www.instagram.com/biere_la_banou/?hl=fr" target="blank">
//                         <FontAwesomeIcon icon={faInstagram} className="linkIcon"/>
//                     </a>
//                 </div>
//             </footer>
//         );
//     }
// }

// class Layout extends React.Component {
//     render() {
//         return (
//             <main>
//                 <Header/>
//                 {this.props.children}
//                 <Footer/>
//             </main>
//         );
//     }
// }

// export default Layout;

import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import { SectionsContainer } from "react-fullpage";

import { Beers } from "./beers.js";
import { Link } from "react-router";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="headerTitle">LA BANOU</div>
                <nav class="nav">
                    <a href="#bieres" className="navItem">NOS BIERES</a>
                    <a href="#lieux" className="navItem">LES TROUVER</a>
                    <a href="#histoire" className="navItem">NOTRE HISTOIRE</a>
                    <a href="#contact" className="navItem">CONTACT</a>
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
            verticalAlign: false // align the content of each section vertical
        };

        return (
            <main>
                <Header/>
                <SectionsContainer className="test" {...options}>
                    <Beers/>
                </SectionsContainer>
                <Footer/>
            </main>
        );
    }
}

export default Layout;
