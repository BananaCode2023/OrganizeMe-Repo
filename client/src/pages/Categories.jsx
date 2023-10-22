import {useContext} from "react";
// import {UserContext} from '../../context/userContext'
import Sidebar from '../components/Sidebar'
import '../css/categories.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import profIcon from '../assets/profile-icon.png'
import {toast} from 'react-hot-toast'
import EditModal from "../components/EditModal";



//Maglagay ng websocket para autoupdate

const Categories = () => {
  const userId = window.localStorage.getItem("id")

  //For getting the username of the currently logged in user
  const [username, setUsername] = useState([])
  useEffect(() => {
      axios
        .get('http://localhost:3333/auth/username/'+userId)
        .then(user => {
          setUsername(user.data)
        })
        .catch(err => console.log(err))
  }, [])
  
  //For getting the personal tasklist of the logged in user
  const [personalTasklist, setPersonalTasklist] = useState([])
  useEffect(() => {
      axios
        .get('http://localhost:3333/tasklist/category/personal/'+userId)
        .then(result => {
          setPersonalTasklist(result.data)
        })
        .catch(err => console.log(err))
  },[])
  
  //For getting the health tasklist of the logged in user
  const [healthTasklist, setHealthTasklist] = useState([])
  useEffect(() => {
      axios
        .get('http://localhost:3333/tasklist/category/health/'+userId)
        .then(result => {
          setHealthTasklist(result.data)
        })
        .catch(err => console.log(err))
  },[])

  //For getting the relationship tasklist of the logged in user
  const [relationshipTasklist, setRelationshipTasklist] = useState([])
  useEffect(() => {
      axios
        .get('http://localhost:3333/tasklist/category/relationship/'+userId)
        .then(result => {
          setRelationshipTasklist(result.data)
        })
        .catch(err => console.log(err))
  },[])

  //For getting the family tasklist of the logged in user
  const [familyTasklist, setFamilyTasklist] = useState([])
  useEffect(() => {
      axios
        .get('http://localhost:3333/tasklist/category/family/'+userId)
        .then(result => {
          setFamilyTasklist(result.data)
        })
        .catch(err => console.log(err))
  },[])

  //For getting the education tasklist of the logged in user
  const [educationTasklist, setEducationTasklist] = useState([])
  useEffect(() => {
      axios
        .get('http://localhost:3333/tasklist/category/education/'+userId)
        .then(result => {
          setEducationTasklist(result.data)
        })
        .catch(err => console.log(err))
  },[])

  //For getting the fitness tasklist of the logged in user
  const [fitnessTasklist, setFitnessTasklist] = useState([])
  useEffect(() => {
      axios
        .get('http://localhost:3333/tasklist/category/fitness/'+userId)
        .then(result => {
          setFitnessTasklist(result.data)
        })
        .catch(err => console.log(err))
  },[])

  //For getting the work tasklist of the logged in user
  const [workTasklist, setWorkTasklist] = useState([])
  useEffect(() => {
      axios
        .get('http://localhost:3333/tasklist/category/work/'+userId)
        .then(result => {
          setWorkTasklist(result.data)
        })
        .catch(err => console.log(err))
  },[])

  //For getting the others tasklist of the logged in user
  const [otherTasklist, setOtherTasklist] = useState([])
  useEffect(() => {
      axios
        .get('http://localhost:3333/tasklist/category/others/'+userId)
        .then(result => {
          setOtherTasklist(result.data)
        })
        .catch(err => console.log(err))
  },[])

  

  const deleteTask = (id) => {
    toast('Deleted Task', {
      icon: '🗑️',
    });
    axios
      .delete('http://localhost:3333/tasklist/delete/'+id)
      .then(result => {
        setTimeout(() => {
          location.reload();
        }, 1000)
      })
      .catch(err => console.log(err))
  }

  const taskDone = (id) => {
    toast('Congratulations on finishing this task', {
      icon: '🥳',
    });
    axios
      .delete('http://localhost:3333/tasklist/delete/'+id)
      .then(result => {
        setTimeout(() => {
          location.reload();
        }, 1000)
      })
      .catch(err => console.log(err))
  }

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const openEditModal = (taskId) => {
    setIsEditModalOpen(true)
      window.localStorage.setItem('taskId', taskId)
  }
  const closeEditModal = () => {
    setIsEditModalOpen(false)
  }

  
  return (
    <div className="categories-page-container">
    <Sidebar 
    userimg = {profIcon}
    username = {username.username}
    />

    <main className="categories-page">
      <div className="categories-heading">
        <i className="fa-solid fa-layer-group categories-heading-icon"></i>
        <h1>Categories</h1>
      </div>

      {isEditModalOpen && <EditModal closeEditModal={closeEditModal} />}
      <h6 className="category-title">Personal Care</h6>
      <hr />
        {personalTasklist.map(task => (
          <div>
          <ul 
          className="categories-list" 
          style={{display: 'flex', gap: '20px'}}
          id="myList"
          >
            <li 
            onClick={() => taskDone(task._id)}
            style={{cursor: 'pointer'}}
            >
              <i class="fa-regular fa-circle"></i>
            </li>

            <div>
            <li>{task.task_title}</li>
            <li className="task-desc"><small>{task.task_description}</small></li>
            <div style={{display: 'flex', gap: '5px'}}>
              <li className="task-categ"><small>{task.category}</small></li>
            </div>
            
            </div>

          
            <li onClick={() => openEditModal(task._id)}>
              <i class="fa-regular fa-pen-to-square"></i>
            </li>

            <li onClick={() => deleteTask(task._id)}>
              <i class="fa-regular fa-trash-can"></i>
            </li>
          </ul>
              <hr />
              </div>
        ))}

      <h6 className="category-title">Health</h6>
      <hr />
        {healthTasklist.map(task => (
          <div>
          <ul 
          className="categories-list" 
          style={{display: 'flex', gap: '20px'}}
          id="myList"
          >
            <li 
            onClick={() => taskDone(task._id)}
            style={{cursor: 'pointer'}}
            >
              <i class="fa-regular fa-circle"></i>
            </li>

            <div>
            <li>{task.task_title}</li>
            <li className="task-desc"><small>{task.task_description}</small></li>
            <div style={{display: 'flex', gap: '5px'}}>
            <li className="task-categ"><small>{task.category}</small></li>
            </div>
            
            </div>

          
            <li onClick={() => openEditModal(task._id)}>
              <i class="fa-regular fa-pen-to-square"></i>
            </li>

            <li onClick={() => deleteTask(task._id)}>
              <i class="fa-regular fa-trash-can"></i>
            </li>
          </ul>
              <hr />
              </div>
        ))}

      <h6 className="category-title">Relationship</h6>
      <hr />
        {relationshipTasklist.map(task => (
          <div>
          <ul 
          className="categories-list" 
          style={{display: 'flex', gap: '20px'}}
          id="myList"
          >
            <li 
            onClick={() => taskDone(task._id)}
            style={{cursor: 'pointer'}}
            >
              <i class="fa-regular fa-circle"></i>
            </li>

            <div>
            <li>{task.task_title}</li>
            <li className="task-desc"><small>{task.task_description}</small></li>
            <div style={{display: 'flex', gap: '5px'}}>
            <li className="task-categ"><small>{task.category}</small></li>
            </div>
            
            </div>

          
            <li onClick={() => openEditModal(task._id)}>
              <i class="fa-regular fa-pen-to-square"></i>
            </li>

            <li onClick={() => deleteTask(task._id)}>
              <i class="fa-regular fa-trash-can"></i>
            </li>
          </ul>
              <hr />
              </div>
        ))}

      <h6 className="category-title">Family</h6>
      <hr />
        {familyTasklist.map(task => (
          <div>
          <ul 
          className="categories-list" 
          style={{display: 'flex', gap: '20px'}}
          id="myList"
          >
            <li 
            onClick={() => taskDone(task._id)}
            style={{cursor: 'pointer'}}
            >
              <i class="fa-regular fa-circle"></i>
            </li>

            <div>
            <li>{task.task_title}</li>
            <li className="task-desc"><small>{task.task_description}</small></li>
            <div style={{display: 'flex', gap: '5px'}}>
              <li className="task-categ"><small>{task.category}</small></li>
            </div>
            
            </div>

          
            <li onClick={() => openEditModal(task._id)}>
              <i class="fa-regular fa-pen-to-square"></i>
            </li>

            <li onClick={() => deleteTask(task._id)}>
              <i class="fa-regular fa-trash-can"></i>
            </li>
          </ul>
              <hr />
              </div>
        ))}

      <h6 className="category-title">Education</h6>
      <hr />
        {educationTasklist.map(task => (
          <div>
          <ul 
          className="categories-list" 
          style={{display: 'flex', gap: '20px'}}
          id="myList"
          >
            <li 
            onClick={() => taskDone(task._id)}
            style={{cursor: 'pointer'}}
            >
              <i class="fa-regular fa-circle"></i>
            </li>

            <div>
            <li>{task.task_title}</li>
            <li className="task-desc"><small>{task.task_description}</small></li>
            <div style={{display: 'flex', gap: '5px'}}>
              <li className="task-categ"><small>{task.category}</small></li>
            </div>
            
            </div>

          
            <li onClick={() => openEditModal(task._id)}>
              <i class="fa-regular fa-pen-to-square"></i>
            </li>

            <li onClick={() => deleteTask(task._id)}>
              <i class="fa-regular fa-trash-can"></i>
            </li>
          </ul>
              <hr />
              </div>
        ))}

      <h6 className="category-title">Fitness</h6>
      <hr />
        {fitnessTasklist.map(task => (
          <div>
          <ul 
          className="categories-list" 
          style={{display: 'flex', gap: '20px'}}
          id="myList"
          >
            <li 
            onClick={() => taskDone(task._id)}
            style={{cursor: 'pointer'}}
            >
              <i class="fa-regular fa-circle"></i>
            </li>

            <div>
            <li>{task.task_title}</li>
            <li className="task-desc"><small>{task.task_description}</small></li>
            <div style={{display: 'flex', gap: '5px'}}>
              <li className="task-categ"><small>{task.category}</small></li>
            </div>
            
            </div>

          
            <li onClick={() => openEditModal(task._id)}>
              <i class="fa-regular fa-pen-to-square"></i>
            </li>

            <li onClick={() => deleteTask(task._id)}>
              <i class="fa-regular fa-trash-can"></i>
            </li>
          </ul>
              <hr />
              </div>
        ))}

      <h6 className="category-title">Work</h6>
      <hr />
        {workTasklist.map(task => (
          <div>
          <ul 
          className="categories-list" 
          style={{display: 'flex', gap: '20px'}}
          id="myList"
          >
            <li 
            onClick={() => taskDone(task._id)}
            style={{cursor: 'pointer'}}
            >
              <i class="fa-regular fa-circle"></i>
            </li>

            <div>
            <li>{task.task_title}</li>
            <li className="task-desc"><small>{task.task_description}</small></li>
            <div style={{display: 'flex', gap: '5px'}}>
              <li className="task-categ"><small>{task.category}</small></li>
            </div>
            
            </div>

          
            <li onClick={() => openEditModal(task._id)}>
              <i class="fa-regular fa-pen-to-square"></i>
            </li>

            <li onClick={() => deleteTask(task._id)}>
              <i class="fa-regular fa-trash-can"></i>
            </li>
          </ul>
              <hr />
              </div>
        ))}

      <h6 className="category-title">Others</h6>
      <hr />
        {otherTasklist.map(task => (
          <div>
          <ul 
          className="categories-list" 
          style={{display: 'flex', gap: '20px'}}
          id="myList"
          >
            <li 
            onClick={() => taskDone(task._id)}
            style={{cursor: 'pointer'}}
            >
              <i class="fa-regular fa-circle"></i>
            </li>

            <div>
            <li>{task.task_title}</li>
            <li className="task-desc"><small>{task.task_description}</small></li>
            <div style={{display: 'flex', gap: '5px'}}>
              <li className="task-categ"><small>{task.category}</small></li>
            </div>
            
            </div>

          
            <li onClick={() => openEditModal(task._id)}>
              <i class="fa-regular fa-pen-to-square"></i>
            </li>

            <li onClick={() => deleteTask(task._id)}>
              <i class="fa-regular fa-trash-can"></i>
            </li>
          </ul>
              <hr />
              </div>
        ))}

    </main>

    </div>
  )
}

export default Categories