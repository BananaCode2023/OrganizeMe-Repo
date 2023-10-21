import React from 'react';
import '../css/index.css'

import Sidebar from '../components/Sidebar';
// icons for fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// icons for iconify
import {Icon} from '@iconify-icon/react';
import filters_labels from 'iconify-icon/react/ic:round-today';
import collapse_icon from '@iconify-icon/react/pajamas:labels';


const FiltersLabels = () =>{

    return(
        <>
                <Sidebar 
                userimg = {!!user && (<h4>{user.username.charAt(0).toUpperCase()}</h4>)}
                username= {!!user && (<h5>{user.username}</h5>)}
                />
  

            <div className=" row mb-3 Filters_container">
                <p className='Today_title'><Icon icon={filters_labels} />Filters & Labels</p>
            
                <div className="row mb-3 collapse" id='showFilters'>
                    <div className="Today_subcontainer Filters">
                    <p className='Today_subtitle'>
                        <button className='Today_subtitle-btn' type='button'role='button' aria-expanded="false" data-bs-toggle='collapse' data-bs-target='#collapseOne'>
                            <icon icon={collapse_icon}/>Filters
                        </button>
                    </p>
                    </div>
                    <div id='collapseOne' className='Today'>
                        <div className="today_body">
                            <p>Add Task here</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row mb-3 collapse" id='showLabels'>
                    <div className="Today_subcontainer Labels">
                    <p className='Today_subtitle'>
                        <button className='Today_subtitle-btn' type='button'role='button' aria-expanded="false" data-bs-toggle='collapse' data-bs-target='#collapseTwo'>
                        <icon icon={collapse_icon}/>Labels
                        </button>
                    </p>
                    </div>
                    <div id='collapseTwo' className='Today'>
                        <div className="today_body">
                            <p>Add Task here</p>
                        </div>
                    </div>
                </div>
                <br />
            </div>


        </>

    )
}

export default FiltersLabels;