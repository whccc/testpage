import Modal from 'react-bootstrap/Modal'
import React from 'react'
interface ContModal {
  Show: boolean
  children: React.ReactNode
  onHiden
}
export const Modals: React.FC<ContModal> = ({ Show, children, onHiden }) => {
  return (
    <Modal show={Show} onHide={onHiden}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}
