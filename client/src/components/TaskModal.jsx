import React from 'react';
import '../css/taskModal.css'
import orgIcon from '../assets/orgicon.png'
import starIcon from '../assets/staricon.png'

function TaskModal({ closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className='task-input'>
          <input type="text" name="" id="" placeholder='TASK TITLE'/>
          <input type="text" name="" id="" placeholder='Task Description'/>
        </div>
        
        <div className='modal-btns'>
          <button className='modal-btn org-when'>
            <img src={orgIcon} style={{width: '12px', marginRight: '5px'}}/>
            Organize When
          </button>
          <button className='modal-btn priority-btn'>
            <img src={starIcon} style={{width: '12px', marginRight: '5px'}}/>
            Priority
          </button>
          <button className='modal-btn'>Category</button>
        </div>

        <hr />

        <div className='modal-add-cancel-btns'> 
          <button className="close-modal modal-cancel-btn" onClick={closeModal}>Cancel</button>
          <button className="btn btn-success modal-add-btn">Add Task</button>
        </div>
       
      </div>
    </div>
  );
}

export default TaskModal;
