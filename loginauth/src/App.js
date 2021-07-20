import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';

function App() {
  let status = localStorage.getItem("status");
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Login}/>  
            
            <Route exact path="/Home" component={Home} />
            </Switch>
            
            </BrowserRouter>
    </div>
  );
}

export default App;
