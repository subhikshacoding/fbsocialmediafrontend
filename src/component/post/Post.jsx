import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import poster8 from '../ssets/poster6.jpg'
import { rightperson } from '../dummydata/data';
import { useState } from 'react';


 
export default function Post({post}) {
    const[like,setLike] = useState(post.like);
    const[isliked,setIsLiked] = useState(false);

    
    const handleclick =() =>{
        setLike(isliked? like-1 : like+1)
    }
  return (
    <div className="post">
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img src={rightperson.filter(u => u.id === post.userid)[0]?.profilepicture ||""} alt="toppic" className='posttopimage' />
                    <span className="postusername">{rightperson.filter(u => u.id === post.userid)[0]?.username ||"unknown user"}</span>
                    <span className="posttime">{post.date}</span>


                </div>
                <div className="posttopright">
                    <MoreVertIcon/>
                </div>
              
            </div>
            <div className="posttopcenter">
            <div className="postcentertext">{post?.desc}</div>
                 <img src={post.photo} alt="posttimage" className='posttcenterimage' width={"100%"} 
                     style={{maxHeight: "500px", marginTop: "10px"}}
                     />

            </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                        <span className="posticon" onClick={handleclick}>👍</span>
                        <span className="posticon" onClick={handleclick}>❤️</span>
                        <span className="likecounter">{like}people like it</span>

                    </div>
                    <div className="postbottomright">
                        <span className="postcommenttext">{post.comment}comments</span>

                    </div>
                </div>
        </div>
    </div>
  )
}
