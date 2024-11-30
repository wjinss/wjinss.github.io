import "../styles/Contact.css";
import Button from "./Button";

const Contact = () => {
  return (
    <section className="contact" id="CONTACT">
      <div className="sec_in">
        <div className="contact_box">
          <h3>CONTACT</h3>
          <div className="contact_wrap">
            <div className="contact_txt_wrap">
              <p className="con_tit p_bold">
                소통을 기반으로 배우면서 성장하는{" "}
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
                action="#"
                method="post"
                className="form_wrap"
                id="contact_form"
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
};
export default Contact;
