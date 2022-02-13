import React from "react";
import "./navbar.scss";
import Logo from "../../images/logo.png";
import { VscSearch, VscHeart } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="img-fluid" src={Logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  WOMEN’S
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MEN’S
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SHOP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PAGES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center loginSection">
              <div className="loginReg">
                <a href="">Login</a> / <a href="">Register</a>
              </div>
              <div className="navIcons">
                <a href="#">
                  <VscSearch />
                </a>
                <a href="#" className="hbIcon">
                  <VscHeart />
                  <span>2</span>
                </a>
                <a href="#" className="hbIcon">
                  <IoBagOutline />
                  <span>3</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
