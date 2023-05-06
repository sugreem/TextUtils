//import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {

  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{

    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
      
    }, 2000);
    
  }

  const toggleMode = ()=>{
    if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        showAlert("Dark mode has been enabled", "success");
        document.title = "TextUtils - Home (Dark Mode)";


        //not required - blinking title
        // setInterval(() => {

        //   document.title = "TextUtils - Amazing";
          
        // }, 2000);

        // setInterval(() => {

        //   document.title = "TextUtils - Installing";
          
        // }, 1500);

      }

      else
      {
      setMode('light') 
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Home";
      }
  }

  

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode = {mode} toggleMode = {toggleMode}/>
<Alert alert = {alert}/>


      <div className="container my-3">

       <Routes>
          <Route exact path="/about" element = {<About />} />
      
          <Route exact path="/" element = {<TextForm heading="Enter Text to Analyze" mode = {mode} showAlert = {showAlert}/>} />
                  

        </Routes>

      </div>
      </Router>
    </>
  );
}

export default App;
