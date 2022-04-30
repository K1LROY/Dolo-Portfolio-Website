import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import WOW from "wowjs";

import "../../styles/about.css";

export default function About() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <Element className="about" id="about">
      <div className="container spaceContent">
        <div className="row">
          <div
            className="col-md-6 wow bounceInLeft"
            data-wow-duration="1.1s"
            data-wow-delay="1.1s"
          >
            <img src="images/seo-home1.png" alt="" />
          </div>
          <div
            className="col-md-5 text-white gap wow bounceInLeft mt-5"
            data-wow-duration="1.1s"
            data-wow-delay="1.1s"
          >
            <h2>About me</h2>

            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              quasi, molestias? Velit similique harum ipsa, unde consectetur
              cupiditate numquam ipsum error qui. Voluptate excepturi esse modi
              eaque rerum pariatur, doloribus.
            </p>

            <div className="tag mt-3">
              <ul>
                <li>
                  <span>HTML</span>
                </li>
                <li>
                  <span>CSS</span>
                </li>
                <li>
                  <span>Javascript</span>
                </li>
                <li>
                  <span>React.js</span>
                </li>
                <li>
                  <span>Next.js</span>
                </li>
                <li>
                  <span>Node.js</span>
                </li>
                <li>
                  <span>Figma</span>
                </li>
              </ul>
            </div>

            <div className="download-button mt-3">
              <Link to="" className="btn btn-danger">
                Download cv
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
