import React from "react";
import SingleImage from "./page-components/SingleImage";
import msl_wireframe_png from "../images/ms1_wireframe.png"

export default function Entry()
{
  return (
    <div className="entry">
      <p>Here is an image of one of the first models created for the simulator. Visually it is loosely based off the Rapier SAM but will almost certainly be used for air to air engagements as well.</p>
      <SingleImage image={msl_wireframe_png} caption="The missile knows where it is at all times. It knows this because it knows where it isn't. By subtracting where it is from where it isn't, or where it isn't from where it is, whichever is greater, it obtains a difference, or 'deviation'." captionPos="top-left"/>
      <p>The level of detail of the model is an attempt to find a balance between a high level of detail and a high level of performance. This may be changed in further revisions, but for now I'm quite happy with it.</p>
    </div>
  )
  
}