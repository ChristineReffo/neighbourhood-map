import React, { Component } from 'react';
import {Navbar, Nav, NavItem, FormGroup, FormControl, Button, Glyphicon} from 'react-bootstrap';
import './App.css';

class SideNav extends Component {

  render () {

    const { filteredLocations, query, filterLocations } = this.props
    return (
      <div className="side-menu">
        <Navbar fluid inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <h1>My maps</h1>

            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form>
             <FormGroup>
               <FormControl type="text"
                 placeholder="Search"
                 value={query}
                 onChange={(event) => filterLocations(event.target.value)}
                />
             </FormGroup>{' '}
           </Navbar.Form>
            <Nav>
              {filteredLocations.map((location) => (
                <NavItem key={location.id} href="#" onClick={(event) => this.props.clickHandler(event)}>{location.name}</NavItem>
              ))}
            </Nav>
            <Button
              onClick={() => this.props.showAllButton()}>
              <Glyphicon glyph="map-marker" /> Show all
            </Button>
          </Navbar.Collapse>

        </Navbar>
      </div>
    )
  }
}

export default SideNav
