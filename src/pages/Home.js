import React from "react";
import About from "../components/contents/About";
import Blog from "../components/contents/Blog";
import Contact from "../components/contents/Contact";
import Experience from "../components/contents/Experience";
import Page from "../components/contents/Page";
import Portfolio from "../components/contents/Portfolio";
import Pricing from "../components/contents/Pricing";
import Skills from "../components/contents/Skills";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Page />
      <Skills />
      <Experience />
      <Portfolio />
      <Pricing />
      <Blog />
      <Contact />
    </div>
  );
}
