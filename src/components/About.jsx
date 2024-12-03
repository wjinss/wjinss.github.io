import "../styles/About.css";
import { useState } from "react";
import getAboutList from "../util/getAboutList";
import AboutList from "./AboutList";

const About = () => {
  const [abouts] = useState(getAboutList);
  return (
    <section className="About" id="ABOUT">
      <div className="about_bg">
        <div className="in sec_in">
          <h3>ABOUT ME</h3>
          <div className="about_wrap">
            <div className="about_tit">
              <p className="name_ko p_bold">정우진</p>
              <p className="name_en">JEONG WOO JIN</p>
              <div className="about_img">
                <img
                  src="/public/images/profile_img01.png"
                  alt="프로필 이미지"
                />
              </div>
            </div>
            <ul className="about_txt_box">
              {abouts.map((about) => (
                <AboutList
                  key={about.id}
                  title={about.title}
                  text={about.text}
                  subText={about.subText}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
