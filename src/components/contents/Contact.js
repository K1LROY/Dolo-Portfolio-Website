/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import { Element } from "react-scroll";
import "../../styles/contact.css";
import WOW from "wowjs";

const ScrollLink = Scroll.Link;

export default function Contact() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <Element class="mh-footer" id="mh-contact">
      <div class="map-image image-bg">
        <div class="container spaceContent">
          <div class="row section-separator">
            <div
              class="col-sm-12 section-title wow fadeInUp mb-5"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              <h3>Contact Me</h3>
            </div>

            <div class="col-sm-12 mh-footer-address">
              <div class="row">
                <div class="col-sm-12 col-md-4">
                  <div
                    class="mh-address-footer-item dark-bg shadow-1 wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    <div class="each-icon">
                      <i class="fa fa-location-arrow"></i>
                    </div>
                    <div class="each-info">
                      <h4>Address</h4>
                      <address>Thailand</address>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-4">
                  <div
                    class="mh-address-footer-item dark-bg shadow-1 wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                  >
                    <div class="each-icon">
                      <i class="fa fa-envelope-o"></i>
                    </div>
                    <div class="each-info">
                      <h4>Email</h4>
                      <Link to="kwandee1992@gmail.com" class="text-white">
                        kwandee1992@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-4">
                  <div
                    class="mh-address-footer-item dark-bg shadow-1 wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.7s"
                  >
                    <div class="each-icon">
                      <i class="fa fa-phone"></i>
                    </div>
                    <div class="each-info">
                      <h4>Phone</h4>
                      <Link to="098-968-4958" class="text-white">
                        098-968-4958
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-sm-12 col-md-6 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
            >
              <form
                id="contactForm"
                class="single-form quate-form wow fadeInUp"
                data-toggle="validator"
              >
                <div id="msgSubmit" class="h3 text-center hidden"></div>
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <input
                      name="name"
                      class="contact-name form-control"
                      id="name"
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <input
                      name="name"
                      class="contact-email form-control"
                      id="L_name"
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div class="col-sm-12">
                    <input
                      name="name"
                      class="contact-subject form-control"
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div class="col-sm-12">
                    <textarea
                      class="contact-message"
                      id="message"
                      rows="6"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <div class="btn-form col-sm-12">
                    <button
                      type="submit"
                      class="btn btn-outline-info col-sm-12"
                      id="form-submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="col-sm-12 col-md-6 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.5s"
            >
              <div class="mh-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2303.470300147857!2d100.52228083820508!3d13.841449456803677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b7437f6d8df%3A0x7f6bbe5be1974d09!2z4Lit4Li04LiH4Lit4Li44LmI4LiZIDMg4LmA4Lij4Liq4LiL4Li04LmA4LiU4LiZ4LiL4LmM!5e0!3m2!1sth!2sth!4v1651298738898!5m2!1sth!2sth"
                  width="600"
                  height="350"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div
              class="col-sm-12 mh-copyright wow fadeInUp mt-5"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
            >
              <div class="row">
                <div class="col-sm-6">
                  <div class="text-left text-white text-xs-center">
                    <p>All right reserved - Made By Supatarachai kwandee</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <ul class="social-icon">
                    <li>
                      <Link to="#">
                        <i class="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i class="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i class="fa fa-github"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i class="fa fa-dribbble"></i>
                      </Link>
                    </li>
                    <li>
                      <ScrollLink
                        style={{ cursor: "pointer" }}
                        spy={true}
                        smooth={true}
                        duration={1000}
                        to="main"
                      >
                        <i class="fa fa-angle-up"></i>
                      </ScrollLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
