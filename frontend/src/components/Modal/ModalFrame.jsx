import { createPortal } from "react-dom";
import "./ModalFrame.css";
import { useEffect } from "react";

const ModalFrame = ({ children, onClose }) => {
  useEffect(() => {
    // Disables the scrolling when the modal mounts
    document.body.style.overflow = "hidden";

    return () => {
      // Enables the scrolling when the modal unmounts
      document.body.style.overflow = "unset";
    };
  }, []);

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
