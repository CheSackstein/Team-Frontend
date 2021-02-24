import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import serviceProfile from "./serviceProfile.module.css";
import Swal from "sweetalert2";
// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
const events = [
  { title: "event 1", date: "2021-02-24" },
  {
    title: "My Event",
    start: "2021-02-24T14:30:00",
    end: "2021-02-24T15:00:00",
    allDay: false,
  },
  { title: "event 2", date: "2021-02-25" },
];
function AdminCalendar() {
  return (
    <div className={serviceProfile.adminCal}>
      <FullCalendar
        // header={{
        //   left: "prev,next",
        //   center: "title",
        //   right: "dayGridMonth,timeGridWeek,timeGridDay",
        // }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        editable={true}
        selectable={true}
        eventClick={function (arg) {
          Swal.fire(arg.event.title);
        }}
        events={events}
      />
    </div>
  );
}

export default AdminCalendar;
