import { createPortal } from "react-dom";
import "./ModalFrame.css";

const ModalFrame = ({ children, onClose }) => {
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default ModalFrame;
