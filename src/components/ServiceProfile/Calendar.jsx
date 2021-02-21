import { Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import serviceProfile from './serviceProfile.module.css';
import { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { POSTtoProviders } from '../../lib/FetchShortcuts';
import Swal from 'sweetalert2';
import { UserContext } from '../../lib/UserContext';


export default function Calendar(props) {
  const { openingHrs, closingHrs, availableServices, _id } = props.provider;
  const times = [];
  let start = parseInt(openingHrs);
  let close = parseInt(closingHrs);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedService, setSelectedService] = useState('');
  const {user} = useContext(UserContext);
  
  for (let i = start; i < close; i++) {
    times.push(
      <option key={i} value={i}>
        {i}:00
      </option>
    );
    times.push(
      <option key={i + 0.5} value={i + 0.5}>
        {i}:30
      </option>
    );
  }

  let list = [];

  if (availableServices && availableServices.length > 0) {
    list = availableServices.map((result) => {
      const { name } = result;
      return(
        <option key={uuidv4()} value={name} className={serviceProfile.service}>
          {name}
        </option>
      );
    });
  }

  function handleDate(date) {
    setSelectedDate(date);
    setSelectedHour(start);
  }

  function handleService(e) {
    setSelectedService(e.target.value);
  }

  function handleSubmit() {
    if (user) {
      var minutes = selectedHour - Math.floor(selectedHour);
      if (minutes) {
        minutes = 30;
      }
      let appointment = selectedDate.setHours(selectedHour, minutes);
      let data = {
        spid: _id,
        date: new Date(appointment),
        service: selectedService,
        client: user.fullName
      };
      //POSTtoProviders('/make-appointment', data )
      Swal.fire(
        'Request saved',
        'Your appointment has been scheduled',
        'success'
      );
    } else {
       Swal.fire(
         'Not signed in',
         'You must log in to schedule an appointment',
         'error'
       );
   }

    
  }

  return (
    <div className={serviceProfile.calendarForm}>
      <h3>
        <b>Book an appointment now:</b>
      </h3>
      <p>
        <i>First, select a service</i>
      </p>
      <hr />
      <div>
        <span className="h-5">
          <b>Select a service:</b>
        </span>
        <select
          name="service"
          id="service"
          className="rounded ml-1 mb-2 py-1"
          value={selectedService}
          onChange={(e) => handleService(e)}
        >
          <option
            disabled
            defaultValue
            key={uuidv4()}
            value=""
            className={serviceProfile.service}
          >
            choose one
          </option>
          {list}
        </select>
      </div>
      {selectedService !== '' && (
        <div>
          <span className="h-5">
            <b>Select a day:</b>{' '}
          </span>
          <DatePicker
            className="rounded py-1"
            selected={selectedDate}
            onChange={(date) => handleDate(date)}
            minDate={new Date()}
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 5}
            isClearable
          />
        </div>
      )}

      {selectedDate && (
        <div className="mt-1">
          <span className="h-5">
            <b>Select an hour:</b>{' '}
          </span>{' '}
          <select
            name="hour"
            id="hour"
            className="rounded py-1"
            onChange={(e) => setSelectedHour(e.target.value)}
          >
            {times}
          </select>
        </div>
      )}

      {selectedDate && selectedHour && (
        <div>
          <br />
          <Button
            className={serviceProfile.bookNow}
            id="bookNow"
            onClick={() => handleSubmit()}
          >
            Book Now
          </Button>
        </div>
      )}
    </div>
  );
}
