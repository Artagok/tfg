import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LangContext } from "../config/lang-context";
import "./Models.css";

import logo from "../assets/img/logos/logo.png";

const Models = (props) => {
  return (
    <LangContext.Consumer>
      {([lang, changeLang, l]) => (
        <section
          className="models-wrapper"
          id="3d-models"
          style={{ backgroundColor: "rgba(15,15,15,0.7)" }}
        >
          <Accordion className="accordion-bb">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Selecciona les zones d'interés
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <div style={{}}>
                  {props.bb.map((i) => (
                    <div key={i.id}>
                      <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        onChange={(e) => props.handleBBCheckbox(e, i.id)}
                        defaultChecked={props.activeBB[i.id]}
                        // onBlur={handleBlur}
                        // value={values.checkbox}
                      />
                      <span>{`${i.name}`}</span>
                    </div>
                  ))}
                </div>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <br></br>
          <Link to="/PointCloudViewer">Explorar en 3D</Link>
        </section>
      )}
    </LangContext.Consumer>
  );
};

export default Models;
