import React from "react";
import "../styles/Selector.css";
import pageData from "../data/page-data";

export default function Selector(props) {
  return (
    <div className="Selector">
      <div className="header">
        <div className="title">POSTS</div>
      </div>
      {pageData.pages.map(item => {
        return <div>hola</div>
      })}
    </div>
  )
}