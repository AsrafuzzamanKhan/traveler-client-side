import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="header ">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <span><i className="fas fa-plane-departure"></i></span>

                    <Navbar.Brand className="text-success fw-bold" href="#home">Traveler</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="fw-bold" to="/home">Home</NavLink>
                            <NavLink className="fw-bold" to="/packages">Packages</NavLink>
                            <NavLink className="fw-bold" to="/contact">Contact</NavLink>


                            <div className="dropdown me-2">
                                <button className="btn btn-light dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Manage Packages
                                </button>
                                <ul className="dropdown-menu bg-light" >
                                    <li className="px-2"><NavLink to={`/myBookings/${user.email}`}>My Bookings</NavLink></li>
                                    <li className="px-2"><NavLink to="/addPackage">Add package</NavLink></li>
                                    <li className="px-2"><NavLink to="/deletePackage">Delete package</NavLink></li>
                                    <li className="px-2"><NavLink to="/addPackage">Add package</NavLink></li>
                                    <li className="px-2"><NavLink to="/manageAllOrders">Manage All Orders</NavLink></li>
                                </ul>
                            </div>

                            {user.email && <span className="text-black  d-flex align-items-center">Hello, {user.displayName}  </span>}

                            {
                                user.email ?
                                    <button onClick={logOut} className="btn btn-success ms-2">Log out</button>
                                    :
                                    <NavLink to="/login">Login</NavLink>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;