import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
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
      </header>
    </div>
  );
}
