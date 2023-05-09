import React from "react";
import "../styles/Page.css"

export default function Page(props) {
  return (
    <div className="Page">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <h4 className="date">{props.date.toUpperCase()}</h4>
      {props.jsx}
    </div>
  );
}