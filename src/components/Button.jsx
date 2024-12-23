import "../styles/Button.css";
import { forwardRef } from "react";
const Button = forwardRef(
  ({ name, type, onClick, children, className }, ref) => {
    return (
      <button
        type={type}
        className={`Button Button_${className}`}
        onClick={onClick}
        name={name}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
