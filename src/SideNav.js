import React, { Component } from 'react';
import {Navbar, Nav, NavItem, FormGroup, FormControl, Button} from 'react-bootstrap';
import './App.css';

class SideNav extends Component {


 //  updateQuery = (e) => {
 //    this.setState({ query: query })
 //    this.state.locations.filter((location) => location.title.includes(this.state.query))
 // }

  render () {

    const { locations, query, filterLocations, filteredLocations } = this.props
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
                 onChange={(event) => filterLocations(event.target.value)} />

             </FormGroup>{' '}

           </Navbar.Form>
            <Nav>
              {filteredLocations.map((filteredLocation) => (
                <NavItem key={filteredLocation.title} href="#">{filteredLocation.title}</NavItem>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default SideNav
