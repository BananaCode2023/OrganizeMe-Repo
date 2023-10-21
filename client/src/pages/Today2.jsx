import {useContext} from "react";
// import {UserContext} from '../../context/userContext'
import Sidebar from '../components/Sidebar'
import '../css/priorities.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import profIcon from '../assets/profile-icon.png'
import {toast} from 'react-hot-toast'



//Maglagay ng websocket para autoupdate

const Today2 = () => {
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
  
  //For getting the tasklist of the logged in user
  const [tasklist, setTasklist] = useState([])
  useEffect(() => {
      axios
        .get('http://localhost:3333/tasklist/today/'+userId)
        .then(userTasks => {
          setTasklist(userTasks.data)
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

  return (
    <div className="priorities-page-container">
    <Sidebar 
    userimg = {profIcon}
    username = {username.username}
    />

    <main className="priorities-page">
      <div className="priorities-heading">
        <i class="fa-solid fa-calendar-day priorities-heading-icon"></i>
        <h1>Today</h1>
      </div>


      {tasklist.map(task => (
        <div>
        <ul 
        className="priorities-list" 
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
          <li><strong>{task.task_title}</strong></li>
          <li>{task.task_description}</li>
          <div style={{display: 'flex', gap: '5px'}}>
            <li>{task.today}</li>
            <li>{task.priority}</li>
          </div>
          
          </div>

        
          <li>
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

export default Today2