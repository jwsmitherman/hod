import React from "react";
import { Divider } from "semantic-ui-react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Img1 from '../assets/event_img/christmas2020/christmas1.jpg'
import Img2 from '../assets/event_img/christmas2020/christmas2.jpg'
import Img3 from '../assets/event_img/christmas2020/christmas3.jpg'
import Img4 from '../assets/event_img/christmas2020/christmas4.jpg'
import Img5 from '../assets/event_img/christmas2020/christmas5.jpg'

const Christmas2020 = () => (
  <div>
    <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={Img1} className="sliderimg"/>
      <img src={Img2} className="sliderimg"/>
      <img src={Img3} className="sliderimg"/>
      <img src={Img4} className="sliderimg"/>
    </AliceCarousel>    
  </div>
);

export default Christmas2020;
