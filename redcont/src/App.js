import './App.css';
import React, {useReducer} from 'react';
import CompA from './CompA';
import CompB from './CompB';

export const countcontext = React.createContext()

const initial = 0
const reducer = (state, action) => {
  switch(action){
    case 'increment': 
      return state + 1 
    case 'decrement':
      return state - 1
    case 'reset' :
      return initial
    default:
      return state
  }
} 
function App() {
  const [count, dispatch] = useReducer(reducer , initial)
  return (
    <countcontext.Provider value={{countstate:count, dispatch:dispatch }}>
    <div className="App">
      count : {count}
      <CompA/>
      <CompB/>
    </div>
    </countcontext.Provider>
  );
}

export default App;
