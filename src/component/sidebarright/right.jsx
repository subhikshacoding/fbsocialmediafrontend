import './right.css'
import poster12 from '../ssets/poster12.jpg'
import poster14 from '../ssets/poster14.jpg'
import { rightperson } from '../dummydata/data'
import Online from '../online/Online'
import person1 from '../ssets/poster20.jpg'
import person2 from '../ssets/person2.jpg'
import person3 from '../ssets/poster14.jpg'
import person4 from '../ssets/person4.jpg'
import pose5 from '../ssets/pose5.jpg'

import person5 from '../ssets/person5.jpg'




export default function Right({profile}) {

  const HomeRightbar =() =>{
    return (
    <>
     <div className="birthdaycontainer">
          <span className="gift">🎁</span>
          <span className="birthdaytext">
            <b>pola Foster</b> and <b>3 other friends </b> have a birthday today
          </span>
        </div>
        <img className='rightbarimage' src={poster12} alt=''></img>
        <h4 className="rightbartitle">online friends</h4>
            {rightperson.map(u =>(
              <Online  key={u.id}user={u}/>
            ))}
    </>
    )
  };

  const ProfileRightbar =() =>{
    return(
      <>
      <h3 className='userinfotitle'> user information</h3>
      <div className="rightbarinfo">
        <div className="rightbarinfoitem">
          <span className="rightbaarinfokey">City:</span>
          <span className="rightbaarinfovalue">Chennai</span>

        </div>
        <div className="rightbarinfoitem">
          <span className="rightbaarinfokey">From:</span>
          <span className="rightbaarinfovalue">Chennai</span>

        </div>
        <div className="rightbarinfoitem">
          <span className="rightbaarinfokey">Relationship:</span>
          <span className="rightbaarinfovalue">Single</span>

        </div>
        <h3 className="userinfotitle">User friends</h3>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img className='rightbarfollowingimage' src={person1} alt="" />
            <span className="followingname">carter</span>
          </div>
          <div className="rightbarfollowing">
            <img   className='rightbarfollowingimage' src={person2} alt="" />
            <span className="followingname">arthik</span>

          </div>
          <div className="rightbarfollowing">
            <img   className='rightbarfollowingimage' src={person3} alt="" />
            <span className="followingname">leoni</span>

          </div>
          <div className="rightbarfollowing">
            <img   className='rightbarfollowingimage' src={person4} alt="" />
            <span className="followingname">carla</span>

          </div>
          <div className="rightbarfollowing">
            <img   className='rightbarfollowingimage' src={pose5} alt="" />
            <span className="followingname">carter</span>

          </div>
          <div className="rightbarfollowing">
            <img   className='rightbarfollowingimage' src={person5} alt="" />
            <span className="followingname">nelson</span>

          </div>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='right'>
      <div className="rightwrapper">
        {/* {profile ? <ProfileRightbar/> : <HomeRightbar/>  */}
        <HomeRightbar/>
       
       </div>
    </div>
  )
}
