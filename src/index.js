import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
  const [checked, toggle] = useReducer(
    (checked) => !checked , 
    false
  ); 

  return (
    <div>
      <input 
        type="checkbox" 
        value={checked} 
        onChange={ toggle } 
      />
      <p>{ checked ? "checked" : "not checked" }</p>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
