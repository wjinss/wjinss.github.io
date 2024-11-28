import Header from "./Header";
import Visual from "./Visual";
import About from "./About";
import Publishing from "./Publishing";
import Art from "./Art";
import Contact from "./Contact";
import Footer from "./Footer";
import Button from "./Button";

const Layout = () => {
  const style = {
    position: "relative",
  };
  return (
    <div className="Layout bgcolor" style={style}>
      <Header />
      <div id="container">
        <Visual />
        <About />
        <Publishing />
        <Art />
        <Contact />
      </div>
      <Footer />
      <Button
        type={""}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
};
export default Layout;
