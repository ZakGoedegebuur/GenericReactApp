import React, { useContext } from "react"
import "../styles/Navbar.css"
import icon from "../images/rails.jpg"
import data from "../data/page-data.js"
import { sectionContext, stageContext, subSectionContext } from "../Context"

function NavElement(props) {
  const [section, setSection] = useContext(sectionContext);
  const [subSection, setSubSection] = useContext(subSectionContext);
  const [stage, setStage] = useContext(stageContext);
  

  let classes = "nav-element";
  classes += section === data.sections[props.index].name ? " active" : "";

  function navFunction() {
    setSection(data.sections[props.index].name);
    setSubSection(undefined);
    setStage(data.sections[props.index].stageOnClick);
    window.scrollTo(0, 0);
  }

  return (
     <button onClick={navFunction} className={classes} key={props.section}>{data.sections[props.index].name.toUpperCase()}</button> 
  );
}

export default function Navbar(props) {

  const [section, setSection] = useContext(sectionContext);

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