import React, { Component } from 'react';
import {Navbar, Nav, NavItem, FormGroup, FormControl, Button, Glyphicon} from 'react-bootstrap';
import './App.css';

class SideNav extends Component {

  render () {

    const { filteredLocations, query, filterLocations } = this.props
    return (
      <div className="side-menu" aria-role="menu" aria-label="Menu navigation" aria-labelledby="menuID">
        <Navbar id="menuID" fluid inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <h1>My maps</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse
            aria="">
            <Navbar.Form
              aria-label="form">
             <FormGroup>
               <FormControl
                 type="text"
                 placeholder="Search"
                 value={query}
                 onChange={(event) => filterLocations(event.target.value)}
                />
             </FormGroup>{' '}
           </Navbar.Form>
            <Nav>
              {filteredLocations.map((location) => (
                <NavItem
                  key={location.id}
                  aria-role="menuitem"
                  aria-label={location.name}
                  onClick={(event) => this.props.clickHandler(event)}>{location.name}
                </NavItem>
              ))}
            </Nav>
            <Button
              tabIndex="0"
              aria-label="Show all markers"
              onClick={() => this.props.showAllButton()}>
              <Glyphicon
                aria-hidden="true"
                glyph="map-marker" /> Show all
            </Button>
          </Navbar.Collapse>

        </Navbar>
      </div>
    )
  }
}

export default SideNav
