import "../styles/images.css";

const Images = ({ caption, src }) => {
  return (
    <div className="Images">
      <figure>
        <img src={src} alt={caption} />
      </figure>
      <div className="images_hover design_hover">
        <div>
          <h5>{caption}</h5>
        </div>
      </div>
    </div>
  );
};

export default Images;
