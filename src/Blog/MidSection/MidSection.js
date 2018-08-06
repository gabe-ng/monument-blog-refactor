import React from "react";
import Article from "./Article/Article";
import AboutUs from "./AboutUs/AboutUs";
import "./MidSection.css";

const midSection = () => {
  return (
    <div className="wrap grid-wrapper">
      <Article />
      <AboutUs />
    </div>
  );
};

export default midSection;
