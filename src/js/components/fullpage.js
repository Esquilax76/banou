import React from "react";
import { SectionsContainer, ScrollToTopOnMount } from "react-fullpage";

import { Beers } from "./beers.js";
import { Bar } from "./bar.js";
import { Find } from "./find.js";
import { Story } from "./story.js";
import { Contact } from "./contact.js";

export class Fullpage extends React.Component {
    constructor() {
        super();
        this.state = {
            initialActiveSection: null
        };

        this.onScroll = this.onScroll.bind(this);
    }

    onScroll(e) {
        var links = document.getElementsByClassName("navItem");
        links[e.activeSection].classList.add("activeMenu");
        if (this.state.initialActiveSection === null) {
            this.setState(() => ({ initialActiveSection: e.activeSection }));
        }
    }

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
            <SectionsContainer className="sectionContainer" {...options} scrollCallback={this.onScroll} activeSection={this.state.initialActiveSection}>
                <Beers/>
                <Bar/>
                <Find/>
                <Story/>
                <Contact/>
            </SectionsContainer>
        );
    }
}
