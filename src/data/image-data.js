import drone_shading_test_1 from "../images/cell_shading_test_1.png";
import ms1_wireframe from "../images/ms1_wireframe.png";

export const imageData = { images: [
  { name: "drone-shading-test-1", img: drone_shading_test_1 },
  { name: "ms1_wireframe", img: ms1_wireframe },
]}

export default function getImage(name) {
  return imageData.images.find(x => {return x.name === name}).img;
}