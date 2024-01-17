import image from "./secret.jpg";
import './App.css';

import { useNavigate } from "react-router-dom";

function App() {
  const navigate=useNavigate();
 
  function login(e){
    e.preventDefault();
    if(localStorage.getItem('token')!==null){
      navigate('/post');
      return;
    }
    navigate('/login');
  }

  return (
    <div className="App">
      <header className="App-header">
       
       <p>
        
       <img src={image} alt="secret"  />
       </p>
        
        <p className="content">
          <h2 id="title" >THE SECRET</h2>
          This application allows to share your innermost fear or guilt anonymously. The user could only share one SINGLE
           message with whole community . Don't worry NO one judges you.
          <br />
         
          
          <button onClick={(e) => login(e)}  className="btn">
             <h3>SHARE</h3> 
             </button>

         </p>
      </header>
    </div>
  );
}

export default App;
