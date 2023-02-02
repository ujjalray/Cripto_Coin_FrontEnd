import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';






const Data = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    let i = 1;

    useEffect(() => {

        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)
            .then(res => {
                const responce = res.data;
                console.log(responce);
                setCoins(responce);


            })


    }, [search]);


    return (
        //<div id="body"  >

        <div  className="container-fluid hero-header bg-light py-5 mb-5  animated pulse infinite " style={{ animationDuration: "50s" }}>
            <div className="container">

                <div >



                    <Table class="table table-dark"  >
                        <thead>
                            <tr>
                                <th scope="col">Rank</th>
                                <th scope="col">Coin</th>
                                <th scope="col">Name</th>
                                <th scope="col">Symbol</th>
                                <th scope="col"> Price</th>
                                <th scope="col">Market Cap</th>
                                <th scope="col">Volume(24h)</th>
                                <th scope="col">High(24h)</th>
                                <th scope="col">Low(24h)</th>


                            </tr>
                        </thead>

                        <tbody>
                            {coins.map((coin, index) => {
                                if (index >= 1) {
                                    i++
                                }
                                let color = "#00BFFF";

                                if (coin.price_change_percentage_24h < 0) {
                                    color = "red";
                                }

                                return (

                                    <tr scope="row" >

                                        <td>{i}</td>
                                        <td> <img src={coin.image} height="30" width="30"></img></td>
                                        <th> {coin.name}</th>
                                        <td> {coin.symbol.toUpperCase()}</td>
                                        <td> {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(coin.current_price)}</td>
                                        <td> {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(coin.market_cap)}</td>
                                        <td style={{ color: color }}>{coin.price_change_percentage_24h}(%)</td>
                                        <td style={{ color: color }}> {coin.high_24h}(%)</td>
                                        <td style={{ color: color }}> {coin.low_24h}(%)</td>

                                    </tr>

                                )
                            })
                            }
                        </tbody>
                    </Table>


                </div>
            </div>
        </div>


    )
}
export default Data;
