import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export const TreesContext = createContext();

const trees = [
  {id: "1", type: "Maple"},
  {id: "1", type: "Oak"},
  {id: "1", type: "Willow"},
  {id: "1", type: "Beech"}
]

function App(){

  return (
      <div>
        <h1>Tree's that I've heard of: </h1>
      </div>
  );
}

ReactDOM.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
  document.getElementById('root')
);
