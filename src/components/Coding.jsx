import "../styles/Coding.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import Images from "./images";

gsap.registerPlugin(ScrollTrigger);

const Coding = ({ openModal }) => {
  const horizontalScrollRef = useRef(null);
  const codingBoxRef = useRef([]);

  useEffect(() => {
    const horizontalScroll = horizontalScrollRef.current;
    const codingBox = codingBoxRef.current;

    if (horizontalScroll && codingBox.length > 0) {
      const totalWidth =
        codingBox.length * codingBox[0].getBoundingClientRect().width;
      ScrollTrigger.create({
        trigger: horizontalScroll,
        start: `top-=80px`,
        end: `+=${totalWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const scrollAmount = self.progress * (totalWidth - window.innerWidth);
          gsap.to(codingBox, {
            x: -scrollAmount,
            ease: "linear",
            overwrite: true,
            duration: 0.1,
          });
        },
      });
    }
  }, []);

  return (
    <section className="Coding" id="CODING" ref={horizontalScrollRef}>
      <div className="coding_wrap">
        <div className="coding_title">
          <h3>CODING EXAMPLE</h3>
        </div>
        <div className="coding_contents">
          {[
            "page1",
            "page2",
            "page3",
            "page4",
            "page5",
            "page6",
            "page7",
            "page8",
          ].map((content, index) => (
            <Images
              src={""}
              caption={""}
              style={{ whiteSpace: "nowrap" }}
              key={index}
              className="coding_box"
              ref={(el) => {
                if (el && !codingBoxRef.current.includes(el)) {
                  codingBoxRef.current.push(el);
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coding;
