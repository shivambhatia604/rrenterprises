import React from "react";
import "./footer.styles.css"
import Container from "@material-ui/core/Container";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';




const Footer = () => (
 
/* <footer className= "footer-outer">
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


</footer> */
<footer>
    <Box
      px={{ xs: 3, sm: 9 }}
      py={{ xs: 5, sm: 9 }}
      bgcolor="text.primary"
      color="white"
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box>
              <Box
                borderBottom={2}
                paddingBottom={1}
                marginBottom={2}
                fontWeight={700}
              >
                RR Enterprises
              </Box>
              <Typography>
              R & R Enterprises is a trendsetting online store, offering our first-rate products and 
              exceptional customer service to shoppers from the comfort of their own homes. 
              We’re a business made up of innovators and forward-thinkers, with the drive and wherewithal 
              to constantly update and improve the online shopping experience.

              </Typography>
              <Box>
                <Link href="/" color="inherit">
                  
                  <FacebookIcon />
                </Link>
                <Link href="/" color="inherit">
                  
                  <InstagramIcon />
                </Link>
                <Link href="/" color="inherit">
                  <LinkedInIcon />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              borderBottom={2}
              paddingBottom={1}
              marginBottom={2}
              fontWeight={700}
            >
              Navigation
            </Box>

            <Box>
              <Link href="/" color="inherit">
                Home
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Post an Enquiry
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                View Products
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              borderBottom={2}
              paddingBottom={1}
              marginBottom={2}
              fontWeight={700}
            >
              Contact us
            </Box>

            <Box>
              <Link href="tel:+918630082701" color="inherit">
                <PhoneIcon />
                +918630082701
              </Link>
            </Box>
            <Box>
              <Link href="mailto:shivambhatia604@gmail.com" color="inherit">
                <MailOutlineIcon /> shivambhatia604@gmail.com
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                <LocationOnIcon />
                A-1667, Sector-42, Faridabad
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </footer>


)

export default Footer;