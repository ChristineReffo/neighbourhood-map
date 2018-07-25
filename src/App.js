import React, { Component } from 'react'
import './App.css';
import MenuHamburger from './MenuHamburger.js'
import MapContainer from './MapContainer.js'

class App extends Component {

  state = {
    locations: [
      {title: 'Mount Curry', location: {lat:50.316384, lng:-122.717350}},
      {title: 'Denali', location: {lat:63.069169, lng:-151.006984}},
      {title: 'Mount Robson', location: {lat:52.147222, lng:-117.441389}},
      {title: 'Mount Garibaldi', location: {lat:49.850713, lng:-123.004646}},
      {title: 'Mount Washington', location: {lat:44.270585, lng:-71.303272}}
    ]

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Neighbourhood map in React</h1>
        </header>
        <MenuHamburger
            locations={this.state.locations}/>
        <MapContainer
            locations={this.state.locations}/>
    </div>
    )
  }
}

export default App
