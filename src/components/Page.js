import React from "react";
import pageData from "../data/nav-elements";
import "../styles/Page.css"

export default function Page(props) {
  return (
    <div className="page">{pageData.pages[props.page].data}</div>
  )
}