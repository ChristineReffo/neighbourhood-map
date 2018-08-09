import React, { Component } from "react";
import scriptLoader from "react-async-script-loader";
import "./App.css";

class MapContainer extends Component {
  state = {
    markers: [],
    filteredMarkers:[],
    map: null
  }
  /* Separate the load in order to avoid the map reloading at every marker refresh */
  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
      if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
        if (isScriptLoadSucceed) {
          this.initMap()
          console.log("Init Map")
        }
        else {
           // this.props.onError()
           console.log("I'm now initting the Map!");
        }
      } else {
        console.log("Now I set the markers!");
        this.setMarkers(this.state.map);
      }
    }

  resetMarkers = () => {
    this.state.markers.forEach(marker => {
      marker.setMap(null);
    })
    this.setState({ markers: [] })
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      maxZoom: 19,
      center: {
        lat: 50.316384,
        lng: -122.71735
      }
    })
    this.setState({ map })
    this.setMarkers(map);
  }


  // Create a marker per location, and put into markers array

  setMarkers = map => {
    const bounds = new window.google.maps.LatLngBounds();
    const infoWindow = new window.google.maps.InfoWindow({ content: "" });

    /* Empty array of markers before setting new ones to avoid multiplication */
    this.resetMarkers()

    this.props.filteredLocations.map(location => {
      let url = 'http://foursquare.com/v/'
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
      })
      /* Add each marker to state */
      this.setState((currentState) => ({
        markers: currentState.markers.concat(marker)
      }))

      /* Extend the boundaries according to positions of all markers in locations array */
      bounds.extend(location.location)
      // /* Add a tabindex to markers */
      // marker.tabindex = 0

      /* Create an click event for each marker */
      marker.addListener("click", event => {
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(() => {
          marker.setAnimation(null);
        }, 800)

      this.openInfoWindow(map, marker);
        // this.addTabIndexToMarker(marker)
      })

      return this.state.markers;
    })

    map.fitBounds(bounds)

  }

  /* Info window set up */

  openInfoWindow = (map, marker) => {
    marker.infoWindow.open(map, marker);
    marker.infoWindow.setContent('<div id="InfoWindowContent" tabindex="0" aria-label="Restaurant name and address">'+
      '<h4 id="firstHeading" class="firstHeading">' + marker.title + '</h4>'+
      '<div id="bodyContent">'+
      '<p><b>'+ marker.addressName +'</b></p>' +
      '<p><b>'+ marker.addressCity +'</b></p>' +
      '<p><b>'+ marker.addressCountry +'</b></p>'+
      '<p>Foursquare <a aria-label="link to foursquare" aria-role="link" href= "' + marker.foursquareUrl + '" target="_blank">' + 'For more details, click here</a></p>'+
      '</div>'+
      '</div>' +
      '</div>'
  )}

// addTabIndexToMarker = (marker) => {
//   let markerIcon = document.getElementsByClassName("gmnoprint")
//   markerIcon.setAttribute("tabindex", "0")
//   markerIcon.setAttribute("aria-label", marker.title)
//   markerIcon.setAttribute("aria-role", "marker pin on map")
// }

  render() {
    return (
      <div className="map-container">

        <div id="map" role="application" aria-label="map of restaurant locations" tabindex="-1"/>
      </div>
    );
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=AIzaSyA0GnEdVYOGtRqALRsCSa3I_FrXL7nSR5U`
])(MapContainer);
