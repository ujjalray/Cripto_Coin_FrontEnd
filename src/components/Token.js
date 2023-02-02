import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Token = () => {

    const [coins, setCoins] = useState([]);
   
    let i = 1;

    useEffect(() => {

        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)
            .then(res => {
                const responce = res.data;
                console.log(responce);
                setCoins(responce);


            })


    }, );



    return (
        <div>

            <div className="container-xxl bg-light py-5 my-5">
                <div className="container py-5">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-duration="0.1s" style={{ maxWidth: "500px" }}>
                        <h1 className="display-6">Token Sale</h1>
                        <p className="text-primary fs-5 mb-5">Token Sale Countdown</p>
                    </div>
                    <div className="row g-3">
                        <div className="col-6 col-md-3 wow fadeIn" data-wow-duration="0.1s">
                            <div className="bg-white text-center p-3">
                                <h1 className="mb-0">0</h1>
                                <span className="text-primary fs-5">Days</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 wow fadeIn" data-wow-duration="0.3s">
                            <div className="bg-white text-center p-3">
                                <h1 className="mb-0">0</h1>
                                <span className="text-primary fs-5">Hours</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 wow fadeIn" data-wow-duration="0.5s">
                            <div className="bg-white text-center p-3">
                                <h1 className="mb-0">0</h1>
                                <span className="text-primary fs-5">Minutes</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 wow fadeIn" data-wow-duration="0.7s">
                            <div className="bg-white text-center p-3">
                                <h1 className="mb-0">0</h1>
                                <span className="text-primary fs-5">Seconds</span>
                            </div>
                        </div>
                        <div className="col-12 text-center py-4">
                            <a className="btn btn-primary py-3 px-4" href="">Buy Token</a>
                        </div>
                        <div className="col-12 text-center">
                            <img className="img-fluid m-1" src="img/payment-1.png" alt="" style={{ maxWidth: "50px" }} />
                            <img className="img-fluid m-1" src="img/payment-2.png" alt="" style={{ maxWidth: "50px" }} />
                            <img className="img-fluid m-1" src="img/payment-3.png" alt="" style={{ maxWidth: "50px" }} />
                            <img className="img-fluid m-1" src="img/payment-4.png" alt="" style={{ maxWidth: "50px" }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Token;