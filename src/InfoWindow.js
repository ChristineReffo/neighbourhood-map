import React, { Component } from 'react'
import './App.css';

  let foursquare = require('react-foursquare')({
    clientID: 'E02QQMUOSQGK2HHMDNVZG3FRPHLFHRBS1TUZMO4GLNYHMSXX',
    clientSecret: 'AZFTDUKYBJLKXZEJSL4IOMQES1OBNAC0LYVN1EGQ44W1EGFJ'
  })

  let params = {
    "ll": "37.7749,-122.4194",
    "query": 'Blue Bottle'
  };

  export default class InfoWindow extends Component {
  state = {
    items: []
  }


componentDidMount() {
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ items: res.response.venues });
      });
  }


render() {
    return (
        <div>
            <div>Items:</div>
            {this.state.items.map(item => {
              return <div key={item.id}>{item.name}</div>}) }
        </div>
      )
  }
}
