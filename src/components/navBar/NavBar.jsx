import React, { useState, useEffect } from 'react';
import Login from '../Login';
import SignUp from '../Signup';
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
//import './ProfileSettings.css';
import navBar from "./navBar.module.css";
import { POSTtoUsersUnhandled } from '../../lib/FetchShortcuts';

function NavBar(props) { 
  const {user, passUser} = props
  const [isAdmin, setIsAdmin] = useState(false);
  
  const  handleLogout = async ( ) =>{
    localStorage.clear()
    const response = await POSTtoUsersUnhandled('log-out');
    console.log('response: ', response);
    //when we set user by cookie we'll delete this
    window.location.reload();

  }

  return (
    <div>
<<<<<<< HEAD:src/components/NavBar.jsx
      <Navbar
        style={{
          fontFamily: 'Cormorant Garamond Light',
          fontSize: '20px',
          borderColor: 'Black',
          borderRadius: '5px',
          color:'Red'
        }}
        expand="md"
      light
      >
=======
      <Navbar className={navBar.bar} expand="md" light>
>>>>>>> 3bc753a20a57563a883ad2b7f05771a692939135:src/components/navBar/NavBar.jsx
        <NavbarBrand href="/Home" style={{ fontSize: '34px' }}>
          BookIt
        </NavbarBrand>
        <NavbarToggler />
        {user && user.type !== 'provider' && (
          <div>
            <NavLink className={navBar.txt} href="/Apply">
              Register a Company
            </NavLink>
          </div>
        )}
        <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className={navBar.txt} href="/search">Find a Service</NavLink>
              </NavItem>
            </Nav>
          {isAdmin && <div></div>}
          <Nav className="mr-auto" navbar></Nav>
          {!user && (
            <>
              <Login passUser={(user) => passUser(user)} />
              <span className={navBar.buttonSpan}>
                <SignUp passUser={(user) => passUser(user)} />
              </span>
            </>
          )}

          {user && (
            <>
              <span className={navBar.buttonSpan}>
                <button
                  variant="info"
<<<<<<< HEAD:src/components/NavBar.jsx
                  style={{
                    height: '70px',
                    width: '130px',
                    borderRadius: '20px',
                    fontSize: '20px',
                    left: '20px',
                    backgroundColor:'#00c2cb'
                  }}
=======
                  className={navBar.button}
>>>>>>> 3bc753a20a57563a883ad2b7f05771a692939135:src/components/navBar/NavBar.jsx
                  onClick={() => handleLogout()}
                >
                  Logout
                </button>
              </span>
              <NavLink href="/ProfileSettings" className={navBar.txt}>
                {' '}
                <FaUser className={navBar.txt} /> Profile
              </NavLink>
            </>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
