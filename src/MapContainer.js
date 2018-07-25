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
        this.createInfoWindow()
      }



      setMarkers = (map) => {
        const { locations } = this.props
        const bounds = new window.google.maps.LatLngBounds()



        locations.map((location) => {

          let marker = new window.google.maps.Marker({
                title: location.title,
                position: location.location,
                map: map,
                animation: window.google.maps.Animation.DROP,
                id: location.title
          })


            this.state.markers.push(marker)

            /* Extend the boundaries according to positions of all markers in array */
            bounds.extend(location.location)

              /* Create an click event for each marker */

              // marker.addListener('click', function() {
              //   infoWindow.open(map, marker.title)

              console.log(this.state.markers)

              })

              map.fitBounds(bounds)
            }


/* Info window set up */

    createInfoWindow = () => {
      let infowindow = new window.google.maps.InfoWindow()
    }


    } //
      // populateInfoWindow = (map, marker, infoWindow) => {
      //     if (infoWindow.marker != marker) {
      //       infoWindow.marker = marker
      //       infoWindow.setContent('<div>' + marker.title + '</div>')
      //       infoWindow.open(map, marker)
      //
      //       /* Clear marker property if infoWindow is closed */
      //       infoWindow.addListener('closeclick', function() {
      //         infoWindow.setMarker(null)
      //       })
      //     }
      // }





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
