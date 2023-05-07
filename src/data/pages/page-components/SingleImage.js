import React from "react";
import "./SingleImage.css"

export default function SingleImage(props) {

  let optionalCaption = <></>;
  if (props.caption !== undefined) {

    let optionalPosition;
    if (props.captionPos === "bottom-left") {
      optionalPosition = {bottom: "1.3rem", left: "1.0rem"};
    }
    else if (props.captionPos === "bottom-right") {
      optionalPosition = {bottom: "1.3rem", right: "1.0rem"};
    }
    else if (props.captionPos === "top-left") {
      optionalPosition = {top: "1.1rem", left: "1.0rem"};
    }
    else if (props.captionPos === "top-right") {
      optionalPosition = {top: "1.1rem", right: "1.0rem"};
    }

    optionalCaption = <div className="caption" style={optionalPosition}>{props.caption}</div>;
  }

  return (
    <div className="SingleImage">
      <img src={props.image} />
      {optionalCaption}
    </div>
  );
}