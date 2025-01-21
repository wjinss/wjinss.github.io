import "../styles/Coding.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import Images from "./Images";
import Modal from "./Modal";
import codingList from "../util/codingList";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false,
});

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
    ScrollTrigger.refresh();

    window.scrollTo(0, scrollY);
  };

  // 가로 스크롤 구현
  const horizontalScrollRef = useRef(null);
  const contentWrapperRef = useRef(null);

  useGSAP(() => {
    const section = horizontalScrollRef.current;
    const contentWrapper = contentWrapperRef.current;

    const totalWidth = contentWrapper.scrollWidth;
    const windowWidth = window.innerWidth;
    const scrollAmount = totalWidth - windowWidth;

    ScrollTrigger.matchMedia({
      "(min-width: 1080px)": function () {
        if (scrollAmount > 0) {
          gsap.to(contentWrapper, {
            x: -scrollAmount,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "center center",
              end: () => `+=${scrollAmount}`,
              scrub: true,
              pin: true,
            },
          });
        }
      },

      "(max-width: 1079px)": function () {
        gsap.set(contentWrapper, { x: 0 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div id="CODING">
      <section className="Coding" ref={horizontalScrollRef}>
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
