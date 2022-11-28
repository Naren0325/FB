import React, { Component } from "react";
import Availability from "../assests/cards/Availability";
import ImgCard from "../assests/cards/ImgCard";

export default class Home extends Component {
    render() {
        return (
            <div>
                <ImgCard
                    name="Welocome to nFault"
                    para="A place for your car"
                />
                <Availability />
                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div
                                className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5"
                                data-aos="fade-up">
                                <figure className="img-absolute">
                                    <img
                                        src="images/food-1.jpg"
                                        alt="pics of food"
                                        className="img-fluid"
                                    />
                                </figure>
                            </div>
                            <div
                                className="col-md-12 col-lg-4 order-lg-1"
                                data-aos="fade-up">
                                <h2 className="heading">Welcome!</h2>
                                <p className="mb-4">
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they
                                    live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.
                                </p>
                                <p>
                                    <a
                                        href="a"
                                        className="btn btn-primary text-white py-2 mr-3">
                                        Learn More
                                    </a>{" "}
                                    <span className="mr-3 font-family-serif">
                                        <em>or</em>
                                    </span>{" "}
                                    <a
                                        href="https://vimeo.com/channels/staffpicks/93951774"
                                        data-fancybox
                                        className="text-uppercase letter-spacing-1">
                                        See video
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
