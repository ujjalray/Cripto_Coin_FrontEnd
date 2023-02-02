import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>

            {/* <!-- About Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid" src="img/about.png" alt="" />
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">

                                <h1 className="display-6">About Us</h1>
                                <p className="text-primary fs-5 mb-4">The Most Trusted Cryptocurrency Platform</p>
                                <p>Our platform is dedicated to providing a secure and user-friendly experience for buying, selling, and managing cryptocurrencies. As the world's leading cryptocurrency, Bitcoin paved the way for a new era of digital assets and financial innovation. Our mission is to make cryptocurrencies accessible to everyone, whether you're a seasoned trader or just getting started.</p>
                                <p className="mb-4">Our platform uses advanced cryptography to ensure the safety and privacy of your assets, and our user-friendly interface makes buying, selling, and managing your crypto portfolio a breeze. With 24/7 support, fast and reliable transactions, and competitive fees, we aim to be your trusted partner in the world of cryptocurrency.</p>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                                    <span>Safe and secure transactions</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                                    <span>User-friendly interface</span>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                                    <span>24/7 support and fast transactions</span>
                                </div>
                                <Link to="/home" >   <a className="btn btn-primary py-3 px-4" href="">Read More</a>

                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}

        </div>
    );
};

export default About;