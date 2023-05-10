import React, { useContext } from "react"
import "../styles/Navbar.css"
import icon from "../images/rails.jpg"
import data from "../data/page-data.js"
import { sectionContext, subSectionContext } from "../Context"

function NavElement(props) {
  const [section, setSection] = useContext(sectionContext);
  const [subSection, setSubSection] = useContext(subSectionContext);

  let classes = "nav-element";
  classes += section === data.sections[props.index].name ? " active" : "";

  function navFunction() {
    setSection(data.sections[props.index].name);
    setSubSection(undefined);
    window.scrollTo(0, 0);
  }

  return (
     <button onClick={navFunction} className={classes} key={props.section}>{data.sections[props.index].name.toUpperCase()}</button> 
  );
}

export default function Navbar(props) {
    return (
        <div className="Navbar">
            {
              data.sections.map((props, index) => {
              return <NavElement index={index} key={index}/>
            })
            }
            <img src={icon} alt="icon"/>
        </div>
    );
}