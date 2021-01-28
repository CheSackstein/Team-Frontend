import App from "../App";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeImage from "./bOOKit.png";
import {auth} from '../lib/FetchShortcuts';
import "./Home.css";
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


  useEffect( async ()=>{
    // check if logged 
    auth();
    // console.log('response: ', response);
    // user = response.json()
    // console.log('user: ', user);

  },[])

  return (
    <div id="Home" className="Home">
    </div>
  );
}
export default Home;
