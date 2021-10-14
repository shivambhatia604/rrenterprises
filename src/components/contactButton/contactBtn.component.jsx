import React from "react";
import './contactBtn.styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from "@material-ui/core/Link";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
// import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
      margin:theme.spacing(2),
      display:'flex',
      justifyContent:'center',
    },
  }));

export const ContactBtn = () => {
    const classes = useStyles();
    return(
    <div className={classes.root}>
    <Link href="tel:+918630082701" color="inherit">
    <Button variant="outlined" color="primary"  startIcon={<CallIcon />} size="large">
        Call now
      </Button>
      </Link>
    <Link href="https://api.whatsapp.com/send/?phone=918630082701" target="_blank" rel="noopener" color="inherit">
    <Button variant="outlined" color="#25D366" startIcon={<WhatsAppIcon />} size="large">
        Chat On WhatsApp
      </Button>
      </Link>
    </div>
    );
};