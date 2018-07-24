import React, { Component } from 'react';
import { InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import Marker from './Marker.js'
import './App.css';

class Map extends Component {
  render() {
    return(

      <div className="map">

      </div>
    )
  }
}


export default Map

/*
<Map
         google={this.props.google}
         style={style}
         initialCenter={{
           lat: 40.854885,
           lng: -88.081807
         }}
         zoom={15}
         onClick={this.onMapClicked}
       >

<Map
        google={this.props.google}
        style={style}
        center={{
        lat: 40.854885,
        lng: -88.081807
        }}
        zoom={15}
        onClick={this.onMapClicked}
 >*/
