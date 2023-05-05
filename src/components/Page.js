import React from "react";
import pageData from "../data/nav-elements";
import "../styles/Page.css"

export default function Page(props) {
  return (
    <>
      <div className="page">
        <h1 className="title">{pageData.pages[props.page].title.toUpperCase()}</h1>
        <h4 className="date">{pageData.pages[props.page].date.toUpperCase()}</h4>
        {pageData.pages[props.page].data}
      </div>
    </>
  )
}