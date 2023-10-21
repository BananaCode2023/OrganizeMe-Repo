import React from 'react';
import '../css/taskModal.css'
import orgIcon from '../assets/orgicon.png'
import starIcon from '../assets/staricon.png'
import axios from 'axios'
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function TaskModal({ closeModal }) {
  const navigate = useNavigate()

  const [addTask, setAddTask] = useState({
    task_title: '',
    task_description: '',
    userId: window.localStorage.getItem("id")
  })

  const handleAddTask = (event) => {
    const {name,value} = event.target
    setAddTask({...addTask, [name]:value})
  }

 

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost:3333/tasklist/create-task', addTask)
      .then(result => {
      toast.success('Added Task')
     
      })
      .catch(err => console.log(err))
      setTimeout(() => {
        location.reload();
      }, 1000)
  }


  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <div className="modal-content">
        
          <div className='task-input'>
            
              <input 
              type="text" 
              name="task_title" 
              id="task-title" 
              placeholder='TASK TITLE'
              onChange={handleAddTask}
              />

              <input 
              type="text" 
              name="task_description" 
              id="task-input" 
              placeholder='Task Description'
              onChange={handleAddTask}
              />
          
          </div>
        
          
          <div className='modal-btns'>
            <li className='modal-btn org-when'>
              <img src={orgIcon} style={{width: '12px', marginRight: '5px'}}/>
              Today
            </li>
            <li className='modal-btn priority-btn'>
              <img src={starIcon} style={{width: '12px', marginRight: '5px'}}/>
              Priority
            </li>
            <li className='modal-btn'>
              Category
            </li>
          </div>

          <hr />

          <div className='modal-add-cancel-btns'> 
            <button className="close-modal modal-cancel-btn" onClick={closeModal}>Cancel</button>
            <button className="btn btn-success modal-add-btn" type='submit'>Add Task</button>
          </div>
        
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
