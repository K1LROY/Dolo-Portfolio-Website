import React, { useEffect } from "react";
import { Element } from "react-scroll";
import "../../styles/page.css";
import WOW from "wowjs";

export default function Page() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <Element className="mh-service text-white" id="pages">
      <div className="container spaceContent">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3>What I do</h3>
          </div>
          <div
            className="col-sm-4 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="1.2s"
          >
            <div className="mh-service-item">
              <i className="fa fa-bullseye purple-color"></i>
              <h3>UI Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                fugiat, commodi voluptas ea iusto consequatur voluptatibus quae
                aliquam atque harum.
              </p>
            </div>
          </div>

          <div
            className="col-sm-4 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="1.2s"
          >
            <div className="mh-service-item">
              <i className="fa fa-code iron-color"></i>
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                fugiat, commodi voluptas ea iusto consequatur voluptatibus quae
                aliquam atque harum.
              </p>
            </div>
          </div>

          <div
            className="col-sm-4 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="1.2s"
          >
            <div className="mh-service-item">
              <i className="fa fa-object-ungroup sky-color"></i>
              <h3>App Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                fugiat, commodi voluptas ea iusto consequatur voluptatibus quae
                aliquam atque harum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="container">
        <div className="row">
          <div
            className="col-sm-4 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="1.2s"
          >
            <div className="mh-service-item">
              <i className="fa fa-bullseye purple-color"></i>
              <h3>UI Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                fugiat, commodi voluptas ea iusto consequatur voluptatibus quae
                aliquam atque harum.
              </p>
            </div>
          </div>

          <div
            className="col-sm-4 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="1.2s"
          >
            <div className="mh-service-item">
              <i className="fa fa-code iron-color"></i>
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                fugiat, commodi voluptas ea iusto consequatur voluptatibus quae
                aliquam atque harum.
              </p>
            </div>
          </div>

          <div
            className="col-sm-4 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="1.2s"
          >
            <div className="mh-service-item">
              <i className="fa fa-object-ungroup sky-color"></i>
              <h3>App Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                fugiat, commodi voluptas ea iusto consequatur voluptatibus quae
                aliquam atque harum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
