import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Facts = () => {

    const [coins, setCoins] = useState([]);


    useEffect(() => {

        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)
            .then(res => {
                const responce = res.data;
                console.log(responce);
                setCoins(responce);

            })
    },);





    return (
        <div>

            {/* <!-- Facts Start --> */}

            <div className="container-xxl bg-light py-5 my-5">
                <div className="container py-5">
                    <div className="row g-5">

                        <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s">
                            <img className="img-fluid mb-4" src={coins.length > 0 ?coins[0].image:0}  height="100" width="100" alt="" />
                            <h1 className="display-4" data-toggle="counter-up">{coins.length > 0 ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(coins[0].current_price) : 0}</h1>
                            <p className="fs-5 text-primary mb-0">Bitcoin Price In USD</p>
                        </div>

                        <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.3s">
                            <img className="img-fluid mb-4" src={coins.length > 0 ?coins[1].image:0}  height="100" width="100" alt="" />
                            <h1 className="display-4" data-toggle="counter-up">{coins.length > 0  ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(coins[1].current_price) : 1}</h1>
                            <p className="fs-5 text-primary mb-0">Ethereum Price In USD</p>
                        </div>

                        <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.5s">
                            <img className="img-fluid mb-4" src={coins.length > 0 ?coins[2].image:0}  height="100" width="100" alt="" />
                            <h1 className="display-4" data-toggle="counter-up">{coins.length > 0 ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(coins[2].current_price) : 2}</h1>
                            <p className="fs-5 text-primary mb-0">Tether Price In USD</p>

                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- Facts End --> */}


        </div>
    );
};

export default Facts;