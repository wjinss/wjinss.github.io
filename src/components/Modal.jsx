import "../styles/Modal.css";
import Button from "./Button";

const Modal = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;
  return (
    <div className={`${className} modal_overlay`} onClick={onClose}>
      <Button className={`modal_close`} onClick={onClose}>
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
