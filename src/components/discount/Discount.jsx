import React from "react";
import "./discount.scss";
import dcImg from "../../images/xdiscount.jpg";
import { Countdown } from "./Countdown";

const Discount = () => {
  return (
    <div className="discount" id="discount">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="discountLeft">
              <img className="img-fluid" src={dcImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="discountRight">
              <div className="discountText">
                <span>Discount</span>
                <h2>Summer 2022</h2>
                <h5>
                  <span>Sale</span> 50%
                </h5>
              </div>
              <Countdown />
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
