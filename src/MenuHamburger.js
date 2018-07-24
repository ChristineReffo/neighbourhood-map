import React, { Component } from 'react';
import './App.css';
import burgerButton from './menu-button.png'



class MenuHamburger extends Component {

  render () {

    const { locations } = this.props
    return (
      <div className="menu">
        {/* <div className="menu-overlay">
        </div> */}
        <div id="visible" className="menu-wrapper">
            <div className="menu">
              <ul className="menu-item-list">
                  {locations.map((location) => (
                    <li key={location.title}>
                      <a className="menu-item">{location.title}</a>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="close-button" src={burgerButton} alt="close menu button">
              <button> Close menu </button>
            </div>
        </div>
        </div>





    )
  }
}

export default MenuHamburger
