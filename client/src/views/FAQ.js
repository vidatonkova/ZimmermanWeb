import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import {Collapse} from 'react-bootstrap'
import { useEffect, useState } from "react";
import './Format.css';


const FAQ = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    return (
    <div class="container">
        <div class="row title-row">
            <div class="col-sm-12 text-center">
                <h3>Frequently Asked Questions</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 text-center ">
                <Button
                    type="button"
                    onClick={() => setOpen1(!open1)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open1}
                    className="faq-box"
                >
                click
                </Button>
                <Collapse in={open1}>
                    <div id="example-text" class="faq-box">
                        <p class="txt-color">Insert response from database.</p>
                    </div>
                </Collapse>
                </div>
        </div>

        <div class="row faq-spacer"></div>

        <div class="row">
            <div class="col-sm-12 text-center">
                <Button
                    onClick={() => setOpen2(!open2)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open2}
                    className='faq-box'
                >
                Q: How do I learn more about IBD?
                </Button>
                <Collapse in={open2}>
                    <div id="example-text" class="faq-box">
                        <p class="txt-color">Insert response from database.</p>
                    </div>
                </Collapse>
                </div>
        </div>

        <div class="row faq-spacer"></div>

        <div class="row">
            <div class="col-sm-12 text-center">
                <Button
                    onClick={() => setOpen3(!open3)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open3}
                    className='faq-box'
                >
                Q: Where can I go to visit the professors and the Zimmerman Lab?
                </Button>
                <Collapse in={open3}>
                    <div id="example-text" class="faq-box">
                        <p class="txt-color">Insert response from database.</p>
                    </div>
                </Collapse>
                </div>
        </div>

        <div class="row title-row">
            <div class="col-sm-12 ">
            </div>
        </div>

        <div class="row entry-row">
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