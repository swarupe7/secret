import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Data from './Data';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { AuthProvider } from './AuthContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
 
  <React.StrictMode>
    <AuthProvider>
   
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<App/>}></Route> 
      <Route exact path="/post" element={<Data/>}></Route> 
      <Route exact path="/login" element={<Signin/>}></Route>
      <Route exact path="/signup" element={<Signup/>}></Route>
      </Routes>

    </Router>
    </AuthProvider>
    
  </React.StrictMode>
  
  
);

