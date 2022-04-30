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
    <Element class="home container text-white" id="home">
      <div class="row">
        <div
          class="col-md-6 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="1s"
        >
          <div class="hero-text">
            <span class="title">Hello i'm</span>
            <br />
            <span class="name">KWANDEE S.</span> <br />
            <span class="designation">FrontEnd Web Designer</span> <br />
            <span class="email">
              <i class="fa fa-envelope"></i> kwandee1992@gmail.com
            </span>
            <br />
            <span class="phone">
              <i class="fa fa-phone"></i> 098-968-4958
            </span>
            <div class="social-icons d-flex">
              <li>
                <i class="fa fa-facebook"></i>
              </li>
              <li>
                <i class="fa fa-twitter"></i>
              </li>
              <li>
                <i class="fa fa-linkedin"></i>
              </li>
              <li>
                <i class="fa fa-instagram"></i>
              </li>
            </div>
          </div>
        </div>

        <div class="col-md-6 wow fadeInUp">
          <div class="hero-img">
            <div class="img-border">
              <img src="/me.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
