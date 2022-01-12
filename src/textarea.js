import React, { useState } from "react";

export default function TextArea() {
  const [text, setText] = useState();
  let saveData = () => {
    localStorage.setItem("key", text);
  };

  let clearData = () => {
    setText(() => "");
  };

  return (
    <div>
      <textarea
        className="textarea is-large"
        placeholder="Notes..."
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className="button is-large is-primary is-active"
        onClick={saveData}
      >
        Save
      </button>
      <button className="button is-large" onClick={clearData}>
        Clear
      </button>
    </div>
  );
}
