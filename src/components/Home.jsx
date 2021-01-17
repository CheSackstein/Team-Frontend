
import App from "../App";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeImage from './bOOKit.png'
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



function Home(props) {
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

  const submitValueSignUp = () => {
    const frmdetails = {
      "First Name": fName,
      "Last Name": lName,
      Phone: phone,
      Email: email,
      Password: password,
      PasswordConfirm: passwordConfirm,
    };
    console.log(frmdetails);
 
  };
  const submitValueLogin = () => {
    const frmdetails = {
      Email: email,
      Password: password,
    };
    console.log(frmdetails);
    sendUser(frmdetails);
  };

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
  // history.push("/");
    const reload = window.location.reload();
  }





  return (
    <div style={{ backgroundColor: "#85DCB" }}>
      <NavBar />
      <h2 style={{ color: "white" }}>Welcome to BookIt, come here often?</h2>
      <img
        src={HomeImage}
        alt="Home Page"
     
      ></img>
    
         </div>
  );
}
export default Home;
