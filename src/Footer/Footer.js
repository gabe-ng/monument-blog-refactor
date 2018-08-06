import React from "react";
import { SocialIcon } from "react-social-icons";

const footer = () => (
  <footer>
    <div className="wrap">
      <div className="social-links">
        {/*<a href="">
          <i className="fa fa-facebook-square" aria-hidden="true" />
</a>*/}
        <SocialIcon className="facebook" url="http://facebook.com" />
        <a href="">
          <i className="fa fa-twitter-square" aria-hidden="true" />
        </a>
        <a href="">
          <i className="fa fa-instagram" aria-hidden="true" />
        </a>
      </div>
      <input type="text" placeholder="Email Address" />
      <button type="submit">Keep in Touch</button>
    </div>

    <p className="copyright">&copy;2016 Sarah Holden</p>
  </footer>
);

export default footer;
