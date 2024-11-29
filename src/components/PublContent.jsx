import "../styles/PublContent.css";
import { getPublishingImage } from "../util/getPublishingImage.jsx";
import { getToolsIcon } from "../util/getToolsIcon.jsx";

const PublContent = (publ) => {
  console.log(publ);
  return (
    <div key={publ.id} className={`web_content web${publ.id}`}>
      <div className="web_bg">
        <div className="web_txt_wrap">
          <h4 className="web_tit p_bold">{publ.title}</h4>
          <ul>
            <li className="web_txt_list">{publ.explain}</li>
            <li className="web_txt_list">{publ.period}</li>
            <li className="web_txt_list">{publ.part}</li>
            <li className="web_txt_list">
              {/* <div>
                {getToolsIcon.map((item) => {
                  <span>
                    <img src="" alt="" />
                  </span>;
                })}
              </div> */}
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
    </div>
  );
};
export default PublContent;
