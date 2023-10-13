import React, {useState} from 'react'
// Declare a new state variable, which we'll call "count"
//const [count, setCount] = useState(0); React Hooks search, count jekhanei use kore, update korlei update hoye
// jabe refresh na kore

//setText("njsds"); // to update "updation function has to be used"

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here2s'); //also used to update text

    const handleUpClick =()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick =()=>{
     // console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase", "success");
  }

  const handleCopy = () => {
    var textToCopy = document.getElementById('myBox'); // Renamed the variable
    textToCopy.select();
    navigator.clipboard.writeText(textToCopy.value);
    props.showAlert('Text Copied', 'success');
  }
  /*const handleCopy=()=>{
    console.log("copy text"+text);
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "Success");
  }
*/
  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Extra Space Removed', 'success');
  }
     const handleOnChange =(event)=>{
            console.log("On Change");
            setText(event.target.value)
     }
   
    return (
        <>
        <div className="container" style={{color:props.mode ===  'dark'? 'white':'black'}}>  
<h1 >{props.heading}</h1> 
  <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ===  'dark'? 'grey':'white', color:props.mode ===  'dark'? 'white':'grey'}} id="myBox" rows="9"></textarea>
  </div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
<button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lower Case</button>
<button className="btn btn-primary " onClick={handleCopy}>Copy Above Text</button>
<button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
</div>   
<div className="container my-3" style={{color:props.mode ===  'dark'? 'white':'black'}} >
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something to Preview It"}</p>
</div>
</>

  )
}
