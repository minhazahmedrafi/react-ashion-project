import React from "react";
import "./heading.scss";

const Heading = ({ hText }) => {
  return (
    <div className="heading">
      <h4>{hText}</h4>
    </div>
  );
};

export default Heading;
