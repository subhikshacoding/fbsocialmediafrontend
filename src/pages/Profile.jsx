import './profile.css'
import Right from '../component/sidebarright/right'
import pose1 from '../component/ssets/pose4.jpg'
import pose2 from '../component/ssets/pose2.jpg'

import Feed from '../component/feed/feed' 
import Left from '../component/sidebarleft/left'
import Topbar from '../component/Topbar/Topbar'

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Left/>
        <div className="profileright">
            <div className="profilerighttop">
              <div className="profilecoverpicture">
                <img className='profilecoverimage' src={pose1}alt="" />
                <img  className=" profileuserimage"src={pose2}alt="" />

              </div>
              <div className="profileinfo">
                <h4 className='profileinfoname '>Karla</h4>
                <span className="profiledes">Hello my friends!😊</span>
              </div>
            </div>
            <div className="profilerightbottom">
            <Feed/>
        <Right profile/>
            </div>
     

            </div>      

    
    </div>
  </>
  )
}
