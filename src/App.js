import "./App1.css"
import Navbar from './components/Navbars'
// import TextForm from './components/textTrnsform1'
import TextForm from './components/textTransform2'
import { useState } from "react";
import React from 'react'
import Alert from "./components/Alert";
import About from "./components/Abouts";


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // we want application dar light mode state to be controlled here
  const [mode, setMode] = useState('dark')
  const [alert, setAlert] = useState(null)

  // alert is the object we made function to show alert
  // by this function we want the alert to be set on the basis of message and type
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils Dark'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils Light'
    }
  }

  return (
    <>
    {/* /users (path) ---> component 1 */}
    {/* /users/home ----> component 2 (now this link will render comp 1 bco of partial matching by react so use exact) */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={ <About /> } />
            <Route exact path="/" element={<TextForm showAlerts={showAlert} heading="Enter the text to analyze" />}/>
          </Routes>
        </div>
      </Router>
    </>
  );

}


export default App;
