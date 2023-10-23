import { useState } from "react";
import "../css/submit-btn.css?=1";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import { Icon } from "@iconify/react";

const Submit_btn = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleClose = () => {
    setShow(false);
    setIsValid(true); 
  };
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValidEmail = email.match(emailRegex);

    if (isValidEmail) {
      console.log("Email is valid:", email);
      handleClose();
    } else {
      setIsValid(false);
    }
  };

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
        // style={z-indexedDB}
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
            </div>

            <div className="modal-btn">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {!isValid && (
                <p className="text-danger">Please enter a valid email address</p>
              )}
              <button onClick={handleSubmit} type="button" className="btn btn-success">
                Okay
              </button>
            </div>
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Submit_btn;
