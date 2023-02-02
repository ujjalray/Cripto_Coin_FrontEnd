import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";  
import Lyout from './Lyout';
import Navber from './Navber';
import About from './components/About';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';
import Services from './components/Services';
import Token from './components/Token';
import Data from './components/Data';
import CoinData from './components/CoinData';
import End from './components/End';
import Roodmap from './Roodmap';

function App() {
  return (

    <div>

    

      <BrowserRouter>


      { (1) ? (
         <Navber />
      ) : (
        <ErrorPage />
      )}


      <Routes>

          <Route path="/" element={<Lyout />} />
          <Route index element={<Lyout />} />
          <Route path="home" element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="prices" element={<CoinData />} />
          <Route path="token" element={<Token/>} />
          <Route path="footer" element={<Footer />} />

          <Route path="*" element={<ErrorPage />} />

      </Routes>

      <End />

    </BrowserRouter>




    </div>
  );
}

export default App;
