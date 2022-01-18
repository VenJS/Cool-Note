import {useState, useEffect} from "react";


export default function TextArea() {
  const [text, setText] = useState();
  
  useEffect(() => setText(localStorage.getItem('MyData')), [])
  
  const handle = () => {
    localStorage.setItem('MyData', text);
 };
 const remove = () => {
    localStorage.removeItem('MyData');
  
 };


  
  
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
        onClick={handle}
      >
        Save
      </button>
      <button className="button is-large" onClick={remove}>
        Clear
      </button>
    </div>
  );
}
