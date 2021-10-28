import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}`);
    setSound("");
    setColor("#000000");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input 
          value={sound} 
          type="text" 
          placeholder="Sound..." 
          onChange={(e) => setSound(e.target.value)}
        />
        <input 
          value={color} 
          type="color"
          onChange={(e) => setColor(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
