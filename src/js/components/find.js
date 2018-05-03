import React from "react";
import { withGoogleMap, GoogleMap, Marker, KmlLayer, TrafficLayer } from "react-google-maps";

import "../../css/find.scss";
import data from "../data/data.js";

import { Link } from "react-router";

import cuve from "../../img/cuve.jpg";
import pictoBiere from "../../img/pictoBiere.png";
import pictoPinte from "../../img/pictoPinte.png";

import markerBiere from "../../img/markerBiere.png";
import markerPinte from "../../img/markerPinte.png";

const mapStyle = [{"featureType": "administrative.land_parcel","stylers": [{"visibility": "off"}]},{"featureType": "administrative.neighborhood","stylers": [{"visibility": "off"}]},{"featureType": "poi","stylers": [{"visibility": "off"}]},{"featureType": "road","elementType": "labels.icon","stylers": [{  "visibility": "off"}]},]

const MyMapComponent = withGoogleMap((props) =>
    <GoogleMap
        zoom={props.zoom}
        center={{ lat: props.lat, lng: props.lng }}
        defaultOptions={{ styles: mapStyle }}
    >

        {props.markers.map(function (item, index) {
            var image = markerBiere;
            if (item.type === "bar") {
                image = markerPinte;
            }
            return (
                <Marker key={index} position={{ lat: item.latitude, lng: item.longitude }} icon={ image } />
            );
        })}
    </GoogleMap>
);

export class Find extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: data.find,
            markers: data.map,
            zoom: 13,
            lat: 45.380072,
            lng: 1.931150,
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e){
        console.log(e.target.value.split("_")[0])
        console.log(e.target.value.split("_")[1])
        this.setState({ lat: parseFloat(e.target.value.split("_")[0]), lng: parseFloat(e.target.value.split("_")[1]) });
    }

    render() {
        return (
            <div className="findContainer">
                <div className="pageTitle findPageTitle">Les trouver</div>

                <div className="findColumn">
                    <div className="findLeftColumn">
                        <div className="findSubtitle">VENTE DIRECTE</div>
                        <div className="findDescription">N'hésitez pas à venir nous voir, nous serons heureux de vous rencontrer et de vous faire découvrir la brasserie et nos bières!</div>
                        <div src={cuve} className="findImg"/>
                        <div className="findDescription">Vous pouvez aussi les commander directement en ligne:</div>
                        <Link to="/boutique" className="shopButton">Découvrez notre boutique en ligne !</Link>
                    </div>

                    <div className="findRightColumn">
                        <div className="findSubtitle">REVENDEURS</div>
                        <div className="findDescription">Parcourez la carte pour connaitre les revendeurs de Banou:</div>
                        <div className="legend">
                            <img src={pictoBiere} className="legendImg"/>
                            <div className="legendText">Les bars où vous pourrez dégustez la Banou</div>
                        </div>
                        <div className="legend">
                            <img src={pictoPinte} className="legendImg"/>
                            <div className="legendText">Les magasins et caves où vous pourrez en achetez</div>
                        </div>
                        <select className="selectCity" defaultValue="nothing" onChange={(e) => this.handleChange(e)}>
                            <option value="nothing" disabled>Sélectionnez une ville</option>
                            {this.state.places.map(function (item, index) {
                                return (
                                    <option key={index} value={item.latitude + "_" + item.longitude}>{item.name}</option>
                                );
                            }.bind(this))}
                        </select>
                        <MyMapComponent
                            containerElement={<div className="fullHeight" />}
                            mapElement={<div className="fullHeight" />}
                            markers={this.state.markers}
                            zoom={this.state.zoom}
                            lat={this.state.lat}
                            lng={this.state.lng}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
