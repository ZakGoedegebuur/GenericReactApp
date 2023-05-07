import React from "react";
import "../styles/Selector.css";
import pageData from "../data/nav-elements";

export default function Selector(props) {
  return (
    <div className="Selector">
      {pageData.pages.map(item => {
        return <div>hola</div>
      })}
    </div>
  )
}