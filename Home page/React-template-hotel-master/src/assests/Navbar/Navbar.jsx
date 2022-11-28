import React, { Component } from "react";

import { Link } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a href="index.html" className="navbar-brand">
                        Glozzom
                    </a>
                    <button
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link px-3">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/listing" className="nav-link px-3">
                                    Listing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link px-3">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/details" className="nav-link px-3">
                                    Details
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link px-3">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
