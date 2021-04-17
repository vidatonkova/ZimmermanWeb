import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Collapse } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Format.css";

const Discussion = () => {
  const [open1, setOpen1] = useState(false);
  return (
    <div class="container">
      <div class="row topSpace-row"></div>
      <div class="row sub-title-row">
        <div class="col-sm-12 text-center">
          <h3>Discussion</h3>
        </div>
      </div>

      <div class="row faq-spacer"></div>

      <div class="row question-box">
        <div class="col-sm-12">
          <form>
            <div class="form-row">
              <div class="form-group col-md-12 text-center ">
                <p class="white-text">Have a question? Submit it here!</p>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12 text-center">
                <input
                  type="newQuestion"
                  class="form-control"
                  id="question"
                  placeholder="Type question here"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12 text-center">
                <button type="submit" class="btn btn-primary custom-button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="row faq-spacer"></div>

      <div class="row">
        <div class="col-sm-12 text-center ">
          <Button
            type="button"
            onClick={() => setOpen1(!open1)}
            aria-controls="example-collapse-text"
            aria-expanded={open1}
            className="faq-box"
          >
            Insert question that has been answer
          </Button>
          <Collapse in={open1}>
            <div id="example-collapse-text" class="faq-box">
              <p class="txt-color">Insert response from database.</p>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
