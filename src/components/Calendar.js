import { Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BeautyProviders } from '../lib/mockProviders';
import serviceProfile from './serviceProfile.module.css';
import { useState, useEffect } from 'react';

export default function Calendar(props) {
    const { openingHrs, closingHrs } = props.provider;
  const list = [];
  let start = parseInt(openingHrs);
  let close = parseInt(closingHrs);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  for (let i = start; i < close; i++) {
    list.push(

        <option key={i} value={i}>{i}:00</option>
    );
     list.push(
       <option key={i + 0.5} value={i + 0.5}>
         {i}:30
       </option>
     );
  }

  function handleDate(date) {
    setSelectedDate(date);
    setSelectedHour(start);
  }

  function HandleHour(e) {
    setSelectedHour(e.target.value);
  }

  function handleSubmit() {
    var minutes = selectedHour - Math.floor(selectedHour);
    if (minutes) {
      minutes = 30;
    }
    let appointment = selectedDate.setHours(selectedHour, minutes);
    console.log('appointment: ', new Date(appointment));
  }

  return (
    <div className={serviceProfile.calendarForm}>
      <h3>To book an appointment, please select a date:</h3>
      <hr/>
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

      {selectedDate && (
        <div className='mt-1'>
          <span className="h-5">
            <b>Select an hour:</b>{' '}
          </span>{' '}
          <select
            name="hour"
            id="hour"
            className="rounded py-1"
            onChange={(e) => setSelectedHour(e.target.value)}
          >
            {list}
          </select>
        </div>
      )}

      {(selectedDate && selectedHour) && (
        <div>
          <br />
          <Button
            className="bookNow mt-1"
            id="bookNow"
            onClick={() => handleSubmit(selectedDate)}
          >
            Book Now
          </Button>
        </div>
      )}
    </div>
  );
}
