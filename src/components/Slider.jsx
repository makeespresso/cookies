import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import P_1 from "../assets/p_1.png"
import P_2 from "../assets/p_2.png"
import P_3 from "../assets/p_3.png"
import P_4 from "../assets/p_4.png"
import P_5 from "../assets/p_5.png"
import P_6 from "../assets/p_6.png"
import P_7 from "../assets/p_7.png"
import P_8 from "../assets/p_8.png"
import P_9 from "../assets/p_9.png"
import P_10 from "../assets/p_10.png"
import P_11 from "../assets/p_11.png"
import P_12 from "../assets/p_12.png"
import P_13 from "../assets/p_13.png"
import P_14 from "../assets/p_14.png"
import P_15 from "../assets/p_15.png"
import P_16 from "../assets/p_16.png"

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slide">
    <Carousel slide={false} activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
      <img className="Gallery_img"src={P_1} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_2} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_3} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_4} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_5} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_6} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_7} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_8} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_9} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_10} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_11} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_12} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_13} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_14} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_15} alt="ana_silvia" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="Gallery_img"src={P_16} alt="ana_silvia" />
      </Carousel.Item>

      </Carousel>
</div>
  );
}

export default Slider;
