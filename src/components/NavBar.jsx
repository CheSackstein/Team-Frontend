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

function NavBar(props) {
  const [isAdmin, setIsAdmin] = useState(false);
  if (localStorage.getItem("admin") === false) {
  }
  return (
    <div>
      <Navbar
        style={{ color: "#C38D9E", backgroundColor: "#41B3A3" }}
        dark
        expand="md"
      >
        <NavbarBrand href="/Home">MyNextPet</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/search">Search</NavLink>
            </NavItem>
        
          </Nav>
          {isAdmin && (
            <div>
              <NavLink style={{ color: "white" }} href="/AddPet">
                AddPet
              </NavLink>
              <NavLink style={{ color: "white" }} href="/AdminPet">
                Admin
              </NavLink>
            </div>
          )}
          <Login />
          <SignUp />
          <NavLink href="/ProfileSettings">
            {" "}
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;