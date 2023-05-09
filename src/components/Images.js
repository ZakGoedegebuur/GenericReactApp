import React from "react";
import "../styles/Images.css";
import { imageData } from "../data/image-data.js";

function Image(props) {
  return (
    <div className="image-grid-image-container">
      <img className="image-grid-image" src={props.img} alt={props.name}/>
    </div>
  )
}

export default function ImagesPage() {
  return (
    <div className="image-grid">
      {imageData.images.map((item, index) => { return <Image name={item.name} img={item.img} key={index}/> })}
    </div>
  )
}