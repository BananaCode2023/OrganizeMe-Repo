import {useState} from 'react'
import '../css/sidebar.css';
import TaskModal from './TaskModal';


function Sidebar(props) {

  const [showBar, hideBar] = useState(false);

  const toggleSideBar = () => {
    hideBar(!showBar);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <>
    <aside className={`sidebar ${showBar ? '' : 'close'}` }>

        <div className='sidebar-row1'>
          <div className='profile-container'>
            <h5 className='profile-letter'>{props.userimg}</h5>
          </div>
          
          {props.username}
          <i class="fa-regular fa-bell"></i>
          <button  
            onClick={toggleSideBar} 
            id='sidebar-toggle'>
              <i class="fa-regular fa-window-maximize fa-rotate-90"></i>
          </button>

        </div>

        <button className= {
          `btn btn-success 
          add-task-btn 
          ${showBar ? 'close' : ''}`}
          onClick={openModal}
          >
            <i class="fa-solid fa-plus" id='moveSidebarButton'></i>Add Task
        </button>
        {isModalOpen && <TaskModal closeModal={closeModal} />}


        <div className='sidebar-btns search-bar'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <h5>SEARCH</h5>
        </div>

        <a href="/inbox">
          <div className='sidebar-btns inbox-bar'>
            <i class="fa-solid fa-inbox"></i>
            <h5>INBOX</h5>
          </div>
        </a>

        <a href="/upcoming">
          <div className='sidebar-btns upcoming-bar'>
            <i class="fa-solid fa-calendar-days"></i>
            <h5>UPCOMING</h5>
          </div>
        </a>

        <a href="/today">
          <div className='sidebar-btns today-bar'>
          <i class="fa-solid fa-calendar-day"></i>
            <h5>TODAY</h5>
          </div>
        </a>

        <a href="/filters_labels">
          <div className='sidebar-btns filter-bar'>
          <i class="fa-solid fa-tags"></i>
            <h5>Filters & Labels</h5>
          </div>
        </a>

        <hr className={`sidebar-hr ${showBar ? 'close' : ''}`}/>

        <div className={`sidebar-row2 ${showBar ? 'close' : ''}`}>
          <h5>Projects</h5><i class="fa-solid fa-plus"></i>
        </div>
        
    </aside>
    </>
  )
}

export default Sidebar