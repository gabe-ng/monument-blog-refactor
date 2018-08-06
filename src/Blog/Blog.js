import React, { Component } from "react";
import Header from "./Header/Header";
import MidSection from "./MidSection/MidSection";
import Comment from "./Comment/Comment";

class Blog extends Component {
  render() {
    return (
      <div>
        <Header />
        <MidSection />
        <Comment />
      </div>
    );
  }
}

export default Blog;
