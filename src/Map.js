import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  static defaultProps = {
    center: {
      lat: 50.116320,
      lng: -122.957356
    },
    zoom: 10
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyA0GnEdVYOGtRqALRsCSa3I_FrXL7nSR5U'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={50.116320}
            lng={-122.957356}
            text={'Whistler Village'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
