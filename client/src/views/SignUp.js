
import "bootstrap/dist/css/bootstrap.min.css";
import "./Format.css";
import Button from 'react-bootstrap/Button'
import {Collapse} from 'react-bootstrap'

import {React, useState} from 'react';
import Axios from 'axios';
import Async from 'react-async';

import config from '../config.js'

const SignUp = () => {
 
  let [username, setUser] = useState("");
  let [password, setPass] = useState("");

  const handleChangeName = (event) => {
      setUser(event.target.value);
  }
  const handleChangePost = (event) => {
      setPass(event.target.value);
  }

  const makeAcc = () => {

      return Axios.post(
          config.backpoint + '/users/create',
          {
            fname: username,
            lname: password
          }
      )
      .then((response) => {
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
      <div class="row sub-title-row">
        <div class="col-sm-12 text-center">
          <h2>Sign Up</h2>
        </div>
      </div>
      <form onSubmit={makeAcc}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputUsername4">Username</label>
            <input
              type="text" value={username} onChange={handleChangeName}
              class="form-control"
              id="inputUsername4"
              placeholder="Username"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="text" value={password} onChange={handleChangePost}
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          <h9>Sign Up</h9>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
