import React, { useState } from "react";





export default function TextForm(props) {


    const [text, setText] = useState("Enter Text Here");

    const handleOnChange=(event) => {
        setText(event.target.value);
        console.log("handleOnChange clicked");
     };
 




  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };



  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };



  const handleClear = () => {
    let newText = "";
    setText(newText);
  };




  const handleSpace = (event) => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
  };




  const handleCopy = (event) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };




  return (
    <>
      <div className="container my-3">
        <form>
          <h1>{props.title}</h1>
          <div className="form-group">
            <textarea
              className="form-control"
              id="myBox"
              rows="10"
              value={text}
              onChange={handleOnChange}
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




      <div className="container my-3" >
       <h2>Your text summery</h2>
       <p>words: {text.split(" ").length} and letters: {text.length}</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter your text above to preview here"}</p>
    </div>
    </>
  );
}
