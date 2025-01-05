import { useEffect } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function ImageModal({ selectedImg, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      {selectedImg && (
        <div>
          <img
            src={selectedImg.urls.regular}
            alt={selectedImg.alt_description}
          />
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </Modal>
  );
}
