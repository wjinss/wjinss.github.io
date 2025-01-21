import "../styles/Header.css";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [action, setAction] = useState(false);
  const handleMMENUClick = () => {
    setAction(!action);
  };
  const [gnbs] = useState([
    { id: `gnb1`, title: `ABOUT` },
    { id: `gnb2`, title: `PUBLISHING` },
    { id: `gnb3`, title: `DESIGN` },
    { id: `gnb4`, title: `CODING` },
    { id: `gnb5`, title: `CONTACT` },
  ]);
  // nav클릭시 해당 섹션으로 이동
  const handleGnbClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    let targetEl = document.querySelector(target);
    if (targetEl) {
      const targetPos = targetEl.offsetTop - 55;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
    setAction(false);
  };

  // 스크롤 다운 헤더 사라짐, 스크롤 업 헤더 나타남
  const headerRef = useRef(null);
  useEffect(() => {
    const header = headerRef.current;
    const handleWheel = (e) => {
      if (window.innerWidth >= 1080) {
        if (e.deltaY < 0) {
          header.style.transform = "translateY(0)";
        } else {
          header.style.transform = "translateY(-100%)";
        }
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <header className="Header" ref={headerRef}>
      <div className="in header_in">
        <h1 className="logo">
          <a href={"#Visual"}>
            <img src={logo} alt="정우진의 포트폴리오" />
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
                  onClick={handleGnbClick}
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
