import React, { Component } from "react";

export default class Availability extends Component {
    render() {
        return (
            <section className="section bg-light pb-0">
                <div className="container">
                    <div className="row check-availabilty" id="next">
                        <div
                            className="block-32"
                            data-aos="fade-up"
                            data-aos-offset="-200">
                            <form action="#">
                                <div className="row">
                                    <div className="col-md-4 mb-3 mb-lg-0 col-lg-4 m-auto">
                                        <label
                                            for="checkin_date"
                                            className="font-weight-bold text-black">
                                            Check In
                                        </label>
                                        <div className="field-icon-wrap">
                                            <div className="icon">
                                                <span className="icon-calendar" />
                                            </div>
                                            <input
                                                type="text"
                                                id="checkin_date"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3 mb-md-0 col-lg-4">
                                        <div className="row">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <label
                                                    for="adults"
                                                    className="font-weight-bold text-black">
                                                    Adults
                                                </label>
                                                <div className="field-icon-wrap">
                                                    <div className="icon">
                                                        <span className="ion-ios-arrow-down" />
                                                    </div>
                                                    <select
                                                        name=""
                                                        id="adults"
                                                        className="form-control">
                                                        <option value="">
                                                            1
                                                        </option>
                                                        <option value="">
                                                            2
                                                        </option>
                                                        <option value="">
                                                            3
                                                        </option>
                                                        <option value="">
                                                            4+
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-4 col-lg-4 align-self-end">
                                        <button className="btn btn-primary btn-block text-white">
                                            Check Availabilty
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
