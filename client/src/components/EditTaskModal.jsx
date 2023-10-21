import React from 'react'
import {Link , useNavigate, useParams} from 'react-router-dom'

function EditTaskModal() {
  const {id} = useParams
  return (
    <div>

      <input type="text" />
      <input type="text" />
      <button>edit</button>
      <button>cancel</button>

    </div>
  )
}

export default EditTaskModal