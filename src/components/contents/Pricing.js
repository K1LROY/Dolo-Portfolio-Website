import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import "../../styles/pricing.css";

export default function Pricing() {
  return (
    <Element className="pricing" id="pricing">
      <div className="container spaceContent">
        <div className="row">
          <div className="col-sm-12 text-white text-left mb-5">
            <h3>Pricing Table</h3>
          </div>
          <div className="col-md-4">
            <div className="pricing dark-bg">
              <i className="fa fa-calendar"></i>
              <h4>Full-time work</h4>
              <p>i am available for full time</p>
              <h5>$1500</h5>
              <ul>
                <li>Web Development</li>
                <li>Advertising</li>
                <li>Game Development</li>
                <li>Music writing</li>
              </ul>
              <Link to="" className="btn btn-fill">
                Hire me
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="pricing dark-bg">
              <i className="fa fa-file"></i>
              <h4>Fixed Price Project</h4>
              <p>i am available for fixed roles</p>
              <h5>$1500</h5>
              <ul>
                <li>Web Development</li>
                <li>Advertising</li>
                <li>Game Development</li>
                <li>Music writing</li>
              </ul>
              <Link to="" className="btn btn-fill">
                Hire me
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="pricing dark-bg">
              <i className="fa fa-calendar"></i>
              <h4>Hourly Work</h4>
              <p>i am available for Hourly Projects</p>
              <h5>$50</h5>
              <ul>
                <li>Web Development</li>
                <li>Advertising</li>
                <li>Game Development</li>
                <li>Music writing</li>
              </ul>
              <Link to="" className="btn btn-fill">
                Hire me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
