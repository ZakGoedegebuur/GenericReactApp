import React, { useContext } from "react";
import "../styles/Selector.css";
import data from "../data/page-data";
import { sectionContext, subSectionContext } from "../Context";

function ListElement(props) {

  let classes = "ListElement";
  const [subSection, setSubSection] = useContext(subSectionContext);
  classes += props.index === subSection ? " active" : " inactive";
  
  console.log(props.index);

  const func = props.index === subSection ? () => null : props.func;

  return (
    <button className={classes} onClick={func}>
      <div className="listelement-name">{props.title}</div>
      <div className="listelement-date">{props.date}</div>
    </button>
  );
}

export default function Selector(props) {

  const [section, setSection] = useContext(sectionContext);
  const [subSection, setSubSection] = useContext(subSectionContext);

  return (
    <div className="Selector">
      <div className="header">
        <div className="title">SUBSECTIONS</div>
      </div>
      <div className="list">
        {data.sections[section].subsections.map((item, index) => {
          return <ListElement 
          title={item.title} 
          date={item.date}
          index={index}
          func={() => setSubSection(index)} 
          key={index}
          />
        })}
      </div>
    </div>
  )
}