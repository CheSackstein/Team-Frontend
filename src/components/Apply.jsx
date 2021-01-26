import React from "react";
import App from "../App";
import { useState } from "react";
import NavBar from "./NavBar";
import AddService from "./AddService";
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
  Select
} from "reactstrap";
import "./Apply.css";
import {
  POSTtoUsers,
  PUTtoUsers,
  GETFromUsers,
  GETFromProviders,
  PUTtoProviders,
  POSTtoProviders,
} from "../lib/FetchShortcuts";

function Apply(props) {
  const [provider, setProvider] = useState("");
  const [modalLog, setModalLog] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState('');
  const [category, setCategory] = useState('beauty');
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [phone, setPhone] = useState("");
  const [openingHrs, setOpeningHrs] = useState("");
  const [closingHrs, setClosingHrs] = useState("");
  const [Hrs, setHrs] = useState("");

  function onApply(event) {
    event.preventDefault();
    setHrs(closingHrs - openingHrs);
    const formData = {
      firstName: fName,
      lastName: lName,
      Phone: phone,
      Email: email,
      Password: password,
      Company: company,
      Description: description,
      Address: address,
      Type: type,
      category: category,
    };

    onAddProvider(formData);
    console.log(JSON.stringify(formData));
    console.log(formData);
    POSTtoProviders(formData);
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

  function onAddProvider(event) {
    const newProvider = provider;
    console.log(newProvider);
  }

  const submitValueApply = () => {
    const frmdetails = {
      firstName: fName,
      lastName: lName,
      Phone: phone,
      Email: email,
      Password: password,
    };
    console.log(frmdetails);
  };

  return (
    <div className="Apply" id="Apply">
      <NavBar />
      <Form onSubmit={(event) => onApply(event)}>
        <FormGroup>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label for="firstName">First name:</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  onChange={(e) => setfName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="lastName">Last name:</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={(e) => setlName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleText"> Short description of company:</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  placeholder="A little about your company ..."
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <AddService />
            </Col>
          </Row>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label for="phone">Cell:</Label>
                <Input
                  type="text"
                  name="cellPhone"
                  id="cellPhone"
                  placeholder="Cell phone number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="sample@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup>
                <Label for="exampleText">Address:</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  placeholder="Dizengoff 12, Tel Aviv"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup tag="fieldset">
                <legend>Business Category:</legend>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      value="beauty"
                      defaultChecked
                      onChange={(e) => setCategory(e.target.value)}
                    />{' '}
                    Beauty
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      value="health"
                      onChange={(e) => setCategory(e.target.value)}
                    />{' '}
                    Health
                  </Label>
                </FormGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row center>
            <Col md={4}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="type"> Service Type:</Label>
                <br />
                {category === 'beauty' && (
                  <Input
                    type="select"
                    name="text"
                    id="type"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="">select one</option>
                    <option value="salon">Salon</option>
                    <option value="barber">Barber Shop</option>
                    <option value="nail salon">Nail Salon</option>
                    <option value="massage">Massage</option>
                    <option value="other">Other</option>
                  </Input>
                )}

                {category === 'health' && (
                  <Input
                    type="select"
                    name="text"
                    id="type"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="">select one</option>
                    <option value="chiropractor">Chiropractor</option>
                    <option value="dentist">Dentist </option>
                    <option value="other">Other</option>
                  </Input>
                )}
              </FormGroup>
            </Col>

            <Col md={1}>
              <FormGroup>
                <Label for="exampleSelect">Opening Times</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  onChange={(e) => setOpeningHrs(e.target.value)}
                >
                  <option>5:00</option>
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option selected="selected">9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={1}>
              <FormGroup>
                <Label for="exampleSelect">Closing Times</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  onChange={(e) => setClosingHrs(e.target.value)}
                >
                  <option>5:00</option>
                  <option>6:00</option>
                  <option>7:00</option>
                  <option>8:00</option>
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option selected="selected">17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleCompany">Company Name:</Label>
                <Input
                  type="company"
                  name="company"
                  id="exampleCompnay"
                  placeholder="Company Name"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  Recommended ratio of the banner url: 1300px by 200px.
                </FormText>
              </FormGroup>
            </Col>
          </Row>
          <Button
            type="Primary"
            color="secondary"
            onSubmit={(event) => onApply(event)}
          >
            Save Changes
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Apply;
