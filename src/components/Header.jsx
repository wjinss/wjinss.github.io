import "../styles/Header.css";
import Button from "./Button";
const Header = () => {
  return (
    <header className="Header">
      <div className="in header_in">
        <h1 className="logo">
          <a href={"#Visual"}>
            <img src="../public/images/logo.svg" alt="" />
          </a>
        </h1>
        <div className="mobile_menu">
          <strong className="blind menu_txt">메뉴 열기</strong>
          <Button className="mmenu">
            <span className="burger"></span>
            <span className="burger"></span>
            <span className="burger"></span>
          </Button>
        </div>
        <nav className="mobile_wrap">
          <strong className="blind">메인 메뉴</strong>
          <ul className="gnb">
            <li>
              <a className="gnb_link" href={"#About"}>
                ABOUT ME
              </a>
            </li>
            <li>
              <a className="gnb_link" href={"#Publishing"}>
                PUBLISHING
              </a>
            </li>
            <li>
              <a className="gnb_link" href={"#Art"}>
                ART WORK
              </a>
            </li>
            <li>
              <a className="gnb_link" href={"#Contact"}>
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        <div className="gnb_bg"></div>
      </div>
    </header>
  );
};
export default Header;
