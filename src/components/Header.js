import React from "react";
import { NavLink, Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import { Element } from "react-scroll";
import "../styles/header.css";

import $ from "jquery";
import Profile from "./contents/Profile";

const ScrollLink = Scroll.Link;

$(document).ready(function () {
  $(".sidemenu-toggler").click(function () {
    $(".sidemenu").addClass("active");
  });
  $(".close").click(function () {
    $(".sidemenu").removeClass("active");
  });

  $(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 150) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });
});

$(document).ready(function () {
  $(".sidemenu-toggler").click(function () {
    $(".sidemenu").addClass("active");
  });

  $(".close").click(function () {
    $(".sidemenu").removeClass("active");
  });

  $(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 150) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });

  $(window).on("load", function () {
    var $container = $(".portfolioContainer");
    $container.isotope({
      filter: "*",
      animationOptions: {
        queue: true,
      },
    });

    $(".portfolio-nav li").click(function () {
      $(".portfolio-nav .current").removeClass("current");
      $(this).addClass("current");
      var selector = $(this).attr("data-filter");
      $container.isotope({
        filter: selector,
        animationOptions: {
          queue: true,
        },
      });
      return false;
    });
  });

  $("#portfolio-item").mixItUp();
});

export default function Header() {
  return (
    <div>
      <Element className="main" id="main">
        <header className="header">
          <div className="wrap d-flex">
            <h1 className="logo">
              <NavLink to="">
                <img src="images/logo.png" alt="" />
              </NavLink>
            </h1>
            <nav className="menu">
              <ul>
                <li>
                  <ScrollLink
                    style={{ cursor: "pointer" }}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to="home"
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    style={{ cursor: "pointer" }}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to="about"
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    style={{ cursor: "pointer" }}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to="pages"
                  >
                    Pages
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    style={{ cursor: "pointer" }}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to="skills"
                  >
                    Skills
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    style={{ cursor: "pointer" }}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to="gallery"
                  >
                    Gallery
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    style={{ cursor: "pointer" }}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to="mh-contact"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </nav>
          </div>

          <Link to="#" className="sidemenu-toggler">
            <span></span>
            <span></span>
            <span></span>
          </Link>

          <div className="sidemenu">
            <Link to="#" className="close"></Link>
            <nav>
              <ul>
                <li>
                  <ScrollLink
                    style={{ cursor: "pointer" }}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to="home"
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    style={{ cursor: "pointer" }}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to="about"
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    style={{ cursor: "pointer" }}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to="pages"
                  >
                    Pages
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    style={{ cursor: "pointer" }}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to="blog"
                  >
                    Blog
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    style={{ cursor: "pointer" }}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to="gallery"
                  >
                    Gallery
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    style={{ cursor: "pointer" }}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to="mh-contact"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </nav>
            <footer>
              <div className="social">
                <NavLink to="">
                  <img src="images/facebook.png" alt="" />
                </NavLink>
                <NavLink to="">
                  <img src="images/twitter.png" alt="" />
                </NavLink>
                <NavLink to="">
                  <img src="images/instagram.png" alt="" />
                </NavLink>
              </div>
              <p>2022, Made with love by Supatarachai kwandee</p>
            </footer>
          </div>
        </header>
      </Element>
      <Profile />
    </div>
  );
}
