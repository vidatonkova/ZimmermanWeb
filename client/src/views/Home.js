import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Format.css";
/*
import Col from "react-bootstrap/Col"
*/

const Home = () => {
  return (
    <div>
      <div class="container">
        <div class="row home-row">
          <div className="col-sm-6 text-left"></div>
          <div className="col-sm-6 text-left">
            <h2>Welcome</h2>
            <h9>Here is the welcome page and some information</h9>
          </div>
        </div>
        <div class="row spacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-5 text-center">
            <h3>Need to Know</h3>
          </div>
          <div className="col-sm-2 text-center"></div>
          <div className="col-sm-5 text-center">
            <h3>Returning User?</h3>
          </div>
        </div>
        <div class="row entry-row">
          <div class="col-sm-1 text-right">
            <Link className="nav-link" to="/FAQ">
              FAQ
            </Link>
          </div>
          <div class="col-sm-1 text-right"></div>
          <div class="col-sm-3 text-left">
            <Link className="nav-link" to="/Basic">
              IBD Basics
            </Link>
          </div>
          <div className="col-sm-2 text-right"></div>
          <div className="col-sm-5 text-center">
            <Link className="nav-link" to="/Sign_In">
              Login
            </Link>
          </div>
        </div>
        <div class="row spacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-center">
            <h3>Meet the team!</h3>
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-center">
            Here you'll find some information about the research and current
            team!
            <Link className="nav-link" to="/Research">
              Research
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
/* 
<div class="container">
            <div class="row title-row">
                <div class="col-sm-12 text-center">
                    <h3>Sign In</h3>
                </div>
            </div>
            <div class="row entry-row">
                <div class="col-sm-3 text-right">
                    Username:
                </div>
                <div class="col-sm-9 test-left">
                    Box 
                </div>
            </div>
            <div class="row entry-row">
            <div class="col-sm-3 text-right">
                    <p>Password:</p>
                </div>
                <div class="col-sm-9 text-left">
                    <p>Box to enter information goes here</p>
                </div>
            </div>
            <div class="row entry-row">
                <div class="col-sm-6 text-right">
                    <p>Dont have an account?</p>
                </div>
                <div class="col-sm-6 text-left">
                    <Link className = "nav-link" to='/Sign_Up'>Sign Up</Link>
                </div>
            </div>
        </div>
        );


<div className="spacer" > &nbsp; </div>

<div className="container">
  <div className="row">
    <div className="col-xs-3"></div>
    <div className="col-xs-9"></div>
  </div>
  <div className="row">
    <div className="col-*-*"></div>
    <div className="col-*-*"></div>
    <div className="col-*-*"></div>
  </div>
  <div className="row">
    ...
  </div>
</div>
*/

export default Home;
