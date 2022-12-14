import React, { useState } from "react";





export default function TextForm(props) {


    const [text, setText] = useState("Enter Text Here");

    const handleOnChange=(event) => {
        setText(event.target.value);
     };
 




  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case","Success");
  };



  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case","Success");
  };



  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared","Success");
  };




  const handleSpace = (event) => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra space","Success");
  };




  const handleCopy = (event) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","Success");
  };




  return (
    <>
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}} >
        <form>
          <h1>{props.title}</h1>
          <div className="mb-3" >
            <textarea
              className="form-control"
              id="myBox"
              rows="10"
              value={text}
              onChange={handleOnChange}
              style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"black"}}
            ></textarea>
          </div>

         










          <>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpClick}
            >
              Convert to upper case
            </button>
            <button
              type="button"
              class="btn btn-primary mx-2"
              onClick={handleLwClick}
            >
              Convert to lower case
            </button>
            <button
              type="button"
              class="btn btn-primary mx-2"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              type="button"
              class="btn btn-primary mx-2"
              onClick={handleCopy}
            >
              Copy
            </button>
            <button
              type="button"
              class="btn btn-primary mx-2"
              onClick={handleSpace}
            >
              Omit Extra Space
            </button>
          </>
        </form>
      </div>




      <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}} >
       <h2>Your text summery</h2>
       <p>words: {text.split(" ").length} and letters: {text.length}</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter your text above to preview here"}</p>
    </div>
    </>
  );
}
