import React from 'react';

const Header = () => {
    return (
        <div>

            <div className="container-fluid hero-header bg-light py-5 mb-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h3 className="display-4 mb-3 animated slideInDown">Make Better Life With Trusted Crypto Currency</h3>
                            <p className="animated slideInDown">

                            Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.


                            </p>
                            <a href="https://en.wikipedia.org/wiki/Cryptocurrency" className="btn btn-primary py-3 px-4 animated slideInDown">Explore More</a>
                        </div>
                        <div className="col-lg-6 animated fadeIn">
                            <img className="img-fluid animated pulse infinite" style={{ animationDuration: "3s" }} src="img/hero-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;