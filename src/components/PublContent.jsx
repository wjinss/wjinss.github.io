import "../styles/PublContent.css";
import { getPublishingImage } from "../util/getPublishingImage.js";
import { getToolsIcon } from "../util/getToolsIcon.js";

const PublContent = ({
  id,
  title,
  explain,
  period,
  part,
  tools,
  href,
  logo,
}) => {
  const bgStyle = {
    backgroundImage: `url(${getPublishingImage(id)})`,
  };
  console.log(getPublishingImage(1));
  console.log(getPublishingImage(3)); // publishing1 경로 확인
  console.log(getPublishingImage(99));

  return (
    <div
      key={id}
      className={`web_content web${id}`}
      style={bgStyle}
      //   style={{ backgroundImage: `url(${getPublishingImage(id)})` }}
    >
      <div className="web_bg">
        <div className="web_txt_wrap">
          <h4 className="web_tit p_bold">{title}</h4>
          <ul>
            <li className="web_txt_list">{explain}</li>
            <li className="web_txt_list">{period}</li>
            <li className="web_txt_list">{part}</li>
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
          <a href={href} target="_blank" rel="noopener noreferrer">
            사이트 바로가기
            <div className="web_logo">
              <img src={logo} alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default PublContent;
