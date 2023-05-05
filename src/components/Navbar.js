import React from "react"
import "../styles/Navbar.css"
import data from "../data/nav-elements.js"

function navElement(props) {
    return (
       <a className="nav-element-inactive" href={props.link} key={props.name}>{props.name.toUpperCase()}</a> 
    )
}

export default function Navbar() {
    return (
        <div className="Navbar">
            {data.navElements.map(navElement)}
        </div>
    )
}