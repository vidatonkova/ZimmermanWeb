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
        <div class="row title-row">
          <div className="col-sm-12 text-left">
            <h2>Events and Surveys</h2>
          </div>
        </div>
        <div class="row spacer-row"></div>
        <div class="row title-row">
          <div className="col-sm-5 text-center">
            <h2>Events</h2>
          </div>
          <div className="col-sm-2 text-center"></div>
          <div className="col-sm-5 text-center">
            <h2>Surveys</h2>
          </div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-4 text-left">Recipe Competition</div>
          <div className="col-sm-1 text-center">Done?</div>
          <div className="col-sm-2 text-center"></div>
          <div className="col-sm-4 text-left">
            What kinds of food cause your IBD?
          </div>
          <div className="col-sm-1 text-center">Done?</div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-4 text-left">Tie Dye!</div>
          <div className="col-sm-1 text-left">Done?</div>
          <div className="col-sm-2 text-center"></div>
          <div className="col-sm-4 text-left">Why is the Sky Blue?</div>
          <div className="col-sm-1 text-left">Done?</div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-4 text-left">Picnic at the Plaza</div>
          <div className="col-sm-1 text-left">Done?</div>
          <div className="col-sm-2 text-center"></div>
          <div className="col-sm-4 text-left">Specific Foods and IBD</div>
          <div className="col-sm-1 text-left">Done?</div>
        </div>
        <div class="row entry-row">
          <div className="col-sm-4 text-left">Event: TBA</div>
          <div className="col-sm-1 text-left">Done?</div>
          <div className="col-sm-2 text-center"></div>
          <div className="col-sm-4 text-left">Survey: TBD</div>
          <div className="col-sm-1 text-left">Done?</div>
        </div>
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
