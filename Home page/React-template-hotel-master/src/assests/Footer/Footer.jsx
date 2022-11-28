import React, { Component } from "react";
import "../css/Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="myFooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <h2 className="logo">
                                    <a href="a"> LOGO </a>
                                </h2>
                            </div>
                            <div className="col-sm-2">
                                <h5>Get started</h5>
                                <ul>
                                    <li>
                                        <a href="a">Home</a>
                                    </li>
                                    <li>
                                        <a href="a">Sign up</a>
                                    </li>
                                    <li>
                                        <a href="a">Downloads</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-2">
                                <h5>About us</h5>
                                <ul>
                                    <li>
                                        <a href="a">Company Information</a>
                                    </li>
                                    <li>
                                        <a href="a">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="a">Reviews</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-2">
                                <h5>Support</h5>
                                <ul>
                                    <li>
                                        <a href="a">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="a">Help desk</a>
                                    </li>
                                    <li>
                                        <a href="a">Forums</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <div className="social-networks">
                                    <a href="c" className="twitter">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="b" className="facebook">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="a" className="google">
                                        <i className="fa fa-google-plus" />
                                    </a>
                                </div>
                                <button
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#contactModal">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p>© 2019 Copyright Text </p>
                    </div>
                </footer>
            </div>
        );
    }
}
