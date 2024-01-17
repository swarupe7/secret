import './signin.css';
import React, { useState} from 'react';
import axios from 'axios';
// import { useAuth } from '../../src/AuthContext';
import {useNavigate} from "react-router-dom";



export default function Signin() {
  const [mail,setMail]=useState('');
  const [pwd,setPwd]=useState('');
  const [auth,setAuth] = useState(false);
  const navigate=useNavigate();

  React.useEffect(() => {
    if (auth) {
      navigate('/post');
    }
  }, [auth, navigate]);


  

  // const { login } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
     
      
      
      setCredentials({email:mail,password:pwd});
      
      await axios.post('http://localhost:5000/api/auth/login', credentials)
      .then(res=>{console.log(res);localStorage.setItem('token',res.data.token);setAuth(true)});
      
      if(auth){
        navigate('/post');
      }
      

    } catch (error) {
      console.error(error);
    }
  };



  return (
    <>
    <div className="container" style={{"backgroundColor":"lightpink"}}>
      <div className="bord">
      
      <div className="form">
        <h2>LOGIN</h2>
     <form >
       <div className="input-container">
         
         <br />
         <input type="email" name="email" onChange={(e)=>setMail(e.target.value)} id="inp" placeholder='Email' required />
         
       </div>
       <br />
       <div className="input-container">
         
         <br />
         <input type="password" name="passord" id="inp" onChange={(e)=>setPwd(e.target.value)} placeholder="password" required />
         
       </div>
       <br />
       <div className="txt">No Account <a href="/signup">SIGNUP</a></div>
       <br />
       <div className="button-container">
         <button className="btn" onClick={(e)=>handleLogin(e)}>submit</button> 
       </div>
     </form>
   </div>
   </div>
   </div>
    </>
  )
}
