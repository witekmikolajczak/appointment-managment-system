import React, { useContext, useState } from "react";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import Modal from "../Modal/Modal";

import AuthContext from "../../store/auth-context";

import classes from "./Calendar.module.css";

const Calendar = () => {
  const authCtx = useContext(AuthContext);
  const [event, setEvent] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  //----------lift state up ^^---------
  const titleHandler = (title) => {
    setTitle(title);
  };
  const dateHandler = (date) => {
    setDate(date);
  };
  //-----------------------------------

  const dateClickHandler = (arg) => {
    // setDate(arg.dateStr);
    setEvent(true);
  };

  return (
    <React.Fragment>
      {authCtx.isLoggedIn && (
        <div className={classes.wrapper}>
          <FullCalendar
            dateClick={dateClickHandler}
            events={[
              {
                title: title,
                start: date,
              },
            ]}
            height="40rem"
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
          />
          {event && (
            <Modal
              onEnteredTitle={titleHandler}
              onEnteredDate={dateHandler}
              onClick={() => setEvent(false)}
            />
          )}
        </div>
      )}
    </React.Fragment>
  );
};
export default Calendar;
