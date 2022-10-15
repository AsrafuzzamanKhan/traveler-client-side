import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header-container">
      <div className="header">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <span>
              <i className="fas fa-plane-departure top-icon"></i>
            </span>
            <h2 className="fw-bold fs-2 mx-2 top-h">Traveler</h2>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <NavLink className="fw-bold" to="/home">
                  Home
                </NavLink>
                <NavLink className="fw-bold" to="/packages">
                  Packages
                </NavLink>
                <NavLink className="fw-bold" to="/contact">
                  Contact
                </NavLink>
                {/* drop down  */}
                <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Manage Packages"
                      menuVariant="white"
                    >
                      <NavDropdown.Item>
                        <NavLink to={`/myBookings/${user.email}`}>
                          My Bookings
                        </NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <NavLink to="/addPackage">Add package</NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <NavLink to="/deletePackage">Manage package</NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <NavLink to="/manageAllOrders">
                          Manage All Orders
                        </NavLink>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                {/* ------login---------- */}

                {user.email && (
                  <span className="text-black  d-flex align-items-center">
                    Hello, {user.displayName}{' '}
                  </span>
                )}

                {user.email ? (
                  <button onClick={logOut} className="btn btn-success p-2 m-2">
                    Log out
                  </button>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
