import "../styles/Modal.css";
import Button from "./Button";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        {children}
        <Button className={`modal_close`} onClick={onClose} />
      </div>
    </div>
  );
};
export default Modal;
