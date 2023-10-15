import {useState} from 'react'
import '../css/sidebar.css';


function Sidebar(props) {
  return (
    <>
    <aside className='sidebar'>

        <div className='sidebar-row1'>
          <div className='profile-container'>
            <h5 className='profile-letter'>{props.userimg}</h5>
          </div>
          
          {props.username}
          <i class="fa-regular fa-bell"></i>
          <i class="fa-regular fa-window-maximize fa-rotate-90"></i>
        </div>

        <button className='btn btn-success add-task-btn '><i class="fa-solid fa-plus"></i>Add Task</button>

        <div className='sidebar-btns'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <h5>SEARCH</h5>
        </div>
       
        <div className='sidebar-btns'>
          <i class="fa-solid fa-inbox"></i>
          <h5>INBOX</h5>
        </div>

        <div className='sidebar-btns'>
          <i class="fa-solid fa-calendar-days"></i>
          <h5>UPCOMING</h5>
        </div>

        <div className='sidebar-btns'>
        <i class="fa-solid fa-calendar-day"></i>
          <h5>TODAY</h5>
        </div>

        <div className='sidebar-btns'>
        <i class="fa-solid fa-tags"></i>
          <h5>Filters & Labels</h5>
        </div>

        <hr className='sidebar-hr'/>

        <div className='sidebar-row2'>
          <h5>Projects</h5><i class="fa-solid fa-plus"></i>
        </div>
        
    </aside>
    </>
  )
}

export default Sidebar