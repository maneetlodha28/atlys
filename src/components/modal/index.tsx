import React from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleOutsideClick = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).id === "modal-overlay") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body // Attach the modal to the end of the body
  );
};

export default Modal;
