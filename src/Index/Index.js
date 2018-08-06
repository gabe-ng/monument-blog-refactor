import React, { Component } from "react";
import Header from "./Header/Header";
import Archive from "./Archive/Archive";
import About from "./About/About";

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Archive />
        <About />
      </div>
    );
  }
}

export default Index;
