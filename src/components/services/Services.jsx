import React from "react";
import "./services.scss";
import { FaCarAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import SingleService from "./SingleService";
import { HiOutlineSupport } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <SingleService
              sIcon={<FaCarAlt />}
              sText={"Free Shipping"}
              sText2={"For all oder over $99"}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <SingleService
              sIcon={<FaRegMoneyBillAlt />}
              sText={"Money Back Guarantee"}
              sText2={"If good have Problems"}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <SingleService
              sIcon={<HiOutlineSupport />}
              sText={"Online Support 24/7"}
              sText2={"Dedicated support"}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <SingleService
              sIcon={<BiSupport />}
              sText={"Payment Secure"}
              sText2={"100% secure payment"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
