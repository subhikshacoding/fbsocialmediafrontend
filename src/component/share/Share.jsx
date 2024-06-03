import './Share.css'
import poster3 from '../ssets/poster6.jpg'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className="share">
        <div className="sharewrapper">
            <div className="sharetop">
                <img  className="shareprofileimage"src={poster3} alt="profile" />
                <input className='shareinput' placeholder="What's in your mind sono?"></input>

            </div>
            <hr className='sharehr'/>
           <div className="sharebotton">
            <div className="shareoptions">
                <div className="shareoption">
                    <PermMediaIcon htmlColor='tomato' className='shareicon'/>
                    <span className="shareoptiontext">photo or video</span>
                </div>
                <div className="shareoption">
                    <LabelIcon  htmlColor='blue'   className='shareicon'/>
                    <span className="shareoptiontext">Tag</span>
                </div>
                <div className="shareoption">
                    <LocationOnIcon  htmlColor="green"className='shareicon'/>
                    <span className="shareoptiontext">Location</span>
                </div>
                <div className="shareoption">
                    <EmojiEmotionsIcon htmlColor='goldenrod' className='shareicon'/>
                    <span className="shareoptiontext">Feelings</span>
                </div>
                <button className='sharebutton'>share</button>

            </div>

           </div>

        </div>
    </div>

)
}
