import './Online.css'

export default function Online({user}) {
  return (
    <ul className="rightfriendlist">
    <li className="rightfriend">
       <div className="rightbarprofileimagecontainer">
        <img  className="rightbarprofileimage"src={user?.profilepicture || ""} alt="" />
        <span className="rightbaronline"></span>
       </div>
       <span className="rightbarusername">{user?.username || ""}</span>

    </li>
   
    
  </ul>
  )
}
