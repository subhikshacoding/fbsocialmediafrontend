
import './closefriend.css'

export default function Closefriend({user}) {
  return (
    <li className="sidebarfriendlistitem">
        <img className='sidebarfriendimage' src={user?.profilepicture || ""} alt='friend'></img>
        <span className="sidebarfriendname">{user?.username || ""}</span>
    </li>
            

  )
}
