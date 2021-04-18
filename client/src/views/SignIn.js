
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Format.css';
import {getUser} from '../api';

class SignIn extends Component{

async componentDidMount(){
    let response = await getUser();
    console.log(response);
}

   render(){
        return (

    <div class="container">
      <div class="row sub-title-row">
        <div class="col-sm-12 text-center">
          <h3>Sign In</h3>
        </div>
      </div>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputUsername4">Username</label>
            <input
              type="username"
              class="form-control"
              id="inputUsername4"
              placeholder="Username"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2 text-center">
          <button type="submit" class="btn btn-primary custom-button">
            Sign in
          </button>
        </div>
        <div class="col-sm-5"></div>
      </div>
      </form>
      <div class="row spacer-row"></div>
      <div class="row align-items-center">
        <div class="col-sm-3"></div>
        <div class="col-sm-3 sign-up-box text-right  align-self-center">
          <p>Dont have an account?</p>
        </div>
        <div class="col-sm-3 sign-up-box text-left align-self-center">
          <Link className="nav-link custom-button" to="/Sign_Up">
            Sign Up
          </Link>
        </div>
        <div class="col-sm-4"></div>
      </div>
    </div>
  );
};

}



export default SignIn;
