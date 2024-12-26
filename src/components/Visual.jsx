import "../styles/Visual.css";
import Particle from "./Particle";
import visualImg from "../assets/visual.svg";
import scrollIcon from "../assets/scorll_icon.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Visual = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".visual_img img", {
      scrollTrigger: {
        trigger: "#Visual",
        start: "top top",
        scrub: 1.5,
      },
      yPercent: 7,
      scale: 4,
      rotation: 30,
    });

    gsap.to(".visual_tit", {
      scrollTrigger: {
        trigger: "#Visual",
        start: "top top",
        scrub: 1.8,
      },
      yPercent: -500,
      opacity: 0.3,
    });

    gsap.to(".visual_txt", {
      scrollTrigger: {
        trigger: "#Visual",
        start: "top top",
        scrub: 1.8,
      },
      yPercent: -600,
      opacity: 0.1,
    });
  }, []);
  return (
    <section id="Visual" className="sec">
      <Particle />
      <div className="in sec_in">
        <div className="visual_tit_wrap">
          <h2 className="visual_tit p_bold">안녕하세요!</h2>
          <p className="visual_txt p_bold">
            어제보다 오늘 더 발전하는 _<br /> 웹 퍼블리셔 정우진입니다
          </p>
        </div>
        <div className="visual_img">
          <img src={visualImg} alt="비주얼 이미지" />
        </div>
        <div className="scroll">
          <img src={scrollIcon} alt="스크롤 해주세요" />
          <p>Scroll</p>
        </div>
      </div>
    </section>
  );
};
export default Visual;
