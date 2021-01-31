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
  FormGroup,
  Button
} from 'reactstrap';
import { FontAwesome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import './ProfileSettings.css';
import { POSTtoUsersUnhandled } from '../lib/FetchShortcuts';

function NavBar(props) {
  const {user, passUser} = props
  const [isAdmin, setIsAdmin] = useState(false);
  
  const  handleLogout = async ( ) =>{
    localStorage.clear()
    const response = await POSTtoUsersUnhandled('log-out');
    window.location.reload();

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
          {user && (
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/search">Find a Service</NavLink>
              </NavItem>
            </Nav>
          )}
          {isAdmin && <div></div>}
          <Nav className="mr-auto" navbar></Nav>
          {!user && (
            <>
              <Login passUser={(user) => passUser(user)} />
              <span className="navBar-button">
                <SignUp passUser={(user) => passUser(user)} />
              </span>
            </>
          )}

          {user && (
            <>
              <span className="navBar-button">
                <Button
                  variant="info"
                  style={{
                    height: '70px',
                    width: '130px',
                    borderRadius: '20px',
                    fontSize: '20px',
                    left: '20px'
                  }}
                  onClick={() => handleLogout()}
                >
                  Logout
                </Button>
              </span>
              <NavLink href="/ProfileSettings" style={{ color: 'grey' }}>
                {' '}
                <FaUser style={{ color: 'grey', right: '0%' }} /> Profile
              </NavLink>
            </>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
