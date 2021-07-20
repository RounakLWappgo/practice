import './App.css';
import Weather from './Weather';
import {Route} from 'react-router-dom';
import Recent from './Recent';
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Weather} />
      <Route path="/recent" component={Recent} />
    </div>
  );
}

export default App;
