import React from "react";

const SingleService = ({ sIcon, sText, sText2 }) => {
  return (
    <>
      <div className="singleService">
        <div className="serviceIcon">{sIcon}</div>
        <div className="serviceContent">
          <h6>{sText}</h6>
          <p>{sText2}</p>
        </div>
      </div>
    </>
  );
};

export default SingleService;
