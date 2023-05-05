import React from "react";
import "../styles/Sidebar.css"
import icon from "../images/rails.jpg"

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <img className="icon" src={icon} alt="Railway tracks."/>
      <h3 className="name">My<br/>Name</h3>
    </div>
  );
}