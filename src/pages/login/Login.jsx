import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../component/firebase';
export default function Login() {
    const [email,setEmail] = useState();
    const [password,setpassword] = useState();

    const HandleLogin = async(e) =>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password)
            console.log("signedin");
            alert("signed in successfully")
            navigate("/profile")
        }catch(error){
            alert(error)
        }

        setEmail("")
        setpassword("")

    }
    
    const navigate = useNavigate()

   
    const handleregister =() =>{
        navigate("/register")
    }
  return (
    <div className='login'>
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">Connect Here</h3>
                <span className="logindesc">Connect with friends and the world around you on
                 Connect Here.</span>

            </div>
            <div className="loginright">
                <div className="loginbox">
                    <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="logininput" />
                    <input placeholder="password" type='password' value={password} onChange={(e) => setpassword(e.target.value)}className="logininput" />

                    <button className='loginbutton'  onClick={HandleLogin}>Login</button>
                    <span className="loginforget">Forgot Password?</span>
                    <button className="createnew" onClick={handleregister}>Create New Account</button>

                </div>
            </div>
        </div>
    </div>
  )
}
