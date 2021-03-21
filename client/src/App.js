import logo from './logo.svg';
import './App.css';

import { 
  Route, 
  Switch, 
  Redirect, 
  BrowserRouter as Router
} from 'react-router-dom';
import {useState} from 'react';

import NavBar from './components/Nav';

import Home from './views/Home';
import MyHealth from './views/MyHealth';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';


function App() {
  let [username, setUsername] = useState("")

  return (
    <Router>
      <div id='page-container'>
       <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Redirect to="/Home"/>
            </Route>
            <Route exact path="/Home" render={(props) => <Home {...props}/>}/>
            <Route exact path="/My_Health" render={(props) => <MyHealth {...props}/>}/>
            <Route exact path="/Sign_In" render={(props) => <SignIn {...props}/>}/>
            <Route exact path="/Sign_Up" render={(props) => <SignUp {...props}/>}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
