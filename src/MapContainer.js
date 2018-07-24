import React, { Component } from 'react'
import { Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import Marker from './Marker.js'
// import Map from './Map.js'

export class MapContainer extends Component {

    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }

    // binding this to event-handler functions
 // this.onMarkerClick = this.onMarkerClick.bind(this);
 // this.onMapClick = this.onMapClick.bind(this);


  initMap() {
    this.setMarkers()
  }




   setMarkers = () => {
     const { google, locations } = this.props
     const bounds = new google.maps.LatLngBounds()

     locations.forEach((location) => {

       const marker = new google.maps.Marker({
         position: {location},
         map: this.props.map,

       })

     })
   }

//
// onMarkerClick = (props, marker, e) => {
//  this.setState({
//    selectedPlace: props,
//    activeMarker: marker,
//    showingInfoWindow: true
//  });
// }
// onMapClick = (props) => {
//  if (this.state.showingInfoWindow) {
//    this.setState({
//      showingInfoWindow: false,
//      activeMarker: null
//    });
//  }
// }

  render() {

    {Locations.map((location) => {
               return (
                 <Marker
                   onClick={this.onMarkerClick}
                   name={location.name}
                   position={location.coordinates} />
               )
             })
             }

    return (
      <div className="map">

      <Map
         google={this.props.google}
         initialCenter={{
           lat: 50.116320,
           lng: -122.957356
         }}
         zoom={15}
         onClick={this.onMapClick}
       >
         {this.props.Locations.map((location) => {
        <Marker
          locations={this.props.locations}
        />

        {/*<InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA0GnEdVYOGtRqALRsCSa3I_FrXL7nSR5U'
})(MapContainer)
