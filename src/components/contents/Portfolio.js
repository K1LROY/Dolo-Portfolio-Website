import React from "react";
import { Element } from "react-scroll";
import "../../styles/portfolio.css";

export default function Portfolio() {
  return (
    <Element class="mh-portfolio" id="gallery">
      <div class="container spaceContent">
        <div class="row">
          <div class="section-title col-sm-12">
            <h3>Recent Portfolio</h3>
          </div>
          <div class="part col-sm-12">
            <div class="portfolio-nav col-sm-12 mt-5" id="filter-button">
              <ul>
                <li data-filter="*" class="current">
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

            <div class="mh-project-gallery col-sm-12" id="project-gallery">
              <div class="portfolioContainer row">
                <div class="grid-item col-md-4 user-interface">
                  <div class="column">
                    <figure>
                      <img src="images/g1.jpg" alt="" />
                      <figcaption class="fig-caption">
                        <i class="fa fa-search"></i>
                        <h5 class="title">Creative Design</h5>
                        <span class="sub-title">Photography</span>
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="images/g2.png" alt="" />
                      <figcaption class="fig-caption">
                        <i class="fa fa-search"></i>
                        <h5 class="title">Creative Design</h5>
                        <span class="sub-title">Photography</span>
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="images/g7.jpg" alt="" />
                      <figcaption class="fig-caption">
                        <i class="fa fa-search"></i>
                        <h5 class="title">Creative Design</h5>
                        <span class="sub-title">Photography</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div class="grid-item col-md-4 branding">
                  <div class="column">
                    <figure>
                      <img src="images/g5.png" alt="" />
                      <figcaption class="fig-caption">
                        <i class="fa fa-search"></i>
                        <h5 class="title">Creative Design</h5>
                        <span class="sub-title">Photography</span>
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="images/g4.png" alt="" />
                      <figcaption class="fig-caption">
                        <i class="fa fa-search"></i>
                        <h5 class="title">Creative Design</h5>
                        <span class="sub-title">Photography</span>
                      </figcaption>
                    </figure>

                    <figure>
                      <img src="images/g6.png" alt="" />
                      <figcaption class="fig-caption">
                        <i class="fa fa-search"></i>
                        <h5 class="title">Creative Design</h5>
                        <span class="sub-title">Photography</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div class="grid-item col-md-4 ui">
                  <div class="column">
                    <figure>
                      <img src="images/g3.png" alt="" />
                      <figcaption class="fig-caption">
                        <i class="fa fa-search"></i>
                        <h5 class="title">Creative Design</h5>
                        <span class="sub-title">Photography</span>
                      </figcaption>
                    </figure>
                    <figure>
                      <img src="images/g9.png" alt="" />
                      <figcaption class="fig-caption">
                        <i class="fa fa-search"></i>
                        <h5 class="title">Creative Design</h5>
                        <span class="sub-title">Photography</span>
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
