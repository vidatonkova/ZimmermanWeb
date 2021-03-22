import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQ.css';


const FAQ = () => {
    return (
    <div class="container">
        <div class="row title-row">
            <div class="col-sm-12 text-left">
                <h3>FAQ</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 ">
                <h5>Q: How do I ask quesitons?</h5>
            </div>
        </div>
        <div class="row entry-row">
            <div class="col-sm-1 text-center">
            </div>
            <div class="col-sm-11 text-left">
                <p>You can email one of the wonderful professors of this lab</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 ">
                <h5>Q: How do I learn more about IBD?</h5>
            </div>
        </div>
        <div class="row entry-row">
            <div class="col-sm-1 text-center">
            </div>
            <div class="col-sm-11 text-left">
                <p>You can learn a lot about IBD by reading the Basic IBD page on this website. You can also read some of the wonderful publications of the professors.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 ">
                <h5>Q: Where can I go to visit the professors and the Zimmerman Lab?</h5>
            </div>
        </div>
        <div class="row entry-row">
            <div class="col-sm-1 text-center">
            </div>
            <div class="col-sm-11 text-left">
                <p>You can visit this place on campus to see the lab and meet the awesome professors and Dr. Zimmerman herself!</p>
            </div>
        </div>

        <div class="row spacer-row">
            <div class="col-sm-12 ">
            </div>
        </div>

        <div class="row title-row">
            <div class="col-sm-12 text-left">
                <h3>Contact Us</h3>
            </div>
        </div>

        <div class="row title-row">
            <div class="col-sm-4 text-center">
                <h6>Call Us</h6>
                <p>407-407-4070</p>
            </div>
            <div class="col-sm-4 text-center">
                <h6>Email Us</h6>
                <p>saySomething@gmail.com</p>
            </div>
            <div class="col-sm-4 text-center">
                <h6>Contact UF</h6>
                <p>ufl.edu</p>
            </div>
        </div>
    </div>
    );
};

export default FAQ;