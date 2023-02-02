import React from 'react';
import { Link, useNavigate } from "react-router-dom";
const Navber = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">

                <Link to="/" className="nav-item nav-link"><a href="index.html" className="navbar-brand d-flex align-items-center">
                    <h2 className="m-0 text-primary"><img className="img-fluid me-2" src="img/icon-1.png" alt="" style={{ width: "45px" }} />CryptoCoin</h2>
                </a></Link>

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarCollapse">

                    <div className="navbar-nav ms-auto py-4 py-lg-0">


                        <Link to="/home" className="nav-item nav-link">Home</Link>
                        <Link to="/services" className="nav-item nav-link">Services</Link>
                        <Link to="/prices" className="nav-item nav-link">Prices</Link>
                     
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/footer" className="nav-item nav-link">Contact</Link>


                    </div>



                    <div className="h-100 d-lg-inline-flex align-items-center d-none">
                        <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square rounded-circle bg-light text-primary me-0" href="https://www.linkedin.com/in/ujjal-ray-41776b254/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </nav>







        </div>
    );
};

export default Navber;