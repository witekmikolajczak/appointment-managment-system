import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { EMAIL_SIGN_UP_URL, EMAIL_SIGN_IN_URL } from "../../api/api";
import AuthContext from "../../store/auth-context";
import classes from "./Auth.module.css";

const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  // change button value on click
  const switchAuthMode = () => {
    setIsLogin((prevState) => !prevState);
  };

  // connect to firebase database
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    // change url sign up or sign in based on isLOgin state
    let url;
    if (isLogin) {
      url = EMAIL_SIGN_IN_URL;
    } else {
      url = EMAIL_SIGN_UP_URL;
    }

    fetch(url, {
      //firebase requirments
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            throw new Error("Authentication failed!");
          });
        }
      })
      .then((data) => {
        //set token and redirect using useHistory
        authCtx.login(data.idToken);
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email"
            ref={emailRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Password"
            ref={passwordRef}
          />
        </div>

        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            onClick={switchAuthMode}
            className={classes.toggle}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Auth;
