import React from 'react';
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Events.css';
/*
import Col from "react-bootstrap/Col"
*/


const Events = () => {
  return (
    <div>
        <div class="container">
          <div class="row title-row">
            <div className="col-md-12 text-center">
              <h1>Events and Surveys</h1>
            </div>
          </div>
          <div class="row entry-row">
            <div className="col-md-6 text-center">
              <h2>Events</h2>
            </div>
            <div className="col-md-6 text-center">
              <h2>Surveys</h2>
            </div>
          </div>
          <div class="row entry-row">
            <div className="col-md-5 text-left">
              Event: Recipe Competition
            </div>
            <div className="col-md-1 text-left">
              Completed?
            </div>
            <div className="col-md-5 text-left">
              Survey: What kinds of food cause your IBD?
            </div>
            <div className="col-md-1 text-left">
              Completed?
            </div>
          </div>
          <div class="row entry-row">
            <div className="col-md-5 text-left">
              Event: Tie Dye!
            </div>
            <div className="col-md-1 text-left">
              Completed?
            </div>
            <div className="col-md-5 text-left">
              Survey: Why is the Sky Blue?
            </div>
            <div className="col-md-1 text-left">
              Completed?
            </div>
          </div>
          <div class="row entry-row">
            <div className="col-md-5 text-left">
              Event: Picnic at the Plaza
            </div>
            <div className="col-md-1 text-left">
              Completed?
            </div>
            <div className="col-md-5 text-left">
              Survey: Specific Foods and IBD
            </div>
            <div className="col-md-1 text-left">
              Completed?
            </div>
          </div>
          <div class="row entry-row">
            <div className="col-md-5 text-left">
              Event: TBA
            </div>
            <div className="col-md-1 text-left">
              Completed?
            </div>
            <div className="col-md-5 text-left">
              Survey: TBD
            </div>
            <div className="col-md-1 text-left">
              Completed?
            </div>
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