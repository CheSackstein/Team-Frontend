import { useState } from "react";
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
import { Link, useHistory } from "react-router-dom";
import { POSTtoUsers } from '../lib/FetchShortcuts'

function SignUp() {
  const [user, setUser] = useState("");
  const [modalLog, setModalLog] = useState(false);
  const [fullName, setFullname] = useState("");
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

    Register(newUser);
  }


  async function Register(frmData) {
    const user = await POSTtoUsers('sign-up',frmData);

    if(user.errors){
      // display errors
      console.log(user.errors);
      const errs = {}
      for(let err of user.errors){
        errs[err.param] = err.msg;
      }
      setErrors(errs);
    } else {
      localStorage.setItem('user', user);
      window.location.reload()
      // use the user object
      //props.passUser(user)  
    }
  }



  return (
    <div>
      <div className="Signup">
        <Button
          color="secondary"
          onClick={toggleSign}
          className="Signup"
          style={{
            borderRadius: '6px',
            fontSize: '20px',
            left: '20px'
          }}
        >
          Sign up
        </Button>
        <Modal isOpen={modalSign} toggle={toggleSign}>
          <ModalHeader toggle={toggleSign} style={{ color: 'Black' }}>
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
                <span className="alert-danger">{errors.fullName}</span>
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
                  type="password"
                  name="passwordConfirm"
                  id="PasswordConfirm"
                  placeholder="Password"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                {errors.confirmPassword}
              </FormGroup>
              <Button type="primary" color="primary">
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
