import React, { Component } from 'react'
import scriptLoader from 'react-async-script-loader'
import './App.css';

class MapContainer extends Component {

    state = {
      markers: [],

    }


      componentWillReceiveProps({isScriptLoadSucceed}) {
        if (isScriptLoadSucceed) {
          this.initMap()

        } else this.props.onError()
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
        const { locations } = this.props
        const bounds = new window.google.maps.LatLngBounds()
        const infoWindow = new window.google.maps.InfoWindow({
          content:''
        })

        locations.map((location) => {

          let marker = new window.google.maps.Marker({
                title: location.title,
                position: location.location,
                infoWindow,
                map,
                animation: window.google.maps.Animation.DROP,
                id: location.title,
                clickable: true
          })
            /* Add each marker to markers array in state */
            this.state.markers.push(marker)
            console.log(this.state.markers)

            /* Extend the boundaries according to positions of all markers in locations array */
            bounds.extend(location.location)

            /* Create an click event for each marker */

            marker.addListener('click', (event) => {
              marker.setAnimation(window.google.maps.Animation.BOUNCE)
              setTimeout(() => {
                marker.setAnimation(null)}, 800)

              this.openInfoWindow(map, marker)
              })

            return this.state.markers

          })

            map.fitBounds(bounds)
      }


/* Info window set up */


// https://stackoverflow.com/questions/42518612/uncaught-typeerror-cannot-read-property-apply-of-undefined-google-maps

openInfoWindow = (map, marker) => {
  marker.infoWindow.open(map, marker)
  marker.infoWindow.setContent('<div>' + marker.title + '</div>')
}
    // openInfoWindow = (map, marker) => {
    //     if(marker.infoWindow === true) {
    //       marker.infoWindow.close();
    //
    //     } else {
    //       marker.infoWindow.open = (map, marker) => {
    //       marker.infoWindow.setContent('<div>' + marker.title + '</div>')
    //     }
    //   }
    //     console.log(marker.infoWindow.content)
    // }




    // populateInfoWindow = ( marker, infowindow) => {
    //     if (infowindow.marker !== marker) {
    //       infowindow.marker = marker
    //       infowindow.setContent('<div>' + marker.title + '</div>')
    //       infowindow.open(this.map, marker)
    //
    //       /* Clear marker property if infoWindow is closed */
    //       infowindow.addListener('closeclick', function() {
    //         infowindow.setMarker(null)
    //       })
    //     }
    //   }
    //


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
