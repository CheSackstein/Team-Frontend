import React from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GETFromProviders } from '../lib/FetchShortcuts';
import serviceProfile from './serviceProfile.module.css';
import { BeautyProviders } from '../lib/mockProviders';
import { v4 as uuidv4 } from 'uuid';
import NavBar from './NavBar';
import { Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from './Calendar';



export default function ServiceProfile() {
  const [provider, setProvider] = useState({});

  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    // for when we connect to backend
    // GETFromProviders(`getById`, JSON.stringify(id) )
    // let available = await  GETProviders available times
    setProvider(BeautyProviders[0]);
  }, []);

  const {
    companyName,
    bannerUrl,
    availableServices,
    closingHrs,
    openingHrs,
    description,
    address,
    type,
    _id
  } = provider;

  let list = <p>no services registered yet</p>;

  if (availableServices && availableServices.length > 0) {
    list = availableServices.map((result) => {
      const { name, price, duration } = result;
      return (
        <>
          <div key={uuidv4()} className={serviceProfile.service}>
            {name} at a cost of {price} shekels
            {duration && ` for ${duration} minutes`}.
          </div>
        </>
      );
    });
  } else {
    list = <p>no services registered yet</p>;
  }

  
  return (
    <div>
      <NavBar />
      <div
        className={serviceProfile.banner}
        style={{
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: 'contain'
        }}
      ></div>

      <div className={serviceProfile.content}>
        <div className={serviceProfile.data}>
          <h2>
            <b>{companyName}</b> ({type})
          </h2>
          <p>
            <i>
              Open from: {openingHrs} to {closingHrs}
            </i>
          </p>
          <hr />
          <p>{description}</p>
          <br />
          <h4>
            <u>
              <b>Services offered:</b>
            </u>
          </h4>
          <div>{list}</div>
          <br />
          <p>
            <b>Location:</b>
            <em> {address}</em>
          </p>
        </div>
        <Calendar
          provider={provider}
        ></Calendar>
      </div>
    </div>
  );
}
