import React, { Component } from 'react';
import {Navbar, Nav, NavItem, FormGroup, FormControl} from 'react-bootstrap';
import './App.css';

class SideNav extends Component {

  render () {

    const { filteredLocations, query, filterLocations } = this.props
    return (
      <div className="side-menu">
        <Navbar fluid inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">My maps</a>
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
                <NavItem key={location.id} href="#" onClick={(event) => this.props.clickHandler()}>{location.name}</NavItem>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default SideNav
