import React, { useContext } from "react";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import AuthContext from "../../store/auth-context";
import classes from "./Calendar.module.css";

const Calendar = () => {
  const authCtx = useContext(AuthContext);
  const dateClickHandle = (arg) => {
    console.log(arg.dateStr);
  };

  return (
    <React.Fragment>
      {authCtx.isLoggedIn && (
        <div className={classes.wrapper}>
          <FullCalendar
            dateClick={dateClickHandle}
            height="40rem"
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
          />
        </div>
      )}
    </React.Fragment>
  );
};
export default Calendar;
