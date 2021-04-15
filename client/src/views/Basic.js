import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Format.css";
/*
import Col from "react-bootstrap/Col"
*/

const Basic = () => {
  return (
    <div>
      <div class="container">
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>Basics of IBD</h2>
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            Welcome to the Basics of IBD page, your source for relavant
            information about IBD when you want to know more information.
          </div>
        </div>
        <div class="row spacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-5 text-center">
            <h3>IBD Information</h3>
          </div>
          <div className="col-sm-2 text-center"></div>
          <div className="col-sm-5 text-center">
            <h3>Ileitis</h3>
          </div>
        </div>
        <div class="row entry-row">
          <div class="col-sm-5 text-center">
            Heres some information about IBD
          </div>
          <div className="col-sm-2 text-center"></div>
          <div class="col-sm-5 text-center">
            Heres some information about Ileitis
          </div>
        </div>
        <div class="row spacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-center">
            <h3>Didn't answer your question or want to learn more?</h3>
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-center">
            Check out these pages for more information!
            <Link className="nav-link" to="/Research">
              Research
            </Link>
            <Link className="nav-link" to="/Discussion">
              Discussion board
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

export default Basic;
