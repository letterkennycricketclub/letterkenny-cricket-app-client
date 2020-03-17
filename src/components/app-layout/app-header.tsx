import * as React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class AppHeader extends React.Component {
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
            </Navbar.Collapse>
          </Navbar>
      </header>
    )
  }
}
