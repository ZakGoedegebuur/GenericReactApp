import React from "react"
import "../styles/Navbar.css"
import data from "../data/nav-elements.js"

function NavElement(props) {

  let classes = "nav-element";
  classes += props.page == props.index ? " active" : "";
  console.log(classes);

  return (
     <button onClick={() => props.setPage(props.index)} className={classes} key={props.name}>{props.name.toUpperCase()}</button> 
  )
}

export default function Navbar(props) {
    return (
        <div className="Navbar">
            {data.pages.map((item, index) => {
              return <NavElement setPage={props.setPage} page={props.page} index={index} name={item.name} key={item.name}/>
            })}
        </div>
    )
}