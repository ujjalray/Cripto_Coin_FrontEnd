import React from 'react';
import Navber from './Navber';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Token from './components/Token';
import Footer from './components/Footer';
import Fetures from './components/Fetures';
import FAQ from './components/FAQ';
import Facts from './components/Facts';
import CoinData from './components/CoinData';
import Logo from './components/Logo';


const Lyout = () => {

    return (

        <div>

            
            <Header />
            <About />
            <Facts />
            <Fetures />
            <CoinData />
            <Services />
            <FAQ />
            <Footer />
            <Logo />
         

        </div>
    );
};

export default Lyout;