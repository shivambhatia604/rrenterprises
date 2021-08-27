import React from "react";
import bmw from "../../images/BMW.jpg";
import toyota from "../../images/toyota.jpg";
import audi from "../../images/audi.jpg";
import skoda from "../../images/skoda.jpg";
import ford from "../../images/ford.jpg";
import merc from "../../images/mercedes.png";

import "./brand.style.css";

class Brand extends React.Component {
  constructor() {
    super();

    this.state = {
      touchDiff: 0,
      brandImages: [
        {
          imageUrl: bmw,
          id: 1,
        },
        {
          imageUrl: audi,
          id: 2,
        },
        {
          imageUrl: merc,
          id: 3,
        },
        {
          imageUrl: toyota,
          id: 4,
        },
        {
          imageUrl: skoda,
          id: 5,
        },
        {
          imageUrl: ford,
          id: 6,
        },
      ],
    };
  }

  initialPosition = 0;
  outerWidth = 0;

  touchStart = (e) => {
    console.log(e);
    // console.log(e.touches[0].clientX);
    this.initialPosition = e.touches[0].clientX;
    this.outerWidth = e.view.outerWidth;
  };

  touchMove = (e) => {
    // console.log(e.changedTouches[0].clientX);
    // console.log(e);
    const currPos = e.changedTouches[0].clientX;
    // console.log(this.initialPosition);
    
    if (currPos - this.initialPosition < 0) {
      if (this.state.touchDiff < -this.outerWidth) {
        return;
      }
    }
    if (currPos - this.initialPosition > 0) {
      if (this.state.touchDiff > 0) {
        return;
      }
    }
    
    const diff = (currPos - this.initialPosition) ;
    // console.log("diff",diff);
    if(diff>this.state.touchDiff){
           this.initialPosition=currPos;
        
    }
    const newDiff = this.state.touchDiff + diff;

    
    this.setState({ touchDiff: newDiff });
    
  };

  render() {
    const { touchDiff } = this.state;
    const { brandImages } = this.state;
    return (
      <div className="brand-outer">
        <div className="shopTitle">SHOP BY BRAND</div>
        <div
          className="brandNames"
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          style={{ transform: `translateX(${touchDiff}px)` }}
        >
          <img className="brandImage" src={brandImages[0].imageUrl} alt="BMW" />
          <img className="brandImage" src={brandImages[1].imageUrl} alt="audi" />
          <img className="brandImage" src={brandImages[2].imageUrl} alt="merc" />
          <img className="brandImage" src={brandImages[3].imageUrl} alt="toyota" />
          <img className="brandImage" src={brandImages[4].imageUrl} alt="skoda" />
          <img className="brandImage" src={brandImages[5].imageUrl} alt="ford" />
        </div>
      </div>
    );
  }
}

export default Brand;