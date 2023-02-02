import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

  return (
  
  
  // <div classNameNameName='ErrorPage'>

  //   <section classNameName="page_404">
  //     <div classNameName="container">
  //       <div classNameName="row">
  //         <div classNameName="col-sm-12 ">
  //           <div classNameName="col-sm-10 col-sm-offset-1  text-center">
  //             <div classNameName="four_zero_four_bg">
  //               <h1 classNameName="text-center ">404</h1>


  //             </div>

  //             <div classNameName="contant_box_404">
  //               <h3 classNameName="h2">
  //                 Look like you're lost
  //               </h3>

  //               <p>the page you are looking for not avaible!</p>

  //               {/* <a href="" classNameName="link_404">Go to Home</a> */}
                
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>

  // </div>
  
  

  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
          <div className="row justify-content-center">
              <div className="col-lg-6">
                  <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                  <h1 className="display-1">404</h1>
                  <h1 className="mb-4">Page Not Found</h1>
                  <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                 
                   <Link to="/"  className="btn btn-primary py-3 px-4" >Go Back To Home</Link>



              </div>
          </div>
      </div>
  </div>

  
  );
};

export default ErrorPage;