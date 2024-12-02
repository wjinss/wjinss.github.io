import "../styles/AboutList.css";
const AboutList = ({ title, text, subText }) => {
  return (
    <li className="about_txt">
      <p className="pro_tit p_bold">
        {title}
        <span className="maincolor">.</span>
      </p>
      <p className="pro_body">
        {text[0]}
        <span className="txt_sub">{subText[0]}</span>
      </p>
      <p className="pro_body">
        {text[1]}
        <span className="txt_sub">{subText[1]}</span>
      </p>
      <p className="pro_body">
        {text[2]}
        <span className="txt_sub">{subText[2]}</span>
      </p>
    </li>
  );
};
export default AboutList;
