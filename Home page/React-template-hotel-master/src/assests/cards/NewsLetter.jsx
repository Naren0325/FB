import React, { Component } from "react";
import '../css/Home.css';

export default class NewsLetter extends Component {
    render() {
        return (
            <div className="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="newsletter_content">
                                <div className="section_title_container">
                                    <div className="section_subtitle">
                                        luxury resort
                                    </div>
                                    <div className="section_title">
                                        <h2>Our Newsletter</h2>
                                    </div>
                                </div>
                                <div className="newsletter_text">
                                    <p>
                                        Praesent fermentum ligula in dui
                                        imperdiet, vel tempus nulla ultricies.
                                        Phasellus at commodo ligula. Nullam
                                        molestie volutp at sapien.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="newsletter_form_container">
                                <form
                                    action="#"
                                    id="newsletter_form"
                                    className="newsletter_form">
                                    <input
                                        type="email"
                                        className="newsletter_input"
                                        placeholder="Your e-mail"
                                        required="required"
                                    />
                                    <button className="newsletter_button">
                                        <span>Subscribe</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newsletter_border_container">
                    <div className="container">
                        <div className="row border_row">
                            <div className="col">
                                <div className="newsetter_border" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
