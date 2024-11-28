import "../styles/Visual.css";
import Particle from "./Particle";

const Visual = () => {
  return (
    <section id="Visual" className="sec">
      {/* <Particle /> */}
      <div className="in sec_in">
        <div className="visual_tit_wrap">
          <h2 className="visual_tit p_bold">안녕하세요!</h2>
          <p className="visual_txt p_bold">
            어제보다 오늘 더 발전하는 _<br /> 웹 퍼블리셔 정우진입니다
          </p>
        </div>
        <div className="visual_img">
          <img src="../public/images/visual.svg" alt="비주얼 이미지" />
        </div>
        <div className="scroll">
          <img src="../public/images/scorll_icon.svg" alt="스크롤 해주세요" />
          <p>Scroll</p>
        </div>
      </div>
    </section>
  );
};
export default Visual;
