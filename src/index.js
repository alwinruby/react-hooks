import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const initialState = {
  message: "Hi!"
};

function reducer(state, action)  {
  switch(action.type){
    case "yell":
      return {
        message: `HEY I JUST SAID ${state.message}`
      };
    case "whisper":
      return {
        message: `excuse me, I just said  ${state.message}`
      };
  }
}

function App(){
  const [state, dispatch] = useReducer(
    reducer, 
    initialState
  ); 

  return (
    <div>
      <p>Message : {state.message}</p>
      <button onClick={() => dispatch({ type: "yell"}) }>YELL</button>
      <button onClick={() => dispatch({ type: "whisper"}) }>whisper</button>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
