import React, { Component } from 'react'
import scriptLoader from 'react-async-script-loader'
import './App.css';

class MapContainer extends Component {


      componentWillReceiveProps({isScriptLoadSucceed}) {
        if (isScriptLoadSucceed) {
          this.initMap()

        } else {
          // this.props.onError()
        }
      }



      initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'),
          {
            zoom: 7,
            center: {lat:50.316384, lng:-122.717350}
          }
        )

        this.setMarkers(map)

      }



      setMarkers = (map) => {
        let markersList = []
        const bounds = new window.google.maps.LatLngBounds()
        const infoWindow = new window.google.maps.InfoWindow({
          content:''
        })

        this.props.resetMarkers()
        this.props.filteredLocations.map((filteredLocation) => {

          let marker = new window.google.maps.Marker({
                title: filteredLocation.title,
                position: filteredLocation.location,
                infoWindow,
                map,
                animation: window.google.maps.Animation.DROP,
                clickable: true
          })
            /* Add each marker to markers array in app.js state */
            this.props.markers.concat(marker)
            this.props.initMarkers()
            console.log("Markers",this.props.markers)

            /* Extend the boundaries according to positions of all markers in locations array */
            bounds.extend(filteredLocation.location)

            /* Create an click event for each marker */

            marker.addListener('click', (event) => {
              marker.setAnimation(window.google.maps.Animation.BOUNCE)
              setTimeout(() => {
                marker.setAnimation(null)}, 800)

              this.openInfoWindow(map, marker)
              })

            return this.props.markers

          })

            map.fitBounds(bounds)
      }


/* Info window set up */


// https://stackoverflow.com/questions/42518612/uncaught-typeerror-cannot-read-property-apply-of-undefined-google-maps

openInfoWindow = (map, marker) => {
  marker.infoWindow.open(map, marker)
  marker.infoWindow.setContent('<div>' + marker.title + '</div>')
}

    // To add the marker to the map, call setMap();
    // marker.setMap(map);

  render() {

    return (
      <div className="map-container">
        <div id='map'>
        </div>
      </div>

    )
  }
}

export default scriptLoader(
    [`https://maps.googleapis.com/maps/api/js?key=AIzaSyA0GnEdVYOGtRqALRsCSa3I_FrXL7nSR5U`]
)(MapContainer)
