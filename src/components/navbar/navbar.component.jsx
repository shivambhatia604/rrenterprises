import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import  '@fontsource/roboto'; 
import { Link } from 'react-router-dom';
// import { ArrowLeft, ArrowLeftTwoTone } from '@material-ui/icons';

/****************CSS***************** */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // backgroundColor:'#EAFAF1',
  },
  menuIcon_svg:{
    color: 'white',
  
  },
  toolbar:{
    backgroundColor:'#17202A',
    
  },
  title: {
    flexGrow: 1,
    fontFamily:'Roboto',
    fontWeight: 400,
    // justifySelf: ArrowLeft
  },
  logo:{
    textDecoration:'none',
    color:'white'
  }
}));

/****************CSS***************** */

export default function ButtonAppBar({onclick}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className = {classes.toolbar}>
          <IconButton onClick={onclick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon className={classes.menuIcon_svg}/>
          </IconButton>
          <Link to="/rrenterprises" class={classes.logo}>
          <Typography variant="h6" className={classes.title}>
          
            RR ENTERPRISES
            
          </Typography></Link>
          {/* <Button color="inherit" className={classes.login}>Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
