import { useNavigate } from 'react-router-dom'
import './Register.css'
import { auth } from '../../component/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
export default function Register() {
    const[email,setEmail] = useState();
    const[username,setUsername] = useState();
    const [password,setpassword] = useState();
    const [againpassword,setagainpassword] = useState();
    const navigate = useNavigate();


    const handleRegister =async (e) =>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            const user = auth.currentUser;
            console.log(user);
            alert(`Registered successfully ${username}`)
            navigate("/")

        }catch(error){
            alert(error,"occurs")
        }

        setEmail("")
        setUsername("")
        setpassword("")
        setagainpassword("")
    }

 

    const handlelogin =() =>{
        navigate("/*")
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
                <div className="registerbox">
                    <input placeholder="email"  value={email} className="logininput" onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="username" className="logininput" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input placeholder="password" type='password' className="logininput"  value={password} onChange={(e) => setpassword(e.target.value)}/>
                    <input placeholder="password again" type='password' className="logininput" value={againpassword} onChange={(e) => setagainpassword(e.target.value)} />

                    <button className='loginbutton' onClick={handleRegister}>Sign up</button>
                    <button className="loginregiterbbutton" onClick={handlelogin}>
                        Log into Account
                    </button>
                   

                </div>
            </div>
        </div>
    </div>
  )
}
