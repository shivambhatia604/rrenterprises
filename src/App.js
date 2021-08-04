import React from "react";
import Navbar from "./components/navbar/navbar.component";
import Crousel from "./components/crousel/crousel.component";
import "./App.css";
import carauto from "./images/car_auto.jpg";
import carparts from "./images/Car-Parts.jpg";
import drive from "./images/DrivenbyPassion.jpg";
import CarouselArrow from "./components/carouselArrow/carouselArrow.componenet";
import Brand from "./components/shop by brand/brand.component.jsx";
import Footer from "./components/footer/footer.component";
import Sidemenu from "./components/sideMenu/sideMenu.component.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
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

  onclickhamburger = () => {
    this.setState((state) => {
      return {
        hidden: !state.hidden,
      };
    });
  };

  render() {
    const { autoImages, imgState, hidden } = this.state;

    return (
      <div className="App">
        <nav>
        {
          hidden?"":<Sidemenu onclick={this.onclickhamburger}/>
        }
          
          <Navbar onclick={this.onclickhamburger}/>
        </nav>

        <section className="carousel-flex">
          {/* {autoImages.map((autoimage) => <Crousel  image= {autoimage}></Crousel>)} */}
          <Crousel
            key={autoImages[imgState].id}
            image={autoImages[imgState]}
          ></Crousel>
          <CarouselArrow changeImage={this.changeImageLeft} left />
          <CarouselArrow changeImage={this.changeImageRight} right />
        </section>

        <Brand />
          <div>Shivam shiv</div>
        <Footer />
        <p>Hello</p>
      </div>
    );
  }
}

export default App;
