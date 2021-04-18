
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import {Collapse} from 'react-bootstrap'
import './Format.css';

import { React, useState} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Axios from 'axios';
import Async from 'react-async';

import config from '../config.js'


const Discussion = (props) => {
//props.setUsername("whatever'");
    let [question, setPost] = useState("");

    const handleChangePost = (event) => {
        setPost(event.target.value);
    }

    const makePost = () => {

        return Axios.post(
            config.backpoint + '/discuss',
            {
                question: question,
                answer: ""
            }
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error)
            return error;
        })
    }

    const loadPosts = () => {
        return Axios.get(
            config.backpoint + '/discuss'
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error)
            return error;
        })
    }



    const [open1, setOpen1] = useState(false);
        return (
        <div class="container">
            <div class="row title-row">
                <div class="col-sm-12 text-center">
                    <h3>Discussion</h3>
                </div>
            </div>
            <div class="row question-box">
            <div class="col-sm-12">
                <form onSubmit={makePost}>
                    <div class="form-row">
                        <div class="form-group col-md-12 text-center ">
                        <p class="white-text">Have a question? Submit it here!</p>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12 text-center">
                            <input type="newQuestion" value={question} onChange={handleChangePost} class="form-control" id="question" placeholder="Type question here"/> 
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12 text-center">
                            <button type="submit" class="btn btn-primary custom-button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>

            <div class="row faq-spacer"></div>

            <div class="row">
            

                <Async promiseFn={loadPosts}>
                    {({data, error, isLoading}) => {
                            if (isLoading)
                                return "Loading...";
                            if (error) {
                                console.log(error);
                                return "Oops, something went wrong";
                            }
                            if (data && Array.isArray(data)) {
                                return data.reverse().map(entry => {
                                    return <div>
                                        <div class="col-sm-12 text-center ">
                                            <Button
                                                type="button"
                                                onClick={() => setOpen1(!open1)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open1}
                                                className="faq-box"
                                            >
                                            {entry.question}
                                            </Button>
                                            <Collapse in={open1}>
                                                <div id="example-collapse-text" class="faq-box">
                                                    <p class="txt-color">{entry.answer}</p>
                                                </div>
                                            </Collapse>
                                        </div>
                                        
                                    </div>
                                })
                            }
                        }
                    }
                </Async>
             </div>
        </div>
        );
};

export default Discussion;