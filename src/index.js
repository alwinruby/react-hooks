import React, { 
  createContext,
  useContext
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

const TreesContext = createContext();
export const useTrees = () => useContext(TreesContext);

const trees = [
  {id: "1", type: "Maple"},
  {id: "1", type: "Oak"},
  {id: "1", type: "Willow"},
  {id: "1", type: "Beech"}
]

ReactDOM.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
  document.getElementById('root')
);
