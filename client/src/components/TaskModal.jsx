import React from 'react';
import '../css/taskModal.css'
import orgIcon from '../assets/orgicon.png'
import starIcon from '../assets/staricon.png'
import axios from 'axios'
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function TaskModal({ closeModal }) {

  const [addTask, setAddTask] = useState({
    task_title: '',
    task_description: '',
    userId: window.localStorage.getItem("id")
  })

  const [addToday, setAddToday] = useState({today: ''})
  const [addPriority, setAddPriority] = useState({priority: ''})

  const handleAddTask = (e) => {
    const {name,value} = e.target
    setAddTask({...addTask, [name]:value})
    setAddToday({...addToday, [name]:value})
    setAddPriority({...addPriority, [name]:value})
  }

 

 

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3333/tasklist/create-task', addTask)
      .then(result => {
        toast.success('Added Task')
        setTimeout(() => {
          location.reload();
        }, 1000)
      })
      .catch(err => console.log(err))
      toast.error('Please add Task Title')
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
        
          
          {/* <div className='modal-btns'>
            <input 
            type="button" 
            className='modal-btn org-when' 
            name='today' 
            value='📆today' 
            onClick={handleAddTask} 
            />

            <input 
            type="button" 
            className='modal-btn priority-btn'
            name='priority'
            value='⭐priority'
            onClick={handleAddTask}
            />
            <select name="category" className='modal-btn'>
              <option>Categories</option>
              <option name='category' value="">Personal</option>
              <option value="">Health</option>
              <option value="">Education</option>
              <option value="">Fitness</option>
              <option value="">Work</option>
            </select>
          </div>

          <hr />

          <div className='modal-add-cancel-btns'> 
            <button className="close-modal modal-cancel-btn" onClick={closeModal}>Cancel</button>
            <button className="btn btn-success modal-add-btn" type='submit'>Add Task</button>
          </div> */}
        
        
        
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
       
    </form>
  </div>
  )
}

export default TaskModal;
