import "../styles/PublContent.css";
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
  src,
  className,
  qrtxt,
}) => {
  return (
    <article
      key={id}
      className={`web_content web_${className}`}
      style={{
        backgroundImage: src,
      }}
    >
      <div className="web_bg">
        <div className="web_txt_wrap">
          <h4 className="web_tit p_bold">{title}</h4>
          <ul>
            <li className="web_txt_list">{explain}</li>
            <li className="web_txt_list">{period}</li>
            <li className="web_txt_list">{part}</li>
            <li className="web_txt_list">
              <div className="tool_wrap">
                {tools.map((item, idx) => (
                  <span key={idx} className="tool_icon">
                    <img src={getToolsIcon(item)} alt="툴 아이콘" />
                  </span>
                ))}
              </div>
            </li>
          </ul>
        </div>
        <div className="web_modal">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="web_link"
          >
            사이트 바로가기
            <span></span>
            <div className="web_logo">
              <img src={logo} alt="로고" />
            </div>
          </a>
        </div>
      </div>
    </article>
  );
};
export default PublContent;
