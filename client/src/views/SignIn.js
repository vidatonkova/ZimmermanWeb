
import { Link, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Format.css';
import { React, useState} from 'react';
import Axios from 'axios';
import Async from 'react-async';
import config from '../config.js';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert'


const SignIn = (props) => {
  let [u, setU] = useState("");
  let [p, setP] = useState("");
  let [alerty, setA] = useState(false);
  let [b, setB] = useState(false);
  
    const handleChangeU = (event) => {
      setU(event.target.value);
    }
    const handleChangeP = (event) => {
      setP(event.target.value);
    }

    const handleSignIn = () => {
      console.log(u);
      console.log(p);
      
    }
    const handleAlert = () => {
      if(alerty){
        setB(true);
      }
    }

  const loadU = () => {
    return Axios.get(
      config.backpoint + '/users/find'
    )
    .then((response) => {
      console.log(response.data);
        return response.data;
    })
    .catch((error) => {
        console.error(error)
        return error;
    })
}

   
  return (
    <div class="container">
      <div class="row topSpace-row"></div>
      <div class="row title-row">
        <div class="col-sm-12 text-center">
          <h2>Sign In</h2>
        </div>
      </div>
      <form onSubmit={handleSignIn}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Username</label>
            <input
              type="text" value={u} onChange={handleChangeU}
              class="form-control"
              id="inputUsername4"
              placeholder="Username"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Password</label>
            <input
              type="text" value={p} onChange={handleChangeP}
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2 text-center">
          <button type="submit" onClick={handleAlert} class="btn btn-primary custom-button">
            Sign in
          </button>
        </div>
        <div class="col-sm-5"></div>
      </div>
      </form>
      {b ? <Alert variant='success'>
      LOGGED IN
      </Alert>: <div></div>}
      <div class="row spacer-row"></div>
      <div class="row">
        <div class="col-sm-12 text-center">
          <h9>Dont have an account?</h9>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2 text-center">
          <Link className="nav-link custom-button" to="/Sign_Up">
            <h9>Sign Up</h9>
          </Link>
        </div>
        <div class="col-sm-4"></div>

        <Async promiseFn={loadU}>
          {({data, error, isLoading}) => {
              if (isLoading)
                  return "Loading...";
              if (error) {
                  console.log(error);
                  return "Oops, something went wrong";
              }
              if (data && Array.isArray(data)) {
                data.reverse().map(entry => {
                  console.log(u);
                  console.log(entry.fname);
                      if(u == entry.fname){
                        console.log("test");
                        setA(true);
                      }
                })
              }
            }
          }
        </Async>
      </div>
    </div>
  );

}

                              

export default SignIn;
