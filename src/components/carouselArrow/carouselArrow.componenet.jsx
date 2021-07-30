import React from "react";

// import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
// import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import './CarouselArrow.styles.css';
import {ReactComponent as LeftArrow} from '../../images/arrow-left.svg'; 
import {ReactComponent as RightArrow} from '../../images/arrow-right.svg';
const CarouselArrow = ({left,right,changeImage}) => (

    

       <div className={`arrow ${left?'left-pos':'right-pos'}`} onClick={changeImage}>
           {left?<LeftArrow className='MuiSvgIcon-left-right'/>:<RightArrow className='MuiSvgIcon-left-right' /> }
           
       </div>


   



)

export default CarouselArrow;