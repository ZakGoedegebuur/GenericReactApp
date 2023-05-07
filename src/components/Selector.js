import React, { useContext } from "react";
import "../styles/Selector.css";
import data from "../data/page-data";
import { sectionContext, subSectionContext } from "../Context";

export default function Selector(props) {

  const [section, setSection] = useContext(sectionContext);
  const [subSection, setSubSection] = useContext(subSectionContext);

  return (
    <div className="Selector">
      <div className="header">
        <div className="title">SUBSECTIONS</div>
      </div>
      {data.sections[section].subsections.map((item, index) => {
        return <button onClick={() => setSubSection(index)} key={index}>{item.title}</button>
      })}
    </div>
  )
}