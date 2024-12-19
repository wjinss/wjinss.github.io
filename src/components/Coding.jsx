import "../styles/Coding.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import Images from "./images";
import Modal from "./Modal";
import codingList from "../util/codingList";

gsap.registerPlugin(ScrollTrigger);

const Coding = () => {
  const [codings] = useState(codingList);

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
  const horizontalScrollRef = useRef(null);
  const contentWrapperRef = useRef(null);

  useEffect(() => {
    const section = horizontalScrollRef.current;
    const contentWrapper = contentWrapperRef.current;

    const horizontalScrollLength =
      contentWrapper.scrollWidth - section.offsetWidth;

    gsap.to(contentWrapper, {
      x: -horizontalScrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${horizontalScrollLength}`,
        scrub: true,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <>
      <section className="Coding" id="CODING" ref={horizontalScrollRef}>
        <div className="coding_wrap">
          <div className="coding_title">
            <h3>CODING EXAMPLE</h3>
          </div>
          <div className="coding_contents" ref={contentWrapperRef}>
            {codings.map((content) => (
              <Images
                key={content.id}
                src={content.thum}
                caption={content.caption}
                className={`CODING`}
                onClick={() => openModal(content.src, content.caption)}
              />
            ))}
          </div>
        </div>
      </section>
      <Modal isOpen={isOpen} onClose={closeModal} className={"CODING"}>
        <p>{modalContent.caption}</p>
        <iframe
          src={modalContent.src}
          title={modalContent.caption}
          allow="fullscreen"
        />
      </Modal>
    </>
  );
};

export default Coding;
