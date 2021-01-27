import React, { useState, useEffect } from 'react';
import Login from './Login';
import SignUp from './Signup';
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
  FormGroup
} from 'reactstrap';
import { FontAwesome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import './ProfileSettings.css';

function NavBar(props) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  if (localStorage.getItem('admin') === false) {
  }

  return (
    <div>
      <Navbar
        style={{
          fontFamily: 'Cormorant Garamond Light',
          fontSize: '20px',
          borderColor: 'Black',
          borderRadius: '5px'
        }}
        expand="md"
        light
      >
        <NavbarBrand href="/Home" style={{ fontSize: '34px' }}>
          BookIt
        </NavbarBrand>
        <NavbarToggler />
        {user && user.type !== 'provider' && (
          <div>
            <NavLink style={{ color: 'grey' }} href="/Apply">
              Register a Company
            </NavLink>
          </div>
        )}
        <Collapse navbar>
          {user && <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/search">
                Find a Service
              </NavLink>
            </NavItem>
          </Nav>}
          {isAdmin && (
            <div>
              <NavLink style={{ color: 'white' }} href="/AddPet">
                AddPet
              </NavLink>
              <NavLink style={{ color: 'white' }} href="/AdminPet">
                Admin
              </NavLink>
            </div>
          )}
          <Nav className="mr-auto" navbar></Nav>
          {!user && (
            <>
              <Login passUser={(user) => setUser(user)} />
              <span className="navBar-button">
                <SignUp passUser={(user) => setUser(user)} />
              </span>
            </>
          )}
          {user &&  <NavLink href="/ProfileSettings" style={{ color: 'grey' }}>
            {' '}
            <FaUser style={{ color: 'grey', right: '0%' }} /> Profile
          </NavLink>}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
