import { Button } from 'react-bootstrap';
import React from 'react'
import searchResult from './searchResult.module.css';
import { Link } from 'react-router-dom';

export default function SearchResult(props) {
  
  return (
    <>
      <div className={searchResult.container}>
        <img
          className={searchResult.img}
          src={props && props.obj.profilePicture}
          alt={props ? props.obj.name : 'profilePic'}
        />
        <div className={searchResult.data}>
          <h4 className={searchResult.name}>
            <b>{props && props.obj.companyName}</b>
          </h4>
          <p className={searchResult.status}>
            {props && props.obj.description}
          </p>
        </div>
        <div className={searchResult.btnContainer}>
          <Link className={ searchResult.link} to={`Provider/${props.obj._id}`}>See Full Profile</Link>
        </div>
      </div>
    </>
  );
}
