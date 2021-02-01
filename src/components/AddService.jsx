import React from "react";
import App from "../App";
import { useState } from "react";
import NavBar from "./navBar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Label,
  Row,
  Col,
  FormGroup,
  FormText,
} from "reactstrap";
import "./Apply/Apply.css";
import { POSTtoUsers,
  PUTtoUsers,
  GETFromUsers,
  GETFromProviders,
  PUTtoProviders,
  POSTtoProviders} from '../lib/FetchShortcuts';


function AddService(props) {
  const [provider, setProvider] = useState("");
  const [modalLog, setModalLog] = useState(false);
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [service, setService] = useState("");

  function onAddService(event) {
    event.preventDefault();
    const formData = {
service: serviceName,
duration: duration,
price: price
    };

  
    onAddService(formData);
    console.log(JSON.stringify(formData));
    console.log(formData);
    POSTtoProviders(formData)
    // const requestOptions = {
    //   method: "POST",
    //   body: formData,
    // };
 
    // GETFromUsers();
    // fetch("http://localhost:5000/api/users", requestOptions).then((res) => {
    //   console.log(formData);
    //   console.log(res.status);
    // });

    POSTtoProviders(formData);
  }

  function onAddService(event) {
    const newService = service;
    console.log(newService);
  }

 
  const submitValueApply = () => {
    const frmdetails = {
 serviceName: serviceName,
 duration:duration,
 price:price
    };
    console.log(frmdetails);
  };

  return (
    <div className="AddService" id="AddService">
      <Form onSubmit={(event) => onAddService(event)}>
          <Row form>
            <Col md={5}>
              <FormGroup>
                <Label for="Service">Service:</Label>
                <Input
                  type="text"
                  name="Service"
                  id="Service"
                  placeholder="Manicure, haircut"
                  onChange={(e) => setServiceName(e.target.value)}
                />
              </FormGroup>
            </Col>
    
            <Col md={3}>
              <FormGroup>
                <Label for="Price">Price:</Label>
                <Input
                  type="text"
                  name="Price"
                  id="Price"
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="exampleSelect">Duration</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={(e) => setDuration(e.target.value)}>
                  <option>15 mins</option>
                  <option>30 mins</option>
                  <option>45 mins</option>
                  <option>60 mins</option>
                  <option>75 mins</option>
                  <option>90 mins</option>
                  <option>2 hours</option>
                </Input>
              </FormGroup>
            </Col>
        
          <Button
            type="Primary"
            color="secondary"
            onSubmit={(event) => onAddService(event)}
          >
            Add Service
          </Button>
   
        </Row>
      </Form>
    
    </div>
  );
}

export default AddService;
