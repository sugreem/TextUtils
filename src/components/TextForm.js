import React, { useState } from "react";

export default function TexthtmlForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");

  };

  const handleExtraSpace = () => {

   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("Extra spaces has been removed", "success");
  };

  return (
    <>
      <div className="container" style = {{color : props.mode === 'light'?'black':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style = {{backgroundColor : props.mode === 'light'?'white':'grey', 
            color : props.mode === 'light'?'black':'white'}}
            
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>

      <div className="container my-3" style = {{color : props.mode === 'light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Your Text in the Textbox Above to Preview it Here"}</p>
      </div>
    </>
  );
}
