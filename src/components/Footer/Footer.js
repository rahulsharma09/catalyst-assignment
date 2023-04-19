import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import payment from '../../assets/images/payment.png'
import digi from '../../assets/images/digi.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-section">
          <div>
            <Link className="nav-title" to="/">
              <h2>
                <span className="head-title">right</span>fit.com
              </h2>
            </Link>
            <div className="links mt-4 text-white">
              <p>Home</p>
              <p>All Products</p>
              <p>Featured Products</p>
              <p>Contact</p>
              <p>About Us</p>
            </div>
          </div>
          <div className="footer-text text-white">
            <p>
              We are registered E-Commerce seller and we support a variety of
              Local and international <br /> payment modes
            </p>
            <img className="mt-4" src={payment} alt="" />
          </div>
          <div className="footer-text text-white">
            <p>Website Protected By</p>
            <img className="mt-4" src={digi} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
