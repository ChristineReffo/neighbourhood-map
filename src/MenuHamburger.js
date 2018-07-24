import React, { Component } from 'react';
import './App.css';
import burgerButton from './menu-button.png'



class MenuHamburger extends Component {

  render () {
    return (
      <div className="menu">
        {/* <div className="menu-overlay">
        </div> */}
        <div id="visible" className="menu-wrapper">
            <div className="menu">
              <nav className="menu-item-list">
                <ul href='true' className="menu-item">
                  <li><a className="fa fa-w fa-star-o">item</a></li>
                  <li><a className="fa fa-w fa-star-o">Item</a></li>
                  <li><a className="fa fa-w fa-star-o">Item</a></li>
                  <li><a className="fa fa-w fa-star-o">Item</a></li>
                  <li><a className="fa fa-w fa-star-o">Item</a></li>
                </ul>
              </nav>
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
