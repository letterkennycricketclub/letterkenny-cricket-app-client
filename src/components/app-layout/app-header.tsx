import * as React from 'react'
import { Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class AppHeader extends React.Component {

  generateLoginComp() {
    return (window.location.pathname.indexOf('/admin') !== -1) ? 
    <Button variant="outline-success">Login</Button> : '';
  }

  render() {
    return (
      <header>
          <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand> <Link to={'/'} ><img className="d-inline-block align-top club-logo" alt="Letterkenny Cricket Club" src="/images/logo.jpg" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <Link to={'/events'} className='nav-link'>Events</Link>
              <Link to={'/teams'} className='nav-link'>Teams</Link>
              <Link to={'/tournaments'} className='nav-link'>Tournaments</Link>
              <Link to={'/about'} className='nav-link'>About</Link>
              </Nav>
              {this.generateLoginComp()}
            </Navbar.Collapse>
          </Navbar>
      </header>
    )
  }
}
