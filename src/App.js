import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Blog from "./Blog/Blog";
import Index from "./Index/Index";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/*   <Blog />*/}
        <Index />
        <Footer />
      </div>
    );
  }
}

export default App;
