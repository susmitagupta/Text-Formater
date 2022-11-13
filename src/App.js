import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";



function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(4 33 62)";
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
     
    }
  };



  return (
    <>
    <Navbar title="Text Editor"  about="About Us"  mode={mode}  toggleMode={toggleMode}/>
    <TextForm title="Enter the text to analize" mode={mode}/>
    {/* <About/> */}
    </>
  );
}

export default App;
