import React from "react"
import "../styles/Navbar.css"
import icon from "../images/rails.jpg"
import data from "../data/page-data.js"

function NavElement(props) {

  let classes = "nav-element";
  classes += props.page === props.index ? " active" : "";

  function navFunction() {
    props.setPage(props.index);
    window.scrollTo(0, 0);
  }

  return (
     <button onClick={navFunction} className={classes} key={props.section}>{props.section.toUpperCase()}</button> 
  )
}

export default function Navbar(props) {
    return (
        <div className="Navbar">
            {data.pages.map((item, index) => {
              return <NavElement setPage={props.setPage} page={props.page} index={index} section={item.section} key={item.section}/>
            })}
            <img src={icon}/>
        </div>
    )
}