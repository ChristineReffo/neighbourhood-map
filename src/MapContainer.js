import React, { Component } from 'react'
import scriptLoader from 'react-async-script-loader'
import './App.css';

class MapContainer extends Component {

    state = {
      markersArray: [],
      selectedMarker: [],
      showingInfoWindow: false,

      selectedPlace: {}
    }




    componentWillReceiveProps({isScriptLoadSucceed}) {
      if (isScriptLoadSucceed) {
        this.initMap()

      } else this.props.onError()
    }




        initMap= () => {
          const map = new window.google.maps.Map(document.getElementById('map'),
            {
              zoom: 7,
              center: {lat:50.316384, lng:-122.717350}
            }
          )
          this.setMarkers(map)
        }


      setMarkers = (map, markersArray) => {
        const { locations } = this.props

        // const largeInfoWindow = new window.google.maps.InfoWindow()
        const bounds = new window.google.maps.LatLngBounds()

        locations.map((location) => {
          let marker = new window.google.maps.Marker({
                title: location.title,
                position: location.location,
                map: map,
                animation: window.google.maps.Animation.DROP

              })
              /* Create an array of all markers */

              this.setState({ markersArray })

              /* Extend the boundaries according to positions of all markers in array */
              bounds.extend(location.location)

              /* Create an click event for each marker */

              // marker.addListener('click', function() {
              //   populateInfoWindow(this, largeInfoWindow)
              // })
            })
              // map.fitBounds(bounds)
              // this.setState()
      }


      populateInfoWindow = (map, marker, infoWindow) => {
          if (infoWindow.marker != marker) {
            infoWindow.marker = marker
            infoWindow.setContent('<div>' + marker.title + '</div>')
            infoWindow.open(map, marker)

            /* Clear marker property if infoWindow is closed */
            infoWindow.addListener('closeclick', function() {
              infoWindow.setMarker(null)
            })
          }
      }

      displayInfoWindow = () => {
        const infoWindow = new window.google.maps.InfodWindow({
          content: "see meeee"
        })
      }



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
