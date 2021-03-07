import logo from './logo.svg';
import './App.css';

import { 
  Route, 
  Switch, 
  Redirect, 
  BrowserRouter as Router
} from 'react-router-dom';
import {useState} from 'react';

import Home from './views/Home';

function App() {
  let [username, setUsername] = useState("")

  return (
    <Router>
      <div id='page-container'>
       
       
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Redirect to="/Home"/>
            </Route>
            <Route exact path="/Home" render={(props) => <Home {...props}/>}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
