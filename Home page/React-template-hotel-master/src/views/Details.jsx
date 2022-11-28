import React, { Component } from "react";
import FAQ from "../assests/cards/FAQ";
import "../assests/css/body.css";
import "../assests/css/About.css";

export default class Details extends Component {
    render() {
        return (
            <div>
                <section
                    className="site-hero site-hero-about inner-page overlay"
                    data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row site-hero-inner justify-content-center align-items-center">
                            <div className="col-md-10 text-center" data-aos="fade">
                                <h1 className="heading mb-3">Details</h1>
                                <ul className="custom-breadcrumbs mb-4">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>. </li>
                                    <li>Details</li>
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
                <section className="our-hotels-area section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading text-center">
                                    <div className="line-" />
                                    <h2>Our Hotel</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            {/* <!-- Single Hotel Info --> */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-hotel-info mb-100">
                                    <div className="hotel-info-text">
                                        <h6>
                                            <span className="fa fa-check" /> Donec
                                            malesuada lorem maximus mauris
                                        </h6>
                                        <h6>
                                            <span className="fa fa-check" /> Integer
                                            tempus ligula sem, id feugiat
                                        </h6>
                                        <h6>
                                            <span className="fa fa-check" />{" "}
                                            Malesuada lorem maximus mauris
                                            sceleri{" "}
                                        </h6>
                                    </div>
                                    <div className="hotel-img">
                                        <img src="img/bg-img/3.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Hotel Info --> */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-hotel-info mb-100">
                                    <div className="hotel-info-text">
                                        <h6>
                                            <span className="fa fa-check" /> Tempus
                                            ligula sem, id feugiat quam
                                        </h6>
                                        <h6>
                                            <span className="fa fa-check" /> Integer
                                            tempus ligula sem, id feugiat
                                        </h6>
                                        <h6>
                                            <span className="fa fa-check" /> Esuada
                                            lorem maximus mauris sceleri
                                        </h6>
                                    </div>
                                    <div className="hotel-img">
                                        <img src="img/bg-img/10.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Hotel Info --> */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-hotel-info mb-100">
                                    <div className="hotel-info-text">
                                        <h6>
                                            <span className="fa fa-check" /> Tempus
                                            ligula sem, id feugiat quam
                                        </h6>
                                        <h6>
                                            <span className="fa fa-check" /> Integer
                                            tempus ligula sem, id feugiat
                                        </h6>
                                        <h6>
                                            <span className="fa fa-check" /> Esuada
                                            lorem maximus mauris sceleri
                                        </h6>
                                    </div>
                                    <div className="hotel-img">
                                        <img src="img/bg-img/11.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ##### Service Intro Area Start ##### --> */}
                <section className="services-intro">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* <!-- Service Intro Text --> */}
                            <div className="col-12 col-lg-6">
                                <div className="service-intro-text mb-100">
                                    <div className="section-heading">
                                        <div className="line-" />
                                        <h2>Amazing Services</h2>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Donec malesuada lorem
                                        maximus mauris sceleri sque, at rutrum
                                        nulla dictum. Ut ac ligula sapien.
                                        Suspendisse cursus faucibus finibus.
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Donec malesuada lorem
                                        maximus mauris sceleri sque, at rutrum
                                        nulla dictum. Ut ac ligula sapien.
                                        Suspendisse cursus faucibus finibus.
                                    </p>
                                    <a href="a" className="btn palatin-btn mt-50">
                                        Read More
                                    </a>
                                </div>
                            </div>

                            {/* <!-- Services Features --> */}
                            <div className="col-12 col-lg-6">
                                <div className="row mb-100">
                                    {/* <!-- Single Cool Facts --> */}
                                    <div className="col-12 col-sm-4">
                                        <div className="single-cool-fact">
                                            <div className="scf-text">
                                                <i className="icon-cocktail-1" />
                                                <p>Pool Beachbar</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Cool Facts --> */}
                                    <div className="col-12 col-sm-4">
                                        <div className="single-cool-fact">
                                            <div className="scf-text">
                                                <i className="icon-swimming-pool" />
                                                <p>Infinity Pool</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Single Cool Facts --> */}
                                    <div className="col-12 col-sm-4">
                                        <div className="single-cool-fact">
                                            <div className="scf-text">
                                                <i className="icon-beach" />
                                                <p>Sunbeds</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ##### Service Intro Area End ##### --> */}
                <FAQ />
            </div>
        );
    }
}
