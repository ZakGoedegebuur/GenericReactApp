import React, { useContext } from "react";
import Header from '../components/Header.js';
import Footer from "./Footer.js";
import { sectionContext, stageContext, subSectionContext } from "../Context.js";
import "../styles/Body.css";
import Development from "./Development.js";
import ImagesPage from "./Images.js";

function ReturnToTop() {
  return (
    <button className="return-to-top" onClick={() => {window.scrollTo(0, 0)}}>
      &#183; &#183; &#183; return to top of page &#183; &#183; &#183;
    </button>
  );
}

function Main() {
  const [section, setSection] = useContext(sectionContext);
  const [subsection, setSubSection] = useContext(subSectionContext);
  const [stage, setStage] = useContext(stageContext);

  console.log({section, subsection, stage});

  if (section === "development" && stage === "selector") return <Development/>
  else if (section === "images" && stage === "page") return <ImagesPage/>
  else return <><h1>Error 404</h1><h2>Page not found :(</h2></>
}

export default function Body(props) {
  return (
    <div className="Body">
      <Header/>
      <Main/>
      <ReturnToTop/>
      <Footer/>
    </div>
    )
}