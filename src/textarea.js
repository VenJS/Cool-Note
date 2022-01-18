import {useState, useEffect} from "react";


export default function TextArea() {
  const [text, setText] = useState();
  
  useEffect(() => setText(localStorage.getItem('MyData')), [])

  
  
  return (
    <div>
      <textarea
        className="textarea is-large"
        placeholder="Notes..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className="button is-large is-primary is-active"
        onClick={() => {
          localStorage.setItem('MyData', text)}}
      >
        Save
      </button>
      <button className="button is-large" onClick={() => {
    setText('') 
    localStorage.removeItem('MyData');
 }}>
        Clear
      </button>
    </div>
  );
}
