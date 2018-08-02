import React, { Component } from 'react'
import './App.css';
import SideNav from './SideNav.js'
import MapContainer from './MapContainer.js'

class App extends Component {

  state = {
    locations: [
      {title: 'Mount Edziza', id: '01', location: {lat:57.715556, lng:-130.634444}},
      {title: 'Denali', id: '02', location: {lat:63.069169, lng:-151.006984}},
      {title: 'Mount Robson', id: '03', location: {lat:52.147222, lng:-117.441389}},
      {title: 'Mount Garibaldi', id: '04', location: {lat:49.850713, lng:-123.004646}},
      {title: 'Mount Washington', id: '05', location: {lat:49.753056, lng:-125.296389}}
    ],
    filteredLocations: [],
    markers: [],
    query:''
  }

  componentDidMount = () => {
    this.initLocations()
  }

  /* Reset filteredLocations to full list of locations */
  initLocations = () => {
    this.setState({ filteredLocations: this.state.locations })
  }

  initMarkers = () => {
    this.setState({ markers })
  }

  resetMarkers = () => {
    this.setState({ markers: [] })
  }



  // Filter locations based on search query
  filterLocations = (query) => {

    // If query is not empty
      if(query) {
        this.setState({ query: query.trim().toLowerCase() })

        this.setState((currentState) => {
          return {
            filteredLocations:currentState.filteredLocations.filter((location) => location.title.toLowerCase().includes(query)
          )}
        })


            // this.state.locations. map((location) => {
            //   if(location.title.indexOf(query)) {
            //     this.setState(previousState => ({
            //       filteredLocations: [...previousState.filteredLocations, location]
            //     }))
    } else {
    this.initLocations()
                // this.setState({ query: '' })
              }
console.log('filtered Locations', this.state.filteredLocations)
            }





  render() {
    return (
      <div className="App">
        <SideNav
            locations={this.state.filteredLocations}
            markers={this.state.markers}
            initMarkers={this.initMarkers}
            clearMarkers={this.clearMarkers}
            filterLocations={this.filterLocations}
            filteredLocations={this.state.filteredLocations}
            query={this.state.query}
        />
        <MapContainer
          locations={this.state.filteredLocations}
          markers={this.state.markers}
          initMarkers={this.initMarkers}
          clearMarkers={this.clearMarkers}
          resetMarkers={this.resetMarkers}
          filterLocations={this.filterLocations}
          filteredLocations={this.state.filteredLocations}
          query={this.state.query}/>
    </div>
    )
  }
}

export default App
