import React from "react";
import { Element } from "react-scroll";
import "../../styles/portfolio.css";

export default function Portfolio() {
  return (
    <Element className="mh-portfolio" id="gallery">
      <div className="container spaceContent">
        <div className="row">
          <div className="section-title col-sm-12">
            <h3>Recent Portfolio</h3>
          </div>
          <div className="part col-sm-12">
            <div className="portfolio-nav col-sm-12 mt-5" id="filter-button">
              <ul>
                <li data-filter="*" className="current">
                  <span>All Categories</span>
                </li>

                <li data-filter=".user-interface">
                  <span>Web Design</span>
                </li>

                <li data-filter=".branding">
                  <span>Branding</span>
                </li>

                <li data-filter=".mockup">
                  <span>Mockups</span>
                </li>

                <li data-filter=".ui">
                  <span>Photography</span>
                </li>
              </ul>
            </div>

            <div className="mh-project-gallery col-sm-12" id="project-gallery">
              <div className="portfolioContainer row">
                <div className="grid-item col-md-4 user-interface">
                  <div className="column">
                    <figure>
                      <img src="images/g1.jpg" alt="" />
                      <figcaption className="fig-caption">
                        <i className="fa fa-search"></i>
                        <h5 className="title">Creative Design</h5>
                        <span className="sub-title">Photography</span>
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="images/g2.png" alt="" />
                      <figcaption className="fig-caption">
                        <i className="fa fa-search"></i>
                        <h5 className="title">Creative Design</h5>
                        <span className="sub-title">Photography</span>
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="images/g7.jpg" alt="" />
                      <figcaption className="fig-caption">
                        <i className="fa fa-search"></i>
                        <h5 className="title">Creative Design</h5>
                        <span className="sub-title">Photography</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="grid-item col-md-4 branding">
                  <div className="column">
                    <figure>
                      <img src="images/g5.png" alt="" />
                      <figcaption className="fig-caption">
                        <i className="fa fa-search"></i>
                        <h5 className="title">Creative Design</h5>
                        <span className="sub-title">Photography</span>
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="images/g4.png" alt="" />
                      <figcaption className="fig-caption">
                        <i className="fa fa-search"></i>
                        <h5 className="title">Creative Design</h5>
                        <span className="sub-title">Photography</span>
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="images/g6.png" alt="" />
                      <figcaption className="fig-caption">
                        <i className="fa fa-search"></i>
                        <h5 className="title">Creative Design</h5>
                        <span className="sub-title">Photography</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="grid-item col-md-4 ui">
                  <div className="column">
                    <figure>
                      <img src="images/g3.png" alt="" />
                      <figcaption className="fig-caption">
                        <i className="fa fa-search"></i>
                        <h5 className="title">Creative Design</h5>
                        <span className="sub-title">Photography</span>
                      </figcaption>
                    </figure>
                    <figure>
                      <img src="images/g9.png" alt="" />
                      <figcaption className="fig-caption">
                        <i className="fa fa-search"></i>
                        <h5 className="title">Creative Design</h5>
                        <span className="sub-title">Photography</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
