import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { feedpost } from '../dummydata/data'

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share/> 
       {feedpost.map(p =>(
        <Post key={p.id} post={p}/>
       ))}
      </div>
    </div>
   
  )
}
