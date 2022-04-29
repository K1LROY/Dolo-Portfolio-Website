import React from "react";
import About from "../components/contents/About";
import Page from "../components/contents/Page";
import Skills from "../components/contents/Skills";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Page />
      <Skills />
    </div>
  );
}
