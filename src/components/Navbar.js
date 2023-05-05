import React from "react"
import "../styles/Navbar.css"
import data from "../data/nav-elements.js"

function navElement(props) {
    return (
       <button className="nav-element" key={props.name}>{props.name.toUpperCase()}</button> 
    )
}

export default function Navbar() {
    return (
        <div className="Navbar">
            {data.pages.map(navElement)}
        </div>
    )
}