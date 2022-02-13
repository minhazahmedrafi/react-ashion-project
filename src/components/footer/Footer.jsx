import React from "react";
import "./Footer.scss";
import fLogo from "../../images/logo.png";
import payImages from "../../images/peyments/exports";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="footerAbout">
              <div className="footerLogo">
                <img src={fLogo} alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt cilisis.
              </p>
              <div className="footerPayment">
                <a href="#">
                  <img className="img-fluid" src={payImages.pey1} alt="" />
                </a>
                <a href="#">
                  <img className="img-fluid" src={payImages.pey2} alt="" />
                </a>
                <a href="#">
                  <img className="img-fluid" src={payImages.pey3} alt="" />
                </a>
                <a href="#">
                  <img className="img-fluid" src={payImages.pey4} alt="" />
                </a>
                <a href="#">
                  <img className="img-fluid" src={payImages.pey5} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-5">
            <div className="footerWidget">
              <h6>Quick links</h6>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-5">
            <div className="footerWidget">
              <h6>ACCOUNT</h6>
              <ul>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Orders Tracking</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-8">
            <div className="footerNewslatter">
              <h6>NEWSLETTER</h6>
              <form action="#">
                <input type="text" placeholder="Email" />
                <button type="button" className="siteBtn">
                  Subscribe
                </button>
              </form>
              <div className="footerSocial">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaPinterest />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footerCopyrightText">
              <p>
                Copyright © 2022 All rights reserved | This template is made
                with by Colorlib
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
