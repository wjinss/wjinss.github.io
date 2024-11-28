import "../styles/Button.css";
const Button = ({ name, type, onClick, children, className }) => {
  return (
    <button
      type={type}
      className={`Button Button_${className}`}
      onClick={onClick}
      name={name}
    >
      {children}
    </button>
  );
};
export default Button;
