import Home from './Home';
import './App.css';
import Checkout from './Checkout';
import Product from './Product';
import {Route, Switch} from 'react-router-dom'
import base from './base65';
import GamePong from './Game';
function App() {
  return (<>
    <div className="App">
     
    </div>

    <Switch>
      <Route exact path="/" component={GamePong} />
      <Route  path="/data/:id" component={Product} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/home" component={Home} />
      <Route path="/base64" component={base} />
    </Switch>
    </>
  );
}

export default App;
