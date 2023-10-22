import {useContext} from "react";
// import {UserContext} from '../../context/userContext'
import Sidebar from '../components/Sidebar'
import '../css/priorities.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import profIcon from '../assets/profile-icon.png'
import {toast} from 'react-hot-toast'
import '../css/today2.css'



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
      <div className="priorities-heading mb-4">
        <i className="fa-solid fa-calendar-day priorities-heading-icon"></i>
        <h1>Today</h1>
      </div>


      {tasklist.map(task => (
        <div>
            <div className='row priorities-list' 
                style={{display: 'flex', gap: '20px'}}
                id="myList"
              >
              <div className="col-10 Today_header">
                  <span 
                  onClick={() => taskDone(task._id)}
                  style={{cursor: 'pointer'}}
                  >
                  <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."></input>
                </span>
                <p><h4>{task.task_title}</h4></p>
              </div>
              <div className="col Today_icons">
                <span>
                  <i className="fa-regular fa-pen-to-square"></i>
                </span>
                <span onClick={() => deleteTask(task._id)}>
                  <i className="fa-regular fa-trash-can"></i>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col Today_section">
                <p>{task.task_description}</p>
                <div className="Today_section2">
                <span>{task.today}</span>
                <span>{task.priority}Priority</span>
                </div>
              </div>
            <hr />
            </div>
            
      </div>
      ))}

    </main>

    </div>
  )
}

export default Today2