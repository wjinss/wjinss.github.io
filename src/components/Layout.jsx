import Header from "./Header";
import Visual from "./Visual";
import About from "./About";
import Publishing from "./Publishing";
import Design from "./Design";
import Contact from "./Contact";
import Footer from "./Footer";
import Button from "./Button";

const Layout = () => {
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
        <Contact />
      </div>
      <Footer />
      <Button className={"TOP"} onClick={handleTopClick} />
      {/* <div className="modal">
        <figure>
          <div className="modal_image">
            <img src={``} alt="" />
          </div>
        </figure>
      </div> */}
    </div>
  );
};
export default Layout;
