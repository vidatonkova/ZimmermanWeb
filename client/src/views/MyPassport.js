import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Format.css";
/*
import Col from "react-bootstrap/Col"
*/

const MyPassport = () => {
  return (
    <div>
      <div class="container">
        <div class="row topSpace-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-center">
            <h2>My IBD Passport </h2>
          </div>
        </div>
        <div class="row spacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <h9>IBD Passport serves as a one stop shop for recording personal health
            information in order to be an active partner in your IBD care. Below
            are a series of downloadable documents where you can track your
            daily lifestyle (bathroom tracker), disease management (medications,
            appointments, etc.), and key information for visits with your
            healthcare provider. We do not collect any of this information – the
            IBD passport is a free, printable tool for patients to track their
            disease status and provide their physicians with updated and
            accurate information, as well as potentially mitigate complications.</h9>
          </div>
        </div>
        <hr />
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <a href="https://drive.google.com/file/d/1DQ1ngkjxv-8erZfWhaL0hadNFXuX6O_v/view?usp=sharing">
              {" "}
              <h9 class="light-blue">My Information</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <a href="https://drive.google.com/file/d/1hIMQrhJ5K_yEg2K2e8WL73NZYr8Av_0T/view?usp=sharing">
              {" "}
              <h9 class="light-blue">My Appointment Planner</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <a href="https://drive.google.com/file/d/12DYJWyeGOkFfgTWipgNfXLw4n4ct1jcx/view?usp=sharing">
              {" "}
              <h9 class="light-blue">My Medicines</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <a href="https://drive.google.com/file/d/1MQEBxOHV-LqT1s9KBdqycMcvmzKPwfHp/view?usp=sharing">
              {" "}
              <h9 class="light-blue">Planning for My Next Visit</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <a href="https://drive.google.com/file/d/1W4m4-nu7uhblMuQrcRMupeYLFv3CN2Gb/view?usp=sharing">
              {" "}
              <h9 class="light-blue">Bathroom (Bowel Movements) Tracker</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <a href="https://drive.google.com/file/d/1UsW9LH3zYkN_Qootv1hcqNAfGd5jEJ-A/view?usp=sharing">
              {" "}
              <h9 class="light-blue">Prednisone Taper Schedule</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <a href="https://drive.google.com/file/d/1M1zlWi5E3qz2yTQP89Bzy2AGgkscIrlj/view?usp=sharing">
              {" "}
              <h9 class="light-blue">Characteristics of My Inflammatory Bowel Disease</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <a href="https://drive.google.com/file/d/17bXb0E2K9-BwLa3BtzkSdagPofuYOKdr/view?usp=sharing">
              {" "}
              <h9 class="light-blue">Surgery on My Gastrointestinal (GI) Tract</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <a href="https://drive.google.com/file/d/1v7k7Uc9hp8z3ZDrbkXmuUybw6kFCjqoB/view?usp=sharing">
              {" "}
              <h9 class="light-blue">Monitoring My Laboratory Tests</h9>
            </a>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <a href="https://drive.google.com/file/d/1qcJLZj8w9-gTtkDBNhytNZu6B4utzc63/view?usp=sharing">
              {" "}
              <h9 class="light-blue">Colonoscopy Surveillance</h9>
            </a>
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

export default MyPassport;
