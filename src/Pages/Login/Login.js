import React from 'react';
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <form  className={styles.loginCtr}>
          <p className={styles.heading}>Login</p>
          
          <div className={styles.group}>
            <label htmlFor="email">Email</label>
            <input required  name="email" type="text"   placeholder="mail@example.com"></input>
          </div>
          <div className={styles.group}>
            <label htmlFor="password">Password</label>
            <input required name="password" type="password"   placeholder="******"></input>
          </div>
          <div className={styles.group}>
            <button type="submit">Sign Up</button>
          </div>
          <div className={styles.footer}>
            Don't Have An Account? 
            <Link className={styles.link} to="/signup">
              Sign Up
            </Link>
          </div>
        </form>
      );
}

export default Login

