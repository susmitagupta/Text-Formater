import React ,{useState}from "react";
import Capture from "./Capture.png";

export default function About() {

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white"

});


   


   const toggleStyle=()=>{
    if(myStyle.color==="black")
    {
      setMyStyle({
        color: "white",
        backgroundColor: "black"

    });
    }
    else{
      setMyStyle({
        color: "black",
    backgroundColor: "white"

    });

    }

    }


  return (
    <div className="container my-4" >
      <div className="card" style={myStyle}>
        <img src={Capture} className="card-img-top"    style={{ width: 400, height: 400 }} />
        <div className="card-body">
          <h3 className="card-title">Susmita Gupta</h3>
          <p className="card-text">
            M | 6296669221<br/>
            E | guptasusmita24@gmail.com
          </p>
        </div>
      </div>
      <div className="container my-4">
      <button type="button" class="btn btn-primary" onClick={toggleStyle}>enable dark mode</button>
      </div>
    </div>
  );
}
