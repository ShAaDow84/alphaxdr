import React from 'react';
import { Link } from 'react-router-dom';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import gpt3Logo from '../../assets/logo1.png';
import './footer.css';

// import { BrowserRouter } from 'react-router-dom';
// import { Routes,Route,Outlet } from 'react-router-dom';
// <Routes>
//       <Route path='/' element={<Navigation/>} >
//         <Route index element={<Home/>}/>
//         <Route path='/shop' element={<Shop/>}/>
//       </Route>
//     </Routes>
function Footer() {
  return (

    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
      </div>
      {/* <div className="gpt3__footer-btn">
              <p>Request Early Access</p>
            </div> */}
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>Alpha XDR, <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          {/* <p href="https://www.linkedin.com/in/saurav-paul-0239221b9/">LinkedIn</p> */}
          {/* <p><a href="https://www.linkedin.com/company/teamkarimganj/mycompany/">LinkedIn</a></p> */}
          <p><a href="https://www.linkedin.com/company/teamkarimganj/mycompany/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href="https://www.facebook.com/teamkarimganj" target="_blank" rel="noopener noreferrer">Facebook</a></p>
          {/* <p><a href="https://twitter.com/TechKarimganj" target="_blank" rel="noopener noreferrer">Twitter</a></p> */}
          {/* <p><a href="https://www.instagram.com/tech_karimganj/" target="_blank" rel="noopener noreferrer">Instagram</a></p> */}
          {/* <p>Counters</p>
            <p>Contact</p> */}
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>
            <p>
              <Link to="/contact">Contact Us</Link>
            </p>
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          {/* <BrowserRouter>
            <h4 href>Get in touch</h4>
          </BrowserRouter> */}
          <p>Tech Karimganj</p>
          <p><a href="tel:+913843356033">+91 3843356033</a></p>
          <p><a href="https://goo.gl/maps/CfWDtVR1EjAf37DX9" target="_blank" rel="noopener noreferrer">SC Lane, Settlement Road, opposite of DRDA Office, Karimganj, Assam 788710</a></p>
          {/* <p>085-132567</p>
            <p>info@payme.net</p> */}
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>Tech Karimganj All rights reserved.</p>
      </div>
      {/* <Button text="click" /> */}
    </div>
  );
}

export default Footer;
