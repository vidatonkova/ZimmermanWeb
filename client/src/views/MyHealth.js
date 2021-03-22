import React from 'react';
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyHealth.css';


const health = () => {
    return (
    <div>
        <div class="container">
            <div class="row entry-row">
                <div className="col-md-12 text-center">
                  <h1>MyHealth</h1> 
                </div>
            </div>
            <div class="row entry-row">
                <div className="col-md-6 text-center">
                  Here's some information about the MyHealth page
                </div>
                <div className="col-md-6 text-center">
                  Heres a graphic or information
                </div>
            </div>
            <div class="row entry-row">
                <div className="col-md-12 text-center">
                  <h2>How do I maintain my health?</h2>
                </div>
            </div>
            <div class="row entry-row">
                <div className="col-md-6">
                  Insert advice for maintaining a good health
                </div>
                <div className="col-md-6 text-left">
                <Link className = "nav-link" to='/FAQ'>FAQ</Link>
                </div>
            </div>
            <div class="row entry-row">
                <div className="col-md-6">
                  Insert secondary advice for maintaining a good health
                </div>
                <div className="col-md-6 text-left">
                <Link className = "nav-link" to='/Discussion'>Discussion Board</Link>
                </div>
            </div>
            <div class="row entry-row">
                <div className="col-md-6">
                  Insert tertiary advice for maintaining a good health
                </div>
                <div className="col-md-6 text-left">
                  <Link className = "nav-link" to='/Research'>Research</Link>
                </div>
            </div>
            <div class="row entry-row">
                <div className="col-md-6">
                  Insert quaternary advice for maintaining a good health
                </div>
                <div className="col-md-6 text-left">
                  <Link className = "nav-link" to='/Events'>Events and Surveys</Link>
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
export default health;