import React, { useState } from "react";
import Login from './Login'
import SignUp from './Signup'
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  FormGroup,
} from "reactstrap";
import { FontAwesome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
function NavBar(props) {
  const [isAdmin, setIsAdmin] = useState(false);
  if (localStorage.getItem("admin") === false) {
  }
  return (
    <div>
      <Navbar
        style={{fontFamily:'Cormorant Garamond Light', fontSize:'20px', borderColor:'Black', borderRadius:'5px' }}
        light
        expand="md"
        
      >
        <NavbarBrand href="/Home" style={{fontSize:'34px'}}>BookIt</NavbarBrand>
        <NavbarToggler />
        <div>
              <NavLink style={{ color: "grey" }} href="/Apply">
                Register
              </NavLink>
            </div>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
           
          
          <Login />
          <SignUp />
          <NavLink href="/ProfileSettings">
            {" "}
           <FaUser style={{ color: "grey", right: "0%" }} />
          </NavLink>

          <NavbarText>Profile</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;