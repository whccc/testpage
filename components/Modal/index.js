import Modal from "react-bootstrap/Modal";
export const Modals = ({ Show, children, onHiden }) => {
  return (
    <Modal show={Show} onHide={onHiden}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
