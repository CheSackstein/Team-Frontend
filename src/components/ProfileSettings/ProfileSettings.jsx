import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Form, Input, Label, Row, Col, FormGroup, Container } from "reactstrap";
import styles from './ProfileSettings.module.css';
import { POSTtoUsers,
  PUTtoUsers,
  GETFromUsers,
  GETFromProviders,
  PUTtoProviders,
  POSTtoProviders} from '../../lib/FetchShortcuts'

function ProfileSettings(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [ errors, setErrors ] = useState("");
  async function Update(event) {
    event.preventDefault();
    const updatedUser = {
      fullName: fullName,
      email: email,
      phone: phone,
      password: password,
      currentPassword: currentPassword
    };
    const user = await PUTtoUsers('update-settings',updatedUser);


    // if(user.errors){
    //   // display errors
    //   console.log(user.errors);
    //   const errs = {}
    //   for(let err of user.errors){
    //     errs[err.param] = err.msg;
    //   }
    //   setErrors(errs);
    // }else {
    //   // use the user object
    //   console.log('USER:',user);
    // }
  }

async function getUser(){
  let response = await GETFromUsers()
}

  return (
<<<<<<< HEAD:src/components/ProfileSettings.jsx
  
      <div
        className="profileSettings"
        id="profileSettings"
      >
        <Container className="Form" id="Form"  >
        <Form onSubmit={(event) => Update(event)} >
        <Row>
        <Col md={3}> 
=======
      <div className={styles.profileSettings} id="profileSettings">
        <Container className={styles.Form} id="Form">
          <Form onSubmit={(event) => Update(event)}>
            <Row>
              <Col md={3}>
>>>>>>> 3bc753a20a57563a883ad2b7f05771a692939135:src/components/ProfileSettings/ProfileSettings.jsx
                <FormGroup>
                  <Label for="fullName">Full name:</Label>
                  <Input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={3}>
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
            </Row>
            <Row>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
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
            </Row>

            <Row>
              <Col md={3}>
                <FormGroup>
                  <Label for="currentPassword">Current Password:</Label>
                  <Input
                    type="currentPassword"
                    name="currentPassword"
                    id="currentPassword"
                    placeholder="Password"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Button
                type="Primary"
                color="secondary"
                onSubmit={(event) => Update(event)}
                className={styles.changeBtn}
                id="changeBtn"
              >
                Save Changes
              </Button>
            </Row>
          </Form>
        </Container>
      </div>
<<<<<<< HEAD:src/components/ProfileSettings.jsx
    
=======
  
>>>>>>> 3bc753a20a57563a883ad2b7f05771a692939135:src/components/ProfileSettings/ProfileSettings.jsx
  );
}

export default ProfileSettings;
