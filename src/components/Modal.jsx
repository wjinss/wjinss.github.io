import "../styles/Modal.css";
import Button from "./Button";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no_scroll");
    } else {
      document.body.classList.remove("no_scroll");
    }
    return () => {
      document.body.classList.remove("no_scroll");
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className={`${className} modal_overlay`} onClick={onClose}>
      <Button type="button" className={`modal_close`} onClick={onClose}>
        <span></span>
        <span></span>
      </Button>
      <div
        className={`modal_content ${className}_modal`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
export default Modal;
