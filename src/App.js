import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";



function App() {
  return (
    <>
    <Navbar title="Text Editor"  about="About Us"/>
    {/* <TextForm title="Enter the text to analize"/> */}
    <About/>
    </>
  );
}

export default App;
