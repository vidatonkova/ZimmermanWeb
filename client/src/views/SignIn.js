
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
            <h9>Sign in</h9>
          </button>
        </div>
        <div class="col-sm-5"></div>
      </div>
      </form>
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
        <div class="col-sm-5"></div>
      </div>
      </div>
  );
};

}



export default SignIn;
