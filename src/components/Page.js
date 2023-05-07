import React, { useContext } from "react";
import { sectionContext, subSectionContext } from "../Context";
import data from "../data/page-data";
import "../styles/Page.css"

function CustomPage(props) {

  const [section, setSection] = useContext(sectionContext);
  const [subSection, setSubSection] = useContext(subSectionContext);

  return (
    <div className="CustomPage">
      <h1 className="title">{data.sections[section].subsections[subSection].title.toUpperCase()}</h1>
      <h4 className="date">{data.sections[section].subsections[subSection].date.toUpperCase()}</h4>
      {data.sections[section].subsections[subSection].data}
    </div>
  );
}

export default function Page(props) {
  return (
    <div className="page">
      <CustomPage page={props.page}/>
    </div>
  )
}