import React from 'react';

const FAQ = () => {
    return (
        <div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-duration="0.1s" style={{ maxWidth: "500px" }}>
                        <h1 className="display-6">FAQs</h1>
                        <p className="text-primary fs-5 mb-5">Frequently Asked Questions</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="accordion" id="accordionExample">

                                

                            <div className="accordion-item wow fadeInUp" data-wow-duration="0.1s">
                                    <h2 className="accordion-header" id="headingone">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="ture" aria-controls="collapseone">
                                          What is the most popular cryptocurrency?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        As of 2021, the most popular cryptocurrency is Bitcoin.
                                        </div>
                                    </div>
                                </div>








                                <div className="accordion-item wow fadeInUp" data-wow-duration="0.2s">
                                    <h2 className="accordion-header" id="headingtwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="ture" aria-controls="collapseThree">
                                            What is the difference between a cryptocurrency and a traditional currency?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A traditional currency is issued and regulated by a central authority, such as a government, while cryptocurrency operates independently and is not backed by a central authority. Cryptocurrency uses decentralized systems to verify transactions,
                                            while traditional currencies rely on central banks and other financial institutions to process transactions.
                                        </div>
                                    </div>
                                </div>





                                <div className="accordion-item wow fadeInUp" data-wow-duration="0.3s">
                                    <h2 className="accordion-header" id="headingthree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                            What is a blockchain?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        A blockchain is a decentralized ledger that records transactions securely and transparently across a network of computers. Each block in the chain contains a set of transactions and a cryptographic link to the previous block, making it difficult to modify or tamper with the data.
                                        </div>
                                    </div>
                                </div>



                                <div className="accordion-item wow fadeInUp" data-wow-duration="0.4s">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            How many types of cryptocurrencies are there?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            here are over 5,000 different types of cryptocurrencies, but some of the most well-known include Bitcoin, Ethereum, Ripple, and Litecoin.
                                        </div>
                                    </div>
                                </div>



                                <div className="accordion-item wow fadeInUp" data-wow-duration="0.5s">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            How can I buy and sell cryptocurrency?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Cryptocurrency can be purchased through cryptocurrency exchanges or through brokers. You will need to set up an account and complete identity verification before you can buy or sell cryptocurrency. You can fund your account with fiat currency or another cryptocurrency, and then use that balance to purchase the desired cryptocurrency.
                                        </div>
                                    </div>
                                </div>



                                <div className="accordion-item wow fadeInUp" data-wow-duration="0.6s">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            How does cryptocurrency work?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                            Cryptocurrency works through a decentralized ledger called a blockchain that records transactions securely and transparently.
                                            Transactions are verified through a network of nodes and added to the blockchain through a process called mining.



                                        </div>
                                    </div>
                                </div>





                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default FAQ;