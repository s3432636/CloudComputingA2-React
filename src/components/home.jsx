import React, { Component } from "react";
import logo from "./../logo.svg";
import "./../css/App.css";
import Signup from './signup';
import About from './about';
import Features from './features';


class Home extends Component {
    
  render() {
    return (
        
      <div className="App">        
        <Signup />
        <About />
        <Features />
      </div>
    );
  }
}
export default Home;
