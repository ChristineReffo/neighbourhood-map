import React, { Component } from "react";
import { debounce } from "lodash"
import "./App.css";
import SideNav from "./SideNav.js";
import MapContainer from "./MapContainer.js";

class App extends Component {
  state = {
    locations: [
      {
        title: "Mount Edziza",
        id: "01",
        location: { lat: 57.715556, lng: -130.634444 }
      },
      {
        title: "Denali",
        id: "02",
        location: { lat: 63.069169, lng: -151.006984 }
      },
      {
        title: "Mount Robson",
        id: "03",
        location: { lat: 52.147222, lng: -117.441389 }
      },
      {
        title: "Mount Garibaldi",
        id: "04",
        location: { lat: 49.850713, lng: -123.004646 }
      },
      {
        title: "Mount Washington",
        id: "05",
        location: { lat: 49.753056, lng: -125.296389 }
      }
    ],
    filteredLocations: [],
    // markers: [],
    query: ""
  };

  componentDidMount = () => {
    this.initLocations();
  };

  /* Reset filteredLocations to full list of locations */
  initLocations = () => {
    this.setState(
      { filteredLocations: this.state.locations, query: "" },
      this.showLocationsArray
    );
  };
  // resetQuery = () => {
  //   this.setState({ query: '' })
  // }

  // resetMarkers = () => {
  //   this.setState({ markers: [] })
  // }
  //
  // initMarkers = () => {
  //   this.setState({ markers })
  //   console.log("init Markers", this.state.markers)
  // }

  clickHandler = event => {
    this.setState(currentState => {
      return {
        markers: currentState.markers.filter(
          marker => marker.title === event.target
        )
      };
    });
  };

  showLocationsArray = () => {
    console.log("filtered Locations", this.state.filteredLocations);
  };

  // Filter locations based on search query
  filterLocations = (query) => {
    this.setState({ query: query });
    let qryStr = query.trim().toLowerCase();

    // If query is not empty
    if (qryStr) {
      this.setState(currentState => {
        return {
          filteredLocations: currentState.locations.filter(location =>
            location.title.toLowerCase().includes(qryStr)
          )
        };
      }, this.showLocationsArray);
    } else {
      this.initLocations();
    }
  };

  render() {
    return (
      <div className="App">
        <SideNav
          markers={this.state.markers}
          initMarkers={this.initMarkers}
          clearMarkers={this.clearMarkers}
          clickHandler={this.clickHandler}
          filterLocations={this.filterLocations}
          filteredLocations={this.state.filteredLocations}
          query={this.state.query}
          resetQuery={this.resetQuery}
        />
        <MapContainer
          filteredLocations={this.state.filteredLocations}
          markers={this.state.markers}
          initMarkers={this.initMarkers}
          clearMarkers={this.clearMarkers}
          resetMarkers={this.resetMarkers}
        />
      </div>
    );
  }
}

export default App;
