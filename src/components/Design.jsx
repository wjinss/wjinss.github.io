import "../styles/Design.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import imageList from "../util/imageList";
import imageWebList from "../util/imageWebList";
import Images from "./Images";
import "swiper/css";
import { Mousewheel, Autoplay } from "swiper/modules";
import Modal from "./Modal";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Design = () => {
  const [images] = useState(imageList);
  const [imagesWeb] = useState(imageWebList);

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ src: "", caption: "" });

  const openModal = (src, caption) => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.disable());

    setModalContent({ src, caption });
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setModalContent({ src: "", caption: "" });
    const scrollY = window.scrollY;
    ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
    window.scrollTo(0, scrollY);
  };
  return (
    <>
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
                delay: 4500,
              }}
              className="mySwiper"
              breakpoints={{
                600: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
                780: {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
                1080: {
                  slidesPerView: 3.5,
                  spaceBetween: 50,
                  centeredSlides: false,
                },
                1280: {
                  slidesPerView: 3.5,
                  spaceBetween: 50,
                  centeredSlides: false,
                },
              }}
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
              slidesPerView={1.5}
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 4500,
              }}
              className="mySwiper"
              breakpoints={{
                600: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
                780: {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
                1080: {
                  slidesPerView: 3.5,
                  spaceBetween: 50,
                  centeredSlides: false,
                },
                1280: {
                  slidesPerView: 3.5,
                  spaceBetween: 50,
                  centeredSlides: false,
                },
              }}
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
