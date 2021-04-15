import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./../views/Format.css";

const NavBar = (props) => {
  return (
    <div class="container">
      <div class="row nav-bar">
        <div class="col-sm-2 text-center">Zimmerman Labs</div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/Home" class="nav-link">
            HOME
          </Link>
        </div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/Basic" class="nav-link">
            Basics
          </Link>
        </div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/Research" class="nav-link">
            Research
          </Link>
        </div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/Events" class="nav-link">
            Events
          </Link>
        </div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/My_Health" class="nav-link">
            MyHealth
          </Link>
        </div>
        <div class="col-sm-1 text-center">
          <Link className="nav-link" to="/Discussion" class="nav-link">
            Discussion
          </Link>
        </div>
        <div class="col-sm-1 text-right">
          <Link className="nav-link" to="/FAQ" class="nav-link">
            FAQ
          </Link>
        </div>
        <div class="col-sm-2 text-left">
          <Link className="nav-link" to="/Sign_In" class="nav-link">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

/*

Test out messing with the Nav Bar to make it horizontal

*/
