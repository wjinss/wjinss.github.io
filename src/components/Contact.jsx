import "../styles/Contact.css";
import Button from "./Button";
import { useRef } from "react";
import { forwardRef } from "react";
import emailjs from "@emailjs/browser";
import config from "../../apikey";

const Contact = forwardRef((props, ref) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const API_KEY_service_id = config.MAIL_API_KEY_service_id;
    const API_KEY_template_id = config.MAIL_API_KEY_template_id;
    const API_KEY_user_id = config.MAIL_API_KEY_user_id;

    emailjs
      .sendForm(
        API_KEY_service_id,
        API_KEY_template_id,
        form.current,
        API_KEY_user_id
      )
      .then(
        () => {
          alert("메일을 성공적으로 보냈습니다!!");
          form.current.reset();
        },
        (error) => {
          alert("메일을 보내는데 실패했습니다...", error.text);
        }
      );
  };

  return (
    <section className="Contact" id="CONTACT" ref={ref}>
      <div className="sec_in">
        <div className="contact_box">
          <h3>CONTACT</h3>
          <div className="contact_wrap">
            <div className="contact_txt_wrap">
              <p className="con_tit p_bold">
                소통을 기반으로 배우면서 성장하는_
                <span className="pc_br">
                  웹 퍼블리셔가 필요하시면 메일을 보내주세요!
                </span>
              </p>
              <p className="con_txt">E-Mail: aastu4343@gmail.com</p>
              <p className="con_txt">Tel. +82 10 8455 2135</p>
            </div>
            <div className="form_main">
              <p className="mail">
                <span></span>
                메일 보내기
              </p>
              <form
                className="form_wrap"
                id="contact_form"
                onSubmit={sendEmail}
                ref={form}
              >
                <div className="input_box">
                  <input
                    type="text"
                    name="from_name"
                    id="from_name"
                    autoComplete="off"
                    className="form"
                    required
                  />
                  <label className="label" htmlFor="from_name">
                    Name
                  </label>
                </div>
                <div className="input_box">
                  <input
                    type="text"
                    name="from_email"
                    id="from_email"
                    autoComplete="off"
                    className="form"
                    required
                  />
                  <label className="label" htmlFor="from_email">
                    Email
                  </label>
                </div>
                <div className="input_box">
                  <textarea
                    name="from_message"
                    id="from_message"
                    title="내용을 입력해주세요."
                    className="form textarea"
                    required
                  ></textarea>
                  <label className="label textLabel" htmlFor="from_message">
                    Comments
                  </label>
                </div>
                <div>
                  <Button
                    type={"submit"}
                    name={"submit"}
                    className={`Button Button_${"SEND"}  p_bold`}
                  >
                    <span></span>
                    <p>SEND</p>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
Contact.displayName = "Contact";

export default Contact;
