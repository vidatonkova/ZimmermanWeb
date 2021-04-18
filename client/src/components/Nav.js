import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./../views/Format.css";

const NavBar = (props) => {
  return (
    <div class="container">
      <div class="row nav-bar">
        <div class="col-sm-3 text-center">
          <h3>Zimmerman Labs</h3>
        </div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/Home" class="nav-link">
            <h4>Home</h4>
          </Link>
        </div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/Basic" class="nav-link">
            <h4>Basics</h4>
          </Link>
        </div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/Research" class="nav-link">
            <h4>Team</h4>
          </Link>
        </div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/Events" class="nav-link">
            <h4>Events</h4>
          </Link>
        </div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/My_Health" class="nav-link">
            <h4>Health</h4>
          </Link>
        </div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/FAQ" class="nav-link">
            <h4>FAQ</h4>
          </Link>
        </div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/Sign_In" class="nav-link">
            <h4>Account</h4>
          </Link>
        </div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/Discussion" class="nav-link">
            <h4>Discussion</h4>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;

/*

Test out messing with the Nav Bar to make it horizontal

*/
