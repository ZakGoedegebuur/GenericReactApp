import React, { useState } from "react";
import "../styles/Images.css";
import { imageData } from "../data/image-data.js";

function Image(props) {
  return (
    <button className="image-grid-image-container" onClick={() => props.setDisplayImage(props.index)}>
      <img className="image-grid-image" src={props.img} alt={props.name}/>
    </button>
  )
}

function DisplayImage(props) {
    if (props.displayImage !== undefined) {
      return (
        <button className="image-display-background" onClick={() => props.setDisplayImage(undefined)}>
          <div className="image-display">
            <img src={imageData.images[props.displayImage].img}/>
          </div>
        </button>
      )
    }
    else return <></>
}

export default function ImagesPage() {

  const [displayImage, setDisplayImage] = useState(undefined);

  return (
    <>
      <div className="image-grid">
        {imageData.images.map((item, index) => { return <Image 
        name={item.name} 
        img={item.img} 
        index={index}
        key={index}
        setDisplayImage={setDisplayImage}/> })}
      </div>
      <DisplayImage displayImage={displayImage} setDisplayImage={setDisplayImage}/>
    </>
  )
}