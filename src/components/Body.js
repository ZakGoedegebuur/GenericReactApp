import React, { useContext } from "react";
import Header from '../components/Header.js';
import Page from '../components/Page.js';
import Footer from "./Footer.js";
import { sectionContext, stageContext, subSectionContext } from "../Context.js";
import "../styles/Body.css";

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

  // Which stage
  switch(stage) {
    case "latest":
      return (
        <>
          <Page/>
          <ReturnToTop/>
        </>
        )
    case "selection":
        // Which selector 
      switch(section) {
        case 1:

        switch(subsection) {
          default:
            setStage("latest");
            break;
        }

        default:
          setStage("latest")
          break;
      }
    
    case "notfound":
    default:
      return (
        <>
          <h1 className="title">Error 404</h1>
          <h2>Page not found :(</h2>
        </>
      )
  }
}

export default function Body(props) {
  return (
    <div className="Body">
      <Header/>
      <Main/>
      <Footer/>
    </div>
    )
}