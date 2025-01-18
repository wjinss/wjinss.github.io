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
  markers: true,
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
  // 모달 끝

  const horizontalScrollRef = useRef(null);
  const contentWrapperRef = useRef(null);

  useEffect(() => {
    const section = horizontalScrollRef.current;
    const contentWrapper = contentWrapperRef.current;

    // const horizontalScrollLength =
    //   contentWrapper.scrollWidth - section.clientWidth;

    const totalWidth = contentWrapper.scrollWidth;
    const windowWidth = window.innerWidth;
    const scrollAmount = totalWidth - windowWidth;

    let horizontalTween = gsap.to(contentWrapper, {
      x: -scrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollAmount}`,
        scrub: true,
        pin: true,
      },
    });

    return () => {
      horizontalTween?.kill();
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
