import React from "react";
import logo from "../Images/logo.png";
import Pay from '../Images/pay2.png'
import "../CSS/Footer.css"

const Footer = () => {
  return (
    <>
      <footer className="footer pt-5">
        <div className="footer-container">
          <div className="row">
            <div className="col-md-3 ">
              <img src={logo} className="footerlogo" alt="" />
            </div>
            <div className="col-md-3">
              <h3 className="headingf ">Services</h3>
              <hr />
              <ul className="List list-unstyled">
                <li>24/7 Service</li>
                <li>Technical Support </li>
                <li>Phone Assistance </li>
                <li>Cash On Delivery</li>

              </ul>
            </div>
            <div className="col-md-3">
              <h3 className="headingf">Helpful Links</h3>
              <hr />
              <ul className="List list-unstyled">
                <li>Blog</li>
                <li>Pricing</li>
                <li>Sales </li>
                <li>Services </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3 className="headingf">Privacy</h3>
              <hr />

              <ul className="List list-unstyled">
                <li>Career </li>
                <li>Privacy& policy </li>
                <li>Terms</li>
                <li>Conditions </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        {/* SOCIAL MEDIA LINKS */}

        <div className="row">
          <div className="col-md-4 ">
            <h1 className="call">Call us today</h1>
            <h1 className="number">+91-98765432</h1>
          </div>
          <div className="links col-md-4 mt-2">
            <h2>Follow Us</h2>
            <div>
              <a href="https://www.facebook.com/login/" target="_blank">
                <i className="fa-brands fa-2x me-2 fa-facebook"></i>
              </a>
              <a href="https://in.pinterest.com/" target="_blank">
                <i className="fa-brands fa-2x me-2 fa-pinterest"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-2x me-2 fa-instagram"></i>
              </a>
              <a href="https://twitter.com/i/flow/login" target="_blank">
                <i className="fa-brands fa-2x me-2 fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <img className="payment mx-auto " src={Pay} alt="" />
          </div>
          <div className="copyright py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-md-start">
                  <small>&copy; 2022-2023 GONOISE. All RIGHT RECEIVED</small>
                </div>
                <div className="col-md-6 text-md-end">
                  <small>
                    USER LICENCE AGREEMENT | PRIVACY POLICY | TERMS & CONDITIONS
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
