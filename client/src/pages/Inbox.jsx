import {useContext} from "react";
// import {UserContext} from '../../context/userContext'
import Sidebar from '../components/Sidebar'
import '../css/inbox.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


//Maglagay ng websocket para autoupdate

function Inbox() {
  // const {user} = useContext(UserContext)
  // const [tasklist, setTasklist] = useState([])



  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8000/tasklist/showTasks')
  //     .then((res) => {
  //       setTasklist(res.data.task_list)
  //       // console.log(res.data.task_list)
        
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //   })
  // },[])
  // const {id} = useParams()
  const userId = window.localStorage.getItem("id")

  const [tasklist, setTasklist] = useState([])
  // const [savedTasks, setSavedTasks] = useState([])

  useEffect(() => {
      axios
        .get('http://localhost:3333/tasklist/user-tasks/'+userId)
        .then(userTasks => {
          setTasklist(userTasks.data)
        })
        .catch(err => console.log(err))
  },[])



  
  
  

  return (
    <div className="inbox-page-container">
    <Sidebar 
    // userimg = {!!user && (<h4>{user.username.charAt(0).toUpperCase()}</h4>)}
    // username= {!!user && (<h5>{user.username}</h5>)}
    />

    <main className="inbox-page">
      <div className="inbox-heading">
        <i class="fa-solid fa-inbox inbox-heading-icon"></i>
        <h1>Inbox</h1>
      </div>

      {/* <div id="list">
        {tasklist.map((task) => (
          <ul>
            <li>{task.task_title}</li>
            <li>{task.task_description}</li>
          </ul>
        ))}
      </div> */}

  
      {tasklist.map(task => (
        <ul className="inbox-list">
          <li>{task.task_title}</li>
          <li>{task.task_description}</li>
        </ul>
      ))}
      
      
    
      

    </main>

    </div>
  )
}

export default Inbox