import { useState } from "react";
import "../css/submit-btn.css?=1";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import { Icon } from "@iconify/react";

const SubscribeModal = () => {
  // Modal Animation
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setIsValid(true);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Subscribe
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className="modal-overlay"
        contentClassName="modal-content"
        dialogClassName="modal-dialog"
        backdrop="static"
      >
        <Modal.Body>
          <Stack closeButton>
            <div className="modalHeader">
              <Icon icon="line-md:clipboard-check"></Icon>
            </div>
            <div className="modalTitle text-center">
              <p className="inputTitle text-center">
                Thank You for Subscribing!
              </p>
              <p>
                <b>
                  Your email has been confirmed, we will update you shortly.{" "}
                </b>
              </p>
              <button onClick={handleClose} className="btn btn-success">
                Close
              </button>
            </div>
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SubscribeModal;
