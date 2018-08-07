import React, { Component } from "react";
import scriptLoader from "react-async-script-loader";
import "./App.css";
import InfoWindow from './InfoWindow.js'

class MapContainer extends Component {
  state = {
    markers: [],
    data: []
  }

  // error handling
 //  window.gm_authFailure = this.gm_authFailure;
 // gm_authFailure() {
 //   window.alert(bla bla bla.' )
 // }
 // or componendDidCatch event

  componentWillReceiveProps({ isScriptLoadSucceed }) {
    if (isScriptLoadSucceed) {
      this.initMap();
    } else {
      // handle error
    }
  }

  resetMarkers = () => {
    this.setState({ markers: [] });
  };

  initMarkers = markersList => {
    this.setState({ markers: markersList });
  };

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: {
        lat: 50.316384,
        lng: -122.71735
      }
    });
    this.setMarkers(map);
  };

  setMarkers = map => {
    let markersList = [];
    let url = 'http://foursquare.com/v/'
    const bounds = new window.google.maps.LatLngBounds();
    const infoWindow = new window.google.maps.InfoWindow({ content: "" });

    /* Empty array of markers before setting new ones to avoid multiplication */
    this.resetMarkers();

    this.props.locations.map(location => {
      let marker = new window.google.maps.Marker({
        title: location.name,
        position: {lat: location.location.lat, lng:location.location.lng},
        addressName: location.location.formattedAddress["0"],
        addressCity: location.location.formattedAddress["1"],
        addressCountry: location.location.formattedAddress["2"],
        venuId: location.id,
        foursquareUrl: url + location.id,
        infoWindow,
        map,
        animation: window.google.maps.Animation.DROP,
        clickable: true
      });
      /* Add each marker to markers array in app.js state */
      markersList.push(marker);

      this.initMarkers();

      /* Extend the boundaries according to positions of all markers in locations array */
      bounds.extend(location.location);

      /* Create an click event for each marker */

      marker.addListener("click", event => {
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(() => {
          marker.setAnimation(null);
        }, 800);

        this.openInfoWindow(map, marker);
      });

      return this.state.markers;
    });

    map.fitBounds(bounds);
    console.log("Markers", this.state.markers);
  };

  /* Info window set up */

  openInfoWindow = (map, marker) => {
    marker.infoWindow.open(map, marker);
    marker.infoWindow.setContent('<div id="InfoWindowContent">'+
      '<h4 id="firstHeading" class="firstHeading">' + marker.title + '</h4>'+
      '<div id="bodyContent">'+
      '<p><b>'+ marker.addressName +'</b></p>' +
      '<p><b>'+ marker.addressCity +'</b></p>' +
      '<p><b>'+ marker.addressCountry +'</b></p>'+
      '<p>Attribution: Foursquare <a href= "' + marker.foursquareUrl + '">'+ 'For more details, click here</a></p>'+
      '</div>'+
      '</div>' +
      '</div>'
)}
  // To add the marker to the map, call setMap();
  // marker.setMap(map);

  render() {
    return (
      <div className="map-container">
        <div id="map" />
        <div className="marker" role="navigation">{this.props.title}
          </div>
      </div>
    );
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=AIzaSyA0GnEdVYOGtRqALRsCSa3I_FrXL7nSR5U`
])(MapContainer);
