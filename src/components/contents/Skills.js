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
    <Element class="mh-skills" id="skills">
      <div class="container spaceContent">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="mh-skills-inner">
              <div class="mh-professional-skill">
                <h3>Technical Skills</h3>
                <div class="each-skills">
                  <div class="candidatos">
                    <div class="parcial">
                      <div class="info">
                        <div class="nome">Javascript</div>
                        <div class="percentage-num">86%</div>
                      </div>
                      <div class="progressBar">
                        <div class="percentagem" style={{ width: "86%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div class="candidatos">
                    <div class="parcial">
                      <div class="info">
                        <div class="nome">PHP</div>
                        <div class="percentage-num">46%</div>
                      </div>
                      <div class="progressBar">
                        <div class="percentagem" style={{ width: "46%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div class="candidatos">
                    <div class="parcial">
                      <div class="info">
                        <div class="nome">C++</div>
                        <div class="percentage-num">38%</div>
                      </div>
                      <div class="progressBar">
                        <div class="percentagem" style={{ width: "38%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div class="candidatos">
                    <div class="parcial">
                      <div class="info">
                        <div class="nome">PHP</div>
                        <div class="percentage-num">17%</div>
                      </div>
                      <div class="progressBar">
                        <div class="percentagem" style={{ width: "17%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="mh-professional-skills">
              <h3>Professional Skills</h3>
              <ul class="mh-professional-progress">
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

                  <div class="pr-skill-name">Communication</div>
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
                  <div class="pr-skill-name">Team work</div>
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
                  <div class="pr-skill-name">Project Management</div>
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
                  <div class="pr-skill-name">Creativity</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
