import Header from "./Header";
import Visual from "./Visual";
import About from "./About";
import Publishing from "./Publishing";
import Design from "./Design";
import Coding from "./Coding";
import Contact from "./Contact";
import Footer from "./Footer";
import Button from "./Button";
import { useState, useEffect } from "react";

const Layout = () => {
  const [vw, setVw] = useState(window.innerWidth);
  const delay = 200;
  let timer = null;

  useEffect(() => {
    const handleResize = () => {
      setVw(window.innerWidth);

      clearTimeout(timer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timer = setTimeout(() => {
        if (vw >= 1100) {
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
    };
  }, [vw]);

  const style = {
    position: "relative",
  };
  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Layout bgcolor" style={style}>
      <Header />
      <div id="container">
        <Visual />
        <About />
        <Publishing />
        <Design />
        <Coding />
        <Contact />
      </div>
      <Footer />
      <Button className={"TOP"} onClick={handleTopClick} />
    </div>
  );
};
export default Layout;
