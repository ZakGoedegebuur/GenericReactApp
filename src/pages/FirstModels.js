import React from "react";
import msl_wireframe_png from "../images/ms1_wireframe.png"

export default function Entry()
{
  return (
    <div className="entry">
      <p>Here is an image of one of the first models created for the simulator. Visually it is loosely based off the Rapier SAM but will almost certainly be used for air to air engagements as well.</p>
      <img src={msl_wireframe_png} />
      <p>The level of detail of the model is an attempt to find a balance between a high level of detail and a high level of performance. This may be changed in further revisions, but for now I'm quite happy with it.</p>
    </div>
  )
  
}