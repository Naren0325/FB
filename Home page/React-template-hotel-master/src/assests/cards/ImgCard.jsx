import React, { Component } from "react";

export default class ImgCard extends Component {
    render() {
        return (
            <section
                className="site-hero overlay  container-fluid bg-success"
                data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row site-hero-inner justify-content-center align-items-center">
                        <div className="col-md-10 text-center" data-aos="fade-up">
                            <span className="custom-caption text-uppercase text-white d-block  mb-3">
                                {this.props.name}
                            </span>
                            <h1 className="heading">{this.props.para}</h1>
                        </div>
                    </div>
                </div>

                <a className="mouse smoothscroll" href="#next">
                    <div className="mouse-icon">
                        <span className="mouse-wheel" />
                    </div>
                </a>
            </section>
        );
    }
}
