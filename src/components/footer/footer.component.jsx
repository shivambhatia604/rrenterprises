import React from "react";
import "./footer.styles.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';




const Footer = () => (
 
<footer className= "footer-outer">
    <address className="address-div">
    <LocationOnIcon className="location-icon"/>
        <div className= "company-address-div"> 60 Kohat Enclave, Pitampura, Delhi-110034</div>


        <a href="tel:+917206099355" className="contact-number">+91 7206099355</a>
        <a href="mailto:shivambhatia604@gmail.com" className="contact-email">Support@RREnterprises.com</a>
        


    </address>
    <div className="inner-div">

    <div className= "about-company">About Us</div>
    <div className="company-info-div">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem iure ex sunt vitae totam iste consequatur, eligendi mollitia expedita maiores cumque dolores, magnam?
    </div>
    </div>


</footer>


)

export default Footer;