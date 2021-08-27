import React from "react";
import "./homepage.styles.css";
import carauto from "../../images/car_auto.jpg";
import carparts from "../../images/Car-Parts.jpg";
import drive from "../../images/DrivenbyPassion.jpg";
import Crousel from "../../components/crousel/crousel.component";
import CarouselArrow from "../../components/carouselArrow/carouselArrow.componenet";
import Brand from "../../components/shop by brand/brand.component.jsx";
import Footer from "../../components/footer/footer.component";
import { EnquiryBtn } from "../../components/sendEnquiryButton/enquiry.component";


class Homepage extends React.Component{
    constructor() {
        super();
        this.state = {
          imgState: 0,
          autoImages: [
            {
              id: 1,
              imageUrl: carauto,
            },
            {
              id: 2,
              imageUrl: carparts,
            },
            {
              id: 3,
              imageUrl: drive,
            },
          ],
        };
      }

      changeImageRight = () => {
        this.setState((state) => {
          if (state.imgState + 1 === state.autoImages.length) {
            return {
              imgState: 0,
            };
          }
          return {
            imgState: state.imgState + 1,
          };
        });
      };
    
      changeImageLeft = () => {
        this.setState((state) => {
          if (state.imgState - 1 === -1) {
            return {
              imgState: state.autoImages.length - 1,
            };
          }
          return {
            imgState: state.imgState - 1,
          };
        });
      };

render() {
    const { autoImages, imgState } = this.state;

    return (
            <div>
        <section className="carousel-flex">
          
          <Crousel
            key={autoImages[imgState].id}
            image={autoImages[imgState]}
          ></Crousel>
          <CarouselArrow changeImage={this.changeImageLeft} left />
          <CarouselArrow changeImage={this.changeImageRight} right />
        </section>

        <EnquiryBtn />

        <Brand />
          
        <Footer />
        </div>
    
    );
  }
}

export default Homepage;