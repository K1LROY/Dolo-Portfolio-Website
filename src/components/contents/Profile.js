import React, { useEffect } from "react";
import { Element } from "react-scroll";
import "../../styles/profile.css";
import WOW from "wowjs";

export default function Profile() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <Element className="home container text-white" id="home">
      <div className="row">
        <div
          className="col-md-6 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="1s"
        >
          <div className="hero-text">
            <span className="title">Hello i'm</span>
            <br />
            <span className="name">KWANDEE S.</span> <br />
            <span className="designation">FrontEnd Web Designer</span> <br />
            <span className="email">
              <i className="fa fa-envelope"></i> kwandee1992@gmail.com
            </span>
            <br />
            <span className="phone">
              <i className="fa fa-phone"></i> 098-968-4958
            </span>
            <div className="social-icons d-flex">
              <li>
                <i className="fa fa-facebook"></i>
              </li>
              <li>
                <i className="fa fa-twitter"></i>
              </li>
              <li>
                <i className="fa fa-linkedin"></i>
              </li>
              <li>
                <i className="fa fa-instagram"></i>
              </li>
            </div>
          </div>
        </div>

        <div className="col-md-6 wow fadeInUp">
          <div className="hero-img">
            <div className="img-border">
              <img src="/me.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
