import React from 'react'
import './Topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import poster from '../ssets/poster6.jpg'
import { useNavigate } from 'react-router-dom';



export default function Topbar() {
  const navigate = useNavigate()

  const handleprofile =() =>{
    navigate(window.location.pathname === "/profile" ? "/home" : "/profile");

  }
  return (
    <div className='topbarcontainer'>
        <div className="topbarleft">
          <span className="logo">Connect Here</span>
        </div>

        <div className="topbarcenter">
          <div className='searchbar'>
        <SearchIcon className='searchicon'/>
        <input className='searchinput' placeholder='search for friends, posts here'></input>
        </div>
        </div>

        <div className="topbarright">
          <div className="topbarlinks">
           <span className='topbarlink'> Homepage</span>
           <span className='topbarlink'> Timeline</span>

          </div>
          <div className="topbaricons">
            <div className="topbariconitem">
            <PersonIcon />
            <span className='topbarbadge'>1</span>
            </div>
            <div className="topbariconitem">
              <ChatIcon/>
            <span className='topbarbadge'>1</span>
            </div>
            <div className="topbariconitem">
              <NotificationsOutlinedIcon/>
            <span className='topbarbadge'>1</span>
            </div>

          </div>
          <img className="topbarimg"src={poster} alt="poster"  onClick={handleprofile}></img>
        </div>
    </div>
  )
}
