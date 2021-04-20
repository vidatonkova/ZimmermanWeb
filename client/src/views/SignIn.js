
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Format.css';
import {getUser} from '../api';
import url from '../config';

class SignIn extends Component{

async componentDidMount(){
    let response = await getUser();
    console.log(response);
}

handleSignIn(event){
console.log(event.form);
}
   render(){
        return (

    <div class="container">
      <div class="row topSpace-row"></div>
      <div class="row title-row">
        <div class="col-sm-12 text-center">
          <h2>Sign In</h2>
        </div>
      </div>
      <form onSubmit={this.handleSignIn}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputUsername4"><h2>Username</h2></label>
            <input
              type="username"
              class="form-control"
              id="inputUsername4"
              placeholder="Username"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4"><h2>Password</h2></label>
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
          <h9>Dont have an account?</h9>
        </div>
        <div class="col-sm-3 sign-up-box text-left align-self-center">
          <Link className="nav-link custom-button" to="/Sign_Up">
            Sign Up
          </Link>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  );
};

}



export default SignIn;
