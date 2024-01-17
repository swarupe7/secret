
import React, { useState } from 'react';
import './signin.css';
import axios from 'axios';
// import { useAuth } from '../../src/AuthContext';
import {useNavigate} from "react-router-dom";


const Signup= () => {
  const navigate = useNavigate();
    
    const [mail, setMail] = useState('');
    const [pwd, setPwd] = useState('');
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const signup=async(e)=>{
        e.preventDefault();
        console.log('signup called');
        setCredentials({email:mail,password:pwd});
         
      await axios.post('https://secret-deply.onrender.com/api/auth/register', credentials)
      .then(res=>{navigate('/login')}).catch(err=>{console.log(err)});
      

    }
  return (
    <>
    <div className="container">

      <div className="bord">
      
      <div className="form">
        <h2>SIGNUP</h2>
     <form>
       <div className="input-container">
         
         <br />
         <input type="email" placeholder="Email"  onChange={(e)=>setMail(e.target.value)}  id="inp" name="email" required />
        
       </div>
       <br />
       <div className="input-container">
        
         <br />
         <input type="password" id="inp" placeholder='password' onChange={(e)=>setPwd(e.target.value)} name="passord" required />
         
       </div>
       <br />
       <div className="txt">Has Account <a href="/login">LOGIN</a></div>
       <br />
       <div className="button-container">
         <button className="btn" type="submit" onClick={(e)=>signup(e)}>submit</button> 
       </div>
     </form>
   </div>
   </div>
   </div>
    </>
    
  )
}

export default Signup
