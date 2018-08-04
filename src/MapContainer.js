import React, { Component } from "react";
import scriptLoader from "react-async-script-loader";
import "./App.css";

class MapContainer extends Component {
  state = {
    markers: []
  };

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
    const bounds = new window.google.maps.LatLngBounds();
    const infoWindow = new window.google.maps.InfoWindow({ content: "" });

    /* Empty array of markers before setting new ones to avoid multiplication */
    this.resetMarkers();

    this.props.filteredLocations.map(location => {
      let marker = new window.google.maps.Marker({
        title: location.title,
        position: location.location,
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
    marker.infoWindow.setContent("<div>" + marker.title + "</div>");
  };

  // To add the marker to the map, call setMap();
  // marker.setMap(map);

  render() {
    return (
      <div className="map-container">
        <div id="map" />
      </div>
    );
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=AIzaSyA0GnEdVYOGtRqALRsCSa3I_FrXL7nSR5U`
])(MapContainer);
