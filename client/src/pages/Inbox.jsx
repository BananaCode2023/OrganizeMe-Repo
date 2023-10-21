import {useContext} from "react";
import {UserContext} from '../../context/userContext'
import Sidebar from '../components/Sidebar'

function Inbox() {
  const {user} = useContext(UserContext)
  return (
    <>
      {/* <h1>Dashboard</h1>
      <h1>Ito yung part nung sa user app na</h1>
      {!!user && (<h2>Hi {user.username}!</h2>)} */}

    <Sidebar 
    userimg = {!!user && (<h4>{user.username.charAt(0).toUpperCase()}</h4>)}
    username= {!!user && (<h5>{user.username}</h5>)}/>
    </>
  )
}

export default Inbox