import React, { Component } from 'react'
import scriptLoader from 'react-async-script-loader'
import './App.css';
import Pin from './pin-blue-hi.png'

class MapContainer extends Component {


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

      makeMarkerIcon = (markerColour) => {
        let markerImage = new window.google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColour + '|40|_|%E2%80%A2',
          new window.google.maps.Size(21, 34),
          new window.google.maps.Point(0, 0),
          new window.google.maps.Point(10, 34),
          new window.google.maps.Size(21, 34)
        )
        return markerImage
      }


      setMarkers = (map) => {
        const { locations, markers, updateMarkerArray } = this.props
        const bounds = new window.google.maps.LatLngBounds()
        const infoWindow = new window.google.maps.InfoWindow({
          content:''
        })
        let defaultIcon = this.makeMarkerIcon('0091ff')
        let highlightedIcon = this.makeMarkerIcon('FFFF24')

        locations.map((location) => {

          let marker = new window.google.maps.Marker({
                title: location.title,
                position: location.location,
                lat: location.location.lat,
                lng: location.location.lng,
                infoWindow,
                map,
                animation: window.google.maps.Animation.DROP,
                icon: defaultIcon,
                clickable: true
          })
            /* Add each marker to markers array in state */
            updateMarkerArray(marker)
            console.log("MapContainer Markers", markers)

            /* Extend the boundaries according to positions of all markers in locations array */
            bounds.extend(location.location)

            /* Create an click event for each marker */

            marker.addListener('click', (event, highlighedIcon) => {
              marker.setAnimation(window.google.maps.Animation.BOUNCE)


              /* Stop bounce animation after 800 ms*/
              setTimeout(() => {
                marker.setAnimation(null)}, 800)

              /* Set highlight to marker when clicked */
                if(marker.icon === defaultIcon) {
                  marker.setIcon(defaultIcon)
                } else {
                  marker.setIcon(highlighedIcon)
                }

              /* Set information window */
              this.openInfoWindow(map, marker)
              })
            //
            // marker.addListener('mouseover', (event) => {
            // marker.setIcon(highlightedIcon)
            // })
            // marker.addListener('mouseout', (event) => {
            //   marker.setIcon(defaultIcon)
            // })



            return

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
