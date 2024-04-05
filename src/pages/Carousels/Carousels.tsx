import { Carousel } from "antd";
import Lottie from "lottie-react";
import { CSSProperties, FC } from "react";

import animationData01 from "../../media/travel_cat.json";
import animationData02 from "../../media/carousel_media/carousel_01.json";
import animationData03 from "../../media/carousel_media/carousel_03.json";
import animationData04 from "../../media/carousel_media/carousel_04.json";

const contentStyle: CSSProperties = {
  margin: 0,
  height: "400px",
  color: "#fff",
  alignContent: "center",
  justifyItems: "center",
  background: "#24A7AF",
};

const Carousels: FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          <Lottie style={{ height: 200 }} animationData={animationData01} />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Lottie style={{ height: 250 }} animationData={animationData02} />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Lottie style={{ height: 200 }} animationData={animationData03} />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Lottie style={{ height: 200 }} animationData={animationData04} />
        </h3>
      </div>
    </Carousel>
  );
};

export default Carousels;
