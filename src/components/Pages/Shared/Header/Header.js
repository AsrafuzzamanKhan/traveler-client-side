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
              <i className="fas fa-plane-departure"></i>
            </span>
            <h2 className="fw-bold fs-2">Traveler</h2>
            {/* <Navbar.Brand className="fw-bold fs-2" href="/home">
              Traveler
            </Navbar.Brand> */}
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

                {/* <div className="dropdown me-2">
                  <button
                    className="btn dropdown-toggle fw-bold text-black"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Manage Packages
                  </button>
                  <ul className="dropdown-menu bg-light">
                    <li className="px-2">
                      <NavLink to={`/myBookings/${user.email}`}>
                        My Bookings
                      </NavLink>
                    </li>
                    <li className="px-2">
                      <NavLink to="/addPackage">Add package</NavLink>
                    </li>
                    <li className="px-2">
                      <NavLink to="/deletePackage">Manage package</NavLink>
                    </li>
                    <li className="px-2">
                      <NavLink to="/manageAllOrders">Manage All Orders</NavLink>
                    </li>
                  </ul>
                </div> */}

                {/* ------------------ */}

                <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Manage Packages"
                      menuVariant="white"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        <NavLink to={`/myBookings/${user.email}`}>
                          My Bookings
                        </NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        <NavLink to="/addPackage">Add package</NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        <NavLink to="/deletePackage">Manage package</NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        <NavLink to="/manageAllOrders">
                          Manage All Orders
                        </NavLink>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                {/* ---------------- */}

                {user.email && (
                  <span className="text-black  d-flex align-items-center">
                    Hello, {user.displayName}{' '}
                  </span>
                )}

                {user.email ? (
                  <button onClick={logOut} className="btn btn-success ms-2 p-2">
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
