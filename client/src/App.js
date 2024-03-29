
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./views/Home";
import MyHealth from "./views/MyHealth";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Research from "./views/Research";
import Discussion from "./views/Discussion";
import FAQ from "./views/FAQ";
import Events from "./views/Events";
import Basic from "./views/Basic";
import MyPassport from "./views/MyPassport";

function App() {
  let [username, setUsername] = useState("");

  return (
    <Router>
      <div id="page-container">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route exact path="/Home" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/My_Health"
              render={(props) => <MyHealth {...props} />}
            />
            <Route
              exact
              path="/MyPassport"
              render={(props) => <MyPassport {...props} />}
            />
            <Route
              exact
              path="/Sign_In"
              render={(props) => <SignIn setUsername={setUsername} {...props} />}
            />
            <Route
              exact
              path="/Sign_Up"
              render={(props) => <SignUp {...props} />}
            />
            <Route
              exact
              path="/Research"
              render={(props) => <Research {...props} />}
            />
            <Route
              exact
              path="/Discussion"
              render={(props) => <Discussion {...props} />}
            />
            <Route exact path="/FAQ" render={(props) => <FAQ {...props} />} />
            <Route
              exact
              path="/Events"
              render={(props) => <Events {...props} />}
            />
            <Route
              exact
              path="/Basic"
              render={(props) => <Basic {...props} />}
            />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
