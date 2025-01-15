import "../styles/Coding.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import Images from "./Images";
import Modal from "./Modal";
import codingList from "../util/codingList";

gsap.registerPlugin(ScrollTrigger);

const Coding = () => {
  const [codings] = useState(codingList);

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ src: "", caption: "" });

  // 모달
  const openModal = (src, caption) => {
    setModalContent({ src, caption });
    setIsOpen(true);
    ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
  };

  const closeModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setModalContent({ src: "", caption: "" });
    const scrollY = window.scrollY;
    ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
    window.scrollTo(0, scrollY);
  };
  // 모달 끝
  const horizontalScrollRef = useRef(null);
  const contentWrapperRef = useRef(null);
  useGSAP(() => {
    const section = horizontalScrollRef.current;
    const contentWrapper = contentWrapperRef.current;

    const horizontalScrollLength =
      contentWrapper.scrollWidth - section.clientWidth;

    // const mobileDevice = window.matchMedia("(max-width: 1080px)").matches;

    // if (!mobileDevice) {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${horizontalScrollLength}`,
      scrub: true,
      pin: true,
      animation: gsap.to(contentWrapper, {
        x: -horizontalScrollLength,
        ease: "none",
      }),
    });
    // }
  });

  return (
    <div id="CODING">
      <section className="Coding" ref={horizontalScrollRef}>
        <div className="coding_wrap sec_in">
          <div className="coding_title">
            <h3>CODING EXAMPLE</h3>
          </div>
          <div className="coding_contents" ref={contentWrapperRef}>
            {codings.map((content) => (
              <Images
                key={content.id}
                src={content.thum}
                caption={content.caption}
                className={`coding`}
                onClick={() => openModal(content.src, content.caption)}
              />
            ))}
          </div>
        </div>
      </section>
      <Modal isOpen={isOpen} onClose={closeModal} className={"coding"}>
        <p>{modalContent.caption}</p>
        <iframe
          src={modalContent.src}
          title={modalContent.caption}
          allow="fullscreen"
        />
      </Modal>
    </div>
  );
};

export default Coding;
