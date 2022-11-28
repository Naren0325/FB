import React, { Component } from "react";
import Rooms from "../assests/cards/Rooms";
import { Link } from "react-router-dom";
import Availability from "../assests/cards/Availability";
export default class Listing extends Component {
    render() {
        return (
            <div>
                <section
                    className="site-hero inner-page overlay"
                    data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row site-hero-inner justify-content-center align-items-center">
                            <div
                                className="col-md-10 text-center"
                                data-aos="fade">
                                <h1 className="heading mb-3">Rooms</h1>
                                <ul className="custom-breadcrumbs mb-4">
                                    <Link to="/">Home</Link>
                                    <li>. </li>
                                    <li>Rooms</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <a className="mouse smoothscroll" href="#next">
                        <div className="mouse-icon">
                            <span className="mouse-wheel" />
                        </div>
                    </a>
                </section>
                <Availability />
                <Rooms />
                <section className="section bg-light">
                    <div className="container">
                        <div className="row justify-content-center text-center mb-5">
                            <div className="col-md-7">
                                <h2 className="heading" data-aos="fade">
                                    Great Offers
                                </h2>
                                <p data-aos="fade">
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they
                                    live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.
                                </p>
                            </div>
                        </div>

                        <div
                            className="site-block-half d-block d-lg-flex bg-white"
                            data-aos="fade"
                            data-aos-delay="100">
                            <a href="a" className="image d-block bg-image-2">
                                image
                            </a>
                            {/* // TODO:remove image from it */}
                            <div className="text">
                                <span className="d-block mb-4">
                                    <span className="display-4 text-primary">
                                        $199
                                    </span>{" "}
                                    <span className="text-uppercase letter-spacing-2">
                                        / per night
                                    </span>{" "}
                                </span>
                                <h2 className="mb-4">Family Room</h2>
                                <p>
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they
                                    live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.
                                </p>
                                <p>
                                    <a
                                        href="a"
                                        className="btn btn-primary text-white">
                                        Book Now
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div
                            className="site-block-half d-block d-lg-flex bg-white"
                            data-aos="fade"
                            data-aos-delay="200">
                            <a
                                href="a"
                                className="image d-block bg-image-2 order-2">
                                image
                            </a>
                            {/* // TODO:remove image from it */}
                            <div className="text order-1">
                                <span className="d-block mb-4">
                                    <span className="display-4 text-primary">
                                        $299
                                    </span>{" "}
                                    <span className="text-uppercase letter-spacing-2">
                                        / per night
                                    </span>{" "}
                                </span>
                                <h2 className="mb-4">Presidential Room</h2>
                                <p>
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they
                                    live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.
                                </p>
                                <p>
                                    <a
                                        href="a"
                                        className="btn btn-primary text-white">
                                        Book Now
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
