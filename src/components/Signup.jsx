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
  FormGroup,
} from "reactstrap";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
import { POSTtoUsers,
  PUTtoUsers,
  GETFromUsers,
  GETFromProviders,
  PUTtoProviders,
  POSTtoProviders} from '../lib/FetchShortcuts'

function SignUp(props) {
  const [user, setUser] = useState("");
  const [findUser, getUser] = useState("");
  const [modalLog, setModalLog] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [fullName, setFullname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("Hi");
  const [cell, setCell] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const toggleLog = () => setModalLog(!modalLog);
  const [modalSign, setModalSign] = useState(false);
  const history = useHistory();
  const toggleSign = () => setModalSign(!modalSign);
  const [errors, setErrors] = useState({});

  function onSignUp(event) {
    event.preventDefault();
    const newUser = {
      fullName: fullName,
      email: email,
      phone: cell,
      password: password,
      confirmPassword: passwordConfirm,
    };

    //setUser(newUser);

    Register(newUser);
  }

  // function onLogin(event) {
  //   event.preventDefault();

  //   const findUser = {
  //     Email: email,
  //     Password: password,
  //   };

  //   getUser(findUser);
  //   onAddUser(findUser);
  //   console.log(JSON.stringify(findUser));
  // }

  // function onAddUser(event) {
  //   const newUser = user;
  //   console.log(newUser);
  // }

 


  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState("");


  async function Register(frmData) {
    const user = await POSTtoUsers('/sign-up',frmData);

    if(user.errors){
      // display errors
      console.log(user.errors);
      const errs = {}
      for(let err of user.errors){
        errs[err.param] = err.msg;
      }
      setErrors(errs);
    }else {
      // use the user object
      console.log('USER:',user);
    }

    // if (response.status === 200) {
    //   localStorage.setItem("token", response);
    // }
    // console.log(response.data);
    // history.push("/Home");
    // window.location.reload();
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
            left: "20px"
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
                <Label for="fullName">Full Name:</Label>
                <Input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  onChange={(e) => setFullname(e.target.value)}
                />
                <span className='alert-danger'>{errors.fullName}</span>
              </FormGroup>
              <FormGroup>
                <Label for="phone">Cell:</Label>
                <Input
                  type="text"
                  name="cellPhone"
                  id="cellPhone"
                  placeholder="Cell phone number"
                  onChange={(e) => setCell(e.target.value)}
                />
                {errors.phone}
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
                {errors.email}
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
                {errors.password}
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
                {errors.confirmPassword}
              </FormGroup>
              <Button
                type="primary"
                color="primary">
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
