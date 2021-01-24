import React, { Component } from 'react';
import moment, { parseZone } from 'moment'
import axios from 'axios'
import { AppointmentPicker } from 'react-appointment-picker';
import './Scheduler.css'
import ConfirmationPage from './ConfirmationPage';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap'
export default class Scheduler extends Component {

  state = {
    continuousLoading: false,
    lastDate: ''
  };


  

  async addAppointment(day, number, time) {
    console.log(localStorage.getItem('token'))
    console.log(day, number, time);
    console.log(this.props.hospitalId);
    try {
      const formatMe = "YYYY-MM-DD HH:mm"
      await axios.post("http://localhost:5000/newappointment", {

        dateTime:moment(time).format(formatMe),
       
        hospitalId: this.props.hospitalId
      }, {
        headers: {
          "authorization": localStorage.getItem('token'),
      }})
    }
    catch (e) {

    }
  }

  async removeAppointment(time) {
    try {
      await axios.post("http://localhost:5000/cancelappointment", {
        dateTime:moment(time).format("YYYY-MM-DD HH:mm:ss"),
        hospitalId: this.props.hospitalId
      }, {
        headers: {
          "authorization":localStorage.getItem('token'),
      }})
    }
    catch (e) {
      
    }
  }

  addAppointmentCallbackContinuousCase = ({
    addedAppointment: { day, number, time, id },
    addCb,
    removedAppointment: params,
    removeCb
  }) => {
    this.setState(
      {
        continuousLoading: true
      },
      async () => {
        await this.removeAppointment(this.state.lastDate)
        if (removeCb) {
          removeCb(params.day, params.number);
        }
        await this.addAppointment(day, number, time)
        addCb(day, number, time, id);
        this.setState({ continuousLoading: false, lastDate: time });
      }
    );

  }}