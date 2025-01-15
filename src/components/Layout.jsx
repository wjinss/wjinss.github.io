import Header from "./Header";
import Visual from "./Visual";
import About from "./About";
import Publishing from "./Publishing";
import Design from "./Design";
import Coding from "./Coding";
import Contact from "./Contact";
import Footer from "./Footer";
import Button from "./Button";
import { useState, useEffect, useRef } from "react";

const Layout = () => {
  const [vw, setVw] = useState(window.innerWidth);
  const btnTopRef = useRef(null);
  const contactRef = useRef(null);
  const delay = 200;
  const timerRef = useRef(null);

  // 리사이즈 이벤트 및 1080해상도에서 헤더 변경
  useEffect(() => {
    const handleResize = () => {
      setVw(window.innerWidth);

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        if (vw >= 1080) {
          const header = document.querySelector(".Header");
          const mobileWrap = document.querySelector(".mobile_wrap");
          const mmenu = document.querySelector(".MMENU");

          if (header) header.classList.remove("fixed");
          if (mobileWrap) mobileWrap.classList.remove("active");
          if (mmenu) mmenu.classList.remove("active");
        }
      }, delay);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [vw]);

  // 푸터 영역 나오면 탑버튼 보여짐
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (btnTopRef.current && contactRef.current) {
        const contactTop =
          contactRef.current.getBoundingClientRect().top + window.scrollY;
        btnTopRef.current.classList.toggle("active", scroll >= contactTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 탑버튼 클릭
  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Layout bgcolor">
      <Header />
      <div id="container">
        <Visual />
        <About />
        <Publishing />
        <Design />
        <Coding />
        <Contact ref={contactRef} />
      </div>
      <Footer />
      <Button className={"TOP"} ref={btnTopRef} onClick={handleTopClick} />
    </div>
  );
};
export default Layout;
