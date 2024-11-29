import "../styles/Publishing.css";
import { useState } from "react";

const Publishing = () => {
  const [publishings] = useState([
    {
      id: 1,
      title: "서울시립미술관 메인페이지",
      explain: "소개: 서울시립미술관 반응형 메인페이지 리디자인",
      period: "기간: 디자인 2일, 코딩 4일",
      part: "기여도: 1인 작업",
      tools: "",
      href: "",
      logo: "",
    },
  ]);
  return (
    <section className="Publishing " id="PUBLISHING">
      {publishings.map((publ) => {
        <div key={publ.id} className={`web_content web${publ.id}`}>
          <div className="web_bg">
            <div className="web_txt_wrap">
              <h4 className="web_tit p_bold">{publ.title}</h4>
              <ul>
                <li className="web_txt_list">{publ.explain}</li>
                <li className="web_txt_list">{publ.period}</li>
                <li className="web_txt_list">{publ.part}</li>
                <li className="web_txt_list">
                  <div>
                    <span>
                      <img src="" alt="" />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="web_modal">
              <a href="">
                사이트 바로가기
                <div className="web_logo">
                  <img src="" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>;
      })}
      {/* <div className="web_content web_sema">
        <div className="web_bg">
          <div className="web_txt_wrap">
            <h4 className="web_tit p_bold">서울시립미술관 메인페이지</h4>
            <ul>
              <li className="web_txt_list">
                소개: 서울시립미술관 반응형 메인페이지 리디자인
              </li>
              <li className="web_txt_list">기간: 6일</li>
              <li className="web_txt_list">기여도: 디자인, 코딩 100%</li>
              <li className="web_txt_list">
                툴:
                <div className="tool_wrap">
                  <span className="tool_icon">
                    <img src="./images/icon_html5.svg" alt="html5" />
                  </span>
                  <span className="tool_icon">
                    <img src="./images/icon_css3.svg" alt="css3" />
                  </span>
                  <span className="tool_icon">
                    <img src="./images/icon_js.svg" alt="javascript" />
                  </span>
                  <span className="tool_icon">
                    <img src="./images/icon_fig.svg" alt="figma" />
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="web_modal">
            <a
              href="./web_contents/sema/index.html"
              target="_blank"
              className="web_link"
              rel="noreferrer noopener"
            >
              사이트 바로가기<span></span>
              <div className="web_logo">
                <img src="./images/sema_logo.svg" alt="서울시립미술관 로고" />
              </div>
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
};
export default Publishing;
