import React from "react";
import pageData from "../data/nav-elements";

export default function Page(props) {
  return (
    <div>{pageData.pages[props.page].data}</div>
  )
}