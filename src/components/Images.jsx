import "../styles/images.css";

const Images = ({ caption, src }) => {
  return (
    <article className="Images">
      <figure>
        <img src={src} alt={caption} />
      </figure>
      <div className="images_hover design_hover">
        <div>
          <h5>{caption}</h5>
        </div>
      </div>
    </article>
  );
};

export default Images;
