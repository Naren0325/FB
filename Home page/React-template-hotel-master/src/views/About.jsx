import React, { Component } from "react";
import "../assests/css/body.css";
import Founders from "../assests/cards/Founders";

export default class About extends Component {
    render() {
        return (
            <body>
                {/* page section */}
                <header id="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 m-auto text-center">
                                <h1>About Us</h1>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nostrum, vel.
                                </p>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- About section --> */}
                <section id="about" className="py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>what we do</h1>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Dolore odio veniam,
                                    provident rem harum voluptatum reiciendis
                                    nulla libero ab ex reprehenderit assumenda
                                    officia ullam error eaque, porro eligendi
                                    maiores laboriosam sunt aliquid vitae?
                                    Fugiat eligendi explicabo praesentium saepe
                                    aliquid, sit placeat qui consequuntur
                                    impedit sed. Fugiat at repudiandae totam
                                    odio!
                                </p>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Molestias aut blanditiis
                                    fuga impedit suscipit sint a odio quod
                                    tempore! Tempora illum, amet aliquam id
                                    maxime a deleniti repudiandae laboriosam
                                    nulla fugiat sequi accusantium alias,
                                    eveniet quas iure, odio quod impedit
                                    veritatis reiciendis magnam nisi. Deleniti
                                    quaerat eveniet facilis incidunt voluptate.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img
                                    src="https://source.unsplash.com/random/600x600/?technology"
                                    alt=""
                                    className="img-fluid rounded-circle d-none d-md-block about-img"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- icon boxes --> */}
                <section id="icon-boxes" className="py-5">
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <div className="card bg-danger text-white text-center">
                                    <div className="card-body">
                                        <i className="fas fa-building fa-3x" />
                                        <h3>Sample Heading</h3>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Nesciunt,
                                        voluptatibus.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-success text-white text-center">
                                    <div className="card-body">
                                        <i className="fas fa-bullhorn fa-3x" />
                                        <h3>Sample Heading</h3>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Nesciunt,
                                        voluptatibus.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-danger text-white text-center">
                                    <div className="card-body">
                                        <i className="fas fa-comments fa-3x" />
                                        <h3>Sample Heading</h3>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Nesciunt,
                                        voluptatibus.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <div className="card bg-dark text-white text-center">
                                    <div className="card-body">
                                        <i className="fas fa-box fa-3x" />
                                        <h3>Sample Heading</h3>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Nesciunt,
                                        voluptatibus.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-danger text-white text-center">
                                    <div className="card-body">
                                        <i className="fas fa-credit-card fa-3x" />
                                        <h3>Sample Heading</h3>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Nesciunt,
                                        voluptatibus.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-dark text-white text-center">
                                    <div className="card-body">
                                        <i className="fas fa-coffee fa-3x" />
                                        <h3>Sample Heading</h3>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Nesciunt,
                                        voluptatibus.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Founders />
                {/* <!-- Staff --> */}
            </body>
        );
    }
}
