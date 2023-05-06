import React from "react";
import SingleImage from "./page-components/SingleImage";
const snowyCastleAddress = "https://images.pexels.com/photos/301469/pexels-photo-301469.jpeg?cs=srgb&dl=pexels-pixabay-301469.jpg&fm=jpg";

export default function Entry()
{
  return (
    <div className="entry">
      <p>
        Here is an image of one of the first models created for the simulator. 
        Visually it is loosely based off the Rapier SAM but will almost certainly be used for air to air engagements as well.
      </p>
      <SingleImage image={snowyCastleAddress} caption="WOO YEAH THE CAPTION SYSTEM IS WORKING!!!" captionPos="top-left"/>
      <p>
        The level of detail of the model is an attempt to find a balance between a high level of detail and a high level of performance. 
        This may be changed in further revisions, but for now I'm quite happy with it.
      </p>
    </div>
  )
  
}