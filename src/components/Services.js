import React from 'react';

const Services = () => {
    return (
        <div>

            <div className="container-xxl bg-light py-5 my-5">
                <div className="container py-5">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-duration="0.1s" style={{ maxWidth: "500px" }}>
                        <h1 className="display-6">Services</h1>
                        <p className="text-primary fs-5 mb-5">Buy, Sell And Exchange Cryptocurrency</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.1s">
                            <div className="service-item bg-white p-5">
                                <img className="img-fluid mb-4" src="img/icon-7.png" alt="" />
                                <h5 className="mb-3">Currency Wallet</h5>
                                <p>
                                    It is software or hardware that enables users to store and use cryptocurrency. there is no tangible currency, no paper money to place within a physical wallet or purse
                                </p>
                                <a href="https://en.wikipedia.org/wiki/Cryptocurrency_wallet">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.3s">
                            <div className="service-item bg-white p-5">
                                <img className="img-fluid mb-4" src="img/icon-3.png" alt="" />
                                <h5 className="mb-3">Currency Transaction</h5>
                                <p>

                                    It is a currency in which the client performs the payment, and  is the final currency in case of a conflict with the base currency. From USD to ILS, the demand for different currencies differs across the globe


                                </p>
                                <a href="https://en.wikipedia.org/wiki/Currency_transaction_report">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.5s">
                            <div className="service-item bg-white p-5">
                                <img className="img-fluid mb-4" src="img/icon-9.png" alt="" />
                                <h5 className="mb-3">Bitcoin Investment</h5>

                                <p>
                                    Buying Bitcoin is often the first step that investors take into the world of cryptocurrency.
                                    And it can be an unfamiliar landscape for someone used to traditional financial products.
                                </p>

                                <a href="https://en.wikipedia.org/wiki/Bitcoin">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.1s">
                            <div className="service-item bg-white p-5">
                                <img className="img-fluid mb-4" src="img/icon-5.png" alt="" />
                                <h5 className="mb-3">Currency Exchange</h5>
                                <p>

                                    It ia a digital currency exchange , is a business that allows customers to trade cryptocurrencies or digital currencies for other assets, such as conventional fiat money or other digital currencies.
                                </p>

                                <a href="https://en.wikipedia.org/wiki/Cryptocurrency_exchange">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.3s">
                            <div className="service-item bg-white p-5">
                                <img className="img-fluid mb-4" src="img/icon-2.png" alt="" />
                                <h5 className="mb-3">Bitcoin Escrow</h5>
                                <p> It ia service designed to act as an intermediary between two parties involved in a transaction. 
                                    In a typical transaction, one party sends the Bitcoin to the escrow service.
                                    </p>
                                <a href="https://99bitcoins.com/bitcoin/escrow/">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>



                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.5s">
                            <div className="service-item bg-white p-5">
                                <img className="img-fluid mb-4" src="img/icon-8.png" alt="" />
                                <h5 className="mb-3">Token Sale</h5>
                                <p>Is a limited period of sale of a predefined number of crypto tokens to the public, typically in exchange for major crypto-currencies . ICO market distribution by industry, 2021.</p>
                                <a href="https://www.coindesk.com/tag/token-sale/">Read More <i className="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;