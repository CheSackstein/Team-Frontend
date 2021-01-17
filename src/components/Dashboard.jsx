import App from "../App";
import React, { useEffect, useState } from "react";
import SignUp from "./Signup";
import Login from "./Login";
import axios from "axios";
import {} from "reactstrap";
import NavBar from "./NavBar";
import { Link, useHistory } from "react-router-dom";
import HomeImage from './bOOKit.png'

function Dashboard(props) {
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

  return (
    <div style={{ backgroundColor: "#85DCB", color: "#85DCB" }}>
      <h2 style={{ color: "white" }}>Welcome to BookIt, come here often?</h2>
      <img
        src={HomeImage}
        alt="Background image"
      
      ></img>
      <Login />
      <SignUp />
    </div>
  );
}
export default Dashboard;