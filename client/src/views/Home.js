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
          <div className="col-sm-12 text-left"><h2> Overview</h2></div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left"><h9>Here you will find an overview of what each of the main pages on the Crohn's and Colitis Clinical Care Consortium website.  THe Home page is the HUB for the webstie and serves as the entry point for visiting the website.  The Basic tab contains basic information about inflammatory bowel disease.  Information covered includes what IBD is and other simmilar information.  The Meet the Team tab includes information about the medical professionals within the consortium from both the University of Florida and the University of Miami.  The Events tab has links to future webinars and activities.  Stay tuned!  The MyHealth tab provides information regarding recommended books, resources specific to the University of Florida and the University of Miami, the IBD passport, and information about the relationship between IBD and your health.  The FAQ tab answers some Frequently Asked Questions regarding Inflammatory Bowel Disease.  The Sign In page allows users to sign into their account and create a new one if needed.  The Discussion page provides a place for users to ask questions regarding IBD to be answered. </h9></div>
          
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entrySpacer-row"></div>
        <hr />
        <div class="row title-row">
          <div className="col-sm-6 text-center">
            <h1>Need to Know</h1>
          </div>
          <div className="col-sm-6 text-center">
            <h1>Returning User?</h1>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-6 text-left">
            <h9>The links below will provide basic information about Inflammatory
            Bowel Disease and the answers to some some frequently asked
            questions.</h9>
          </div>
          <div className="col-sm-6 text-left">
            <h9>If you are a returning user to the Crohn's and Colitis Clinical Care
            Consorium (C5) website, you can login below. You can click on the
            sign up link below to create an account.</h9>
          </div>
        </div>
        <div class="row entry-row">
          <div class="col-sm-3 text-center">
            <Link className="nav-link" to="/FAQ">
              <h3>FAQ</h3>
            </Link>
          </div>
          <div class="col-sm-3 text-center">
            <Link className="nav-link" to="/Basic">
              <h3>IBD Basics</h3>
            </Link>
          </div>
          <div class="col-sm-3 text-center">
            <Link className="nav-link" to="/Sign_In">
              <h3>Login</h3>
            </Link>
          </div>
          <div class="col-sm-3 text-center">
            <Link className="nav-link" to="/Sign_Up">
              <h3>Create an Account</h3>
            </Link>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <hr />
        <div class="row spacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-center">
            <h1>Meet your Crohn's and Colitis Team</h1>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-center">
            <h9>Click this link to learn more about the Crohn's and Colitis Teams
            from both the University of Florida and the University of Miam!</h9>
            <Link className="nav-link light-blue" to="/Research">
              <h3>Meet the Team.</h3>
            </Link>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <hr />
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
