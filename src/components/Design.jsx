import "../styles/Design.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import imageList from "../util/imageList";
import Images from "./images";
import "swiper/css";
import { Mousewheel, Autoplay } from "swiper/modules";

const Design = () => {
  const [images] = useState(imageList);
  return (
    <section className="Design" id="DESIGN">
      <div className="sec_in">
        <h3>DESIGN</h3>
        <div className="slide_design">
          <Swiper
            slidesPerView={1.5}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            mousewheel={false}
            className="mySwiper"
            modules={[Mousewheel, Autoplay]}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id} className="art_slide">
                <Images src={image.src} caption={image.caption} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="slide_design">
          <Swiper
            slidesPerView={1.5}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            // mousewheel={true}
            className="mySwiper"
            modules={[Mousewheel, Autoplay]}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id} className="art_slide">
                <Images src={image.src} caption={image.caption} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </section>
  );
};
export default Design;
