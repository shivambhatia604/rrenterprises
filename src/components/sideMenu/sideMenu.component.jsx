import React from "react";
import "./sideMenu.styles.css";

const Sidemenu = ({onclick}) => (
  <div className="sidemenu-outer">
    <div className="span-outer"><span className="close" onClick={onclick}>&#10006;</span></div>
    <div className="home">HomePage</div>
    <div className="enquiry">Post an Enquiry</div>
    <div className="products">View Products</div>
    <div className="aboutus">About Us</div>
  </div>
);

export default Sidemenu;
