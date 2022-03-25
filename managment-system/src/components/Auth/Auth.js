import React from "react";

import classes from "./Auth.module.css";
const Auth = () => {
  return (
    <section className={classes.auth}>
      <form>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Password"
        />
        <button>Login</button>
      </form>
    </section>
  );
};

export default Auth;
