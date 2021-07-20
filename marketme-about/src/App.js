
import { Route } from 'react-router';
import './App.css';

import Home from './Home'

function App() {


  return (
    <div className="App">

      <Route path="/:id" component={Home} />
  
    </div>
  );
}

export default App;
