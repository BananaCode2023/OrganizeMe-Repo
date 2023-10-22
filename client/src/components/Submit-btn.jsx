
import { useState } from 'react';
import '../css/submit-btn.css?=1'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import { Icon} from '@iconify/react';

const Submit_btn = () =>{

            const [show, setShow] = useState(false);

            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
            

    return(
        <>
            <Button variant="success" onClick={handleShow}>
                Subscribe
            </Button>

            <Modal show={show} onHide={handleClose} className='modal-overlay'
                contentClassName='modal-content'
                dialogClassName='modal-dialog'
                backdrop='static'
                // style={z-indexedDB}
            >
            <Modal.Body >
            <Stack closeButton>
                <div className='modalHeader'>
                    <Icon icon='line-md:clipboard-check'></Icon>
                </div>
                    <div className='modalTitle text-center' >
                        <p className='inputTitle text-center'>Thank You for Subscribing!</p>
                        <p><b>Your email has been confirmed, we will update you shortly. </b></p>
                    </div>

                <div className="modal-btn">
                <button onClick={handleClose}  type='button' className='btn btn-success'>Okay</button>
                </div>
            </Stack>
            </Modal.Body>
            </Modal>



        </>
    )
}

export default Submit_btn;
