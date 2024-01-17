import Message from './Message';
import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";




const Data = () => {
  const navigate= useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  
  useEffect(() => {
    // Fetch messages when the component mounts
    fetchMessages();
  }, []);


  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        // Redirect to login or handle unauthorized access
        navigate('/login');
        return;
      }

      const response = await axios.get('https://secret-deply.onrender.com/api/secret/messages', {
        headers: {
          Authorization: `${token}`,
        },
      });

      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        // Redirect to login or handle unauthorized access
        navigate('/login');
        return;
      }

      await axios.post(
        'https://secret-deply.onrender.com/api/secret/post',
        { secretMessage: newMessage },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      // Fetch messages again after sending a new one
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };


  function signout(e){
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <>
  <div className="msg">
      
   
   
   <div className="input">
   
    <input type="text" name="uname" onChange={(e)=>setNewMessage(e.target.value)} id="inp" placeholder='YOUR SECRET MSG HERE (ONLY ONE)!!' required /> 


   <div className="buttons">
   <button onClick={(e) => sendMessage(e)}  className="btn">
             <h4>SHARE</h4> 
             </button>

             <button onClick={(e) => signout(e)} style={{backgroundColor:"red"}} className="btn">
             <h4>QUIT</h4> 
             </button>
   </div>

   </div>
   <div className="content">

   {messages.map((message) => (
            <Message key={message.userId} text={message.message} />
          ))}

   </div>

  </div>
    

    </>
  )
}

export default Data
