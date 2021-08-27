import React from "react";
import './enquiryBtn.styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      margin:theme.spacing(1),
      display:'flex',
      justifyContent:'center',
    },
  }));

export const EnquiryBtn = () => {
    const classes = useStyles();
    return(
    <div className={classes.root}>
    <Link to="/enquiry">
    <Button variant="contained" color="primary">
        Send Enquiry
      </Button>
      </Link>
    </div>
    );
};