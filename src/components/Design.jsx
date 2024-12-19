import "../styles/Design.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import imageList from "../util/imageList";
import imageWebList from "../util/imageWebList";
import Images from "./images";
import "swiper/css";
import { Mousewheel, Autoplay } from "swiper/modules";
import Modal from "./Modal";

const Design = () => {
  const [images] = useState(imageList);
  const [imagesWeb] = useState(imageWebList);

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ src: "", caption: "" });

  const openModal = (src, caption) => {
    setModalContent({ src, caption });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent({ src: "", caption: "" });
  };
  return (
    <>
      <section className="Design" id="DESIGN">
        <div className="sec_in">
          <h3>DESIGN</h3>
          <div className="slide_design">
            <Swiper
              slidesPerView={4}
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
                  <Images
                    src={image.src}
                    caption={image.caption}
                    className={`DESIGN`}
                    onClick={() => openModal(image.src, image.caption)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="slide_design">
            <Swiper
              slidesPerView={4}
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
              modules={[Mousewheel, Autoplay]}
            >
              {imagesWeb.map((image) => (
                <SwiperSlide key={image.id} className="art_slide">
                  <Images
                    src={image.src}
                    caption={image.caption}
                    className={`DESIGN`}
                    onClick={() => openModal(image.design, image.caption)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <Modal isOpen={isOpen} onClose={closeModal} className={"DESIGN"}>
        <p>{modalContent.caption}</p>
        <img src={modalContent.src} alt={modalContent.caption} />
      </Modal>
    </>
  );
};
export default Design;
