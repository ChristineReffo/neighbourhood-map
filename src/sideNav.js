import React, { Component } from 'react';
import './App.css';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Button from 'react-bootstrap/lib/Button';


class SideNav extends Component {




    state: {
      query: '',
      menuClass: 'open'
    }



      updateQuery = (query)  => {
        this.setState({ query:query.trim() })
      }

      // findMarker = (query) => {
      //
      //   if (!searchedMarkers || "error" in searchedMarkers) {
      //   this.setState({
      //     searchedMarkers: []
      //   })
      // } else {
      //   searchedMarkers.map
      // }
      //
      //   if(query) {
      //     this.state.seachedMarkers.map(menuMarker => {
      //       for (let m of this.props.markers) {
      //         if (m.title === menuMarker.title) {
      //           m.setAnimation(window.google.maps.Animation.BOUNCE)
      //         }
      //       }
      //       return menuMarker
      //     })
      //   }
      //   this.setState({ menuMarkers })
      // }



        //
        // handleMenuClicks = () => {
        //   // click on menu item, filter for the same title as the markers array and setAnimation to bounce and infoWindow to ON
        //   if (
        //     this.props.markers.map(marker => {
        //       for (let l of this.props.locations) {
        //         if(l.title === marker.title) {
        //           marker.setAnimation(window.google.maps.Animation.BOUNCE)
        //           setTimeout(() => {
        //             marker.setAnimation(null)}, 800)
        //
        //           this.openInfoWindow(map, marker)
        //       }
        //     }
        //   }
        //     )
        //   )
        // }

        toggleClass() {
          const currentState = this.state.menuClass
          this.setState({ menuClass: !currenState })
        }


  render () {
    const { locations, markers } = this.props

    // let showingMarkers
    //
    // if(this.state.query) {
    //   const match = new RegExp(escapeRegExp(this.state.query), 'i')
    //
    //   showingMarkers = markers((marker) => match.test(marker.title))
    //
    // } else {
    //   showingMarkers = markers
    // }
    //
    // showingMarkers.sort(sortBy('title'))


    return (
      <div className='menu'>
        <nav className = {this.state.menuClass ? open : close}>
            <div className="menu">
              <input
                className="search-field"
                type="text"
                placeholder="Search by title..."
                // value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}/>
                <button>Submit</button>
              <ul className="menu-item-list">


                  {locations.map((location) => (
                    <li key={location.title}>
                      <a className="menu-item">{location.title}</a>
                    </li>
                  ))}
              </ul>

            </div>
        </nav>
            </div>






    )
  }
}

export default SideNav
