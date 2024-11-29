import "../styles/Header.css";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const [action, setAction] = useState(false);
  const handleMMENUClick = () => {
    setAction(!action);
  };
  const [gnbs] = useState([
    { id: `gnb1`, title: `ABOUT` },
    { id: `gnb2`, title: `PUBLISHING` },
    { id: `gnb3`, title: `ART` },
    { id: `gnb4`, title: `CONTACT` },
  ]);
  const handelGnbClick = (event) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute("href");
    let targetEl = document.querySelector(target);
    if (targetEl) {
      const targetPos = targetEl.offsetTop;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
    setAction(false);
  };

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
          <Button
            className={`MMENU ${action ? "active" : ""}`}
            onClick={handleMMENUClick}
          >
            <span className="burger"></span>
            <span className="burger"></span>
            <span className="burger"></span>
          </Button>
        </div>
        <nav className={`mobile_wrap ${action ? "active" : ""}`}>
          <strong className="blind">메인 메뉴</strong>
          <ul className="gnb">
            {gnbs.map((gnb) => (
              <li key={gnb.id}>
                <a
                  className="gnb_link"
                  href={`#${gnb.title}`}
                  onClick={handelGnbClick}
                >
                  {gnb.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="gnb_bg"></div>
      </div>
    </header>
  );
};
export default Header;
