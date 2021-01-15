
import App from "../App";
import React, { useEffect, useState } from "react";

import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Label,
  FormText,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  FormGroup,
} from "reactstrap";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";


function SignUp(props) {
  const [user, setUser] = useState("");
  const [findUser, getUser] = useState("");
  const [modalLog, setModalLog] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("Hi");
  const [cell, setCell] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const history = useHistory();
  const toggleSign = () => setModalSign(!modalSign);

  function onSignUp(event) {
    event.preventDefault();
    const newUser = {
      FirstName: setEmail(),
      LastName: lastName,
      Email: email,
      Cell: cell,
      Password: password,
      PasswordConfirm: passwordConfirm,
    };

    setUser(newUser);
    console.log(user);
  }

  function onLogin(event) {
    event.preventDefault();

    const findUser = {
      Email: email,
      Password: password,
    };

    getUser(findUser);
    onAddUser(findUser);
    console.log(JSON.stringify(findUser));
  }

  function onAddUser(event) {
    const newUser = user;
    console.log(newUser);
  }

 


  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState("");


  async function sendUser(frmData) {
    console.log(frmData);

    const response = await axios.post("http://localhost:5000/api/user/login", {
      Email: email,
      Password: password,
    });

    if (response.status === 200) {
      localStorage.setItem("token", response);
    }
    console.log(response.data);
    history.push("/Home");
    window.location.reload();
  }



  return (
    <div>
      <div className="Signup">
        <Button
          color="secondary"
          onClick={toggleSign}
          className="Signup"
          style={{
            height: "70px",
            width: "130px",
            borderRadius: "20px",
            fontSize: "20px",
            left: "20px",
            backgroundColor: "#41B3A3",
          }}
        >
          Sign up
        </Button>
        <Modal isOpen={modalSign} toggle={toggleSign}>
          <ModalHeader toggle={toggleSign} style={{ color: "Black" }}>
            Sign up
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={(event) => onSignUp(event)}>
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
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePasswordConfirm">Confirm password:</Label>
                <Input
                  type="passwordConfirm"
                  name="passwordConfirm"
                  id="PasswordConfirm"
                  placeholder="Password"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </FormGroup>
              <Button
                type="primary"
                color="primary"
                onClick={(event) => onAddUser(event)}
              >
                Sign up
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}
export default SignUp;
