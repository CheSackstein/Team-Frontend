import React from 'react'
import searchResult from './searchResult.module.css';
import PetProfile from './PetProfile';

export default function SearchResult(props) {
  
  return (
    <>
      <div className={searchResult.container}>
        <img
          className={searchResult.img}
          src={props && props.obj.picture}
          alt={props ? props.obj.name : 'petPic'}
        />
        <hr />
        <div className={searchResult.data}>
          <h4 className={searchResult.name}>
            {' '}
            Name: {props && props.obj.name}
          </h4>
          <p className={searchResult.status}>
            <b>Status: </b>
            {props && props.obj.adoptionStatus}
          </p>
          <PetProfile obj={props.obj} />
        </div>
      </div>
    </>
  );
}
