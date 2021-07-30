import React from "react";
import "./crousel.style.css";

const Crousel = ({ image: { imageUrl } }) => (
  <div className="outer">
    <img className='coverImage' src={imageUrl} alt="iiii" />

  </div>
);



export default Crousel;
