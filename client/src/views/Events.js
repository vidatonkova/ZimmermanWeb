import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Format.css";
/*
import Col from "react-bootstrap/Col"
*/

const Events = () => {
  return (
    <div>
      <div class="container">
        <div class="row topSpace-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-center">
            <h2>Events and Webinars</h2>
          </div>
        </div>
        <hr />
        <div class="row spacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-center">
            <h2>Information</h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-left">
            <h9>If you would like to participate in future events and webinars,{" "}
            <b>register first</b>. A member will contact you!</h9>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <hr />
        <div class="row spacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-12 text-center">
            <h2>Links</h2>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
        <div class="row entry-row">
          <div className="col-sm-12 text-center">
            <h9>Stay tuned for future webinars and events</h9>
          </div>
        </div>
        <div class="row entrySpacer-row"></div>
      </div>
    </div>
  );
};
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

export default Events;
