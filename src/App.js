import React, { Component } from "react";
import { debounce } from "lodash"
import "./App.css";
import SideNav from "./SideNav.js";
import MapContainer from "./MapContainer.js";

class App extends Component {

  state = {
    locations: [],
    filteredLocations: [],
    query: ""
  }

    componentDidMount = () => {
    this.getLocations()
    }

  // Foursquare
  //   Client ID
  //   E02QQMUOSQGK2HHMDNVZG3FRPHLFHRBS1TUZMO4GLNYHMSXX
  //   Client Secret
  //   AZFTDUKYBJLKXZEJSL4IOMQES1OBNAC0LYVN1EGQ44W1EGFJ
  //

    getLocations = () => {
          fetch(`https://api.foursquare.com/v2/venues/search?ll=50.31,-122.71&limit=5&intent=browse&radius=100000&query=restaurant&client_id=E02QQMUOSQGK2HHMDNVZG3FRPHLFHRBS1TUZMO4GLNYHMSXX&client_secret=AZFTDUKYBJLKXZEJSL4IOMQES1OBNAC0LYVN1EGQ44W1EGFJ&v=20180806`)
             .then((response) => response.json()) //transform data into json
             .then((data) => {
                this.setState({ locations: data.response.venues })
                this.initLocations()
             }).catch(function(error) {
               console.log(error)
               })
             }

    // Filter locations based on search query
    filterLocations = (query) => {
      this.setState({ query: query });
      let qryStr = query.trim().toLowerCase();

      // If query is not empty
      if (qryStr) {
        this.setState(currentState => {
          return {
            filteredLocations: currentState.locations.filter(location =>
              location.name.toLowerCase().includes(qryStr)
            )

          }
        }, this.showLocationsArray)
      } else {
        this.initLocations()
      }
    }

    updateFilteredLocations = (query) => {
      let qryStr = this.state.query.trim().toLowerCase();
      this.setState(currentState => {
        return {
          filteredLocations: currentState.locations.filter(location =>
            location.name.toLowerCase().includes(qryStr)
          )
        }
      })
    }

  /* Reset filteredLocations to full list of locations and set query to null*/
    initLocations = () => {
      this.setState(
        { filteredLocations: this.state.locations, query: "" },
        this.showLocationsArray
      );
    }

    showLocationsArray = () => {
      console.log("filtered Locations", this.state.filteredLocations);
    }


    clickHandler = (event, location, query) => {
      this.setState({ query: event.target.innerText })
      this.updateFilteredLocations(query)
      console.log("clicked", event.target.innerText)
    }


  render() {
    return (
      <div className="App">
        <SideNav
          clickHandler={this.clickHandler}
          filterLocations={this.filterLocations}
          filteredLocations={this.state.filteredLocations}
          query={this.state.query}
        />
        <MapContainer
          filteredLocations={this.state.filteredLocations}
          // query={this.state.query}

        />
      </div>
    );
  }
}

export default App;
