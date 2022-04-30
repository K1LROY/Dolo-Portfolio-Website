import React, { useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Element } from "react-scroll";
import "react-circular-progressbar/dist/styles.css";
import "../../styles/skills.css";
import WOW from "wowjs";

export default function Skills() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <Element className="mh-skills" id="skills">
      <div className="container spaceContent">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="mh-skills-inner">
              <div className="mh-professional-skill">
                <h3>Technical Skills</h3>
                <div className="each-skills">
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">Javascript</div>
                        <div className="percentage-num">86%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "86%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">PHP</div>
                        <div className="percentage-num">46%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "46%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">C++</div>
                        <div className="percentage-num">38%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "38%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">PHP</div>
                        <div className="percentage-num">17%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "17%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="mh-professional-skills">
              <h3>Professional Skills</h3>
              <ul className="mh-professional-progress">
                <li className="col-sm-6">
                  <div>
                    <CircularProgressbar
                      value={70}
                      text={`${70}%`}
                      styles={buildStyles({
                        pathTransition: "none",
                        textSize: "10px",
                        textColor: "#fff",
                        pathColor: "#0bceaf",
                        trailColor: "#101214",
                      })}
                    />
                  </div>

                  <div className="pr-skill-name">Communication</div>
                </li>

                <li className="col-sm-6">
                  <div>
                    <CircularProgressbar
                      value={80}
                      text={`${80}%`}
                      styles={buildStyles({
                        pathTransition: "none",
                        textSize: "10px",
                        textColor: "#fff",
                        pathColor: "#0bceaf",
                        trailColor: "#101214",
                      })}
                    />
                  </div>
                  <div className="pr-skill-name">Team work</div>
                </li>

                <li className="col-sm-6">
                  <div>
                    <CircularProgressbar
                      value={40}
                      text={`${40}%`}
                      styles={buildStyles({
                        pathTransition: "none",
                        textSize: "10px",
                        textColor: "#fff",
                        pathColor: "#0bceaf",
                        trailColor: "#101214",
                      })}
                    />
                  </div>
                  <div className="pr-skill-name">Project Management</div>
                </li>

                <li className="col-sm-6">
                  <div>
                    <CircularProgressbar
                      value={80}
                      text={`${80}%`}
                      styles={buildStyles({
                        pathTransition: "none",
                        textSize: "10px",
                        textColor: "#fff",
                        pathColor: "#0bceaf",
                        trailColor: "#101214",
                      })}
                    />
                  </div>
                  <div className="pr-skill-name">Creativity</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
