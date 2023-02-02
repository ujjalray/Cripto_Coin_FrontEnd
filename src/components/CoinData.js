import React from 'react';
import Data from './Data';

const CoinData = () => {
    return (
        <div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-duration="0.1s" style={{ maxWidth: "500px" }}>
                        <h3 className="display-6">Today's Cryptocurrency Prices</h3>
                        <p className="text-primary fs-5 mb-5">We Translate Your Dream Into Reality</p>


                        
                    </div>
                   
                    <Data /> 

                      


                    
                </div>
            </div>

        </div>
    );
};

export default CoinData;