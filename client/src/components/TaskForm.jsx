import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import InputGroup from 'react-bootstrap/InputGroup'
import { Icon} from '@iconify-icon/react';
import '../css/taskform.css'
// import ModalDialog from 'react-bootstrap/ModalDialog'


const Task_Form = () =>{

            const [show, setShow] = useState(false);

            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);

    return(
        <>
            <Button variant="primary" onClick={handleShow}>
                Open Modal
            </Button>

        <Modal show={show} onHide={handleClose} className='modal_container'
            size='xl'
            contentClassName='modal-content'
            dialogClassName='modal-dialog'
            backdrop='static'
         >
        <Modal.Body >
            <Stack closeButton>
            <div className='modalHeader'>
                <p><Icon icon='mingcute:inbox-2-line'></Icon> Inbox</p>
            </div>
            
            <div className='pb-3'>
                <div className='modalTitle' >
                    <input  className='form-check-input' type="radio" aria-label="radio 1"/>
                    <input className='inputTitle' type="text" placeholder='Title'/>
                    
                </div>
                <div>
                    <input className='inputDesc' type="text" placeholder=' &#10609; Description'/>
                </div>
            </div>
            <hr />
            <div className="pb-3">
                <Form.Group>
                <Form.Control as="textarea" rows={3} placeholder='Comment'/>
                </Form.Group>
            </div>
            <div className="modal-btn">
            <Button onClick={handleClose} variant='secondary'>Close</Button>
            <Button onClick={handleClose}  type='submit' variant='success'>Save</Button>
            </div>
            </Stack>

        </Modal.Body>


        </Modal>



        </>
    )
}

export default Task_Form;
