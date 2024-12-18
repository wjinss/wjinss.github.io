import "../styles/Modal.css";
import Button from "./Button";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal_overlay" onClick={onClose}>
      <Button className={`modal_close`} onClick={onClose}>
        <span></span>
        <span></span>
      </Button>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default Modal;
