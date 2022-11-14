import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(4 33 62)";
      showAlert("Dark Mode Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "Success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({ msg: massage, type: type });
  };
  setTimeout(() => {
    setAlert(null);
  }, 2000);

  return (
    <>
      <Router basename="/Text-Formater">
        <Navbar
          title="Text Editor"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container">
      
          <Routes>

             <Route exact path="/Text-Formater" element={<TextForm title="Enter the text to analize" mode={mode} showAlert={showAlert} />} />
           
            <Route exact path="/about" element={<About />} />

           

          </Routes>
       
        </div>
      </Router>
    </>
  );
}

export default App;
