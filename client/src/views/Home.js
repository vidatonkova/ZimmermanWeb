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
        <div class="row topSpace-row"></div>
        <div class="row homeSpacer-row"></div>
        <div class="row home-row">
          <div className="col-sm-12 text-center">
            <h2>Welcome</h2>
            <h9>
              We are glad you have chosen us to help you manage your
              Inflammatory Bowel Disease (IBD).{" "}
            </h9>
          </div>
        </div>
        <div class="row homeSpacer-row"></div>
        <div class="row home-row">
          <div className="col-sm-12 text-left">
            <h9>
              The Crohn’s and Colitis Clinical Care Consortium (C5) is a
              collaborative endeavor between medical professionals at the
              University of Florida and University of Miami aimed at connecting
              college-aged students with IBD to other patients and physicians.
              This website serves as a resource that will help you take an
              active role in your medical care. It will also help you understand
              inflammatory bowel disease, including its symptoms, and common
              presenting complaints. C5 features a discussion board where
              students can ask questions pertaining to IBD, as well seek
              information regarding care at their respective institution (UF or
              UM). You will also find information about site-specific resources,
              including support groups, mental health and wellness resources,
              participating in research studies and surveys, and IBD treatment
              options.{" "}
            </h9>
          </div>
        </div>
        <div class="row homeSpacer-row"></div>
        <div class="row home-row">
          <div className="col-sm-12 text-left">
            <h9>
              The quality of your care is our number one goal. We are a team of
              physicians and patient navigators who want to partner with you to
              make sure you have the best quality of life possible.
            </h9>
          </div>
        </div>
        <div class="row homeSpacer-row"></div>

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
          <div className="col-sm-5 text-left">
            The links below will provide basic information about Inflammatory
            Bowel Disease and the answers to some some frequently asked
            questions.
          </div>
          <div className="col-sm-2 text-right"></div>
          <div className="col-sm-5 text-left">
            If you are a returning user to the Crohn's and Colitis Clinical Care
            Consorium (C5) website, you can login below. You can click on the
            sign up link below to create an account.
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
          <div class="col-sm-1 text-right">
            <Link className="nav-link" to="/Sign_In">
              Login
            </Link>
          </div>
          <div class="col-sm-1 text-right"></div>
          <div class="col-sm-3 text-left">
            <Link className="nav-link" to="/Sign_Up">
              Create an Account
            </Link>
          </div>
        </div>
        <div class="row spacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-center">
            <h3>Meet your Crohn's and Colitis Team</h3>
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-12 text-center">
            Click this link to learn more about the Crohn's and Colitis Teams
            from both the University of Florida and the University of Miam!
            <Link className="nav-link" to="/Research">
              Meet the Team.
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

/*
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
