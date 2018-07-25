import React, { Component } from 'react'
import './App.css';

class InfoWindow extends Component {

    createInfoWindow = () => {
      let infowindow = new window.google.maps.InfoWindow()
    }

    openInfoWindow = () => {
      infowindow.open(map, marker.title)
    }

      // infowindow.addListener("closeclick", closeInfoWindow)

    closeInfoWindow = () => {
        infowindow.setMarker(null)
      }


    populateInfoWindow = (marker, infowindow) => {
        if (infowindow.marker !== marker) {
          infowindow.marker = marker
          infowindow.setContent('<div>' + marker.title + '</div>')
          infowindow.open(map, marker)

          /* Clear marker property if infoWindow is closed */
          infowindow.addListener('closeclick', function() {
            infowindow.setMarker(null)
          })
        }
    }

  render() {
    return(

   <div></div>


    )
  }
}

export default InfoWindow
