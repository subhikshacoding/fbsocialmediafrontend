import './left.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import poster1 from '../ssets/poster6.jpg'
import { rightperson } from '../dummydata/data';
import Closefriend from '../Closefriend/Closefriend';

export default function Left() {
  return (
    <div className='sidebarleft'> 
    <div className="sidebarwrapper">
        <ul className="sidebarlist">
            <li className="sidebarlistitem">
                <RssFeedIcon className='sidebaricon'/>
                <span className="sidebaritext">feed</span>
            </li>
        </ul>
        <ul className="sidebarlist">
            <li className="sidebarlistitem">
                <ChatIcon className='sidebaricon'/>
                <span className="sidebaritext">chats</span>
            </li>
        </ul>
        <ul className="sidebarlist">
            <li className="sidebarlistitem">
                <OndemandVideoIcon className='sidebaricon'/>
                <span className="sidebaritext">Videos</span>
            </li>
        </ul>
        <ul className="sidebarlist">
            <li className="sidebarlistitem">
                <GroupIcon className='sidebaricon'/>
                <span className="sidebaritext">Group</span>
            </li>
        </ul>
        <ul className="sidebarlist">
            <li className="sidebarlistitem">
                <BookmarksIcon className='sidebaricon'/>
                <span className="sidebaritext">Bookmarks</span>
            </li>
        </ul>
        <ul className="sidebarlist">
            <li className="sidebarlistitem">
                <HelpOutlineIcon className='sidebaricon'/>
                <span className="sidebaritext">Questions</span>
            </li>
        </ul>
        <ul className="sidebarlist">
            <li className="sidebarlistitem">
                <WorkIcon className='sidebaricon'/>
                <span className="sidebaritext">jobs</span>
            </li>
        </ul>
        <ul className="sidebarlist">
            <li className="sidebarlistitem">
                <EventIcon className='sidebaricon'/>
                <span className="sidebaritext">Event</span>
            </li>
        </ul>
        <ul className="sidebarlist">
            <li className="sidebarlistitem">
                <SchoolIcon className='sidebaricon'/>
                <span className="sidebaritext">Courses</span>
            </li>
        </ul>
        <button className='sidebarbtn'>Show more</button>
        <hr className='sidebarhr'/>
        <ul className='sidebarfriendlist'>
            {rightperson.map(u =>(
                <Closefriend  key={u.id}user={u}/>
            ))}
            </ul>

       
       
    </div>
    </div>
  )
}
