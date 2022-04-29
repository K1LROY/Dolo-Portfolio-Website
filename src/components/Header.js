import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/header.css";

import $ from "jquery";
import Profile from "./contents/Profile";

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
      <div class="main" id="main">
        <header class="header">
          <div class="wrap d-flex">
            <h1 class="logo">
              <NavLink to="">
                <img src="images/logo.png" alt="" />
              </NavLink>
            </h1>
            <nav class="menu">
              <ul>
                <li>
                  <NavLink class="smooth-scroll" to="#home">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#about" class="nav-link smooth-scroll">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#pages" class="smooth-scroll">
                    Pages
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#skills" class="smooth-scroll">
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#gallery" class="smooth-scroll">
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#mh-contact" class="smooth-scroll">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <Link to="#" class="sidemenu-toggler">
            <span></span>
            <span></span>
            <span></span>
          </Link>

          <div class="sidemenu">
            <Link to="#" class="close"></Link>
            <nav>
              <ul>
                <li>
                  <NavLink to="">Home</NavLink>
                </li>
                <li>
                  <NavLink class="smooth-scroll" to="#about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">Pages</NavLink>
                </li>
                <li>
                  <NavLink to="">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="">Gallery</NavLink>
                </li>
                <li>
                  <NavLink to="">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <footer>
              <div class="social">
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
      </div>
      <Profile />
    </div>
  );
}
