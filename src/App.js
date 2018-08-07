import React, { Component } from "react";
import { debounce } from "lodash"
import "./App.css";
import SideNav from "./SideNav.js";
import MapContainer from "./MapContainer.js";

class App extends Component {
  state = {
    locations: [
      // {
      //   title: "Mount Edziza",
      //   location: { lat: 57.715556, lng: -130.634444 }
      // },
      // {
      //   title: "Denali",
      //   location: { lat: 63.069169, lng: -151.006984 }
      // },
      // {
      //   title: "Mount Robson",
      //   location: { lat: 52.147222, lng: -117.441389 }
      // },
      // {
      //   title: "Mount Garibaldi",
      //   location: { lat: 49.850713, lng: -123.004646 }
      // },
      // {
      //   title: "Mount Washington",
      //   location: { lat: 49.753056, lng: -125.296389 }
      // }
    ],
    filteredLocations: [],
    // markers: [],
    query: ""
  };

  componentDidMount = () => {
    this.initLocations()
    this.fetchFlickr()
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
  }

// Foursquare
//   Client ID
//   E02QQMUOSQGK2HHMDNVZG3FRPHLFHRBS1TUZMO4GLNYHMSXX
//   Client Secret
//   AZFTDUKYBJLKXZEJSL4IOMQES1OBNAC0LYVN1EGQ44W1EGFJ
//

  getLocationsAll = () => {
        fetch(`https://api.foursquare.com/v2//venues/search?venues/search?ll=50.31,-122.71&limit=5&intent=browse&radius=100000&query=restaurant&client_id=E02QQMUOSQGK2HHMDNVZG3FRPHLFHRBS1TUZMO4GLNYHMSXX&client_secret=AZFTDUKYBJLKXZEJSL4IOMQES1OBNAC0LYVN1EGQ44W1EGFJ&v=20180806`)
           .then((res) => res.json()) //transform data into json
           .then(function(data) {
             this.setState({ locations: data })
             console.log("API fetch locations data", this.state.locations)
           }.catch(function(error) {
             console.log(error);
  })


  getPhoto = () => {
    let VENUE-ID = ...
      fetch(`https://api.foursquare.com/v2/venues/${VENUE_ID}/photos?group=venue&limit=1`)
          .then(handleErrors)
          .then(res => res.json())
          .then(data => data.response.venues)
    }

getPhoto = () => {
let VENUE-ID = ...

  }

     function handleErrors(response) {
         if (!response.ok) {
             throw Error(response.statusText);
         }
         return response;


// Flickr
// Secret:
// 47755390dd078906
// const FLICK_KEY ='125a30b66d043be831b2eb27fd8384f7'
//
  /* Get photos from Flickr */
  fetchFlickr = () => {
    //
    // let pics = []
    // let photosUrlData = []

      this.state.locations.map(location => {

          let getPhotos = (location) => {

          fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=125a30b66d043be831b2eb27fd8384f7&tags=${location.title}&per_page=1&page=1&format=json&nojsoncallback=1`)
             .then
                (response => response.json())
             .then(data => console.log("data fetch", data))
             .catch(e => console.log("Boo"))
               // let photosArray = data.photos.photo.map(pic => {
               //
               //   let src = 'http://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
               //   return src
               }
             })
      //          pics.push(...photosArray)
      //        })
      //        // .catch(error => {
      //        //   alert("Whoops")
      //          // Updating state and specify error
      //          // let issue = this.state.isLoaded;
      //          // issue['flickr'] = false;
      //          //
      //          // this.setState({ issue })
      //        // })
      //       // Pushing all pictures results of all locations to an Array
      //
      //       photosUrlData.push(pics)
      //    }
      //      location['photo'] = photosUrlData[0]
      //   }
      // )
      //   this.setState({ locations: this.state.locations })
      //   console.log("location photo", this.state.locations)
  }




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
