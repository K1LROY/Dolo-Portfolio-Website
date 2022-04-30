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
    <Element class="mh-service text-white" id="pages">
      <div class="container spaceContent">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h3>What I do</h3>
          </div>
          <div
            class="col-sm-4 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="1.2s"
          >
            <div class="mh-service-item">
              <i class="fa fa-bullseye purple-color"></i>
              <h3>UI Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                fugiat, commodi voluptas ea iusto consequatur voluptatibus quae
                aliquam atque harum.
              </p>
            </div>
          </div>

          <div
            class="col-sm-4 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="1.2s"
          >
            <div class="mh-service-item">
              <i class="fa fa-code iron-color"></i>
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                fugiat, commodi voluptas ea iusto consequatur voluptatibus quae
                aliquam atque harum.
              </p>
            </div>
          </div>

          <div
            class="col-sm-4 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="1.2s"
          >
            <div class="mh-service-item">
              <i class="fa fa-object-ungroup sky-color"></i>
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
      <div class="container">
        <div class="row">
          <div
            class="col-sm-4 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="1.2s"
          >
            <div class="mh-service-item">
              <i class="fa fa-bullseye purple-color"></i>
              <h3>UI Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                fugiat, commodi voluptas ea iusto consequatur voluptatibus quae
                aliquam atque harum.
              </p>
            </div>
          </div>

          <div
            class="col-sm-4 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="1.2s"
          >
            <div class="mh-service-item">
              <i class="fa fa-code iron-color"></i>
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                fugiat, commodi voluptas ea iusto consequatur voluptatibus quae
                aliquam atque harum.
              </p>
            </div>
          </div>

          <div
            class="col-sm-4 wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="1.2s"
          >
            <div class="mh-service-item">
              <i class="fa fa-object-ungroup sky-color"></i>
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
