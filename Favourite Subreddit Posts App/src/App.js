import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Favourites from './Favourites';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/favourites" component={Favourites}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
