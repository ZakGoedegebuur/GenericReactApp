import React from "react";
import pageData from "../data/page-data";
import Selector from "./Selector";
import "../styles/Page.css"

function CustomPage(props) {
  return (
    <div className="CustomPage">
      <h1 className="title">{pageData.pages[props.page].title.toUpperCase()}</h1>
      <h4 className="date">{pageData.pages[props.page].date.toUpperCase()}</h4>
      {pageData.pages[props.page].data}
    </div>
  );
}

export default function Page(props) {
  return (
    <div className="page">
      <CustomPage page={props.page}/>
      <Selector/>
    </div>
  )
}