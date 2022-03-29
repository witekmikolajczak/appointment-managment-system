import React, { useRef } from "react";

import classes from "./Modal.module.css";
const Modal = (props) => {
  const enteredTitle = useRef();
  const enteredDate = useRef();

  const formSubmit = (event) => {
    event.preventDefault();
    const title = enteredTitle.current.value;
    const date = enteredDate.current.value;

    const resposne = fetch(
      "https://managment-system-30528-default-rtdb.firebaseio.com/user/event.json",
      {
        method: "PUT",
        body: JSON.stringify({
          date: date,
          title: title,
        }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    // ---------- lift state up -------------
    props.onEnteredTitle(title);
    props.onEnteredDate(date);
    // -----------------------------------------
  };
  return (
    <form onSubmit={formSubmit} className={classes.modal}>
      <button onClick={props.onClick}>exit modal</button>
      <input ref={enteredTitle} type="text" placeholder="Add event title" />
      <input
        ref={enteredDate}
        type="text"
        placeholder="Add event start rrrr-mm-dd hh-mm-ss"
      />
      <br></br>
      <button>Add event</button>
    </form>
  );
};
export default Modal;
