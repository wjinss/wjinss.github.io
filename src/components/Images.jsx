import "../styles/images.css";

const Images = ({ caption, src, onClick, className }) => {
  return (
    <article className={`${className}_layout Images`} onClick={onClick}>
      <figure>
        <img src={src} alt={caption} />
      </figure>
      <div className={`${className}_hover`}>
        <div>
          <h5>{caption}</h5>
        </div>
      </div>
    </article>
  );
};

export default Images;
