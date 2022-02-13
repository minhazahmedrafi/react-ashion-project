import React from "react";
import "./instagram.scss";
import instaImages from "../../images/instagram/export";
import { BsInstagram } from "react-icons/bs";

const Instagram = () => {
  return (
    <div className="instagram" id="instagram">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="singleInstagram">
            <div className="sInstaImg">
              <img className="img-fluid" src={instaImages.insta1} alt="" />
            </div>
            <div className="sInstaLink">
              <BsInstagram />
              <br />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="singleInstagram">
            <div className="sInstaImg">
              <img className="img-fluid" src={instaImages.insta2} alt="" />
            </div>
            <div className="sInstaLink">
              <BsInstagram />
              <br />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="singleInstagram">
            <div className="sInstaImg">
              <img className="img-fluid" src={instaImages.insta3} alt="" />
            </div>
            <div className="sInstaLink">
              <BsInstagram />
              <br />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="singleInstagram">
            <div className="sInstaImg">
              <img className="img-fluid" src={instaImages.insta4} alt="" />
            </div>
            <div className="sInstaLink">
              <BsInstagram />
              <br />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="singleInstagram">
            <div className="sInstaImg">
              <img className="img-fluid" src={instaImages.insta5} alt="" />
            </div>
            <div className="sInstaLink">
              <BsInstagram />
              <br />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
          <div className="singleInstagram">
            <div className="sInstaImg">
              <img className="img-fluid" src={instaImages.insta6} alt="" />
            </div>
            <div className="sInstaLink">
              <BsInstagram />
              <br />
              <a href="#">@ ashion_shop</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
