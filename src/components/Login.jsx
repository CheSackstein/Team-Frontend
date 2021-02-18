import React, { useEffect, useState, useContext } from "react";
import { POSTtoUsers} from '../lib/FetchShortcuts'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import {  useHistory } from "react-router-dom";
import { UserContext } from "../lib/UserContext";

function Login(props) {
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
  const [isAdmin, setIsAdmin] = useState(false);
  const [errors, setErrors] = useState("")
  
  //USER CONTEXT 
  //const [user, setUser] = useContext(UserContext)


  function onLogin(event) {
    event.preventDefault();

    const findUser = {
      email: email,
      password: password,
    };
Login(findUser);
  }

  async function Login(frmData) {
    const response = await POSTtoUsers('sign-in',frmData);
    console.log('response: ', response);

    localStorage.setItem("user", response);
      window.location.reload();
      //props.passUser(response)
  }

  return (
    <div>
      <div className="Login">
        <Button
          color="secondary"
          onClick={toggleLog}
          className="Login"
          style={{
            height: "70px",
            width: "130px",
            borderRadius: "20px",
            fontSize: "20px",
            left: "20px",
          }}
        >
          Login
        </Button>
        <Modal isOpen={modalLog} toggle={toggleLog} id="login">
          <ModalHeader toggle={toggleLog}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={(event) => onLogin(event)}>
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
                  id="examplePassword"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button type="primary" color="primary" onClick={onLogin}>
                Log in
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}
export default Login;
