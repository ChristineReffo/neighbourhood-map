import React, { Component } from 'react'
import { GoogleApiWrapper } from 'google-maps-react'
import './App.css';
import MenuHamburger from './MenuHamburger.js'
import MapContainer from './MapContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Neighbourhood map in React</h1>
        </header>
        <div className="flexContainer">
        <MenuHamburger/>
        <MapContainer/>
      </div>
    </div>
    )
  }
}


export default App
