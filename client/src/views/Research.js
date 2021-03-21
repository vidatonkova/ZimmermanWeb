import React from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Research.css';


const Research = () => {
        return (
        <div class="container">
            <div class="row title-row">
                <div class="col-sm-12 text-left">
                    <h3>Research</h3>
                </div>
            </div>

            <div class="row entry-row">
                <div class="col-sm-3 text-right">
                    <div class thumbnail>
                        <a href="/Dr.-Zimmmerman-headshot.jpg">
                            <img class="img-responsive" src="img/ZimmermanPic.jpg" alt="Dr.Z"/>
                        </a>
                    </div>
                </div>
                <div class="col-sm-9 test-left">
                    <h5>Dr. Ellen Zimmermann, MD</h5>
                    <p>random text about Dr. Z</p>
                </div>
            </div>

            <div class="row entry-row">
                <div class="col-sm-3 text-right">
                    Picture of Chris Broxson
                </div>
                <div class="col-sm-9 test-left">
                    <h5>Chris Broxson, BS, BA</h5>
                    <p>random text about Chris Broxson</p>
                </div>
            </div>

            <div class="row entry-row">
                <div class="col-sm-3 text-right">
                    Picture of Fares Ayoub
                </div>
                <div class="col-sm-9 test-left">
                    <h5>Fares W. Ayoub, MD</h5>
                    <p>random text about Fares Ayoub</p>
                </div>
            </div>

            <div class="row entry-row">
                <div class="col-sm-3 text-right">
                    Picture of Xi Wang
                </div>
                <div class="col-sm-9 test-left">
                    <h5>Xi Wang, MPH</h5>
                    <p>random text about Xi Wang</p>
                </div>
            </div>

            <div class="row entry-row">
                <div class="col-sm-3 text-right">
                    Picture of Isaac Molina
                </div>
                <div class="col-sm-9 test-left">
                    <h5>Isaac Molina, BS</h5>
                    <p>random text about Isaac Molina</p>
                </div>
            </div>
        </div>
        );
};

export default Research;