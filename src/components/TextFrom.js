import React, {useState} from 'react'

export default function TextFrom(props) {
  const handleUpClick =()=>{
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleLoClick =()=>{
    let newText= text.toLowerCase();
    setText(newText);
  }
  const handleClerClick =()=>{
    let newText= '';
    setText(newText);
  }

  const handleonchange =(event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // text= new text; worng way to change 
  // setText("new text");

  return (
    <>
    <div className='container'>
          <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert to Uppercase </button>
        <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to Lowercase </button>
        <button className='btn btn-primary mx-3' onClick={handleClerClick}>Clear Text </button>
    </div>
    <div className='container my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Word and {text.length} chareacters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
