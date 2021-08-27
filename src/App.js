import React from "react";
import Navbar from "./components/navbar/navbar.component";
import { Route,Switch } from "react-router-dom";
import "./App.css";
import Sidemenu from "./components/sideMenu/sideMenu.component.jsx";
import Homepage from "./pages/Homepage/homepage.component.jsx";
import { EnquiryPage } from "./pages/EnquiryPage/EnquiryPage.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
    };
  }

  

  onclickhamburger = () => {
    this.setState((state) => {
      return {
        hidden: !state.hidden,
      };
    });
  };

  render() {
    const { hidden } = this.state;

    return (
      <div className="App">
        <nav>
        {
          hidden?"":<Sidemenu onclick={this.onclickhamburger}/>
        }
          
          <Navbar onclick={this.onclickhamburger}/>
        </nav>


        <Switch>
        <Route exact path="/rrenterprises" component={Homepage}/>
        <Route exact path="/enquiry" component={EnquiryPage}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
