import React from "react";
import { AiFillStar } from "react-icons/ai";
const TrendItem = ({ title, price, itemImg }) => {
  return (
    <>
      <div className="trendItem">
        <div className="itemImg">
          <img src={itemImg} alt="" />
        </div>
        <div className="itemContent">
          <p>{title}</p>
          <div className="starts">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <span>{price}</span>
        </div>
      </div>
    </>
  );
};

export default TrendItem;
