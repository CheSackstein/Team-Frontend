import React from "react";
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Label,
  Row,
  Col,
  FormGroup,
  Container,
} from "reactstrap";
import styles from "./ProfileSettings.module.css";
import { useForm } from "react-hook-form";
import {
  POSTtoUsers,
  PUTtoUsers,
  GETFromUsers,
  GETFromProviders,
  PUTtoProviders,
  POSTtoProviders,
} from "../../lib/FetchShortcuts";
import { data } from "jquery";
import { UserContext } from "../../lib/UserContext";


function ProfileSettings(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { register, handleSubmit, watch, errors } = useForm();
  // const [currentPassword, setCurrentPassword] = useState("");
  // const [fullName, setFullName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [ errors, setErrors ] = useState("");

  
  async function Submit(event) {
    console.log('event: ', event);
    // const updatedUser = {
    //   fullName: fullName,
    //   email: email,
    //   phone: phone,
    //   password: password,
    //   currentPassword: currentPassword
    // };
    const updatedUser = data;
    const user = await PUTtoUsers("update-settings", updatedUser);

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
    // console.log(data)
  }

  return (
    <div className={styles.profileSettings} id="profileSettings">
      {/* <Container className={styles.Form} id="Form"> */}
      <form className={styles.form} onSubmit={handleSubmit(Submit)}>
        <label for="fullName">Full name:</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          ref={register}
        />
        <br />
        <label for="phone">Cell:</label>
        <input
          type="text"
          name="cellPhone"
          id="cellPhone"
          placeholder="Cell phone number"
          ref={register}
        />
        <br />
        <label for="Email">Email</label>
        <input
          type="email"
          name="email"
          id="Email"
          placeholder="Email"
          ref={register}
        />
        <br />
        <label for="Password">Password</label>
        <input
          type="password"
          name="password"
          id="Password"
          placeholder="Password"
          ref={register}
        />
        <br />
        <label for="currentPassword">Current Password:</label>
        <input
          type="currentPassword"
          name="currentPassword"
          id="currentPassword"
          placeholder="Password"
          ref={register}
        />
        <br />
        <button
          type="submit"
          color="secondary"
          className={styles.changeBtn}
          id="changeBtn"
          // value="Save Changes"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default ProfileSettings;
