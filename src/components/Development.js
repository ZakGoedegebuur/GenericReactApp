import React, { useContext } from "react";
import developmentData from "../data/development-data";
import "../styles/Development.css"
import { subSectionContext } from "../Context";
import Page from "./Page";

function DevPageButton(props) {

  const [subSection, setSubSection] = useContext(subSectionContext);
  
  return (
    <button className="development-selector-element" onClick={() => setSubSection(props.index)}>
      <div className="development-selector-element-major-info">
        <h2 className="development-selector-element-title">{props.item.title.toUpperCase()}</h2>
        <h4 className="development-selector-element-date">{props.item.date}</h4>
      </div>
      <div className="development-selector-element-description">{props.item.description}</div>
    </button>
  );
}

export default function Development() {
  
  const [subSection, setSubSection] = useContext(subSectionContext);
  if (subSection === undefined) {
    return (
      <div className="development-selector">
        {developmentData.pages.map((item, index) => {
          return (
            <DevPageButton item={item} index={index} key={index}/>
          );
        })}
      </div>
    );
  }
  else {
    const page = developmentData.pages[subSection];
    return (
      <Page title={page.title} date={page.date} jsx={page.jsx}/>
    );
  }
}