import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/experience.css";

import WOW from "wowjs";

export default function Experience() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div class="mh-experience" id="experience">
      <div class="container spaceContent">
        <div class="row">
          <div class="col-smd-12 col-md-6">
            <div class="mh-education">
              <h3>Education</h3>
              <div class="mh-education-details">
                <div class="mh-education-item">
                  <h4>
                    Electronics technician From <Link to="">KMUTNB</Link>
                  </h4>
                  <div class="mh-eduyear">2007-2009</div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum
                  </p>
                </div>

                <div class="mh-education-item">
                  <h4>
                    Electrical engineer From <Link to="">KMUTNB</Link>
                  </h4>
                  <div class="mh-eduyear">2009-2012</div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum
                  </p>
                </div>

                <div class="mh-education-item">
                  <h4>
                    Interior design From <Link to="">KMUTNB</Link>
                  </h4>
                  <div class="mh-eduyear">2013-2016</div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="mh-work">
              <h3>Work Experience</h3>
              <div class="mh-experience-details">
                <div class="mh-work-item">
                  <h4>
                    Machining <Link to="">Gohdo Seisakusho Co.,LTD</Link>
                  </h4>
                  <div class="mh-eduyear">2016-2019</div>
                  <span>Responsibility</span>
                  <ul class="work-responsibility">
                    <li>Technical Intern</li>
                    <li>Machine maintenace</li>
                  </ul>
                </div>

                <div class="mh-work-item">
                  <h4>
                    Barista <Link to="">Non Bakery Cafe</Link>
                  </h4>
                  <div class="mh-eduyear">2020-2021</div>
                  <span>Responsibility</span>
                  <ul class="work-responsibility">
                    <li>Make Bakery</li>
                    <li>Serves beverages such as Coffee</li>
                  </ul>
                </div>

                <div class="mh-work-item">
                  <h4>
                    Interior Design <Link to="">Freelance</Link>
                  </h4>
                  <div class="mh-eduyear">2020-2022</div>
                  <span>Responsibility</span>
                  <ul class="work-responsibility">
                    <li>Write a plan the Structure</li>
                    <li>According to the Customer's Order</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
